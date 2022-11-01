import { instrumentMethod } from '../helper/instrumentMethod'
import { Observable } from '../helper/observable'
import { elapsed, clocksNow, timeStampNow } from '../helper/tools'
import { normalizeUrl } from '../helper/urlPolyfill'

var fetchObservable

export function initFetchObservable() {
  if (!fetchObservable) {
    fetchObservable = createFetchObservable()
  }
  return fetchObservable
}

function createFetchObservable() {
  var observable = new Observable(function() {
    if (!window.fetch) {
      return
    }

    var fetchMethod = instrumentMethod(
      window,
      'fetch',
      function(originalFetch) {
        return function (input, init) {
          var responsePromise
          var context = beforeSend(observable, input, init)
          if (context) {
            responsePromise = originalFetch.call(this, context.input, context.init)
            afterSend(observable, responsePromise, context)
          } else {
            responsePromise = originalFetch.call(this, input, init)
          }
          return responsePromise
        }
      }   
    )
    return fetchMethod.stop
  })

  return observable
}

function beforeSend(observable, input, init) {
  var method = (init && init.method) || (typeof input === 'object' && input.method) || 'GET'
  var url = normalizeUrl((typeof input === 'object' && input.url) || input)
  var startClocks = clocksNow()

  var context = {
    state: 'start',
    init: init,
    input: input,
    method: method,
    startClocks: startClocks,
    url: url,
  }

  observable.notify(context)

  return context
}

function afterSend(
  observable,
  responsePromise,
  startContext
) {
  var reportFetch = function(response) {
    var context = startContext
    context.state = 'complete'
    context.duration = elapsed(context.startClocks.timeStamp, timeStampNow())
    if ('stack' in response || response instanceof Error) {
      context.status = 0
      context.isAborted = response instanceof DOMException && response.code === DOMException.ABORT_ERR
      context.error = response
      observable.notify(context)
    } else if ('status' in response) {
      context.response = response
      context.responseType = response.type
      context.status = response.status
      context.isAborted = false
      observable.notify(context)
    }
  }
  responsePromise.then(reportFetch, reportFetch)
}
