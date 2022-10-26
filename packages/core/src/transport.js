import {
  addEventListener,
  values,
  findByPath,
  escapeRowData,
  each,
  isNumber,
  isArray,
  extend,
  isString,
  toServerDuration,
  isBoolean,
  isEmptyObject,
  isObject,
  map,
  escapeJsonValue,
  escapeRowField
} from './helper/tools'
import { DOM_EVENT, RumEventType } from './helper/enums'
import { commonTags, dataMap } from './dataMap'
import {  getGlobalObject } from'./init'
// https://en.wikipedia.org/wiki/UTF-8
var HAS_MULTI_BYTES_CHARACTERS = /[^\u0000-\u007F]/
var CUSTOM_KEYS = 'custom_keys'
function addBatchPrecision(url) {
  if (!url) return url
  return url + (url.indexOf('?') === -1 ? '?' : '&') + 'precision=ms'
}
var global = getGlobalObject()
var httpRequest = function (endpointUrl, bytesLimit, isLineProtocolToJson) {
  this.endpointUrl = endpointUrl
  this.bytesLimit = bytesLimit
  this.isLineProtocolToJson = isLineProtocolToJson
  var isRealNavigator = Object.prototype.toString.call(global && global.navigator) === '[object Navigator]';
  var hasSendBeacon = isRealNavigator && typeof global.navigator.sendBeacon === 'function';
  if (hasSendBeacon) {
    this.sendBeacon = global.navigator.sendBeacon.bind(global.navigator);
  } else {
    this.sendBeacon = undefined
  }
  
}
httpRequest.prototype = {
  send: function (data, size) {
    
    var url = addBatchPrecision(this.endpointUrl)
    
    if (this.sendBeacon && size < this.bytesLimit && !this.isLineProtocolToJson) {
      var isQueued = this.sendBeacon(url, data)
      if (isQueued) {
        return 
      }
    } else if (this.sendBeacon && size < this.bytesLimit && this.isLineProtocolToJson) {
      const blob = new Blob([JSON.stringify(data)], {
        type: 'application/json',
      });
      var isQueued = this.sendBeacon(url, blob)
      if (isQueued) {
        return
      }
    }
    
    var request = new XMLHttpRequest()
    request.open('POST', url, true)
    request.withCredentials = true
    if (this.isLineProtocolToJson) {
      request.setRequestHeader('Content-type', 'application/json')
      request.send(JSON.stringify(data))
    } else {
      
      request.setRequestHeader('Content-type', 'text/plain;charset=UTF-8')
      request.send(data)
    }
    
    
    
  }
}

export var HttpRequest = httpRequest

