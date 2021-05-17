import {
  ONE_MINUTE,
  each,
  relativeNow,
  replaceNumberCharByPath,
  getQueryParamsFromUrl,
  jsonStringify,
  SESSION_TIME_OUT_DELAY,
  LifeCycleEventType
} from '@cloudcare/browser-core'
export var VIEW_CONTEXT_TIME_OUT_DELAY = SESSION_TIME_OUT_DELAY
export var ACTION_CONTEXT_TIME_OUT_DELAY = 5 * ONE_MINUTE // arbitrary
export var CLEAR_OLD_CONTEXTS_INTERVAL = ONE_MINUTE

export function startParentContexts(lifeCycle, session) {
  var currentView
  var currentAction
  var currentSessionId

  var previousViews = []
  var previousActions = []

  lifeCycle.subscribe(
    LifeCycleEventType.VIEW_CREATED,
    function (currentContext) {
      currentView = currentContext
      currentSessionId = session.getId()
    }
  )

  lifeCycle.subscribe(
    LifeCycleEventType.VIEW_UPDATED,
    function (currentContext) {
      // A view can be updated after its end.  We have to ensure that the view being updated is the
      // most recently created.
      if (currentView && currentView.id === currentContext.id) {
        currentView = currentContext
      }
    }
  )
  lifeCycle.subscribe(LifeCycleEventType.VIEW_ENDED, function (data) {
    if (currentView) {
      previousViews.unshift({
        endTime: data.endClocks.relative,
        context: buildCurrentViewContext(),
        startTime: currentView.startClocks.relative
      })
      currentView = undefined
    }
  })
  lifeCycle.subscribe(
    LifeCycleEventType.AUTO_ACTION_CREATED,
    function (currentContext) {
      currentAction = currentContext
    }
  )

  lifeCycle.subscribe(
    LifeCycleEventType.AUTO_ACTION_COMPLETED,
    function (action) {
      if (currentAction) {
        previousActions.unshift({
          context: buildCurrentActionContext(),
          endTime: currentAction.startClocks.relative + action.duration,
          startTime: currentAction.startClocks.relative
        })
      }
      currentAction = undefined
    }
  )

  lifeCycle.subscribe(LifeCycleEventType.AUTO_ACTION_DISCARDED, function () {
    currentAction = undefined
  })

  lifeCycle.subscribe(LifeCycleEventType.SESSION_RENEWED, function () {
    previousViews = []
    previousActions = []
    currentView = undefined
    currentAction = undefined
  })

  var clearOldContextsInterval = window.setInterval(function () {
    clearOldContexts(previousViews, VIEW_CONTEXT_TIME_OUT_DELAY)
    clearOldContexts(previousActions, ACTION_CONTEXT_TIME_OUT_DELAY)
  }, CLEAR_OLD_CONTEXTS_INTERVAL)

  function clearOldContexts(previousContexts, timeOutDelay) {
    var oldTimeThreshold = relativeNow() - timeOutDelay
    while (
      previousContexts.length > 0 &&
      previousContexts[previousContexts.length - 1].startTime < oldTimeThreshold
    ) {
      previousContexts.pop()
    }
  }

  function buildCurrentViewContext() {
    return {
      session: {
        id: currentSessionId
      },
      view: {
        id: currentView.id,
        referrer: currentView.referrer,
        name: currentView.name,
        url: currentView.location.href,
        host: currentView.location.host,
        path: currentView.location.pathname,
        pathGroup: replaceNumberCharByPath(currentView.location.pathname),
        urlQuery: jsonStringify(
          getQueryParamsFromUrl(currentView.location.href)
        )
      }
    }
  }

  function buildCurrentActionContext() {
    return { userAction: { id: currentAction.id } }
  }

  function findContext(
    buildContext,
    previousContexts,
    currentContext,
    startTime
  ) {
    if (startTime === undefined) {
      return currentContext ? buildContext() : undefined
    }
    if (currentContext && startTime >= currentContext.startClocks.relative) {
      return buildContext()
    }
    var flag = undefined
    each(previousContexts, function (previousContext) {
      if (startTime > previousContext.endTime) {
        return false
      }
      if (startTime >= previousContext.startTime) {
        flag = previousContext.context
        return false
      }
    })
    return flag
  }

  var parentContexts = {
    findAction: function (startTime) {
      return findContext(
        buildCurrentActionContext,
        previousActions,
        currentAction,
        startTime
      )
    },

    findView: function (startTime) {
      return findContext(
        buildCurrentViewContext,
        previousViews,
        currentView,
        startTime
      )
    },

    stop: function () {
      window.clearInterval(clearOldContextsInterval)
    }
  }
  return parentContexts
}
