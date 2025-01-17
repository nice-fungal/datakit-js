import { each, filter, map } from './tools'
var _Observable = function (onFirstSubscribe) {
  this.observers = []
  this.onLastUnsubscribe = undefined
  this.onFirstSubscribe = onFirstSubscribe
}
_Observable.prototype = {
  subscribe: function (f) {
    if (!this.observers.length && this.onFirstSubscribe) {
      this.onLastUnsubscribe = this.onFirstSubscribe() || undefined
    }
    this.observers.push(f)
    var _this = this
    return {
      unsubscribe: function () {
        _this.observers = filter(_this.observers, function (other) {
          return f !== other
        })
        if (!_this.observers.length && _this.onLastUnsubscribe) {
          _this.onLastUnsubscribe()
        }
      }
    }
  },
  notify: function (data) {
    each(this.observers, function (observer) {
      observer(data)
    })
  }
}
export var Observable = _Observable

export function mergeObservables() {
  var observables = [].slice.call(arguments)
  var globalObservable = new Observable(function () {
    var subscriptions = map(observables, function (observable) {
      return observable.subscribe(function (data) {
        return globalObservable.notify(data)
      })
    })
    return function () {
      return each(subscriptions, function (subscription) {
        return subscription.unsubscribe()
      })
    }
  })
  return globalObservable
}
