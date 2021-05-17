import { performDraw, startSessionManagement } from '@cloudcare/browser-core'

export var LOGGER_SESSION_KEY = 'logs'

export var LoggerTrackingType = {
  NOT_TRACKED: '0',
  TRACKED: '1'
}

export function startLoggerSession(configuration, areCookieAuthorized) {
  if (!areCookieAuthorized) {
    var isTracked =
      computeTrackingType(configuration) === LoggerTrackingType.TRACKED
    return {
      getId: () => undefined,
      isTracked: () => isTracked
    }
  }
  var session = startSessionManagement(
    configuration.cookieOptions,
    LOGGER_SESSION_KEY,
    function (rawTrackingType) {
      return computeSessionState(configuration, rawTrackingType)
    }
  )
  return {
    getId: session.getId,
    isTracked: function () {
      return session.getTrackingType() === LoggerTrackingType.TRACKED
    }
  }
}

function computeTrackingType(configuration) {
  if (!performDraw(configuration.sampleRate)) {
    return LoggerTrackingType.NOT_TRACKED
  }
  return LoggerTrackingType.TRACKED
}

function computeSessionState(configuration, rawSessionType) {
  var trackingType = hasValidLoggerSession(rawSessionType)
    ? rawSessionType
    : computeTrackingType(configuration)
  return {
    trackingType: trackingType,
    isTracked: trackingType === LoggerTrackingType.TRACKED
  }
}

function hasValidLoggerSession(trackingType) {
  return (
    trackingType === LoggerTrackingType.NOT_TRACKED ||
    trackingType === LoggerTrackingType.TRACKED
  )
}
