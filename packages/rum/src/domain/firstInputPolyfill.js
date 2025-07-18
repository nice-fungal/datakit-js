import {
  addEventListeners,
  dateNow,
  DOM_EVENT,
  relativeNow
} from '@cloudcare/browser-core'
/**
 * first-input timing entry polyfill based on
 * https://github.com/GoogleChrome/web-vitals/blob/master/src/lib/polyfills/firstInputPolyfill.ts
 */
export function retrieveFirstInputTiming(configuration, callback) {
  var startTimeStamp = dateNow()
  var timingSent = false

  var _addEventListeners = addEventListeners(
    window,
    [
      DOM_EVENT.CLICK,
      DOM_EVENT.MOUSE_DOWN,
      DOM_EVENT.KEY_DOWN,
      DOM_EVENT.TOUCH_START,
      DOM_EVENT.POINTER_DOWN
    ],
    function (evt) {
      // Only count cancelable events, which should trigger behavior important to the user.
      if (!evt.cancelable) {
        return
      }

      // This timing will be used to compute the "first Input delay", which is the delta between
      // when the system received the event (e.g. evt.timeStamp) and when it could run the callback
      // (e.g. performance.now()).
      var timing = {
        entryType: 'first-input',
        processingStart: relativeNow(),
        processingEnd: relativeNow(),
        startTime: evt.timeStamp,
        duration: 0, // arbitrary value to avoid nullable duration and simplify INP logic
        name: '',
        cancelable: false,
        target: null,
        toJSON: function () {
          return {}
        }
      }

      if (evt.type === DOM_EVENT.POINTER_DOWN) {
        sendTimingIfPointerIsNotCancelled(timing)
      } else {
        sendTiming(timing)
      }
    },
    { passive: true, capture: true }
  )
  var removeEventListeners = _addEventListeners.stop
  return { stop: removeEventListeners }

  /**
   * Pointer events are a special case, because they can trigger main or compositor thread behavior.
   * We differentiate these cases based on whether or not we see a pointercancel event, which are
   * fired when we scroll. If we're scrolling we don't need to report input delay since FID excludes
   * scrolling and pinch/zooming.
   */
  function sendTimingIfPointerIsNotCancelled(timing) {
    addEventListeners(
      window,
      [DOM_EVENT.POINTER_UP, DOM_EVENT.POINTER_CANCEL],
      function (event) {
        if (event.type === DOM_EVENT.POINTER_UP) {
          sendTiming(timing)
        }
      },
      { once: true }
    )
  }

  function sendTiming(timing) {
    if (!timingSent) {
      timingSent = true
      removeEventListeners()
      // In some cases the recorded delay is clearly wrong, e.g. it's negative or it's larger than
      // the time between now and when the page was loaded.
      // - https://github.com/GoogleChromeLabs/first-input-delay/issues/4
      // - https://github.com/GoogleChromeLabs/first-input-delay/issues/6
      // - https://github.com/GoogleChromeLabs/first-input-delay/issues/7
      var delay = timing.processingStart - timing.startTime
      if (delay >= 0 && delay < dateNow() - startTimeStamp) {
        callback(timing)
      }
    }
  }
}
