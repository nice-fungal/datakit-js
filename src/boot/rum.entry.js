import { defineGlobal, getGlobalObject } from '../core/init'
import { createContextManager, isPercentage } from '../helper/tools'
import { startRum } from './rum'
import { makeRumPublicApi } from './rumPublicApi'
export var datafluxRum = makeRumPublicApi(startRum)

defineGlobal(getGlobalObject(), 'DATAFLUX_RUM', datafluxRum)
