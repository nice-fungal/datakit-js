import { defineGlobal, getGlobalObject } from '@cloudcare/browser-core'
import { startRum } from './rum'
import { makeRumPublicApi } from './rumPublicApi'
export var datafluxRum = makeRumPublicApi(startRum)

defineGlobal(getGlobalObject(), 'DATAFLUX_RUM', datafluxRum)
