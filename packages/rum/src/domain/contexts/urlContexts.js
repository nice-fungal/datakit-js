import {
  LifeCycleEventType,
  SESSION_TIME_OUT_DELAY,
  relativeNow,
  ContextHistory,
  replaceNumberCharByPath,
  jsonStringify,
  getQueryParamsFromUrl,
  isHashAnAnchor,
  getPathFromHash
} from '@cloudcare/browser-core'

/**
 * We want to attach to an event:
 * - the url corresponding to its start
 * - the referrer corresponding to the previous view url (or document referrer for initial view)
 */

export var URL_CONTEXT_TIME_OUT_DELAY = SESSION_TIME_OUT_DELAY

export function startUrlContexts(
  lifeCycle,
  locationChangeObservable,
  location
) {
  var urlContextHistory = new ContextHistory(URL_CONTEXT_TIME_OUT_DELAY)

  var previousViewUrl

  lifeCycle.subscribe(LifeCycleEventType.VIEW_ENDED, function (data) {
    urlContextHistory.closeActive(data.endClocks.relative)
  })

  lifeCycle.subscribe(LifeCycleEventType.VIEW_CREATED, function (data) {
    var viewUrl = location.href
    urlContextHistory.add(
      buildUrlContext({
        url: viewUrl,
        location: location,
        referrer: !previousViewUrl ? document.referrer : previousViewUrl
      }),
      data.startClocks.relative
    )
    previousViewUrl = viewUrl
  })

  var locationChangeSubscription = locationChangeObservable.subscribe(function (
    data
  ) {
    var current = urlContextHistory.find()
    if (current) {
      var changeTime = relativeNow()
      urlContextHistory.closeActive(changeTime)
      urlContextHistory.add(
        buildUrlContext({
          url: data.newLocation.href,
          location: data.newLocation,
          referrer: current.referrer
        }),
        changeTime
      )
    }
  })

  function buildUrlContext(data) {
    var path = data.location.pathname
    var hash = data.location.hash
    if (path === '/' && hash && !isHashAnAnchor(hash)) {
      path = '/' + getPathFromHash(hash)
    }
    return {
      url: data.url,
      referrer: data.referrer,
      host: data.location.host,
      path: path,
      pathGroup: replaceNumberCharByPath(path),
      urlQuery: jsonStringify(getQueryParamsFromUrl(data.location.href))
    }
  }

  return {
    findUrl: function (startTime) {
      return urlContextHistory.find(startTime)
    },
    stop: function () {
      locationChangeSubscription.unsubscribe()
      urlContextHistory.stop()
    }
  }
}
