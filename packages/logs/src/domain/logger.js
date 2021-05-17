import {
  createContextManager,
  extend,
  keys,
  ErrorSource
} from '@cloudcare/browser-core'
// import { ErrorSource } from '../../../helper/errorTools'
export var StatusType = {
  debug: 'debug',
  error: 'error',
  info: 'info',
  warn: 'warn'
}
// eslint-disable-next-line @typescript-eslint/no-redeclare

var STATUS_PRIORITIES = {
  [StatusType.debug]: 0,
  [StatusType.info]: 1,
  [StatusType.warn]: 2,
  [StatusType.error]: 3
}

export const STATUSES = keys(StatusType)

export const HandlerType = {
  console: 'console',
  http: 'http',
  silent: 'silent'
}
// eslint-disable-next-line @typescript-eslint/no-redeclare
export function Logger(sendLog, handlerType, level, loggerContext) {
  this.contextManager = createContextManager()
  this.sendLog = sendLog
  this.handlerType = handlerType
  this.level = level
  this.contextManager.set(loggerContext)
}
Logger.prototype = {
  log: function (message, messageContext, status) {
    if (typeof status === 'undefined') {
      status = StatusType.info
    }
    if (STATUS_PRIORITIES[status] >= STATUS_PRIORITIES[this.level]) {
      switch (this.handlerType) {
        case HandlerType.http:
          var logMessage = extend(
            { message: message, status: status },
            this.contextManager.get(),
            messageContext
          )
          this.sendLog(logMessage)
          break
        case HandlerType.console:
          console.log(
            status + ' : ' + message,
            extend(this.contextManager.get(), messageContext)
          )
          break
        case HandlerType.silent:
          break
      }
    }
  },
  debug: function (message, messageContext) {
    this.log(message, messageContext, StatusType.debug)
  },

  info: function (message, messageContext) {
    this.log(message, messageContext, StatusType.info)
  },

  warn: function (message, messageContext) {
    this.log(message, messageContext, StatusType.warn)
  },

  error: function (message, messageContext) {
    var errorOrigin = {
      error: {
        origin: ErrorSource.LOGGER
      }
    }
    this.log(message, extend(errorOrigin, messageContext), StatusType.error)
  },

  setContext: function (context) {
    this.contextManager.set(context)
  },

  addContext: function (key, value) {
    this.contextManager.add(key, value)
  },

  removeContext: function (key) {
    this.contextManager.remove(key)
  },

  setHandler: function (handler) {
    this.handlerType = handler
  },

  setLevel: function (level) {
    this.level = level
  }
}
