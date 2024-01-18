import { display, includes, each } from '@cloudcare/browser-core'
import { createDeflateWorker } from './deflateWorker'

/**
 * In order to be sure that the worker is correctly working, we need a round trip of
 * initialization messages, making the creation asynchronous.
 * These worker lifecycle states handle this case.
 */
var DeflateWorkerStatus = {
  Nil: 0,
  Loading: 1,
  Error: 2,
  Initialized: 3
}

var state = { status: DeflateWorkerStatus.Nil }

export function startDeflateWorker(callback, createDeflateWorkerImpl) {
  if (createDeflateWorkerImpl === undefined) {
    createDeflateWorkerImpl = createDeflateWorker
  }
  switch (state.status) {
    case DeflateWorkerStatus.Nil:
      state = { status: DeflateWorkerStatus.Loading, callbacks: [callback] }
      doStartDeflateWorker(createDeflateWorkerImpl)
      break
    case DeflateWorkerStatus.Loading:
      state.callbacks.push(callback)
      break
    case DeflateWorkerStatus.Error:
      callback()
      break
    case DeflateWorkerStatus.Initialized:
      callback(state.worker)
      break
  }
}

export function resetDeflateWorkerState() {
  state = { status: DeflateWorkerStatus.Nil }
}

/**
 * Starts the deflate worker and handle messages and errors
 *
 * The spec allow browsers to handle worker errors differently:
 * - Chromium throws an exception
 * - Firefox fires an error event
 *
 * more details: https://bugzilla.mozilla.org/show_bug.cgi?id=1736865#c2
 */
export function doStartDeflateWorker(createDeflateWorkerImpl) {
  if (createDeflateWorkerImpl === undefined) {
    createDeflateWorkerImpl = createDeflateWorker
  }
  try {
    var worker = createDeflateWorkerImpl()
    worker.addEventListener('error', onError)
    worker.addEventListener('message', function (event) {
      var data = event.data
      if (data.type === 'errored') {
        onError(data.error)
      } else if (data.type === 'initialized') {
        onInitialized(worker)
      }
    })
    worker.postMessage({ action: 'init' })
    return worker
  } catch (error) {
    console.errror('====doStartDeflateWorker', error)
    onError(error)
  }
}

function onInitialized(worker) {
  if (state.status === DeflateWorkerStatus.Loading) {
    each(state.callbacks, function (callback) {
      callback(worker)
    })
    state = { status: DeflateWorkerStatus.Initialized, worker: worker }
  }
}

function onError(error) {
  if (state.status === DeflateWorkerStatus.Loading) {
    display.error(
      'Session Replay recording failed to start: an error occurred while creating the Worker:',
      error
    )
    if (
      error instanceof Event ||
      (error instanceof Error &&
        includes(error.message, 'Content Security Policy'))
    ) {
      display.error('Please make sure CSP is correctly configured !!!')
    }
    each(state.callbacks, function (callback) {
      callback()
    })
    state = { status: DeflateWorkerStatus.Error }
  }
}
