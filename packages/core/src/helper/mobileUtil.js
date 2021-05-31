export var userAgent = navigator.userAgent.toLowerCase()
export var isAndroid = function () {
  return /android/.test(userAgent)
}
export var isIos = function () {
  return /iphone os/.test(userAgent)
}

var JsBirdge = function () {
  this.bridge = window['FTWebViewJavascriptBridge']
  this.tagMaps = {}
  this.isValid = false
  window.mapWebViewCallBack = {}
}
JsBirdge.prototype = {
  initBridge: function (callback) {
    var _this = this
    if (isIos()) {
      if (_this.bridge) {
        callback({ isMobile: true })
        _this.isValid = true
        return
      } else {
        _this.bridge = window['WVJBCallbacks']
        if (_this.bridge) {
          callback({ isMobile: true })
          _this.isValid = true
          return
        } else {
          window.WVJBCallbacks = [
            function (bridge) {
              _this.bridge = bridge
              callback({ isMobile: true })
              _this.isValid = true
              return
            }
          ]
          var WVJBIframe = document.createElement('iframe')
          WVJBIframe.style.display = 'none'
          WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'
          document.documentElement.appendChild(WVJBIframe)
          setTimeout(function () {
            document.documentElement.removeChild(WVJBIframe)
          }, 0)
        }
      }
    } else if (isAndroid()) {
      if (_this.bridge) {
        callback({ isMobile: true })
        _this.isValid = true
        return
      } else {
        window.document.addEventListener(
          'FTWebViewJavascriptBridgeReady',
          function () {
            _this.bridge = window['FTWebViewJavascriptBridge']
            if (_this.bridge) {
              _this.isValid = true
              return callback({ isMobile: true })
            } else {
              _this.isValid = true
              return callback({ isMobile: false })
            }
          },
          false
        )
      }
    } else {
      _this.isValid = true
      return callback({ isMobile: false })
    }
  },
  sendEvent: function (params, callback) {
    if (typeof params === 'undefined') {
      params = {}
    }
    var _this = this
    var tag = 'Unique id:' + new Date().getTime()
    if (params.name) {
      _this.tagMaps[params.name] = tag
      window.mapWebViewCallBack[tag] = function (ret, err) {
        return Promise.resolve(ret, err)
      }
      params['_tag'] = tag
      if (isIos()) {
        _this.bridge.callHandler(
          'sendEvent',
          JSON.stringify(params),
          'mapWebViewCallBack'
        )
      } else {
        _this.bridge.sendEvent(JSON.stringify(params), 'mapWebViewCallBack')
      }
    } else {
      callback({ error: '请传入发送事件的名称！！' })
    }
  },
  addEventListener: function (params, callback) {
    var tag = 'Unique id:' + new Date().getTime()
    var _this = this
    if (params.name) {
      _this.tagMaps[params.name] = tag
      window.mapWebViewCallBack[tag] = function (ret, err) {
        callback(ret, err)
        return
      }
      params['_tag'] = tag
      if (isIos()) {
        _this.bridge.callHandler(
          'addEventListener',
          JSON.stringify(params),
          'mapWebViewCallBack'
        )
      } else {
        _this.bridge.addEventListener(
          JSON.stringify(params),
          'mapWebViewCallBack'
        )
      }
    } else {
      callback({ error: '请传入监听事件的名称！！' })
    }
  }
}

export var jsBirdge = new JsBirdge()