export var processedMessageByDataMap = function (message) {
  if (!message || !message.type) return {
    rowStr: '',
    rowData: undefined
  }
  
  var rowData = { tags: {}, fields: {} }
  var hasFileds = false
  var rowStr = ''
  each(dataMap, function (value, key) {
    if (value.type === message.type) {
      rowStr += key + ','
      rowData.measurement = key
      var tagsStr = []
      var tags = extend({}, commonTags, value.tags)
      var filterFileds = ['date', 'type', CUSTOM_KEYS] // 已经在datamap中定义过的fields和tags
      each(tags, function (value_path, _key) {
        var _value = findByPath(message, value_path)
        filterFileds.push(_key)
        if (_value || isNumber(_value)) {
          rowData.tags[_key] = escapeJsonValue(_value)
          tagsStr.push(escapeRowData(_key) + '=' + escapeRowData(_value))
        }
      })
      
      var fieldsStr = []
      each(value.fields, function (_value, _key) {
        if (isArray(_value) && _value.length === 2) {
          var type = _value[0],
            value_path = _value[1]
          var _valueData = findByPath(message, value_path)
          filterFileds.push(_key)
          if (_valueData || isNumber(_valueData)) {
            rowData.fields[_key] = _valueData // 这里不需要转译
            // _valueData =
            //   type === 'string'
            //     ? '"' +
            //       _valueData.replace(/[\\]*"/g, '"').replace(/"/g, '\\"') +
            //       '"'
            //     : escapeRowData(_valueData)
            fieldsStr.push(escapeRowData(_key) + '=' + escapeRowField(_valueData))
          }
        } else if (isString(_value)) {
          var _valueData = findByPath(message, _value)
          filterFileds.push(_key)
          if (_valueData || isNumber(_valueData)) {
            rowData.fields[_key] = _valueData // 这里不需要转译
            fieldsStr.push(escapeRowData(_key) + '=' + escapeRowField(_valueData))
          }
        }
      })
      if (message.tags && isObject(message.tags) && !isEmptyObject(message.tags)) {
        // 自定义tag， 存储成field
        const _tagKeys = []
        each(message.tags, function (_value, _key) {
          // 如果和之前tag重名，则舍弃
          if (filterFileds.indexOf(_key) > -1) return
          filterFileds.push(_key)
          if (_value || isNumber(_value)) {
            _tagKeys.push(_key)
            rowData.fields[_key] = _value // 这里不需要转译
            fieldsStr.push(escapeRowData(_key) + '=' + escapeRowField(_value))
          }
        })
        if (_tagKeys.length) {
          rowData.fields[CUSTOM_KEYS] = escapeRowField(_tagKeys)
          fieldsStr.push(escapeRowData(CUSTOM_KEYS) + '=' + escapeRowField(_tagKeys))
        }
      }
      if (message.type === RumEventType.LOGGER) {
        // 这里处理日志类型数据自定义字段
        each(message, function (value, key) {
          if (
            filterFileds.indexOf(key) === -1 &&
            (isNumber(value) || isString(value) || isBoolean(value))
          ) {
            rowData.fields[key] = value // 这里不需要转译
            fieldsStr.push(escapeRowData(key) + '=' + escapeRowField(value))
          }
        })
      }
      if (tagsStr.length) {
        rowStr += tagsStr.join(',')
      }
      if (fieldsStr.length) {
        rowStr += ' '
        rowStr += fieldsStr.join(',')
        hasFileds = true
      }
      rowStr = rowStr + ' ' + message.date
      rowData.time = toServerDuration(message.date) // 这里不需要转译
    }
  })
  return {
    rowStr: hasFileds ? rowStr : '',
    rowData: hasFileds ? rowData : undefined
  }
}
var batch = function(
  request,
  maxSize,
  bytesLimit,
  maxMessageSize,
  flushTimeout,
  isLineProtocolToJson,
  beforeUnloadCallback
) {
  
  this.request = request
  this.maxSize = maxSize
  this.bytesLimit = bytesLimit
  this.maxMessageSize = maxMessageSize
  this.flushTimeout = flushTimeout
  this.isLineProtocolToJson = isLineProtocolToJson
  this.beforeUnloadCallback = beforeUnloadCallback
  
  this.pushOnlyBuffer = []
  this.upsertBuffer = {}
  this.bufferBytesSize = 0
  this.bufferMessageCount = 0
  
  this.flushOnVisibilityHidden()
  this.flushPeriodically()
}
batch.prototype = {
  
  add: function (message) {
    
    this.addOrUpdate(message)
  },

  upsert: function (message, key) {
    
    this.addOrUpdate(message, key)
  },

  flush: function () {
    
    if (this.bufferMessageCount !== 0) {
      var messages = this.pushOnlyBuffer.concat(values(this.upsertBuffer))
      if (messages.length === 0) return
      if (this.isLineProtocolToJson) {
        this.request.send(map(messages, function(rowdataStr) {
          return JSON.parse(rowdataStr)
        }), this.bufferBytesSize)
      } else {
        
        this.request.send(messages.join('\n'), this.bufferBytesSize)
      }
      
      this.pushOnlyBuffer = []
      this.upsertBuffer = {}
      this.bufferBytesSize = 0
      this.bufferMessageCount = 0
    }
  },

  processSendData: function (message) {
    if (this.isLineProtocolToJson) {
      return JSON.stringify(processedMessageByDataMap(message).rowData)
    }
    
    return processedMessageByDataMap(message).rowStr
  },
  sizeInBytes: function (candidate) {
    // Accurate byte size computations can degrade performances when there is a lot of events to process
    if (!HAS_MULTI_BYTES_CHARACTERS.test(candidate)) {
      return candidate.length
    }

    if (window.TextEncoder !== undefined) {
      return new TextEncoder().encode(candidate).length
    }

    return new Blob([candidate]).size
  },

  addOrUpdate: function (message, key) {
    var process = this.process(message)
    if (!process.processedMessage || process.processedMessage === '') return
    if (process.messageBytesSize >= this.maxMessageSize) {
      console.warn(
        'Discarded a message whose size was bigger than the maximum allowed size' +
          this.maxMessageSize +
          'KB.'
      )
      return
    }
    if (this.hasMessageFor(key)) {
      this.remove(key)
    }
    if (this.willReachedBytesLimitWith(process.messageBytesSize)) {
      this.flush()
    }
    this.push(process.processedMessage, process.messageBytesSize, key)
    if (this.isFull()) {
      this.flush()
    }
  },
  process: function (message) {
    var processedMessage = ''

    var processedMessage = this.processSendData(message)
    var messageBytesSize = this.sizeInBytes(processedMessage)
    return {
      processedMessage: processedMessage,
      messageBytesSize: messageBytesSize
    }
  },

  push: function (processedMessage, messageBytesSize, key) {
    if (this.bufferMessageCount > 0) {
      // \n separator at serialization
      this.bufferBytesSize += 1
    }
    if (key !== undefined) {
      this.upsertBuffer[key] = processedMessage
    } else {
      this.pushOnlyBuffer.push(processedMessage)
    }
    this.bufferBytesSize += messageBytesSize
    this.bufferMessageCount += 1
  },

  remove: function (key) {
    var removedMessage = this.upsertBuffer[key]
    delete this.upsertBuffer[key]
    var messageBytesSize = this.sizeInBytes(removedMessage)
    this.bufferBytesSize -= messageBytesSize
    this.bufferMessageCount -= 1
    if (this.bufferMessageCount > 0) {
      this.bufferBytesSize -= 1
    }
  },

  hasMessageFor: function (key) {
    return key !== undefined && this.upsertBuffer[key] !== undefined
  },

  willReachedBytesLimitWith: function (messageBytesSize) {
    // byte of the separator at the end of the message
    return this.bufferBytesSize + messageBytesSize + 1 >= this.bytesLimit
  },

  isFull: function () {
    return (
      this.bufferMessageCount === this.maxSize ||
      this.bufferBytesSize >= this.bytesLimit
    )
  },

  flushPeriodically: function () {
    var _this = this
    setTimeout(function () {
      _this.flush()
      _this.flushPeriodically()
    }, _this.flushTimeout)
  },

  flushOnVisibilityHidden: function () {
    var _this = this
    /**
     * With sendBeacon, requests are guaranteed to be successfully sent during document unload
     */
    // @ts-ignore this function is not always defined
    if (global.navigator.sendBeacon) {
      /**
       * beforeunload is called before visibilitychange
       * register first to be sure to be called before flush on beforeunload
       * caveat: unload can still be canceled by another listener
       */
      addEventListener(
        window,
        DOM_EVENT.BEFORE_UNLOAD,
        _this.beforeUnloadCallback
      )

      /**
       * Only event that guarantee to fire on mobile devices when the page transitions to background state
       * (e.g. when user switches to a different application, goes to homescreen, etc), or is being unloaded.
       */
      addEventListener(document, DOM_EVENT.VISIBILITY_CHANGE, function () {
        if (document.visibilityState === 'hidden') {
          _this.flush()
        }
      })
      /**
       * Safari does not support yet to send a request during:
       * - a visibility change during doc unload (cf: https://bugs.webkit.org/show_bug.cgi?id=194897)
       * - a page hide transition (cf: https://bugs.webkit.org/show_bug.cgi?id=188329)
       */
      addEventListener(window, DOM_EVENT.BEFORE_UNLOAD, function () {
        _this.flush()
      })
    }
  }
}

export var Batch = batch
