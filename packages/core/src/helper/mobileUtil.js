export var userAgent = navigator.userAgent.toLowerCase()
export var isAndroid = function () {
  return /android/.test(userAgent)
}
export var isIos = function () {
  return /iphone os/.test(userAgent)
}

var JsBirdge = function () {
  this.bridge = window['WebViewJavascriptBridge']
  this.tagMaps = {}
  window.mapWebViewCallBack = {}
}
JsBirdge.prototype = {
  initBridge: function (callback) {
    if (isIos()) {
      if (this.bridge) {
        callback({ isMobile: true })
        return
      } else {
        this.bridge = window['WVJBCallbacks']
        if (this.bridge) {
          callback({ isMobile: true })
          return
        } else {
          window.WVJBCallbacks = [
            function (bridge) {
              this.bridge = bridge
              callback({ isMobile: true })
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
      if (this.bridge) {
        callback({ isMobile: true })
        return
      } else {
        window.document.addEventListener(
          'WebViewJavascriptBridgeReady',
          function () {
            this.bridge = window['WebViewJavascriptBridge']
            if (this.bridge) {
              return callback({ isMobile: true })
            } else {
              return callback({ isMobile: false })
            }
          },
          false
        )
      }
    } else {
      return callback({ isMobile: false })
    }
  },
  sendEvent: function (params, callback) {
    if (typeof params === 'undefined') {
      params = {}
    }
    this.initBridge(function (res) {
      var tag = 'Unique id:' + new Date().getTime()
      if (params.name) {
        this.tagMaps[params.name] = tag
        window.mapWebViewCallBack[tag] = function (ret, err) {
          return Promise.resolve(ret, err)
        }
        params['_tag'] = tag
        if (res.isMobile) {
          if (isIos()) {
            this.bridge.callHandler(
              'sendEvent',
              JSON.stringify(params),
              'mapWebViewCallBack'
            )
          } else {
            this.bridge.sendEvent(JSON.stringify(params), 'mapWebViewCallBack')
          }
        }
      } else {
        callback({ error: '请传入发送事件的名称！！' })
      }
    })
  },
  addEventListener: function (params, callback) {
    var tag = 'Unique id:' + new Date().getTime()
    if (params.name) {
      this.tagMaps[params.name] = tag
      window.mapWebViewCallBack[tag] = function (ret, err) {
        callback(ret, err)
        return
      }
      params['_tag'] = tag
      if (res.isMobile) {
        if (isIos()) {
          this.bridge.callHandler(
            'addEventListener',
            JSON.stringify(params),
            'mapWebViewCallBack'
          )
        } else {
          this.bridge.addEventListener(
            JSON.stringify(params),
            'mapWebViewCallBack'
          )
        }
      }
    } else {
      callback({ error: '请传入监听事件的名称！！' })
    }
  }
}

export var jsBirdge = new JsBirdge()
