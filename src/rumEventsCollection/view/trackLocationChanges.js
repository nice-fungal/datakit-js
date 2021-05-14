import { addEventListener } from '../../helper/tools'
import { DOM_EVENT } from '../../helper/enums'
export function trackLocationChanges(onLocationChange) {
  var _trackHistory = trackHistory(onLocationChange)
  var _trackHash = trackHash(onLocationChange)
  var stopHistoryTracking = _trackHistory.stop
  var stopHashTracking = _trackHash.stop
  return {
    stop: function () {
      stopHistoryTracking()
      stopHashTracking()
    }
  }
}

export function areDifferentLocation(currentLocation, otherLocation) {
  return (
    currentLocation.pathname !== otherLocation.pathname ||
    (!isHashAnAnchor(otherLocation.hash) &&
      getPathFromHash(otherLocation.hash) !==
        getPathFromHash(currentLocation.hash))
  )
}

function trackHistory(onHistoryChange) {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  var originalPushState = history.pushState
  history.pushState = function () {
    originalPushState.apply(this, arguments)
    onHistoryChange()
  }
  // eslint-disable-next-line @typescript-eslint/unbound-method
  var originalReplaceState = history.replaceState
  history.replaceState = function () {
    originalReplaceState.apply(this, arguments)
    onHistoryChange()
  }
  var _addEventListener = addEventListener(
    window,
    DOM_EVENT.POP_STATE,
    onHistoryChange
  )
  var removeListener = _addEventListener.stop

  var stop = function () {
    removeListener()
    history.pushState = originalPushState
    history.replaceState = originalReplaceState
  }
  return { stop: stop }
}

function trackHash(onHashChange) {
  return addEventListener(window, DOM_EVENT.HASH_CHANGE, onHashChange)
}

function isHashAnAnchor(hash) {
  var correspondingId = hash.substr(1)
  return !!document.getElementById(correspondingId)
}

function getPathFromHash(hash) {
  var index = hash.indexOf('?')
  return index < 0 ? hash : hash.slice(0, index)
}
