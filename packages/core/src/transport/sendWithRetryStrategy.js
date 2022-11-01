import { clocksNow, ONE_KIBI_BYTE, ONE_MEBI_BYTE, ONE_SECOND } from '../helper/tools'
import { ErrorSource } from '../helper/errorTools'

export var MAX_ONGOING_BYTES_COUNT = 80 * ONE_KIBI_BYTE
export var MAX_ONGOING_REQUESTS = 32
export var MAX_QUEUE_BYTES_COUNT = 3 * ONE_MEBI_BYTE
export var MAX_BACKOFF_TIME = 256 * ONE_SECOND
export var INITIAL_BACKOFF_TIME = ONE_SECOND

var TransportStatus = {
  UP: 'UP',
  FAILURE_DETECTED: 'FAILURE_DETECTED',
  DOWN: 'DOWN',
}

var RetryReason = {
  AFTER_SUCCESS: 'AFTER_SUCCESS',
  AFTER_RESUME: 'AFTER_RESUME',
}

export function sendWithRetryStrategy(
  payload,
  state,
  sendStrategy,
  reportError
) {
  if (
    state.transportStatus === TransportStatus.UP &&
    state.queuedPayloads.size() === 0 &&
    state.bandwidthMonitor.canHandle(payload)
  ) {
    send(payload, state, sendStrategy, {
      onSuccess: function()  { return retryQueuedPayloads(RetryReason.AFTER_SUCCESS, state, sendStrategy, reportError) },
      onFailure: function()  {
        state.queuedPayloads.enqueue(payload)
        scheduleRetry(state, sendStrategy, reportError)
      },
    })
  } else {
    state.queuedPayloads.enqueue(payload)
  }
}

function scheduleRetry(
  state,
  sendStrategy,
  reportError
) {
  if (state.transportStatus !== TransportStatus.DOWN) {
    return
  }
  setTimeout(
    function(){
      var payload = state.queuedPayloads.first()
      send(payload, state, sendStrategy, {
        onSuccess: function() {
          state.queuedPayloads.dequeue()
          // if (state.lastFailureStatus !== 0) {
          //   addTelemetryDebug('resuming after transport down', {
          //     failureStatus: state.lastFailureStatus,
          //   })
          // }
          state.currentBackoffTime = INITIAL_BACKOFF_TIME
          retryQueuedPayloads(RetryReason.AFTER_RESUME, state, sendStrategy, reportError)
        },
        onFailure: function() {
          state.currentBackoffTime = Math.min(MAX_BACKOFF_TIME, state.currentBackoffTime * 2)
          scheduleRetry(state, sendStrategy, reportError)
        },
      })
    },
    state.currentBackoffTime
  )
}

function send(
  payload,
  state,
  sendStrategy,
  responseData
) {
  var onSuccess = responseData.onSuccess
  var onFailure = responseData.onFailure
  state.bandwidthMonitor.add(payload)
  sendStrategy(payload, function(response) {
    state.bandwidthMonitor.remove(payload)
    if (wasRequestSuccessful(response)) {
      state.transportStatus = TransportStatus.UP
      onSuccess()
    } else {
      // do not consider transport down if another ongoing request could succeed
      state.transportStatus =
        state.bandwidthMonitor.ongoingRequestCount > 0 ? TransportStatus.FAILURE_DETECTED : TransportStatus.DOWN
      state.lastFailureStatus = response.status
      onFailure()
    }
  })
}

function retryQueuedPayloads(
  reason,
  state,
  sendStrategy,
  reportError
) {
  if (reason === RetryReason.AFTER_SUCCESS && state.queuedPayloads.isFull() && !state.queueFullReported) {
    reportError({
      message: 'Reached max events size queued for upload: '+ MAX_QUEUE_BYTES_COUNT / ONE_MEBI_BYTE + 'MiB',
      source: ErrorSource.AGENT,
      startClocks: clocksNow(),
    })
    state.queueFullReported = true
  }
  var previousQueue = state.queuedPayloads
  state.queuedPayloads = newPayloadQueue()
  while (previousQueue.size() > 0) {
    sendWithRetryStrategy(previousQueue.dequeue(), state, sendStrategy, reportError)
  }
}

function wasRequestSuccessful(response) {
  return response.status !== 0 && response.status < 500
}

export function newRetryState() {
  return {
    transportStatus: TransportStatus.UP,
    lastFailureStatus: 0,
    currentBackoffTime: INITIAL_BACKOFF_TIME,
    bandwidthMonitor: newBandwidthMonitor(),
    queuedPayloads: newPayloadQueue(),
    queueFullReported: false,
  }
}

function newPayloadQueue() {
  var queue = []
  return {
    bytesCount: 0,
    enqueue: function(payload) {
      if (this.isFull()) {
        return
      }
      queue.push(payload)
      this.bytesCount += payload.bytesCount
    },
    first() {
      return queue[0]
    },
    dequeue() {
      var payload = queue.shift()
      if (payload) {
        this.bytesCount -= payload.bytesCount
      }
      return payload
    },
    size() {
      return queue.length
    },
    isFull() {
      return this.bytesCount >= MAX_QUEUE_BYTES_COUNT
    },
  }
}

function newBandwidthMonitor() {
  return {
    ongoingRequestCount: 0,
    ongoingByteCount: 0,
    canHandle: function(payload) {
      return (
        this.ongoingRequestCount === 0 ||
        (this.ongoingByteCount + payload.bytesCount <= MAX_ONGOING_BYTES_COUNT &&
          this.ongoingRequestCount < MAX_ONGOING_REQUESTS)
      )
    },
    add: function(payload) {
      this.ongoingRequestCount += 1
      this.ongoingByteCount += payload.bytesCount
    },
    remove:function(payload) {
      this.ongoingRequestCount -= 1
      this.ongoingByteCount -= payload.bytesCount
    },
  }
}