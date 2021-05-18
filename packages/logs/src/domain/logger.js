import {
  createContextManager,
  extend2Lev,
  keys,
  ErrorSource,
  jsonStringify
} from '@cloudcare/browser-core'
export var StatusType = {
  debug: 'debug',
  critical: 'critical',
  error: 'error',
  info: 'info',
  warn: 'warning'
}
// eslint-disable-next-line @typescript-eslint/no-redeclare

var STATUS_PRIORITIES = {
  [StatusType.debug]: 0,
  [StatusType.info]: 1,
  [StatusType.warn]: 2,
  [StatusType.error]: 3,
  [StatusType.critical]: 4
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
  if (typeof handlerType === 'undefined') {
    handlerType = HandlerType.http
  }
  if (typeof level === 'undefined') {
    level = StatusType.debug
  }
  if (typeof loggerContext === 'undefined') {
    loggerContext = {}
  }
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
          var logMessage = extend2Lev(
            { message: message, status: status },
            { tags: this.contextManager.get() },
            messageContext
          )
          this.sendLog(logMessage)
          break
        case HandlerType.console:
          console.log(
            status + ' : ' + message,
            extend2Lev(this.contextManager.get(), messageContext)
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
  critical: function (message, messageContext) {
    this.log(message, messageContext, StatusType.critical)
  },
  error: function (message, messageContext) {
    var errorOrigin = {
      error: {
        origin: ErrorSource.LOGGER
      }
    }
    this.log(message, extend2Lev(errorOrigin, messageContext), StatusType.error)
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
