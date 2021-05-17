import { startRumSession } from '../domain/rumSession'
import { commonInit, LifeCycle } from '@cloudcare/browser-core'
import { buildEnv } from './buildEnv'
import { startPerformanceCollection } from '../domain/performanceCollection'
import { startDOMMutationCollection } from '../domain/domMutationCollection'
import { startLongTaskCollection } from '../domain/rumEventsCollection/longTask/longTaskCollection'
import { startActionCollection } from '../domain/rumEventsCollection/actions/actionCollection'
import { startParentContexts } from '../domain/parentContexts'
import { startRumBatch } from '../transport/batch'
import { startRumAssembly } from '../domain/assembly'
import { startInternalContext } from '../domain/internalContext'
import { startErrorCollection } from '../domain/rumEventsCollection/error/errorCollection'
import { startViewCollection } from '../domain/rumEventsCollection/view/viewCollection'
import { startRequestCollection } from '../domain/requestCollections'
import { startResourceCollection } from '../domain/rumEventsCollection/resource/resourceCollection'
export function startRum(userConfiguration, getCommonContext) {
  var lifeCycle = new LifeCycle()
  var configuration = commonInit(userConfiguration, buildEnv)
  var session = startRumSession(configuration, lifeCycle)
  var _startRumEventCollection = startRumEventCollection(
    userConfiguration.applicationId,
    location,
    lifeCycle,
    configuration,
    session,
    getCommonContext
  )
  var parentContexts = _startRumEventCollection.parentContexts
  startRequestCollection(lifeCycle, configuration)
  startPerformanceCollection(lifeCycle, configuration)
  startDOMMutationCollection(lifeCycle)
  var internalContext = startInternalContext(
    userConfiguration.applicationId,
    session,
    parentContexts
  )
  return {
    addAction: _startRumEventCollection.addAction,
    addError: _startRumEventCollection.addError,
    addTiming: _startRumEventCollection.addTiming,
    configuration: configuration,
    lifeCycle: lifeCycle,
    parentContexts: parentContexts,
    session: session,
    getInternalContext: internalContext.get
  }
}

export function startRumEventCollection(
  applicationId,
  location,
  lifeCycle,
  configuration,
  session,
  getCommonContext
) {
  var parentContexts = startParentContexts(lifeCycle, session)
  var batch = startRumBatch(configuration, lifeCycle)
  startRumAssembly(
    applicationId,
    configuration,
    lifeCycle,
    session,
    parentContexts,
    getCommonContext
  )
  startLongTaskCollection(lifeCycle)
  startResourceCollection(lifeCycle, configuration, session)
  var _startViewCollection = startViewCollection(
    lifeCycle,
    configuration,
    location
  )
  var addTiming = _startViewCollection.addTiming
  var stopViewCollection = _startViewCollection.stop
  var _startErrorCollection = startErrorCollection(lifeCycle, configuration)
  var _startActionCollection = startActionCollection(lifeCycle, configuration)
  return {
    addAction: _startActionCollection.addAction,
    addTiming: addTiming,
    parentContexts: parentContexts,
    addError: _startErrorCollection.addError,
    stop: function () {
      stopViewCollection()
      batch.stop()
    }
  }
  // return {
  //   addAction,
  //   addError,
  //   parentContexts,

  //   stop() {
  //     // prevent batch from previous tests to keep running and send unwanted requests
  //     // could be replaced by stopping all the component when they will all have a stop method
  //     batch.stop()
  //   }
  // }
}
