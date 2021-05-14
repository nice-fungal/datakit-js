import { noop, elapsed, round, preferredNow, extend } from '../../helper/tools'
import { supportPerformanceTimingEvent } from '../performanceCollection'
import { LifeCycleEventType } from '../../helper/lifeCycle'
import { trackEventCounts } from '../trackEventCounts'
import { waitIdlePageActivity } from '../trackPageActivities'
import { ViewLoadingType } from './trackViews'
export function trackViewMetrics(lifeCycle, scheduleViewUpdate, loadingType) {
  var viewMetrics = {
    eventCounts: {
      errorCount: 0,
      longTaskCount: 0,
      resourceCount: 0,
      userActionCount: 0
    }
  }

  var _trackEventCounts = trackEventCounts(
    lifeCycle,
    function (newEventCounts) {
      viewMetrics.eventCounts = newEventCounts
      scheduleViewUpdate()
    }
  )
  var stopEventCountsTracking = _trackEventCounts.stop
  var _trackLoadingTime = trackLoadingTime(
    loadingType,
    function (newLoadingTime) {
      viewMetrics.loadingTime = newLoadingTime
      scheduleViewUpdate()
    }
  )
  var setActivityLoadingTime = _trackLoadingTime.setActivityLoadingTime
  var setLoadEvent = _trackLoadingTime.setLoadEvent
  var _trackActivityLoadingTime = trackActivityLoadingTime(
    lifeCycle,
    setActivityLoadingTime
  )
  var stopActivityLoadingTimeTracking = _trackActivityLoadingTime.stop
  var stopCLSTracking
  if (isLayoutShiftSupported()) {
    viewMetrics.cumulativeLayoutShift = 0
    var _trackLayoutShift = trackLayoutShift(lifeCycle, function (layoutShift) {
      viewMetrics.cumulativeLayoutShift = round(
        viewMetrics.cumulativeLayoutShift + layoutShift,
        4
      )
      scheduleViewUpdate()
    })
    stopCLSTracking = _trackLayoutShift.stop
  } else {
    stopCLSTracking = noop
  }
  return {
    stop: function () {
      stopEventCountsTracking()
      stopActivityLoadingTimeTracking()
      stopCLSTracking()
    },
    setLoadEvent: setLoadEvent,
    viewMetrics: viewMetrics
  }
}

function trackLoadingTime(loadType, callback) {
  var isWaitingForLoadEvent = loadType === ViewLoadingType.INITIAL_LOAD
  var isWaitingForActivityLoadingTime = true
  var loadingTimeCandidates = []

  function invokeCallbackIfAllCandidatesAreReceived() {
    if (
      !isWaitingForActivityLoadingTime &&
      !isWaitingForLoadEvent &&
      loadingTimeCandidates.length > 0
    ) {
      callback(Math.max.apply(Math, loadingTimeCandidates))
    }
  }

  return {
    setLoadEvent: function (loadEvent) {
      if (isWaitingForLoadEvent) {
        isWaitingForLoadEvent = false
        loadingTimeCandidates.push(loadEvent)
        invokeCallbackIfAllCandidatesAreReceived()
      }
    },
    setActivityLoadingTime: function (activityLoadingTime) {
      if (isWaitingForActivityLoadingTime) {
        isWaitingForActivityLoadingTime = false
        if (activityLoadingTime !== undefined) {
          loadingTimeCandidates.push(activityLoadingTime)
        }
        invokeCallbackIfAllCandidatesAreReceived()
      }
    }
  }
}

function trackActivityLoadingTime(lifeCycle, callback) {
  var startTime = preferredNow()
  var _waitIdlePageActivity = waitIdlePageActivity(
    lifeCycle,
    function (params) {
      if (params.hadActivity) {
        callback(elapsed(startTime, params.endTime))
      } else {
        callback(undefined)
      }
    }
  )
  var stopWaitIdlePageActivity = _waitIdlePageActivity.stop
  return { stop: stopWaitIdlePageActivity }
}

/**
 * Track layout shifts (LS) occurring during the Views.  This yields multiple values that can be
 * added up to compute the cumulated layout shift (CLS).
 *
 * See isLayoutShiftSupported to check for browser support.
 *
 * Documentation: https://web.dev/cls/
 * Reference implementation: https://github.com/GoogleChrome/web-vitals/blob/master/src/getCLS.ts
 */
function trackLayoutShift(lifeCycle, callback) {
  var subscribe = lifeCycle.subscribe(
    LifeCycleEventType.PERFORMANCE_ENTRY_COLLECTED,
    function (entry) {
      if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
        callback(entry.value)
      }
    }
  )

  return {
    stop: subscribe.unsubscribe
  }
}

/**
 * Check whether `layout-shift` is supported by the browser.
 */
function isLayoutShiftSupported() {
  return supportPerformanceTimingEvent('layout-shift')
}
