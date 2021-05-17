import {
  addEventListeners,
  elapsed,
  extend,
  DOM_EVENT,
  LifeCycleEventType
} from '@cloudcare/browser-core'
import { trackFirstHidden } from './trackFirstHidden'

export function trackInitialViewTimings(lifeCycle, callback) {
  var timings = {}
  function setTimings(newTimings) {
    timings = extend(timings, newTimings)
    callback(timings)
  }
  var _trackNavigationTimings = trackNavigationTimings(lifeCycle, setTimings)
  var stopNavigationTracking = _trackNavigationTimings.stop
  var _trackFirstContentfulPaint = trackFirstContentfulPaint(
    lifeCycle,
    function (firstContentfulPaint) {
      setTimings({ firstContentfulPaint: firstContentfulPaint })
    }
  )
  var stopFCPTracking = _trackFirstContentfulPaint.stop
  var _trackLargestContentfulPaint = trackLargestContentfulPaint(
    lifeCycle,
    window,
    function (largestContentfulPaint) {
      setTimings({ largestContentfulPaint: largestContentfulPaint })
    }
  )
  var stopLCPTracking = _trackLargestContentfulPaint.stop
  var _trackFirstInputTimings = trackFirstInputTimings(
    lifeCycle,
    function (firttime) {
      setTimings({
        firstInputDelay: firttime.firstInputDelay,
        firstInputTime: firttime.firstInputTime
      })
    }
  )
  var stopFIDTracking = _trackFirstInputTimings.stop

  return {
    stop: function () {
      stopNavigationTracking()
      stopFCPTracking()
      stopLCPTracking()
      stopFIDTracking()
    }
  }
}

export function trackNavigationTimings(lifeCycle, callback) {
  var subscribe = lifeCycle.subscribe(
    LifeCycleEventType.PERFORMANCE_ENTRY_COLLECTED,
    function (entry) {
      if (entry.entryType === 'navigation') {
        callback({
          fetchStart: entry.fetchStart,
          responseEnd: entry.responseEnd,
          domComplete: entry.domComplete,
          domContentLoaded: entry.domContentLoadedEventEnd,
          domInteractive: entry.domInteractive,
          loadEvent: entry.loadEventEnd,
          loadEventEnd: entry.loadEventEnd
        })
      }
    }
  )

  return { stop: subscribe.unsubscribe }
}

export function trackFirstContentfulPaint(lifeCycle, callback) {
  var firstHidden = trackFirstHidden()
  var subscribe = lifeCycle.subscribe(
    LifeCycleEventType.PERFORMANCE_ENTRY_COLLECTED,
    function (entry) {
      if (
        entry.entryType === 'paint' &&
        entry.name === 'first-contentful-paint' &&
        entry.startTime < firstHidden.timeStamp
      ) {
        callback(entry.startTime)
      }
    }
  )
  return { stop: subscribe.unsubscribe }
}

/**
 * Track the largest contentful paint (LCP) occurring during the initial View.  This can yield
 * multiple values, only the most recent one should be used.
 * Documentation: https://web.dev/lcp/
 * Reference implementation: https://github.com/GoogleChrome/web-vitals/blob/master/src/getLCP.ts
 */
export function trackLargestContentfulPaint(lifeCycle, emitter, callback) {
  var firstHidden = trackFirstHidden()

  // Ignore entries that come after the first user interaction.  According to the documentation, the
  // browser should not send largest-contentful-paint entries after a user interact with the page,
  // but the web-vitals reference implementation uses this as a safeguard.
  var firstInteractionTimestamp = Infinity
  var _addEventListeners = addEventListeners(
    emitter,
    [DOM_EVENT.POINTER_DOWN, DOM_EVENT.KEY_DOWN],
    function (event) {
      firstInteractionTimestamp = event.timeStamp
    },
    { capture: true, once: true }
  )
  var stopEventListener = _addEventListeners.stop
  var subscribe = lifeCycle.subscribe(
    LifeCycleEventType.PERFORMANCE_ENTRY_COLLECTED,
    function (entry) {
      if (
        entry.entryType === 'largest-contentful-paint' &&
        entry.startTime < firstInteractionTimestamp &&
        entry.startTime < firstHidden.timeStamp
      ) {
        callback(entry.startTime)
      }
    }
  )
  var unsubscribeLifeCycle = subscribe.unsubscribe

  return {
    stop: function () {
      stopEventListener()
      unsubscribeLifeCycle()
    }
  }
}

/**
 * Track the first input occurring during the initial View to return:
 * - First Input Delay
 * - First Input Time
 * Callback is called at most one time.
 * Documentation: https://web.dev/fid/
 * Reference implementation: https://github.com/GoogleChrome/web-vitals/blob/master/src/getFID.ts
 */
export function trackFirstInputTimings(lifeCycle, callback) {
  var firstHidden = trackFirstHidden()
  var subscribe = lifeCycle.subscribe(
    LifeCycleEventType.PERFORMANCE_ENTRY_COLLECTED,
    function (entry) {
      if (
        entry.entryType === 'first-input' &&
        entry.startTime < firstHidden.timeStamp
      ) {
        var firstInputDelay = elapsed(entry.startTime, entry.processingStart)
        callback({
          // Ensure firstInputDelay to be positive, see
          // https://bugs.chromium.org/p/chromium/issues/detail?id=1185815
          firstInputDelay: firstInputDelay >= 0 ? firstInputDelay : 0,
          firstInputTime: entry.startTime
        })
      }
    }
  )
  return {
    stop: subscribe.unsubscribe
  }
}
