/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ !function() {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = function(exports, definition) {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ !function() {
/******/ 	__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ }();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ !function() {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ }();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: function() { return /* reexport */ datafluxRum; }
});

// NAMESPACE OBJECT: ../core/esm/index.js
var esm_namespaceObject = {};
__webpack_require__.r(esm_namespaceObject);
__webpack_require__.d(esm_namespaceObject, {
  X2v: function() { return ActionType; },
  ocs: function() { return BridgeCapability; },
  bP2: function() { return ConsoleApiName; },
  vA8: function() { return CustomerDataCompressionStatus; },
  Ln0: function() { return CustomerDataType; },
  gXe: function() { return DOM_EVENT; },
  WAb: function() { return DefaultPrivacyLevel; },
  aCz: function() { return enums_ErrorHandling; },
  gfb: function() { return errorTools_ErrorSource; },
  $ur: function() { return LifeCycle; },
  Rgl: function() { return LifeCycleEventType; },
  O7y: function() { return NonErrorPrefix; },
  MAX: function() { return ONE_HOUR; },
  iW2: function() { return ONE_MINUTE; },
  OYE: function() { return ONE_SECOND; },
  cPK: function() { return observable_Observable; },
  y58: function() { return PageExitReason; },
  V5S: function() { return RawReportType; },
  YwH: function() { return RequestType; },
  vtl: function() { return ResourceType; },
  bbP: function() { return enums_RumEventType; },
  AQQ: function() { return SESSION_TIME_OUT_DELAY; },
  WVP: function() { return enums_TraceType; },
  kk2: function() { return UUID; },
  uWe: function() { return ViewLoadingType; },
  xjZ: function() { return polyfills_WeakSet; },
  GwG: function() { return addDuration; },
  q2B: function() { return addEventListener_addEventListener; },
  lQ7: function() { return addEventListeners; },
  kpz: function() { return tools_assign; },
  Wwr: function() { return bridgeSupports; },
  umf: function() { return callMonitored; },
  d0M: function() { return canUseEventBridge; },
  yMr: function() { return catchUserErrors_catchUserErrors; },
  OgU: function() { return checkUser; },
  vGk: function() { return timer_clearInterval; },
  DJ6: function() { return timer_clearTimeout; },
  M8y: function() { return tools_clocksNow; },
  Oc9: function() { return clocksOrigin; },
  AsP: function() { return computeRawError; },
  Tec: function() { return computeStackTrace; },
  whX: function() { return concatBuffers; },
  O6V: function() { return boundedBuffer_createBoundedBuffer; },
  DMq: function() { return createContextManager; },
  qRW: function() { return createCustomerDataTrackerManager; },
  $s4: function() { return createEventRateLimiter; },
  uCJ: function() { return createHandlingStack; },
  NgY: function() { return createIdentityEncoder; },
  hLm: function() { return createPageExitObservable; },
  JLg: function() { return createTaskQueue; },
  qjj: function() { return createValueHistory; },
  jGy: function() { return cssEscape; },
  TP$: function() { return currentDrift; },
  x3b: function() { return dateNow; },
  Go6: function() { return deepClone; },
  lpk: function() { return deviceInfo; },
  KVX: function() { return discardNegativeDuration; },
  Vy8: function() { return display_display; },
  $g0: function() { return displayAlreadyInitializedError; },
  __1: function() { return tools_each; },
  vk4: function() { return tools_elapsed; },
  Y9B: function() { return tools_extend2Lev; },
  QR9: function() { return fetchAndApplyRemoteConfiguration; },
  pbD: function() { return filter; },
  I6j: function() { return find; },
  sVp: function() { return findByPath; },
  UkB: function() { return findLast; },
  Ri8: function() { return cookie_getCookie; },
  Y9c: function() { return getEventBridge; },
  MVd: function() { return getPathFromHash; },
  L2t: function() { return getPathName; },
  aGs: function() { return getQueryParamsFromUrl; },
  gs_: function() { return getRelativeTime; },
  eEm: function() { return getStatusGroup; },
  mKk: function() { return includes; },
  liq: function() { return initConsoleObservable; },
  iC7: function() { return initFetchObservable; },
  uIr: function() { return initReportObservable; },
  H7c: function() { return instrumentMethod_instrumentMethod; },
  cyL: function() { return tools_isArray; },
  nSH: function() { return isElementNode; },
  RIy: function() { return isEmptyObject; },
  Vdz: function() { return isHashAnAnchor; },
  wiA: function() { return isIntakeRequest; },
  SNg: function() { return tools_isNullUndefinedDefaultValue; },
  EtT: function() { return isNumber; },
  fpP: function() { return isPercentage; },
  AYU: function() { return isValidUrl; },
  gBh: function() { return limitModification; },
  puL: function() { return looksLikeRelativeTime; },
  mL_: function() { return makePublicApi; },
  LGi: function() { return mapValues; },
  dmy: function() { return monitor; },
  TEX: function() { return msToNs; },
  lQ1: function() { return tools_noop; },
  Rj5: function() { return objectHasValue; },
  ic6: function() { return tools_performDraw; },
  k4M: function() { return preferredNow; },
  PGs: function() { return processedMessageByDataMap; },
  $Sd: function() { return relativeNow; },
  FRh: function() { return relativeToClocks; },
  E3r: function() { return replaceNumberCharByPath; },
  LIG: function() { return round; },
  HkA: function() { return runOnReadyState; },
  ajW: function() { return sanitize; },
  x8A: function() { return sanitizeUser; },
  TVt: function() { return setCookie; },
  ybh: function() { return timer_setInterval; },
  wgQ: function() { return timer_setTimeout; },
  yGp: function() { return tools_shallowClone; },
  ZZb: function() { return startBatchWithReplica; },
  oxf: function() { return startSessionManager; },
  Cki: function() { return storeContextManager; },
  nFR: function() { return throttle; },
  nx2: function() { return tools_timeStampNow; },
  $rL: function() { return toArray; },
  ZjH: function() { return toServerDuration; },
  mj3: function() { return trackRuntimeError; },
  Ru: function() { return urlParse; },
  SzE: function() { return validateAndBuildConfiguration; },
  Twb: function() { return validatePostRequestRequireParamsConfiguration; },
  aoq: function() { return willSyntheticsInjectRum; },
  d5Q: function() { return withSnakeCaseKeys; }
});

;// CONCATENATED MODULE: ../core/esm/helper/display.js
var ConsoleApiName = {
  log: 'log',
  debug: 'debug',
  info: 'info',
  warn: 'warn',
  error: 'error'
};
var globalConsole = console;
var originalConsoleMethods = {};
Object.keys(ConsoleApiName).forEach(function (name) {
  originalConsoleMethods[name] = globalConsole[name];
});
var PREFIX = 'GUANCE Browser SDK:';
var display_display = {
  debug: originalConsoleMethods.debug.bind(globalConsole, PREFIX),
  log: originalConsoleMethods.log.bind(globalConsole, PREFIX),
  info: originalConsoleMethods.info.bind(globalConsole, PREFIX),
  warn: originalConsoleMethods.warn.bind(globalConsole, PREFIX),
  error: originalConsoleMethods.error.bind(globalConsole, PREFIX)
};
;// CONCATENATED MODULE: ../core/esm/helper/monitor.js

var onMonitorErrorCollected;
var debugMode = false;
function monitor_startMonitorErrorCollection(newOnMonitorErrorCollected) {
  onMonitorErrorCollected = newOnMonitorErrorCollected;
}
function setDebugMode(newDebugMode) {
  debugMode = newDebugMode;
}
function resetMonitor() {
  onMonitorErrorCollected = undefined;
  debugMode = false;
}
function monitor(fn) {
  return function () {
    return callMonitored(fn, this, arguments);
  };
}
function callMonitored(fn, context, args) {
  try {
    return fn.apply(context, args);
  } catch (e) {
    monitor_displayIfDebugEnabled(e);
    if (onMonitorErrorCollected) {
      try {
        onMonitorErrorCollected(e);
      } catch (e) {
        monitor_displayIfDebugEnabled(e);
      }
    }
  }
}
function monitor_displayIfDebugEnabled() {
  var args = [].slice.call(arguments);
  //   display.error.apply(null, ['[MONITOR]'].concat(args))
  if (debugMode) {
    display_display.error.apply(null, ['[MONITOR]'].concat(args));
  }
}
;// CONCATENATED MODULE: ../core/esm/helper/catchUserErrors.js

function catchUserErrors_catchUserErrors(fn, errorMsg) {
  return function () {
    var args = [].slice.call(arguments);
    try {
      return fn.apply(this, args);
    } catch (err) {
      display_display.error(errorMsg, err);
    }
  };
}
;// CONCATENATED MODULE: ../core/esm/init.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}



function makePublicApi(stub) {
  var publicApi = tools_assign({
    onReady: function onReady(callback) {
      callback();
    }
  }, stub);

  // Add an "hidden" property to set debug mode. We define it that way to hide it
  // as much as possible but of course it's not a real protection.
  Object.defineProperty(publicApi, '_setDebug', {
    get: function get() {
      return setDebugMode;
    },
    enumerable: false
  });
  return publicApi;
}
function defineGlobal(global, name, api) {
  var existingGlobalVariable = global[name];
  global[name] = api;
  if (existingGlobalVariable && existingGlobalVariable.q) {
    each(existingGlobalVariable.q, function (fn) {
      catchUserErrors(fn, 'onReady callback threw an error:')();
    });
  }
}
function getGlobalObject() {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === 'object') {
    return globalThis;
  }
  Object.defineProperty(Object.prototype, '_gc_temp_', {
    get: function get() {
      return this;
    },
    configurable: true
  });
  // @ts-ignore
  var globalObject = _gc_temp_;
  // @ts-ignore
  delete Object.prototype._gc_temp_;
  if (_typeof(globalObject) !== 'object') {
    // on safari _gc_temp_ is available on window but not globally
    // fallback on other browser globals check
    if ((typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object') {
      globalObject = self;
    } else if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
      globalObject = window;
    } else {
      globalObject = {};
    }
  }
  return globalObject;
}
;// CONCATENATED MODULE: ../core/esm/helper/getZoneJsOriginalValue.js

/**
 * Gets the original value for a DOM API that was potentially patched by Zone.js.
 *
 * Zone.js[1] is a library that patches a bunch of JS and DOM APIs. It usually stores the original
 * value of the patched functions/constructors/methods in a hidden property prefixed by
 * __zone_symbol__.
 *
 * In multiple occasions, we observed that Zone.js is the culprit of important issues leading to
 * browser resource exhaustion (memory leak, high CPU usage). This method is used as a workaround to
 * use the original DOM API instead of the one patched by Zone.js.
 *
 * [1]: https://github.com/angular/angular/tree/main/packages/zone.js
 */
function getZoneJsOriginalValue(target, name) {
  var browserWindow = getGlobalObject();
  var original;
  if (browserWindow.Zone && typeof browserWindow.Zone.__symbol__ === 'function') {
    original = target[browserWindow.Zone.__symbol__(name)];
  }
  if (!original) {
    original = target[name];
  }
  return original;
}
;// CONCATENATED MODULE: ../core/esm/helper/timer.js



function timer_setTimeout(callback, delay) {
  return getZoneJsOriginalValue(getGlobalObject(), 'setTimeout')(monitor(callback), delay);
}
function timer_clearTimeout(timeoutId) {
  getZoneJsOriginalValue(getGlobalObject(), 'clearTimeout')(timeoutId);
}
function timer_setInterval(callback, delay) {
  return getZoneJsOriginalValue(getGlobalObject(), 'setInterval')(monitor(callback), delay);
}
function timer_clearInterval(timeoutId) {
  getZoneJsOriginalValue(getGlobalObject(), 'clearInterval')(timeoutId);
}
;// CONCATENATED MODULE: ../core/esm/helper/tools.js
function tools_typeof(o) {
  "@babel/helpers - typeof";

  return tools_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, tools_typeof(o);
}


var ArrayProto = Array.prototype;
// var FuncProto = Function.prototype
var ObjProto = Object.prototype;
var slice = ArrayProto.slice;
var tools_toString = ObjProto.toString;
var tools_hasOwnProperty = ObjProto.hasOwnProperty;
var nativeForEach = ArrayProto.forEach;
var nativeIsArray = Array.isArray;
var breaker = false;
var tools_each = function each(obj, iterator, context) {
  if (obj === null) return false;
  if (nativeForEach && obj.forEach === nativeForEach) {
    obj.forEach(iterator, context);
  } else if (obj.length === +obj.length) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) {
        return false;
      }
    }
  } else {
    for (var key in obj) {
      if (tools_hasOwnProperty.call(obj, key)) {
        if (iterator.call(context, obj[key], key, obj) === breaker) {
          return false;
        }
      }
    }
  }
};
function tools_assign(target) {
  tools_each(slice.call(arguments, 1), function (source) {
    for (var prop in source) {
      if (Object.prototype.hasOwnProperty.call(source, prop)) {
        target[prop] = source[prop];
      }
    }
  });
  return target;
}
function tools_shallowClone(object) {
  return tools_assign({}, object);
}
var extend = function extend(obj) {
  tools_each(slice.call(arguments, 1), function (source) {
    for (var prop in source) {
      if (source[prop] !== void 0) {
        obj[prop] = source[prop];
      }
    }
  });
  return obj;
};
var tools_extend2Lev = function extend2Lev(obj) {
  tools_each(slice.call(arguments, 1), function (source) {
    for (var prop in source) {
      if (source[prop] !== void 0) {
        if (isObject(source[prop]) && isObject(obj[prop])) {
          extend(obj[prop], source[prop]);
        } else {
          obj[prop] = source[prop];
        }
      }
    }
  });
  return obj;
};
// export var coverExtend = function (obj) {
//   each(slice.call(arguments, 1), function (source) {
//     for (var prop in source) {
//       if (source[prop] !== void 0 && obj[prop] === void 0) {
//         obj[prop] = source[prop]
//       }
//     }
//   })
//   return obj
// }
var tools_isArray = nativeIsArray || function (obj) {
  return tools_toString.call(obj) === '[object Array]';
};
var isFunction = function isFunction(f) {
  if (!f) {
    return false;
  }
  try {
    return /^\s*\bfunction\b/.test(f);
  } catch (err) {
    return false;
  }
};
var isArguments = function isArguments(obj) {
  return !!(obj && tools_hasOwnProperty.call(obj, 'callee'));
};
var toArray = function toArray(iterable) {
  if (!iterable) return [];
  if (iterable.toArray) {
    return iterable.toArray();
  }
  if (tools_isArray(iterable)) {
    return slice.call(iterable);
  }
  if (isArguments(iterable)) {
    return slice.call(iterable);
  }
  return values(iterable);
};
var values = function values(obj) {
  var results = [];
  if (obj === null) {
    return results;
  }
  tools_each(obj, function (value) {
    results[results.length] = value;
  });
  return results;
};
var keys = function keys(obj) {
  var results = [];
  if (obj === null) {
    return results;
  }
  tools_each(obj, function (value, key) {
    results[results.length] = key;
  });
  return results;
};
// export var indexOf = function (arr, target) {
//   var indexOf = arr.indexOf
//   if (indexOf) {
//     return indexOf.call(arr, target)
//   } else {
//     for (var i = 0; i < arr.length; i++) {
//       if (target === arr[i]) {
//         return i
//       }
//     }
//     return -1
//   }
// }
// export var hasAttribute = function (ele, attr) {
//   if (ele.hasAttribute) {
//     return ele.hasAttribute(attr)
//   } else {
//     return !!(ele.attributes[attr] && ele.attributes[attr].specified)
//   }
// }
var filter = function filter(arr, fn, self) {
  if (arr.filter) {
    return arr.filter(fn);
  }
  var ret = [];
  for (var i = 0; i < arr.length; i++) {
    if (!tools_hasOwnProperty.call(arr, i)) {
      continue;
    }
    var val = arr[i];
    if (fn.call(self, val, i, arr)) {
      ret.push(val);
    }
  }
  return ret;
};
var tools_map = function map(arr, fn, self) {
  if (arr.map) {
    return arr.map(fn);
  }
  var ret = [];
  for (var i = 0; i < arr.length; i++) {
    if (!tools_hasOwnProperty.call(arr, i)) {
      continue;
    }
    var val = arr[i];
    ret.push(fn.call(self, val, i, arr));
  }
  return ret;
};
var some = function some(arr, fn, self) {
  if (arr.some) {
    return arr.some(fn);
  }
  var flag = false;
  for (var i = 0; i < arr.length; i++) {
    if (!tools_hasOwnProperty.call(arr, i)) {
      continue;
    }
    var val = arr[i];
    if (fn.call(self, val, i, arr)) {
      flag = true;
      break;
    }
  }
  return flag;
};
// export var every = function (arr, fn, self) {
//   if (arr.every) {
//     return arr.every(fn)
//   }
//   var flag = true
//   for (var i = 0; i < arr.length; i++) {
//     if (!hasOwnProperty.call(arr, i)) {
//       continue
//     }
//     var val = arr[i]
//     if (!fn.call(self, val, i, arr)) {
//       flag = false
//       break
//     }
//   }
//   return flag
// }
// export var matchList = function (list, value, useStartsWith) {
//   if (useStartsWith === undefined) {
//     useStartsWith = false
//   }
//   return some(list, function (item) {
//     try {
//       if (typeof item === 'function') {
//         return item(value)
//       } else if (item instanceof RegExp) {
//         return item.test(value)
//       } else if (typeof item === 'string') {
//         return useStartsWith ? startsWith(value, item) : item === value
//       }
//     } catch (e) {
//       display.error(e)
//     }
//     return false
//   })
// }
// https://github.com/jquery/jquery/blob/a684e6ba836f7c553968d7d026ed7941e1a612d8/src/selector/escapeSelector.js
var cssEscape = function cssEscape(str) {
  str = str + '';
  if (window.CSS && window.CSS.escape) {
    return window.CSS.escape(str);
  }

  // eslint-disable-next-line no-control-regex
  return str.replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (ch, asCodePoint) {
    if (asCodePoint) {
      // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
      if (ch === '\0') {
        return "\uFFFD";
      }
      // Control characters and (dependent upon position) numbers get escaped as code points
      return ch.slice(0, -1) + '\\' + ch.charCodeAt(ch.length - 1).toString(16) + ' ';
    }
    // Other potentially-special ASCII characters get backslash-escaped
    return '\\' + ch;
  });
};
// export var inherit = function (subclass, superclass) {
//   var F = function () {}
//   F.prototype = superclass.prototype
//   subclass.prototype = new F()
//   subclass.prototype.constructor = subclass
//   subclass.superclass = superclass.prototype
//   return subclass
// }
// export var tirm = function (str) {
//   return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
// }
var isObject = function isObject(obj) {
  if (obj === null) return false;
  return tools_toString.call(obj) === '[object Object]';
};
var isEmptyObject = function isEmptyObject(obj) {
  if (isObject(obj)) {
    for (var key in obj) {
      if (tools_hasOwnProperty.call(obj, key)) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
var objectEntries = function objectEntries(object) {
  var res = [];
  tools_each(object, function (value, key) {
    res.push([key, value]);
  });
  return res;
};
// export var isUndefined = function (obj) {
//   return obj === void 0
// }
var isString = function isString(obj) {
  return tools_toString.call(obj) === '[object String]';
};
var isDate = function isDate(obj) {
  return tools_toString.call(obj) === '[object Date]';
};
var isBoolean = function isBoolean(obj) {
  return tools_toString.call(obj) === '[object Boolean]';
};
var isNumber = function isNumber(obj) {
  return tools_toString.call(obj) === '[object Number]' && /[\d\.]+/.test(String(obj));
};
// export var isElement = function (obj) {
//   return !!(obj && obj.nodeType === 1)
// }
// export var isJSONString = function (str) {
//   try {
//     JSON.parse(str)
//   } catch (e) {
//     return false
//   }
//   return true
// }
// export var safeJSONParse = function (str) {
//   var val = null
//   try {
//     val = JSON.parse(str)
//   } catch (e) {
//     return false
//   }
//   return val
// }

var _encodeDates = function encodeDates(obj) {
  tools_each(obj, function (v, k) {
    if (isDate(v)) {
      obj[k] = formatDate(v);
    } else if (isObject(v)) {
      obj[k] = _encodeDates(v);
    }
  });
  return obj;
};
// export var mediaQueriesSupported = function () {
//   return (
//     typeof window.matchMedia !== 'undefined' ||
//     typeof window.msMatchMedia !== 'undefined'
//   )
// }
// export var getScreenOrientation = function () {
//   var screenOrientationAPI =
//     screen.msOrientation ||
//     screen.mozOrientation ||
//     (screen.orientation || {}).type
//   var screenOrientation = '未取到值'
//   if (screenOrientationAPI) {
//     screenOrientation =
//       screenOrientationAPI.indexOf('landscape') > -1 ? 'landscape' : 'portrait'
//   } else if (mediaQueriesSupported()) {
//     var matchMediaFunc = window.matchMedia || window.msMatchMedia
//     if (matchMediaFunc('(orientation: landscape)').matches) {
//       screenOrientation = 'landscape'
//     } else if (matchMediaFunc('(orientation: portrait)').matches) {
//       screenOrientation = 'portrait'
//     }
//   }
//   return screenOrientation
// }
// export var now =
//   Date.now ||
//   function () {
//     return new Date().getTime()
//   }

var throttle = function throttle(fn, wait, options) {
  var needLeadingExecution = options && options.leading !== undefined ? options.leading : true;
  var needTrailingExecution = options && options.trailing !== undefined ? options.trailing : true;
  var inWaitPeriod = false;
  var pendingExecutionWithParameters;
  var pendingTimeoutId;
  var context = this;
  return {
    throttled: function throttled() {
      if (inWaitPeriod) {
        pendingExecutionWithParameters = arguments;
        return;
      }
      if (needLeadingExecution) {
        fn.apply(context, arguments);
      } else {
        pendingExecutionWithParameters = arguments;
      }
      inWaitPeriod = true;
      pendingTimeoutId = timer_setTimeout(function () {
        if (needTrailingExecution && pendingExecutionWithParameters) {
          fn.apply(context, pendingExecutionWithParameters);
        }
        inWaitPeriod = false;
        pendingExecutionWithParameters = undefined;
      }, wait);
    },
    cancel: function cancel() {
      timer_clearTimeout(pendingTimeoutId);
      inWaitPeriod = false;
      pendingExecutionWithParameters = undefined;
    }
  };
};
// export var hashCode = function (str) {
//   if (typeof str !== 'string') {
//     return 0
//   }
//   var hash = 0
//   var char = null
//   if (str.length == 0) {
//     return hash
//   }
//   for (var i = 0; i < str.length; i++) {
//     char = str.charCodeAt(i)
//     hash = (hash << 5) - hash + char
//     hash = hash & hash
//   }
//   return hash
// }
var formatDate = function formatDate(d) {
  function pad(n) {
    return n < 10 ? '0' + n : n;
  }
  return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds()) + '.' + pad(d.getMilliseconds());
};
var _searchObjDate = function searchObjDate(o) {
  if (isObject(o)) {
    tools_each(o, function (a, b) {
      if (isObject(a)) {
        _searchObjDate(o[b]);
      } else {
        if (isDate(a)) {
          o[b] = formatDate(a);
        }
      }
    });
  }
};
// export var formatJsonString = function (obj) {
//   try {
//     return JSON.stringify(obj, null, '  ')
//   } catch (e) {
//     return JSON.stringify(obj)
//   }
// }
// export var formatString = function (str) {
//   if (str.length > MAX_STRING_LENGTH) {
//     sd.log('字符串长度超过限制，已经做截取--' + str)
//     return str.slice(0, MAX_STRING_LENGTH)
//   } else {
//     return str
//   }
// }

var _searchObjString = function searchObjString(o) {
  if (isObject(o)) {
    tools_each(o, function (a, b) {
      if (isObject(a)) {
        _searchObjString(o[b]);
      } else {
        if (isString(a)) {
          o[b] = formatString(a);
        }
      }
    });
  }
};
// export var unique = function (ar) {
//   var temp,
//     n = [],
//     o = {}
//   for (var i = 0; i < ar.length; i++) {
//     temp = ar[i]
//     if (!(temp in o)) {
//       o[temp] = true
//       n.push(temp)
//     }
//   }
//   return n
// }
// export var strip_empty_properties = function (p) {
//   var ret = {}
//   each(p, function (v, k) {
//     if (v != null) {
//       ret[k] = v
//     }
//   })
//   return ret
// }

var utf8Encode = function utf8Encode(string) {
  string = (string + '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  var utftext = '',
    start,
    end;
  var stringl = 0,
    n;
  start = end = 0;
  stringl = string.length;
  for (n = 0; n < stringl; n++) {
    var c1 = string.charCodeAt(n);
    var enc = null;
    if (c1 < 128) {
      end++;
    } else if (c1 > 127 && c1 < 2048) {
      enc = String.fromCharCode(c1 >> 6 | 192, c1 & 63 | 128);
    } else {
      enc = String.fromCharCode(c1 >> 12 | 224, c1 >> 6 & 63 | 128, c1 & 63 | 128);
    }
    if (enc !== null) {
      if (end > start) {
        utftext += string.substring(start, end);
      }
      utftext += enc;
      start = end = n + 1;
    }
  }
  if (end > start) {
    utftext += string.substring(start, string.length);
  }
  return utftext;
};
var base64Encode = function base64Encode(data) {
  if (typeof btoa === 'function') {
    return btoa(encodeURIComponent(data).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode('0x' + p1);
    }));
  }
  data = String(data);
  var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  var o1,
    o2,
    o3,
    h1,
    h2,
    h3,
    h4,
    bits,
    i = 0,
    ac = 0,
    enc = '',
    tmp_arr = [];
  if (!data) {
    return data;
  }
  data = utf8Encode(data);
  do {
    o1 = data.charCodeAt(i++);
    o2 = data.charCodeAt(i++);
    o3 = data.charCodeAt(i++);
    bits = o1 << 16 | o2 << 8 | o3;
    h1 = bits >> 18 & 0x3f;
    h2 = bits >> 12 & 0x3f;
    h3 = bits >> 6 & 0x3f;
    h4 = bits & 0x3f;
    tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
  } while (i < data.length);
  enc = tmp_arr.join('');
  switch (data.length % 3) {
    case 1:
      enc = enc.slice(0, -2) + '==';
      break;
    case 2:
      enc = enc.slice(0, -1) + '=';
      break;
  }
  return enc;
};
/**
 * UUID v4
 * from https://gist.github.com/jed/982883
 */
function UUID(placeholder) {
  return placeholder ?
  // eslint-disable-next-line  no-bitwise
  (parseInt(placeholder, 10) ^ Math.random() * 16 >> parseInt(placeholder, 10) / 4).toString(16) : "".concat(1e7, "-", 1e3, "-", 4e3, "-", 8e3, "-", 1e11).replace(/[018]/g, UUID);
}

// 替换url包含数字的路由
function replaceNumberCharByPath(path) {
  var pathGroup = '';
  if (path) {
    pathGroup = path.replace(/\/([^\/]*)\d([^\/]*)/g, '/?').replace(/\/$/g, '');
  }
  return pathGroup || '/';
}
var urlParse = function urlParse(para) {
  var URLParser = function URLParser(a) {
    this._fields = {
      Username: 4,
      Password: 5,
      Port: 7,
      Protocol: 2,
      Host: 6,
      Path: 8,
      URL: 0,
      QueryString: 9,
      Fragment: 10
    };
    this._values = {};
    this._regex = null;
    this._regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/;
    if (typeof a != 'undefined') {
      this._parse(a);
    }
  };
  URLParser.prototype.setUrl = function (a) {
    this._parse(a);
  };
  URLParser.prototype._initValues = function () {
    for (var a in this._fields) {
      this._values[a] = '';
    }
  };
  URLParser.prototype.addQueryString = function (queryObj) {
    if (tools_typeof(queryObj) !== 'object') {
      return false;
    }
    var query = this._values.QueryString || '';
    for (var i in queryObj) {
      if (new RegExp(i + '[^&]+').test(query)) {
        query = query.replace(new RegExp(i + '[^&]+'), i + '=' + queryObj[i]);
      } else {
        if (query.slice(-1) === '&') {
          query = query + i + '=' + queryObj[i];
        } else {
          if (query === '') {
            query = i + '=' + queryObj[i];
          } else {
            query = query + '&' + i + '=' + queryObj[i];
          }
        }
      }
    }
    this._values.QueryString = query;
  };
  URLParser.prototype.getParse = function () {
    return this._values;
  };
  URLParser.prototype.getUrl = function () {
    var url = '';
    url += this._values.Origin;
    // url += this._values.Port ? ':' + this._values.Port : ''
    url += this._values.Path;
    url += this._values.QueryString ? '?' + this._values.QueryString : '';
    return url;
  };
  URLParser.prototype._parse = function (a) {
    this._initValues();
    var b = this._regex.exec(a);
    if (!b) {
      throw 'DPURLParser::_parse -> Invalid URL';
    }
    for (var c in this._fields) {
      if (typeof b[this._fields[c]] != 'undefined') {
        this._values[c] = b[this._fields[c]];
      }
    }
    this._values['Path'] = this._values['Path'] || '/';
    this._values['Hostname'] = this._values['Host'].replace(/:\d+$/, '');
    this._values['Origin'] = this._values['Protocol'] + '://' + this._values['Hostname'] + (this._values.Port ? ':' + this._values.Port : '');
    // this._values['Hostname'] = this._values['Host'].replace(/:\d+$/, '')
    // this._values['Origin'] =
    //   this._values['Protocol'] + '://' + this._values['Hostname']
  };
  return new URLParser(para);
};
// export function elementMatches(element, selector) {
//   if (element.matches) {
//     return element.matches(selector)
//   }
//   // IE11 support
//   if (element.msMatchesSelector) {
//     return element.msMatchesSelector(selector)
//   }
//   return false
// }

var tools_localStorage = {
  get: function get(name) {
    return window.localStorage.getItem(name);
  },
  parse: function parse(name) {
    var storedValue;
    try {
      storedValue = JSON.parse(tools_localStorage.get(name)) || null;
    } catch (err) {
      sd.log(err);
    }
    return storedValue;
  },
  set: function set(name, value) {
    window.localStorage.setItem(name, value);
  },
  remove: function remove(name) {
    window.localStorage.removeItem(name);
  },
  isSupport: function isSupport() {
    var supported = true;
    try {
      var key = '__sensorsdatasupport__';
      var val = 'testIsSupportStorage';
      tools_localStorage.set(key, val);
      if (tools_localStorage.get(key) !== val) {
        supported = false;
      }
      tools_localStorage.remove(key);
    } catch (err) {
      supported = false;
    }
    return supported;
  }
};
var sessionStorage = {
  isSupport: function isSupport() {
    var supported = true;
    var key = '__sensorsdatasupport__';
    var val = 'testIsSupportStorage';
    try {
      if (sessionStorage && sessionStorage.setItem) {
        sessionStorage.setItem(key, val);
        sessionStorage.removeItem(key, val);
        supported = true;
      } else {
        supported = false;
      }
    } catch (e) {
      supported = false;
    }
    return supported;
  }
};
// export var isSupportCors = function () {
//   if (typeof window.XMLHttpRequest === 'undefined') {
//     return false
//   }
//   if ('withCredentials' in new XMLHttpRequest()) {
//     return true
//   } else if (typeof XDomainRequest !== 'undefined') {
//     return true
//   } else {
//     return false
//   }
// }
// export var xhr = function (cors) {
//   if (cors) {
//     if (
//       typeof window.XMLHttpRequest !== 'undefined' &&
//       'withCredentials' in new XMLHttpRequest()
//     ) {
//       return new XMLHttpRequest()
//     } else if (typeof XDomainRequest !== 'undefined') {
//       return new XDomainRequest()
//     } else {
//       return null
//     }
//   } else {
//     if (typeof window.XMLHttpRequest !== 'undefined') {
//       return new XMLHttpRequest()
//     }
//     if (window.ActiveXObject) {
//       try {
//         return new ActiveXObject('Msxml2.XMLHTTP')
//       } catch (d) {
//         try {
//           return new ActiveXObject('Microsoft.XMLHTTP')
//         } catch (d) {
//           console.log(d)
//         }
//       }
//     }
//   }
// }
// export var ajax = function (para) {
//   para.timeout = para.timeout || 20000

//   para.credentials =
//     typeof para.credentials === 'undefined' ? true : para.credentials

//   function getJSON(data) {
//     if (!data) {
//       return ''
//     }
//     try {
//       return JSON.parse(data)
//     } catch (e) {
//       return {}
//     }
//   }

//   var g = xhr(para.cors)

//   if (!g) {
//     return false
//   }

//   if (!para.type) {
//     para.type = para.data ? 'POST' : 'GET'
//   }
//   para = extend(
//     {
//       success: function () {},
//       error: function () {}
//     },
//     para
//   )

//   try {
//     if (typeof g === 'object' && 'timeout' in g) {
//       g.timeout = para.timeout
//     } else {
//       setTimeout(function () {
//         g.abort()
//       }, para.timeout + 500)
//     }
//   } catch (e) {
//     try {
//       setTimeout(function () {
//         g.abort()
//       }, para.timeout + 500)
//     } catch (e2) {}
//   }

//   g.onreadystatechange = function () {
//     try {
//       if (g.readyState == 4) {
//         if ((g.status >= 200 && g.status < 300) || g.status == 304) {
//           para.success(getJSON(g.responseText))
//         } else {
//           para.error(getJSON(g.responseText), g.status)
//         }
//         g.onreadystatechange = null
//         g.onload = null
//       }
//     } catch (e) {
//       g.onreadystatechange = null
//       g.onload = null
//     }
//   }

//   g.open(para.type, para.url, true)

//   try {
//     if (para.credentials) {
//       g.withCredentials = true
//     }
//     if (isObject(para.header)) {
//       for (var i in para.header) {
//         g.setRequestHeader(i, para.header[i])
//       }
//     }

//     if (para.data) {
//       if (!para.cors) {
//         g.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
//       }
//       if (para.contentType === 'application/json') {
//         g.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
//       } else {
//         g.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
//       }
//     }
//   } catch (e) {}

//   g.send(para.data || null)
// }
// export var loadScript = function (para) {
//   para = extend(
//     {
//       success: function () {},
//       error: function () {},
//       appendCall: function (g) {
//         document.getElementsByTagName('head')[0].appendChild(g)
//       }
//     },
//     para
//   )

//   var g = null
//   if (para.type === 'css') {
//     g = document.createElement('link')
//     g.rel = 'stylesheet'
//     g.href = para.url
//   }
//   if (para.type === 'js') {
//     g = document.createElement('script')
//     g.async = 'async'
//     g.setAttribute('charset', 'UTF-8')
//     g.src = para.url
//     g.type = 'text/javascript'
//   }
//   g.onload = g.onreadystatechange = function () {
//     if (
//       !this.readyState ||
//       this.readyState === 'loaded' ||
//       this.readyState === 'complete'
//     ) {
//       para.success()
//       g.onload = g.onreadystatechange = null
//     }
//   }
//   g.onerror = function () {
//     para.error()
//     g.onerror = null
//   }
//   para.appendCall(g)
// }
// export var getHostname = function (url, defaultValue) {
//   if (!defaultValue || typeof defaultValue !== 'string') {
//     defaultValue = 'hostname解析异常'
//   }
//   var hostname = null
//   try {
//     hostname = URL(url).hostname
//   } catch (e) {}
//   return hostname || defaultValue
// }
var getQueryParamsFromUrl = function getQueryParamsFromUrl(url) {
  var result = {};
  var arr = url.split('?');
  var queryString = arr[1] || '';
  if (queryString) {
    result = getURLSearchParams('?' + queryString);
  }
  return result;
};
var getURLSearchParams = function getURLSearchParams(queryString) {
  queryString = queryString || '';
  var decodeParam = function decodeParam(str) {
    return decodeURIComponent(str);
  };
  var args = {};
  var query = queryString.substring(1);
  var pairs = query.split('&');
  for (var i = 0; i < pairs.length; i++) {
    var pos = pairs[i].indexOf('=');
    if (pos === -1) continue;
    var name = pairs[i].substring(0, pos);
    var value = pairs[i].substring(pos + 1);
    name = decodeParam(name);
    value = decodeParam(value);
    args[name] = value;
  }
  return args;
};
function createCircularReferenceChecker() {
  if (typeof WeakSet !== 'undefined') {
    var set = new WeakSet();
    return {
      hasAlreadyBeenSeen: function hasAlreadyBeenSeen(value) {
        var has = set.has(value);
        if (!has) {
          set.add(value);
        }
        return has;
      }
    };
  }
  var array = [];
  return {
    hasAlreadyBeenSeen: function hasAlreadyBeenSeen(value) {
      var has = array.indexOf(value) >= 0;
      if (!has) {
        array.push(value);
      }
      return has;
    }
  };
}
/**
 * Similar to `typeof`, but distinguish plain objects from `null` and arrays
 */
function getType(value) {
  if (value === null) {
    return 'null';
  }
  if (Array.isArray(value)) {
    return 'array';
  }
  return tools_typeof(value);
}
/**
 * Iterate over source and affect its sub values into destination, recursively.
 * If the source and destination can't be merged, return source.
 */
function mergeInto(destination, source, circularReferenceChecker) {
  // ignore the source if it is undefined
  if (typeof circularReferenceChecker === 'undefined') {
    circularReferenceChecker = createCircularReferenceChecker();
  }
  if (source === undefined) {
    return destination;
  }
  if (tools_typeof(source) !== 'object' || source === null) {
    // primitive values - just return source
    return source;
  } else if (source instanceof Date) {
    return new Date(source.getTime());
  } else if (source instanceof RegExp) {
    var flags = source.flags ||
    // old browsers compatibility
    [source.global ? 'g' : '', source.ignoreCase ? 'i' : '', source.multiline ? 'm' : '', source.sticky ? 'y' : '', source.unicode ? 'u' : ''].join('');
    return new RegExp(source.source, flags);
  }
  if (circularReferenceChecker.hasAlreadyBeenSeen(source)) {
    // remove circular references
    return undefined;
  } else if (Array.isArray(source)) {
    var merged = Array.isArray(destination) ? destination : [];
    for (var i = 0; i < source.length; ++i) {
      merged[i] = mergeInto(merged[i], source[i], circularReferenceChecker);
    }
    return merged;
  }
  var merged = getType(destination) === 'object' ? destination : {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      merged[key] = mergeInto(merged[key], source[key], circularReferenceChecker);
    }
  }
  return merged;
}

/**
 * A simplistic implementation of a deep clone algorithm.
 * Caveats:
 * - It doesn't maintain prototype chains - don't use with instances of custom classes.
 * - It doesn't handle Map and Set
 */
function deepClone(value) {
  return mergeInto(undefined, value);
}

// export var getCurrentDomain = function (url) {
//   var cookieTopLevelDomain = getCookieTopLevelDomain()
//   if (url === '') {
//     return 'url解析失败'
//   } else if (cookieTopLevelDomain === '') {
//     return 'url解析失败'
//   } else {
//     return cookieTopLevelDomain
//   }
// }
// export var getCookieTopLevelDomain = function (hostname) {
//   hostname = hostname || window.location.hostname
//   var splitResult = hostname.split('.')
//   if (
//     isArray(splitResult) &&
//     splitResult.length >= 2 &&
//     !/^(\d+\.)+\d+$/.test(hostname)
//   ) {
//     var domainStr = '.' + splitResult.splice(splitResult.length - 1, 1)
//     while (splitResult.length > 0) {
//       domainStr =
//         '.' + splitResult.splice(splitResult.length - 1, 1) + domainStr
//       document.cookie = 'domain_test=true; path=/; domain=' + domainStr
//       if (document.cookie.indexOf('domain_test=true') !== -1) {
//         var now = new Date()
//         now.setTime(now.getTime() - 1000)
//         document.cookie =
//           'domain_test=true; expires=' +
//           now.toGMTString() +
//           '; path=/; domain=' +
//           domainStr
//         return domainStr
//       }
//     }
//   }
//   return ''
// }
// export var strToUnicode = function (str) {
//   if (typeof str !== 'string') {
//     return str
//   }
//   var nstr = ''
//   for (var i = 0; i < str.length; i++) {
//     nstr += '\\' + str.charCodeAt(i).toString(16)
//   }
//   return nstr
// }
// export var autoExeQueue = function () {
//   var queue = {
//     items: [],
//     enqueue: function (val) {
//       this.items.push(val)
//       this.start()
//     },
//     dequeue: function () {
//       return this.items.shift()
//     },
//     getCurrentItem: function () {
//       return this.items[0]
//     },
//     isRun: false,
//     start: function () {
//       if (this.items.length > 0 && !this.isRun) {
//         this.isRun = true
//         this.getCurrentItem().start()
//       }
//     },
//     close: function () {
//       this.dequeue()
//       this.isRun = false
//       this.start()
//     }
//   }
//   return queue
// }
// export var strip_sa_properties = function (p) {
//   if (!isObject(p)) {
//     return p
//   }
//   each(p, function (v, k) {
//     if (isArray(v)) {
//       var temp = []
//       each(v, function (arrv) {
//         if (isString(arrv)) {
//           temp.push(arrv)
//         } else {
//           console.log(
//             '您的数据-',
//             k,
//             v,
//             '的数组里的值必须是字符串,已经将其删除'
//           )
//         }
//       })
//       if (temp.length !== 0) {
//         p[k] = temp
//       } else {
//         delete p[k]
//         console.log('已经删除空的数组')
//       }
//     }
//     if (
//       !(
//         isString(v) ||
//         isNumber(v) ||
//         isDate(v) ||
//         isBoolean(v) ||
//         isArray(v) ||
//         isFunction(v) ||
//         k === '$option'
//       )
//     ) {
//       console.log('您的数据-', k, v, '-格式不满足要求，我们已经将其删除')
//       delete p[k]
//     }
//   })
//   return p
// }

// export var searchConfigData = function (data) {
//   if (typeof data === 'object' && data.$option) {
//     var data_config = data.$option
//     delete data.$option
//     return data_config
//   } else {
//     return {}
//   }
// }
// 从字符串 src 中查找 k+sp 和  e 之间的字符串，如果 k==e 且 k 只有一个，或者 e 不存在，从 k+sp 截取到字符串结束
// abcd=1&b=1&c=3;
// abdc=1;b=1;a=3;
// export var stringSplice = function (src, k, e, sp) {
//   if (src === '') {
//     return ''
//   }
//   sp = sp === '' ? '=' : sp
//   k += sp
//   var ps = src.indexOf(k)
//   if (ps < 0) {
//     return ''
//   }
//   ps += k.length
//   var pe = pe < ps ? src.length : src.indexOf(e, ps)
//   return src.substring(ps, pe)
// }
function getStatusGroup(status) {
  if (!status) return status === 0 ? undefined : status;
  return String(status).substr(0, 1) + String(status).substr(1).replace(/\d*/g, 'x');
}
// export var getReferrer = function () {
//   var ref = document.referrer.toLowerCase()
//   var re = /^[^\?&#]*.swf([\?#])?/
//   // 如果页面 Referer 为空，从 URL 中获取
//   if (ref === '' || ref.match(re)) {
//     ref = stringSplice(window.location.href, 'ref', '&', '')
//     if (ref !== '') {
//       return encodeURIComponent(ref)
//     }
//   }
//   return encodeURIComponent(ref)
// }
// export var typeDecide = function (o, type) {
//   return toString.call(o) === '[object ' + type + ']'
// }

function tools_noop() {}
var ONE_SECOND = 1000;
var ONE_MINUTE = 60 * ONE_SECOND;
var ONE_HOUR = 60 * ONE_MINUTE;
var ONE_DAY = 24 * ONE_HOUR;
var ONE_YEAR = 365 * ONE_DAY;

/**
 * Return true if the draw is successful
 * @param threshold between 0 and 100
 */
function tools_performDraw(threshold) {
  return threshold !== 0 && Math.random() * 100 <= threshold;
}
function round(num, decimals) {
  return +num.toFixed(decimals);
}
function msToNs(duration) {
  if (typeof duration !== 'number') {
    return duration;
  }
  return round(duration * 1e6, 0);
}
function mapValues(object, fn) {
  var newObject = {};
  tools_each(object, function (value, key) {
    newObject[key] = fn(value);
  });
  return newObject;
}
function toServerDuration(duration) {
  if (!isNumber(duration)) {
    return duration;
  }
  return round(duration * 1e6, 0);
}
function getRelativeTime(timestamp) {
  return timestamp - getNavigationStart();
}
function preferredNow() {
  return relativeNow();
}
function getTimestamp(relativeTime) {
  return Math.round(getNavigationStart() + relativeTime);
}
function relativeNow() {
  return performance.now();
}
function tools_clocksNow() {
  return {
    relative: relativeNow(),
    timeStamp: tools_timeStampNow()
  };
}
function tools_timeStampNow() {
  return dateNow();
}
function looksLikeRelativeTime(time) {
  return time < ONE_YEAR;
}
function dateNow() {
  // Do not use `Date.now` because sometimes websites are wrongly "polyfilling" it. For example, we
  // had some users using a very old version of `datejs`, which patched `Date.now` to return a Date
  // instance instead of a timestamp[1]. Those users are unlikely to fix this, so let's handle this
  // case ourselves.
  // [1]: https://github.com/datejs/Datejs/blob/97f5c7c58c5bc5accdab8aa7602b6ac56462d778/src/core-debug.js#L14-L16
  return new Date().getTime();
}
function tools_elapsed(start, end) {
  return end - start;
}
function clocksOrigin() {
  return {
    relative: 0,
    timeStamp: getNavigationStart()
  };
}
// export function preferredClock(clocks) {
//   return clocks.relative
// }
// export function preferredTimeStamp(clocks) {
//   return getTimestamp(clocks.relative)
// }
function relativeToClocks(relative) {
  return {
    relative: relative,
    timeStamp: getCorrectedTimeStamp(relative)
  };
}
function currentDrift() {
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  return Math.round(dateNow() - (getNavigationStart() + performance.now()));
}
function addDuration(a, b) {
  return a + b;
}
function getCorrectedTimeStamp(relativeTime) {
  var correctedOrigin = dateNow() - performance.now();
  // apply correction only for positive drift
  if (correctedOrigin > getNavigationStart()) {
    return Math.round(correctedOrigin + relativeTime);
  }
  return getTimestamp(relativeTime);
}
/**
 * Navigation start slightly change on some rare cases
 */
var navigationStart;
function getNavigationStart() {
  if (navigationStart === undefined) {
    navigationStart = performance.timing.navigationStart;
  }
  return navigationStart;
}
var COMMA_SEPARATED_KEY_VALUE = /([\w-]+)\s*=\s*([^;]+)/g;
function findCommaSeparatedValue(rawString, name) {
  COMMA_SEPARATED_KEY_VALUE.lastIndex = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    var match = COMMA_SEPARATED_KEY_VALUE.exec(rawString);
    if (match) {
      if (match[1] === name) {
        return match[2];
      }
    } else {
      break;
    }
  }
}

// export function findCommaSeparatedValues(rawString) {
//   var result = new Map()
//   COMMA_SEPARATED_KEY_VALUE.lastIndex = 0
//   // eslint-disable-next-line no-constant-condition
//   while (true) {
//     var match = COMMA_SEPARATED_KEY_VALUE.exec(rawString)
//     if (match) {
//       result.set(match[1], match[2])
//     } else {
//       break
//     }
//   }
//   return result
// }
function findByPath(source, path) {
  var pathArr = path.split('.');
  while (pathArr.length) {
    var key = pathArr.shift();
    if (source && isObject(source) && key in source && tools_hasOwnProperty.call(source, key)) {
      source = source[key];
    } else {
      return undefined;
    }
  }
  return source;
}
function safeTruncate(candidate, length) {
  var lastChar = candidate.charCodeAt(length - 1);
  // check if it is the high part of a surrogate pair
  if (lastChar >= 0xd800 && lastChar <= 0xdbff) {
    return candidate.slice(0, length + 1);
  }
  return candidate.slice(0, length);
}
function tools_isMatchOption(item) {
  var itemType = getType(item);
  return itemType === 'string' || itemType === 'function' || item instanceof RegExp;
}
function includes(candidate, search) {
  // tslint:disable-next-line: no-unsafe-any
  return candidate.indexOf(search) !== -1;
}
function find(array, predicate) {
  for (var i = 0; i < array.length; i += 1) {
    var item = array[i];
    if (predicate(item, i, array)) {
      return item;
    }
  }
  return undefined;
}
function arrayFrom(arrayLike) {
  if (Array.from) {
    return Array.from(arrayLike);
  }
  var array = [];
  if (arrayLike instanceof Set) {
    arrayLike.forEach(function (item) {
      array.push(item);
    });
  } else {
    for (var i = 0; i < arrayLike.length; i++) {
      array.push(arrayLike[i]);
    }
  }
  return array;
}
function findLast(array, predicate) {
  for (var i = array.length - 1; i >= 0; i -= 1) {
    var item = array[i];
    if (predicate(item, i, array)) {
      return item;
    }
  }
  return undefined;
}
function isPercentage(value) {
  return isNumber(value) && value >= 0 && value <= 100;
}
function getLocationOrigin() {
  return tools_getLinkElementOrigin(window.location);
}
var Browser = {
  IE: 0,
  CHROMIUM: 1,
  SAFARI: 2,
  OTHER: 3
};
function isIE() {
  return detectBrowserCached() === Browser.IE;
}
function isChromium() {
  return detectBrowserCached() === Browser.CHROMIUM;
}
function isSafari() {
  return detectBrowserCached() === Browser.SAFARI;
}
var browserCache;
function detectBrowserCached() {
  return tools_isNullUndefinedDefaultValue(browserCache, browserCache = detectBrowser());
}
function detectBrowser(browserWindow) {
  var _browserWindow$naviga;
  if (typeof browserWindow === 'undefined') {
    browserWindow = window;
  }
  var userAgent = browserWindow.navigator.userAgent;
  if (browserWindow.chrome || /HeadlessChrome/.test(userAgent)) {
    return Browser.CHROMIUM;
  }
  if (
  // navigator.vendor is deprecated, but it is the most resilient way we found to detect
  // "Apple maintained browsers" (AKA Safari). If one day it gets removed, we still have the
  // useragent test as a semi-working fallback.
  ((_browserWindow$naviga = browserWindow.navigator.vendor) === null || _browserWindow$naviga === void 0 ? void 0 : _browserWindow$naviga.indexOf('Apple')) === 0 || /safari/i.test(userAgent) && !/chrome|android/i.test(userAgent)) {
    return Browser.SAFARI;
  }
  if (browserWindow.document.documentMode) {
    return Browser.IE;
  }
  return Browser.OTHER;
}

/**
 * IE fallback
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/origin
 */
function tools_getLinkElementOrigin(element) {
  if (element.origin && element.origin !== 'null') {
    return element.origin;
  }
  var sanitizedHost = element.host.replace(/(:80|:443)$/, '');
  return element.protocol + '//' + sanitizedHost;
}
function withSnakeCaseKeys(candidate) {
  var result = {};
  tools_each(candidate, function (value, key) {
    result[toSnakeCase(key)] = deepSnakeCase(value);
  });
  return result;
}
function deepSnakeCase(candidate) {
  if (tools_isArray(candidate)) {
    return tools_map(candidate, function (value) {
      return deepSnakeCase(value);
    });
  }
  if (tools_typeof(candidate) === 'object' && candidate !== null) {
    return withSnakeCaseKeys(candidate);
  }
  return candidate;
}
function toSnakeCase(word) {
  return word.replace(/[A-Z]/g, function (uppercaseLetter, index) {
    return (index !== 0 ? '_' : '') + uppercaseLetter.toLowerCase();
  }).replace(/-/g, '_');
}
function tools_isNullUndefinedDefaultValue(data, defaultValue) {
  if (data !== null && data !== void 0) {
    return data;
  } else {
    return defaultValue;
  }
}
function objectHasValue(object, value) {
  return some(keys(object), function (key) {
    return object[key] === value;
  });
}
function startsWith(candidate, search) {
  return candidate.slice(0, search.length) === search;
}
function endsWith(candidate, search) {
  return candidate.slice(-search.length) === search;
}
// export function removeDuplicates(array) {
//   var set = new Set()
//   array.forEach(function (item) {
//     set.add(item)
//   })
//   return arrayFrom(set)
// }

function removeItem(array, item) {
  var index = array.indexOf(item);
  if (index >= 0) {
    array.splice(index, 1);
  }
}
// export function tryToClone(response) {
//   try {
//     return response.clone()
//   } catch (e) {
//     // clone can throw if the response has already been used by another instrumentation or is disturbed
//     return
//   }
// }
function isHashAnAnchor(hash) {
  var correspondingId = hash.substr(1);
  if (!correspondingId) return false;
  return !!document.getElementById(correspondingId);
}
function getPathFromHash(hash) {
  var index = hash.indexOf('?');
  return index < 0 ? hash : hash.slice(0, index);
}
function discardNegativeDuration(duration) {
  return isNumber(duration) && duration < 0 ? undefined : duration;
}
;// CONCATENATED MODULE: ../core/esm/helper/boundedBuffer.js

var BUFFER_LIMIT = 500;
function boundedBuffer_createBoundedBuffer() {
  var buffer = [];
  var add = function add(callback) {
    var length = buffer.push(callback);
    if (length > BUFFER_LIMIT) {
      buffer.splice(0, 1);
    }
  };
  var remove = function remove(callback) {
    removeItem(buffer, callback);
  };
  var drain = function drain(arg) {
    buffer.forEach(function (callback) {
      callback(arg);
    });
    buffer.length = 0;
  };
  return {
    add: add,
    remove: add,
    drain: drain
  };
}
;// CONCATENATED MODULE: ../core/esm/helper/valueHistory.js


var END_OF_TIMES = Infinity;
var CLEAR_OLD_VALUES_INTERVAL = ONE_MINUTE;
var cleanupHistoriesInterval = null;
var cleanupTasks = new Set();
function cleanupHistories() {
  cleanupTasks.forEach(function (task) {
    return task();
  });
}
/**
 *
 * @param {expireDelay,maxEntries } params
 * @returns
 */
function createValueHistory(params) {
  var expireDelay = params.expireDelay;
  var maxEntries = params.maxEntries;
  var entries = [];
  if (cleanupHistoriesInterval) {
    cleanupHistoriesInterval = timer_setInterval(function () {
      return clearExpiredValues();
    }, CLEAR_OLD_VALUES_INTERVAL);
  }
  function clearExpiredValues() {
    var oldTimeThreshold = relativeNow() - expireDelay;
    while (entries.length > 0 && entries[entries.length - 1].endTime < oldTimeThreshold) {
      entries.pop();
    }
  }
  cleanupTasks.add(clearExpiredValues);
  function add(value, startTime) {
    var entry = {
      value: value,
      startTime: startTime,
      endTime: END_OF_TIMES,
      remove: function remove() {
        removeItem(entries, entry);
      },
      close: function close(endTime) {
        entry.endTime = endTime;
      }
    };
    if (maxEntries && entries.length >= maxEntries) {
      entries.pop();
    }
    entries.unshift(entry);
    return entry;
  }
  function find(startTime, options) {
    if (typeof startTime === 'undefined') {
      startTime = END_OF_TIMES;
    }
    if (typeof options === 'undefined') {
      options = {
        returnInactive: false
      };
    }
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
      var entry = entries_1[_i];
      if (entry.startTime <= startTime) {
        if (options.returnInactive || startTime <= entry.endTime) {
          return entry.value;
        }
        break;
      }
    }
  }
  function closeActive(endTime) {
    var latestEntry = entries[0];
    if (latestEntry && latestEntry.endTime === END_OF_TIMES) {
      latestEntry.close(endTime);
    }
  }
  function findAll(startTime, duration) {
    if (startTime === undefined) {
      startTime = END_OF_TIMES;
    }
    if (duration === undefined) {
      duration = 0;
    }
    var endTime = addDuration(startTime, duration);
    return entries.filter(function (entry) {
      return entry.startTime <= endTime && startTime <= entry.endTime;
    }).map(function (entry) {
      return entry.value;
    });
  }

  /**
   * Remove all entries from this collection.
   */
  function reset() {
    entries = [];
  }

  /**
   * Stop internal garbage collection of past entries.
   */
  function stop() {
    cleanupTasks["delete"](clearExpiredValues);
    if (cleanupTasks.size === 0 && cleanupHistoriesInterval) {
      timer_clearInterval(cleanupHistoriesInterval);
      cleanupHistoriesInterval = null;
    }
  }
  return {
    add: add,
    find: find,
    closeActive: closeActive,
    findAll: findAll,
    reset: reset,
    stop: stop
  };
}
;// CONCATENATED MODULE: ../core/esm/helper/deviceInfo.js


var VariableLibrary = {
  navigator: typeof window !== 'undefined' && typeof window.navigator != 'undefined' ? window.navigator : {},
  // 信息map
  infoMap: {
    engine: ['WebKit', 'Trident', 'Gecko', 'Presto'],
    browser: ['Safari', 'Chrome', 'Edge', 'IE', 'IE 11', 'IE 10', 'IE 9', 'IE 8', 'IE 7', 'Firefox', 'Firefox Focus', 'Chromium', 'Opera', 'Vivaldi', 'Yandex', 'Arora', 'Lunascape', 'QupZilla', 'Coc Coc', 'Kindle', 'Iceweasel', 'Konqueror', 'Iceape', 'SeaMonkey', 'Epiphany', '360', '360SE', '360EE', 'UC', 'QQBrowser', 'QQ', 'Baidu', 'Maxthon', 'Sogou', 'LBBROWSER', '2345Explorer', 'TheWorld', 'XiaoMi', 'Quark', 'Qiyu', 'Wechat',, 'WechatWork', 'Taobao', 'Alipay', 'Weibo', 'Douban', 'Suning', 'iQiYi'],
    os: ['Windows', 'Linux', 'Mac OS', 'Android', 'Ubuntu', 'FreeBSD', 'Debian', 'iOS', 'Windows Phone', 'BlackBerry', 'MeeGo', 'Symbian', 'Chrome OS', 'WebOS'],
    device: ['Mobile', 'Tablet', 'iPad']
  }
};
// 方法库
var MethodLibrary = {
  // 获取匹配库
  getMatchMap: monitor(function (u) {
    return {
      // 内核
      Trident: u.indexOf('Trident') > -1 || u.indexOf('NET CLR') > -1,
      Presto: u.indexOf('Presto') > -1,
      WebKit: u.indexOf('AppleWebKit') > -1,
      Gecko: u.indexOf('Gecko/') > -1,
      // 浏览器
      Safari: u.indexOf('Safari') > -1,
      Chrome: u.indexOf('Chrome') > -1 || u.indexOf('CriOS') > -1,
      IE: u.indexOf('MSIE') > -1 || u.indexOf('Trident') > -1,
      Edge: u.indexOf('Edge') > -1 || u.indexOf('Edg') > -1,
      Firefox: u.indexOf('Firefox') > -1 || u.indexOf('FxiOS') > -1,
      'Firefox Focus': u.indexOf('Focus') > -1,
      Chromium: u.indexOf('Chromium') > -1,
      Opera: u.indexOf('Opera') > -1 || u.indexOf('OPR') > -1,
      Vivaldi: u.indexOf('Vivaldi') > -1,
      Yandex: u.indexOf('YaBrowser') > -1,
      Arora: u.indexOf('Arora') > -1,
      Lunascape: u.indexOf('Lunascape') > -1,
      QupZilla: u.indexOf('QupZilla') > -1,
      'Coc Coc': u.indexOf('coc_coc_browser') > -1,
      Kindle: u.indexOf('Kindle') > -1 || u.indexOf('Silk/') > -1,
      Iceweasel: u.indexOf('Iceweasel') > -1,
      Konqueror: u.indexOf('Konqueror') > -1,
      Iceape: u.indexOf('Iceape') > -1,
      SeaMonkey: u.indexOf('SeaMonkey') > -1,
      Epiphany: u.indexOf('Epiphany') > -1,
      360: u.indexOf('QihooBrowser') > -1 || u.indexOf('QHBrowser') > -1,
      '360EE': u.indexOf('360EE') > -1,
      '360SE': u.indexOf('360SE') > -1,
      UC: u.indexOf('UC') > -1 || u.indexOf(' UBrowser') > -1,
      QQBrowser: u.indexOf('QQBrowser') > -1,
      QQ: u.indexOf('QQ/') > -1,
      Baidu: u.indexOf('Baidu') > -1 || u.indexOf('BIDUBrowser') > -1,
      Maxthon: u.indexOf('Maxthon') > -1,
      Sogou: u.indexOf('MetaSr') > -1 || u.indexOf('Sogou') > -1,
      LBBROWSER: u.indexOf('LBBROWSER') > -1,
      '2345Explorer': u.indexOf('2345Explorer') > -1,
      TheWorld: u.indexOf('TheWorld') > -1,
      XiaoMi: u.indexOf('MiuiBrowser') > -1,
      Quark: u.indexOf('Quark') > -1,
      Qiyu: u.indexOf('Qiyu') > -1,
      Wechat: u.indexOf('MicroMessenger') > -1,
      Taobao: u.indexOf('AliApp(TB') > -1,
      Alipay: u.indexOf('AliApp(AP') > -1,
      Weibo: u.indexOf('Weibo') > -1,
      Douban: u.indexOf('com.douban.frodo') > -1,
      Suning: u.indexOf('SNEBUY-APP') > -1,
      iQiYi: u.indexOf('IqiyiApp') > -1,
      // 系统或平台
      Windows: u.indexOf('Windows') > -1,
      Linux: u.indexOf('Linux') > -1 || u.indexOf('X11') > -1,
      'Mac OS': u.indexOf('Macintosh') > -1,
      Android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
      Ubuntu: u.indexOf('Ubuntu') > -1,
      FreeBSD: u.indexOf('FreeBSD') > -1,
      Debian: u.indexOf('Debian') > -1,
      'Windows Phone': u.indexOf('IEMobile') > -1 || u.indexOf('Windows Phone') > -1,
      BlackBerry: u.indexOf('BlackBerry') > -1 || u.indexOf('RIM') > -1,
      MeeGo: u.indexOf('MeeGo') > -1,
      Symbian: u.indexOf('Symbian') > -1,
      iOS: u.indexOf('like Mac OS X') > -1,
      'Chrome OS': u.indexOf('CrOS') > -1,
      WebOS: u.indexOf('hpwOS') > -1,
      // 设备
      Mobile: u.indexOf('Mobi') > -1 || u.indexOf('iPh') > -1 || u.indexOf('480') > -1,
      Tablet: u.indexOf('Tablet') > -1 || u.indexOf('Nexus 7') > -1,
      iPad: u.indexOf('iPad') > -1
    };
  }),
  // 在信息map和匹配库中进行匹配
  matchInfoMap: monitor(function (_this) {
    var u = VariableLibrary.navigator.userAgent || '';
    var match = MethodLibrary.getMatchMap(u);
    for (var s in VariableLibrary.infoMap) {
      for (var i = 0; i < VariableLibrary.infoMap[s].length; i++) {
        var value = VariableLibrary.infoMap[s][i];
        if (match[value]) {
          _this[s] = value;
        }
      }
    }
  }),
  // 获取当前操作系统
  getOS: monitor(function () {
    var _this = this;
    MethodLibrary.matchInfoMap(_this);
    return _this.os || 'Unknown';
  }),
  // 获取操作系统版本
  getOSVersion: monitor(function () {
    var _this = this;
    var u = VariableLibrary.navigator.userAgent || '';
    _this.osVersion = '';
    _this.osMajor = '';
    // 系统版本信息
    var osVersion = {
      Windows: function Windows() {
        var v = u.replace(/^.*Windows NT ([\d.]+);.*$/, '$1');
        var oldWindowsVersionMap = {
          6.4: '10',
          6.3: '8.1',
          6.2: '8',
          6.1: '7',
          '6.0': 'Vista',
          5.2: 'XP',
          5.1: 'XP',
          '5.0': '2000'
        };
        return oldWindowsVersionMap[v] || v;
      },
      Android: function Android() {
        return u.replace(/^.*Android ([\d.]+);.*$/, '$1');
      },
      iOS: function iOS() {
        return u.replace(/^.*OS ([\d_]+) like.*$/, '$1').replace(/_/g, '.');
      },
      Debian: function Debian() {
        return u.replace(/^.*Debian\/([\d.]+).*$/, '$1');
      },
      'Windows Phone': function Windows_Phone() {
        return u.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, '$2');
      },
      'Mac OS': function Mac_OS() {
        return u.replace(/^.*Mac OS X ([\d_]+).*$/, '$1').replace(/_/g, '.');
      },
      WebOS: function WebOS() {
        return u.replace(/^.*hpwOS\/([\d.]+);.*$/, '$1');
      }
    };
    if (osVersion[_this.os]) {
      _this.osVersion = osVersion[_this.os]();
      if (_this.osVersion === u) {
        _this.osVersion = '';
      }
    }
    if (_this.osVersion) {
      _this.osMajor = _this.osVersion.split('.').length && _this.osVersion.split('.')[0];
    }
    return {
      version: _this.osVersion,
      osMajor: _this.osMajor
    };
  }),
  // 获取横竖屏状态
  getOrientationStatu: monitor(function () {
    var orientationStatus = '';
    var orientation = window.matchMedia('(orientation: portrait)');
    if (orientation.matches) {
      orientationStatus = '竖屏';
    } else {
      orientationStatus = '横屏';
    }
    return orientationStatus;
  }),
  // 获取设备类型
  getDeviceType: monitor(function () {
    var _this = this;
    _this.device = 'PC';
    MethodLibrary.matchInfoMap(_this);
    return _this.device;
  }),
  // 获取网络状态
  getNetwork: monitor(function () {
    var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
    var result = 'unknown';
    var type = connection ? connection.type || connection.effectiveType : null;
    if (type && typeof type === 'string') {
      switch (type) {
        // possible type values
        case 'bluetooth':
        case 'cellular':
          result = 'cellular';
          break;
        case 'none':
          result = 'none';
          break;
        case 'ethernet':
        case 'wifi':
        case 'wimax':
          result = 'wifi';
          break;
        case 'other':
        case 'unknown':
          result = 'unknown';
          break;
        // possible effectiveType values
        case 'slow-2g':
        case '2g':
        case '3g':
          result = 'cellular';
          break;
        case '4g':
          result = 'wifi';
          break;
        default:
          break;
      }
    }
    return result;
  }),
  // 获取当前语言
  getLanguage: monitor(function () {
    var _this = this;
    _this.language = function () {
      var language = VariableLibrary.navigator.browserLanguage || VariableLibrary.navigator.language || '';
      var arr = language.split('-');
      if (arr[1]) {
        arr[1] = arr[1].toUpperCase();
      }
      return arr.join('_');
    }();
    return _this.language;
  }),
  getTimeZone: monitor(function () {
    var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return timeZone;
  }),
  // 浏览器信息
  getBrowserInfo: monitor(function () {
    var _this = this;
    MethodLibrary.matchInfoMap(_this);
    var u = VariableLibrary.navigator.userAgent || '';
    var _mime = function _mime(option, value) {
      var mimeTypes = VariableLibrary.navigator.mimeTypes;
      for (var key in mimeTypes) {
        if (mimeTypes[key][option] == value) {
          return true;
        }
      }
      return false;
    };
    var match = MethodLibrary.getMatchMap(u);
    var is360 = false;
    if (typeof window !== 'undefined' && window.chrome) {
      var chrome_version = u.replace(/^.*Chrome\/([\d]+).*$/, '$1');
      if (chrome_version > 36 && window.showModalDialog) {
        is360 = true;
      } else if (chrome_version > 45) {
        is360 = _mime('type', 'application/vnd.chromium.remoting-viewer');
      }
    }
    if (match['Baidu'] && match['Opera']) {
      match['Baidu'] = false;
    }
    if (match['Mobile']) {
      match['Mobile'] = !(u.indexOf('iPad') > -1);
    }
    if (is360) {
      if (_mime('type', 'application/gameplugin')) {
        match['360SE'] = true;
      } else if (VariableLibrary.navigator && VariableLibrary.navigator.connection && typeof VariableLibrary.navigator['connection']['saveData'] == 'undefined') {
        match['360SE'] = true;
      } else {
        match['360EE'] = true;
      }
    }
    if (match['IE'] || match['Edge']) {
      var navigator_top = window.screenTop - window.screenY;
      switch (navigator_top) {
        case 71:
          // 无收藏栏,贴边
          break;
        case 74:
          // 无收藏栏,非贴边
          break;
        case 99:
          // 有收藏栏,贴边
          break;
        case 102:
          // 有收藏栏,非贴边
          match['360EE'] = true;
          break;
        case 75:
          // 无收藏栏,贴边
          break;
        case 74:
          // 无收藏栏,非贴边
          break;
        case 105:
          // 有收藏栏,贴边
          break;
        case 104:
          // 有收藏栏,非贴边
          match['360SE'] = true;
          break;
        default:
          break;
      }
    }
    var browerVersionMap = {
      Safari: function Safari() {
        return u.replace(/^.*Version\/([\d.]+).*$/, '$1');
      },
      Chrome: function Chrome() {
        return u.replace(/^.*Chrome\/([\d.]+).*$/, '$1').replace(/^.*CriOS\/([\d.]+).*$/, '$1');
      },
      IE: function IE() {
        return u.replace(/^.*MSIE ([\d.]+).*$/, '$1').replace(/^.*rv:([\d.]+).*$/, '$1');
      },
      Edge: function Edge() {
        return u.replace(/^.*Edge?\/([\d.]+).*$/, '$1');
      },
      Firefox: function Firefox() {
        return u.replace(/^.*Firefox\/([\d.]+).*$/, '$1').replace(/^.*FxiOS\/([\d.]+).*$/, '$1');
      },
      'Firefox Focus': function Firefox_Focus() {
        return u.replace(/^.*Focus\/([\d.]+).*$/, '$1');
      },
      Chromium: function Chromium() {
        return u.replace(/^.*Chromium\/([\d.]+).*$/, '$1');
      },
      Opera: function Opera() {
        return u.replace(/^.*Opera\/([\d.]+).*$/, '$1').replace(/^.*OPR\/([\d.]+).*$/, '$1');
      },
      Vivaldi: function Vivaldi() {
        return u.replace(/^.*Vivaldi\/([\d.]+).*$/, '$1');
      },
      Yandex: function Yandex() {
        return u.replace(/^.*YaBrowser\/([\d.]+).*$/, '$1');
      },
      Arora: function Arora() {
        return u.replace(/^.*Arora\/([\d.]+).*$/, '$1');
      },
      Lunascape: function Lunascape() {
        return u.replace(/^.*Lunascape[\/\s]([\d.]+).*$/, '$1');
      },
      QupZilla: function QupZilla() {
        return u.replace(/^.*QupZilla[\/\s]([\d.]+).*$/, '$1');
      },
      'Coc Coc': function Coc_Coc() {
        return u.replace(/^.*coc_coc_browser\/([\d.]+).*$/, '$1');
      },
      Kindle: function Kindle() {
        return u.replace(/^.*Version\/([\d.]+).*$/, '$1');
      },
      Iceweasel: function Iceweasel() {
        return u.replace(/^.*Iceweasel\/([\d.]+).*$/, '$1');
      },
      Konqueror: function Konqueror() {
        return u.replace(/^.*Konqueror\/([\d.]+).*$/, '$1');
      },
      Iceape: function Iceape() {
        return u.replace(/^.*Iceape\/([\d.]+).*$/, '$1');
      },
      SeaMonkey: function SeaMonkey() {
        return u.replace(/^.*SeaMonkey\/([\d.]+).*$/, '$1');
      },
      Epiphany: function Epiphany() {
        return u.replace(/^.*Epiphany\/([\d.]+).*$/, '$1');
      },
      360: function _() {
        return u.replace(/^.*QihooBrowser\/([\d.]+).*$/, '$1');
      },
      '360SE': function SE() {
        var hash = {
          63: '10.0',
          55: '9.1',
          45: '8.1',
          42: '8.0',
          31: '7.0',
          21: '6.3'
        };
        var chrome_version = u.replace(/^.*Chrome\/([\d]+).*$/, '$1');
        return hash[chrome_version] || '';
      },
      '360EE': function EE() {
        var hash = {
          69: '11.0',
          63: '9.5',
          55: '9.0',
          50: '8.7',
          30: '7.5'
        };
        var chrome_version = u.replace(/^.*Chrome\/([\d]+).*$/, '$1');
        return hash[chrome_version] || '';
      },
      Maxthon: function Maxthon() {
        return u.replace(/^.*Maxthon\/([\d.]+).*$/, '$1');
      },
      QQBrowser: function QQBrowser() {
        return u.replace(/^.*QQBrowser\/([\d.]+).*$/, '$1');
      },
      QQ: function QQ() {
        return u.replace(/^.*QQ\/([\d.]+).*$/, '$1');
      },
      Baidu: function Baidu() {
        return u.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, '$1');
      },
      UC: function UC() {
        return u.replace(/^.*UC?Browser\/([\d.]+).*$/, '$1');
      },
      Sogou: function Sogou() {
        return u.replace(/^.*SE ([\d.X]+).*$/, '$1').replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, '$1');
      },
      LBBROWSER: function LBBROWSER() {
        var version = '';
        if (u.indexOf('LieBaoFast') > -1) {
          version = u.replace(/^.*LieBaoFast\/([\d.]+).*$/, '$1');
        }
        var hash = {
          57: '6.5',
          49: '6.0',
          46: '5.9',
          42: '5.3',
          39: '5.2',
          34: '5.0',
          29: '4.5',
          21: '4.0'
        };
        var chrome_version = u.replace(/^.*Chrome\/([\d]+).*$/, '$1');
        return version || hash[chrome_version] || '';
      },
      '2345Explorer': function Explorer() {
        return u.replace(/^.*2345Explorer\/([\d.]+).*$/, '$1');
      },
      TheWorld: function TheWorld() {
        return u.replace(/^.*TheWorld ([\d.]+).*$/, '$1');
      },
      XiaoMi: function XiaoMi() {
        return u.replace(/^.*MiuiBrowser\/([\d.]+).*$/, '$1');
      },
      Quark: function Quark() {
        return u.replace(/^.*Quark\/([\d.]+).*$/, '$1');
      },
      Qiyu: function Qiyu() {
        return u.replace(/^.*Qiyu\/([\d.]+).*$/, '$1');
      },
      Wechat: function Wechat() {
        return u.replace(/^.*MicroMessenger\/([\d.]+).*$/, '$1');
      },
      WechatWork: function WechatWork() {
        return u.replace(/^.*wxwork\/([\d.]+).*$/, '$1');
      },
      Taobao: function Taobao() {
        return u.replace(/^.*AliApp\(TB\/([\d.]+).*$/, '$1');
      },
      Alipay: function Alipay() {
        return u.replace(/^.*AliApp\(AP\/([\d.]+).*$/, '$1');
      },
      Weibo: function Weibo() {
        return u.replace(/^.*weibo__([\d.]+).*$/, '$1');
      },
      Douban: function Douban() {
        return u.replace(/^.*com.douban.frodo\/([\d.]+).*$/, '$1');
      },
      Suning: function Suning() {
        return u.replace(/^.*SNEBUY-APP([\d.]+).*$/, '$1');
      },
      iQiYi: function iQiYi() {
        return u.replace(/^.*IqiyiVersion\/([\d.]+).*$/, '$1');
      }
    };
    _this.browserVersion = '';
    _this.browserMajor = '';
    if (browerVersionMap[_this.browser]) {
      _this.browserVersion = browerVersionMap[_this.browser]();
      if (_this.browserVersion == u) {
        _this.browserVersion = '';
      }
    }
    if (_this.browser == 'Chrome' && u.match(/\S+Browser/)) {
      _this.browser = u.match(/\S+Browser/)[0];
      _this.version = u.replace(/^.*Browser\/([\d.]+).*$/, '$1');
    }
    if (_this.browser == 'Edge') {
      if (_this.version > '75') {
        _this.engine = 'Blink';
      } else {
        _this.engine = 'EdgeHTML';
      }
    }
    if (_this.browser == 'Chrome' && parseInt(_this.browserVersion) > 27) {
      _this.engine = 'Blink';
    } else if (match['Chrome'] && _this.engine == 'WebKit' && parseInt(_this.browserVersion) > 27) {
      _this.engine = 'Blink';
    } else if (_this.browser == 'Opera' && parseInt(_this.version) > 12) {
      _this.engine = 'Blink';
    } else if (_this.browser == 'Yandex') {
      _this.engine = 'Blink';
    }
    if (_this.browserVersion) {
      _this.browserMajor = _this.browserVersion.split('.').length && this.browserVersion.split('.')[0];
    }
    return {
      browser: _this.browser,
      browserVersion: _this.browserVersion,
      engine: _this.engine,
      browserMajor: _this.browserMajor
    };
  }),
  // 获取地理位置
  getGeoPostion: monitor(function (callback) {
    navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition(
    // 位置获取成功
    function (position) {
      callback(position);
    },
    // 位置获取失败
    function (error) {
      display_display.warn(error);
    });
  })
};
var _deviceInfo = {};
if (typeof window !== 'undefined') {
  _deviceInfo = {
    os: MethodLibrary.getOS(),
    osVersion: MethodLibrary.getOSVersion().version,
    osVersionMajor: MethodLibrary.getOSVersion().osMajor,
    browser: MethodLibrary.getBrowserInfo().browser,
    browserVersion: MethodLibrary.getBrowserInfo().browserVersion,
    browserVersionMajor: MethodLibrary.getBrowserInfo().browserMajor,
    screenSize: window.screen.width + '*' + window.screen.height,
    networkType: MethodLibrary.getNetwork(),
    device: MethodLibrary.getDeviceType(),
    timeZone: MethodLibrary.getTimeZone()
  };
}
var deviceInfo = _deviceInfo;
;// CONCATENATED MODULE: ../core/esm/helper/enums.js
var DOM_EVENT = {
  BEFORE_UNLOAD: 'beforeunload',
  CLICK: 'click',
  DBL_CLICK: 'dblclick',
  KEY_DOWN: 'keydown',
  LOAD: 'load',
  POP_STATE: 'popstate',
  SCROLL: 'scroll',
  TOUCH_START: 'touchstart',
  TOUCH_END: 'touchend',
  TOUCH_MOVE: 'touchmove',
  VISIBILITY_CHANGE: 'visibilitychange',
  PAGE_SHOW: 'pageshow',
  FREEZE: 'freeze',
  RESUME: 'resume',
  DOM_CONTENT_LOADED: 'DOMContentLoaded',
  POINTER_DOWN: 'pointerdown',
  POINTER_UP: 'pointerup',
  POINTER_CANCEL: 'pointercancel',
  HASH_CHANGE: 'hashchange',
  PAGE_HIDE: 'pagehide',
  MOUSE_DOWN: 'mousedown',
  MOUSE_UP: 'mouseup',
  MOUSE_MOVE: 'mousemove',
  FOCUS: 'focus',
  BLUR: 'blur',
  CONTEXT_MENU: 'contextmenu',
  RESIZE: 'resize',
  CHANGE: 'change',
  INPUT: 'input',
  PLAY: 'play',
  PAUSE: 'pause',
  SECURITY_POLICY_VIOLATION: 'securitypolicyviolation',
  SELECTION_CHANGE: 'selectionchange',
  STORAGE: 'storage'
};
var ResourceType = {
  DOCUMENT: 'document',
  XHR: 'xhr',
  BEACON: 'beacon',
  FETCH: 'fetch',
  CSS: 'css',
  JS: 'js',
  IMAGE: 'image',
  FONT: 'font',
  MEDIA: 'media',
  OTHER: 'other'
};
var ActionType = {
  CLICK: 'click',
  CUSTOM: 'custom'
};
var FrustrationType = {
  RAGE_CLICK: 'rage_click',
  ERROR_CLICK: 'error_click',
  DEAD_CLICK: 'dead_click'
};
var enums_RumEventType = {
  ACTION: 'action',
  ERROR: 'error',
  LONG_TASK: 'long_task',
  VIEW: 'view',
  RESOURCE: 'resource',
  LOGGER: 'logger'
};
var RumLongTaskEntryType = {
  LONG_TASK: 'long-task',
  LONG_ANIMATION_FRAME: 'long-animation-frame'
};
var ViewLoadingType = {
  INITIAL_LOAD: 'initial_load',
  ROUTE_CHANGE: 'route_change'
};
var RequestType = {
  FETCH: ResourceType.FETCH,
  XHR: ResourceType.XHR
};
var enums_TraceType = {
  DDTRACE: 'ddtrace',
  ZIPKIN_MULTI_HEADER: 'zipkin',
  ZIPKIN_SINGLE_HEADER: 'zipkin_single_header',
  W3C_TRACEPARENT: 'w3c_traceparent',
  W3C_TRACEPARENT_64: 'w3c_traceparent_64bit',
  SKYWALKING_V3: 'skywalking_v3',
  JAEGER: 'jaeger'
};
var enums_ErrorHandling = {
  HANDLED: 'handled',
  UNHANDLED: 'unhandled'
};
var NonErrorPrefix = {
  UNCAUGHT: 'Uncaught',
  PROVIDED: 'Provided'
};
;// CONCATENATED MODULE: ../core/esm/helper/serialisation/jsonStringify.js
function jsonStringify_typeof(o) {
  "@babel/helpers - typeof";

  return jsonStringify_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, jsonStringify_typeof(o);
}


/**
 * Custom implementation of JSON.stringify that ignores some toJSON methods. We need to do that
 * because some sites badly override toJSON on certain objects. Removing all toJSON methods from
 * nested values would be too costly, so we just detach them from the root value, and native classes
 * used to build JSON values (Array and Object).
 *
 * Note: this still assumes that JSON.stringify is correct.
 */
function jsonStringify_jsonStringify(value, replacer, space) {
  if (jsonStringify_typeof(value) !== 'object' || value === null) {
    return JSON.stringify(value);
  }

  // Note: The order matter here. We need to detach toJSON methods on parent classes before their
  // subclasses.
  var restoreObjectPrototypeToJson = detachToJsonMethod(Object.prototype);
  var restoreArrayPrototypeToJson = detachToJsonMethod(Array.prototype);
  var restoreValuePrototypeToJson = detachToJsonMethod(Object.getPrototypeOf(value));
  var restoreValueToJson = detachToJsonMethod(value);
  try {
    return JSON.stringify(value, replacer, space);
  } catch (_unused) {
    return '<error: unable to serialize object>';
  } finally {
    restoreObjectPrototypeToJson();
    restoreArrayPrototypeToJson();
    restoreValuePrototypeToJson();
    restoreValueToJson();
  }
}
function detachToJsonMethod(value) {
  var object = value;
  var objectToJson = object.toJSON;
  if (objectToJson) {
    delete object.toJSON;
    return function () {
      object.toJSON = objectToJson;
    };
  }
  return tools_noop;
}
;// CONCATENATED MODULE: ../core/esm/tracekit/computeStackTrace.js
function computeStackTrace_typeof(o) {
  "@babel/helpers - typeof";

  return computeStackTrace_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, computeStackTrace_typeof(o);
}

var UNKNOWN_FUNCTION = '?';

/**
 * Computes a stack trace for an exception.
 */
function computeStackTrace(ex) {
  var stack = [];
  var stackProperty = tryToGetString(ex, 'stack');
  var exString = String(ex);
  if (stackProperty && stackProperty.startsWith(exString)) {
    stackProperty = stackProperty.slice(exString.length);
  }
  if (stackProperty) {
    tools_each(stackProperty.split('\n'), function (line) {
      var stackFrame = parseChromeLine(line) || parseChromeAnonymousLine(line) || parseWinLine(line) || parseGeckoLine(line);
      if (stackFrame) {
        if (!stackFrame.func && stackFrame.line) {
          stackFrame.func = UNKNOWN_FUNCTION;
        }
        stack.push(stackFrame);
      }
    });
  }
  return {
    message: tryToGetString(ex, 'message'),
    name: tryToGetString(ex, 'name'),
    stack: stack
  };
}
var fileUrl = '((?:file|https?|blob|chrome-extension|electron|native|eval|webpack|<anonymous>|\\w+\\.|\\/).*?)';
var filePosition = '(?::(\\d+))';
var CHROME_LINE_RE = new RegExp('^\\s*at (.*?) ?\\(' + fileUrl + filePosition + '?' + filePosition + '?\\)?\\s*$', 'i');
var CHROME_EVAL_RE = new RegExp('\\((\\S*)' + filePosition + filePosition + '\\)');
function parseChromeLine(line) {
  var parts = CHROME_LINE_RE.exec(line);
  if (!parts) {
    return;
  }
  var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line
  var isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line
  var submatch = CHROME_EVAL_RE.exec(parts[2]);
  if (isEval && submatch) {
    // throw out eval line/column and use top-most line/column number
    parts[2] = submatch[1]; // url
    parts[3] = submatch[2]; // line
    parts[4] = submatch[3]; // column
  }
  return {
    args: isNative ? [parts[2]] : [],
    column: parts[4] ? +parts[4] : undefined,
    func: parts[1] || UNKNOWN_FUNCTION,
    line: parts[3] ? +parts[3] : undefined,
    url: !isNative ? parts[2] : undefined
  };
}
var CHROME_ANONYMOUS_FUNCTION_RE = new RegExp('^\\s*at ?' + fileUrl + filePosition + '?' + filePosition + '??\\s*$', 'i');
function parseChromeAnonymousLine(line) {
  var parts = CHROME_ANONYMOUS_FUNCTION_RE.exec(line);
  if (!parts) {
    return;
  }
  return {
    args: [],
    column: parts[3] ? +parts[3] : undefined,
    func: UNKNOWN_FUNCTION,
    line: parts[2] ? +parts[2] : undefined,
    url: parts[1]
  };
}
var WINJS_LINE_RE = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function parseWinLine(line) {
  var parts = WINJS_LINE_RE.exec(line);
  if (!parts) {
    return;
  }
  return {
    args: [],
    column: parts[4] ? +parts[4] : undefined,
    func: parts[1] || UNKNOWN_FUNCTION,
    line: +parts[3],
    url: parts[2]
  };
}
var GECKO_LINE_RE = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle|\[wasm code\])(?::(\d+))?(?::(\d+))?\s*$/i;
var GECKO_EVAL_RE = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function parseGeckoLine(line) {
  var parts = GECKO_LINE_RE.exec(line);
  if (!parts) {
    return;
  }
  var isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
  var submatch = GECKO_EVAL_RE.exec(parts[3]);
  if (isEval && submatch) {
    // throw out eval line/column and use top-most line number
    parts[3] = submatch[1];
    parts[4] = submatch[2];
    parts[5] = undefined; // no column when eval
  }
  return {
    args: parts[2] ? parts[2].split(',') : [],
    column: parts[5] ? +parts[5] : undefined,
    func: parts[1] || UNKNOWN_FUNCTION,
    line: parts[4] ? +parts[4] : undefined,
    url: parts[3]
  };
}
function tryToGetString(candidate, property) {
  if (computeStackTrace_typeof(candidate) !== 'object' || !candidate || !(property in candidate)) {
    return undefined;
  }
  var value = candidate[property];
  return typeof value === 'string' ? value : undefined;
}
;// CONCATENATED MODULE: ../core/esm/tracekit/tracekit.js




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types
var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?([\s\S]*)$/;
/**
 * Cross-browser collection of unhandled errors
 *
 * Supports:
 * - Firefox: full stack trace with line numbers, plus column number
 * on top frame; column number is not guaranteed
 * - Opera: full stack trace with line and column numbers
 * - Chrome: full stack trace with line and column numbers
 * - Safari: line and column number for the top frame only; some frames
 * may be missing, and column number is not guaranteed
 * - IE: line and column number for the top frame only; some frames
 * may be missing, and column number is not guaranteed
 *
 * In theory, TraceKit should work on all of the following versions:
 * - IE5.5+ (only 8.0 tested)
 * - Firefox 0.9+ (only 3.5+ tested)
 * - Opera 7+ (only 10.50 tested; versions 9 and earlier may require
 * Exceptions Have Stacktrace to be enabled in opera:config)
 * - Safari 3+ (only 4+ tested)
 * - Chrome 1+ (only 5+ tested)
 * - Konqueror 3.5+ (untested)
 *
 * Tries to catch all unhandled errors and report them to the
 * callback.
 *
 * Callbacks receive a StackTrace object as described in the
 * computeStackTrace docs.
 *
 * @memberof TraceKit
 * @namespace
 */

function startUnhandledErrorCollection(callback) {
  var _instrumentOnError = instrumentOnError(callback);
  var _instrumentUnhandledRejection = instrumentUnhandledRejection(callback);
  return {
    stop: function stop() {
      _instrumentOnError.stop();
      _instrumentUnhandledRejection.stop();
    }
  };
}

/**
 * Install a global onerror handler
 */
function instrumentOnError(callback) {
  return instrumentMethod_instrumentMethod(window, 'onerror', function (params) {
    var parameters = params.parameters;
    var messageObj = parameters[0];
    var url = parameters[1];
    var line = parameters[2];
    var column = parameters[3];
    var errorObj = parameters[4];
    var stackTrace;
    if (errorObj instanceof Error) {
      stackTrace = computeStackTrace(errorObj);
    } else {
      var location = {
        url: url,
        column: column,
        line: line
      };
      var parse = tryToParseMessage(messageObj);
      stackTrace = {
        name: parse.name,
        message: parse.message,
        stack: [location]
      };
    }
    callback(stackTrace, tools_isNullUndefinedDefaultValue(errorObj, messageObj));
  });
}
function tryToParseMessage(messageObj) {
  var name;
  var message;
  if ({}.toString.call(messageObj) === '[object String]') {
    var groups = ERROR_TYPES_RE.exec(messageObj);
    if (groups) {
      name = groups[1];
      message = groups[2];
    }
  }
  return {
    name: name,
    message: message
  };
}
/**
 * Install a global onunhandledrejection handler
 */
function instrumentUnhandledRejection(callback) {
  return instrumentMethod_instrumentMethod(window, 'onunhandledrejection', function (params) {
    var parameters = params.parameters;
    var e = parameters[0];
    var reason = e.reason || 'Empty reason';
    var stack = computeStackTrace(reason);
    callback(stack, reason);
  });
}
;// CONCATENATED MODULE: ../core/esm/tracekit/index.js


;// CONCATENATED MODULE: ../core/esm/helper/byteUtils.js
var ONE_KIBI_BYTE = 1024;
var ONE_MEBI_BYTE = 1024 * ONE_KIBI_BYTE;
// eslint-disable-next-line no-control-regex
var HAS_MULTI_BYTES_CHARACTERS = /[^\u0000-\u007F]/;
function computeBytesCount(candidate) {
  // Accurate bytes count computations can degrade performances when there is a lot of events to process
  if (!HAS_MULTI_BYTES_CHARACTERS.test(candidate)) {
    return candidate.length;
  }
  if (window.TextEncoder !== undefined) {
    return new TextEncoder().encode(candidate).length;
  }
  return new Blob([candidate]).size;
}
function concatBuffers(buffers) {
  var length = buffers.reduce(function (total, buffer) {
    return total + buffer.length;
  }, 0);
  var result = new Uint8Array(length);
  var offset = 0;
  for (var _i = 0, buffers_1 = buffers; _i < buffers_1.length; _i++) {
    var buffer = buffers_1[_i];
    result.set(buffer, offset);
    offset += buffer.length;
  }
  return result;
}
;// CONCATENATED MODULE: ../core/esm/helper/sanitize.js
function sanitize_typeof(o) {
  "@babel/helpers - typeof";

  return sanitize_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, sanitize_typeof(o);
}




// The maximum size of a single event is 256KiB. By default, we ensure that user-provided data
// going through sanitize fits inside our events, while leaving room for other contexts, metadata, ...
var SANITIZE_DEFAULT_MAX_CHARACTER_COUNT = 220 * ONE_KIBI_BYTE;

// Symbol for the root element of the JSONPath used for visited objects
var JSON_PATH_ROOT_ELEMENT = '$';

// When serializing (using JSON.stringify) a key of an object, { key: 42 } gets wrapped in quotes as "key".
// With the separator (:), we need to add 3 characters to the count.
var KEY_DECORATION_LENGTH = 3;

/**
 * Ensures user-provided data is 'safe' for the SDK
 * - Deep clones data
 * - Removes cyclic references
 * - Transforms unserializable types to a string representation
 *
 * LIMITATIONS:
 * - Size is in characters, not byte count (may differ according to character encoding)
 * - Size does not take into account indentation that can be applied to JSON.stringify
 * - Non-numerical properties of Arrays are ignored. Same behavior as JSON.stringify
 *
 * @param source              User-provided data meant to be serialized using JSON.stringify
 * @param maxCharacterCount   Maximum number of characters allowed in serialized form
 */

function sanitize(source, maxCharacterCount) {
  if (maxCharacterCount === undefined) {
    maxCharacterCount = SANITIZE_DEFAULT_MAX_CHARACTER_COUNT;
  }
  // Unbind any toJSON function we may have on [] or {} prototypes
  var restoreObjectPrototypeToJson = detachToJsonMethod(Object.prototype);
  var restoreArrayPrototypeToJson = detachToJsonMethod(Array.prototype);

  // Initial call to sanitizeProcessor - will populate containerQueue if source is an Array or a plain Object
  var containerQueue = [];
  var visitedObjectsWithPath = new WeakMap();
  var sanitizedData = sanitizeProcessor(source, JSON_PATH_ROOT_ELEMENT, undefined, containerQueue, visitedObjectsWithPath);
  var accumulatedCharacterCount = JSON.stringify(sanitizedData) && JSON.stringify(sanitizedData).length || 0;
  if (accumulatedCharacterCount > maxCharacterCount) {
    warnOverCharacterLimit(maxCharacterCount, 'discarded', source);
    return undefined;
  }
  while (containerQueue.length > 0 && accumulatedCharacterCount < maxCharacterCount) {
    var containerToProcess = containerQueue.shift();
    var separatorLength = 0; // 0 for the first element, 1 for subsequent elements

    // Arrays and Objects have to be handled distinctly to ensure
    // we do not pick up non-numerical properties from Arrays
    if (Array.isArray(containerToProcess.source)) {
      for (var key = 0; key < containerToProcess.source.length; key++) {
        var targetData = sanitizeProcessor(containerToProcess.source[key], containerToProcess.path, key, containerQueue, visitedObjectsWithPath);
        if (targetData !== undefined) {
          accumulatedCharacterCount += JSON.stringify(targetData).length;
        } else {
          // When an element of an Array (targetData) is undefined, it is serialized as null:
          // JSON.stringify([undefined]) => '[null]' - This accounts for 4 characters
          accumulatedCharacterCount += 4;
        }
        accumulatedCharacterCount += separatorLength;
        separatorLength = 1;
        if (accumulatedCharacterCount > maxCharacterCount) {
          warnOverCharacterLimit(maxCharacterCount, 'truncated', source);
          break;
        }
        containerToProcess.target[key] = targetData;
      }
    } else {
      for (var key in containerToProcess.source) {
        if (Object.prototype.hasOwnProperty.call(containerToProcess.source, key)) {
          var targetData = sanitizeProcessor(containerToProcess.source[key], containerToProcess.path, key, containerQueue, visitedObjectsWithPath);
          // When a property of an object has an undefined value, it will be dropped during serialization:
          // JSON.stringify({a:undefined}) => '{}'
          if (targetData !== undefined) {
            accumulatedCharacterCount += JSON.stringify(targetData).length + separatorLength + key.length + KEY_DECORATION_LENGTH;
            separatorLength = 1;
          }
          if (accumulatedCharacterCount > maxCharacterCount) {
            warnOverCharacterLimit(maxCharacterCount, 'truncated', source);
            break;
          }
          containerToProcess.target[key] = targetData;
        }
      }
    }
  }

  // Rebind detached toJSON functions
  restoreObjectPrototypeToJson();
  restoreArrayPrototypeToJson();
  return sanitizedData;
}

/**
 * Internal function to factorize the process common to the
 * initial call to sanitize, and iterations for Arrays and Objects
 *
 */
function sanitizeProcessor(source, parentPath, key, queue, visitedObjectsWithPath) {
  // Start by handling toJSON, as we want to sanitize its output
  var sourceToSanitize = tryToApplyToJSON(source);
  if (!sourceToSanitize || sanitize_typeof(sourceToSanitize) !== 'object') {
    return sanitizePrimitivesAndFunctions(sourceToSanitize);
  }
  var sanitizedSource = sanitizeObjects(sourceToSanitize);
  if (sanitizedSource !== '[Object]' && sanitizedSource !== '[Array]' && sanitizedSource !== '[Error]') {
    return sanitizedSource;
  }

  // Handle potential cyclic references
  // We need to use source as sourceToSanitize could be a reference to a new object
  // At this stage, we know the source is an object type
  var sourceAsObject = source;
  if (visitedObjectsWithPath.has(sourceAsObject)) {
    return '[Reference seen at ' + visitedObjectsWithPath.get(sourceAsObject) + ']';
  }

  // Add processed source to queue
  var currentPath = key !== undefined ? parentPath + '.' + key : parentPath;
  var target = Array.isArray(sourceToSanitize) ? [] : {};
  visitedObjectsWithPath.set(sourceAsObject, currentPath);
  queue.push({
    source: sourceToSanitize,
    target: target,
    path: currentPath
  });
  return target;
}

/**
 * Handles sanitization of simple, non-object types
 *
 */
function sanitizePrimitivesAndFunctions(value) {
  // BigInt cannot be serialized by JSON.stringify(), convert it to a string representation
  if (typeof value === 'bigint') {
    return '[BigInt] ' + value.toString();
  }
  // Functions cannot be serialized by JSON.stringify(). Moreover, if a faulty toJSON is present, it needs to be converted
  // so it won't prevent stringify from serializing later
  if (typeof value === 'function') {
    return '[Function] ' + value.name || 0;
  }
  // JSON.stringify() does not serialize symbols.
  if (sanitize_typeof(value) === 'symbol') {
    // symbol.description is part of ES2019+
    return '[Symbol] ' + value.description || 0;
  }
  return value;
}

/**
 * Handles sanitization of object types
 *
 * LIMITATIONS
 * - If a class defines a toStringTag Symbol, it will fall in the catch-all method and prevent enumeration of properties.
 * To avoid this, a toJSON method can be defined.
 * - IE11 does not return a distinct type for objects such as Map, WeakMap, ... These objects will pass through and their
 * properties enumerated if any.
 *
 */
function sanitizeObjects(value) {
  try {
    // Handle events - Keep a simple implementation to avoid breaking changes
    if (value instanceof Event) {
      return sanitizeEvent(value);
    }
    if (value instanceof RegExp) {
      return "[RegExp] ".concat(value.toString());
    }
    // Handle all remaining object types in a generic way
    var result = Object.prototype.toString.call(value);
    var match = result.match(/\[object (.*)\]/);
    if (match && match[1]) {
      return '[' + match[1] + ']';
    }
  } catch (_unused) {
    // If the previous serialization attempts failed, and we cannot convert using
    // Object.prototype.toString, declare the value unserializable
  }
  return '[Unserializable]';
}
function sanitizeEvent(event) {
  return {
    type: event.type,
    isTrusted: event.isTrusted,
    currentTarget: event.currentTarget ? sanitizeObjects(event.currentTarget) : null,
    target: event.target ? sanitizeObjects(event.target) : null
  };
}
/**
 * Checks if a toJSON function exists and tries to execute it
 *
 */
function tryToApplyToJSON(value) {
  var object = value;
  if (object && typeof object.toJSON === 'function') {
    try {
      return object.toJSON();
    } catch (_unused2) {
      // If toJSON fails, we continue by trying to serialize the value manually
    }
  }
  return value;
}

/**
 * Helper function to display the warning when the accumulated character count is over the limit
 */
function warnOverCharacterLimit(maxCharacterCount, changeType, source) {
  display_display.warn('The data provided has been ' + changeType + ' as it is over the limit of ' + maxCharacterCount + ' characters:', source);
}
;// CONCATENATED MODULE: ../core/esm/helper/errorTools.js





var NO_ERROR_STACK_PRESENT_MESSAGE = 'No stack, consider using an instance of Error';
var errorTools_ErrorSource = {
  AGENT: 'agent',
  CONSOLE: 'console',
  NETWORK: 'network',
  SOURCE: 'source',
  LOGGER: 'logger',
  CUSTOM: 'custom'
};
function computeRawError(data) {
  var stackTrace = data.stackTrace;
  var originalError = data.originalError;
  var handlingStack = data.handlingStack;
  var startClocks = data.startClocks;
  var nonErrorPrefix = data.nonErrorPrefix;
  var source = data.source;
  var handling = data.handling;
  var isErrorInstance = originalError instanceof Error;
  var message = computeMessage(stackTrace, isErrorInstance, nonErrorPrefix, originalError);
  var stack = hasUsableStack(isErrorInstance, stackTrace) ? toStackTraceString(stackTrace) : NO_ERROR_STACK_PRESENT_MESSAGE;
  var causes = isErrorInstance ? flattenErrorCauses(originalError, source) : undefined;
  var type = stackTrace && stackTrace.name;
  return {
    startClocks: startClocks,
    source: source,
    handling: handling,
    originalError: originalError,
    message: message,
    stack: stack,
    handlingStack: handlingStack,
    type: type,
    causes: causes
  };
}
function computeMessage(stackTrace, isErrorInstance, nonErrorPrefix, originalError) {
  // Favor stackTrace message only if tracekit has really been able to extract something meaningful (message + name)
  // TODO rework tracekit integration to avoid scattering error building logic
  return stackTrace && stackTrace.message && stackTrace && stackTrace.name ? stackTrace.message : !isErrorInstance ? nonErrorPrefix + ' ' + jsonStringify_jsonStringify(sanitize(originalError)) : 'Empty message';
}
function hasUsableStack(isErrorInstance, stackTrace) {
  if (stackTrace === undefined) {
    return false;
  }
  if (isErrorInstance) {
    return true;
  }
  // handle cases where tracekit return stack = [] or stack = [{url: undefined, line: undefined, column: undefined}]
  // TODO rework tracekit integration to avoid generating those unusable stack
  return stackTrace.stack.length > 0 && (stackTrace.stack.length > 1 || stackTrace.stack[0].url !== undefined);
}
function formatUnknownError(stackTrace, errorObject, nonErrorPrefix, handlingStack) {
  if (!stackTrace || stackTrace.message === undefined && !(errorObject instanceof Error)) {
    return {
      message: nonErrorPrefix + '' + jsonStringify(errorObject),
      stack: 'No stack, consider using an instance of Error',
      handlingStack: handlingStack,
      type: stackTrace && stackTrace.name
    };
  }
  return {
    message: stackTrace.message || 'Empty message',
    stack: toStackTraceString(stackTrace),
    handlingStack: handlingStack,
    type: stackTrace.name
  };
}
/**
 Creates a stacktrace without SDK internal frames.
 
 Constraints:
 - Has to be called at the utmost position of the call stack.
 - No internal monitoring should encapsulate the function, that is why we need to use callMonitored inside of it.
 */
function createHandlingStack() {
  /**
   * Skip the two internal frames:
   * - SDK API (console.error, ...)
   * - this function
   * in order to keep only the user calls
   */
  var internalFramesToSkip = 2;
  var error = new Error();
  var formattedStack;

  // IE needs to throw the error to fill in the stack trace
  if (!error.stack) {
    try {
      throw error;
    } catch (e) {
      tools_noop();
    }
  }
  callMonitored(function () {
    var stackTrace = computeStackTrace(error);
    stackTrace.stack = stackTrace.stack.slice(internalFramesToSkip);
    formattedStack = toStackTraceString(stackTrace);
  });
  return formattedStack;
}
function toStackTraceString(stack) {
  var result = formatErrorMessage(stack);
  tools_each(stack.stack, function (frame) {
    var func = frame.func === '?' ? '<anonymous>' : frame.func;
    var args = frame.args && frame.args.length > 0 ? '(' + frame.args.join(', ') + ')' : '';
    var line = frame.line ? ':' + frame.line : '';
    var column = frame.line && frame.column ? ':' + frame.column : '';
    result += '\n  at ' + func + args + ' @ ' + frame.url + line + column;
  });
  return result;
}
function formatErrorMessage(stack) {
  return (stack.name || 'Error') + ': ' + stack.message;
}
function getFileFromStackTraceString(stack) {
  var execResult = /@ (.+)/.exec(stack);
  return execResult && execResult[1];
}
function flattenErrorCauses(error, parentSource) {
  var currentError = error;
  var causes = [];
  while (currentError && currentError.cause instanceof Error && causes.length < 10) {
    var stackTrace = computeStackTrace(currentError.cause);
    causes.push({
      message: currentError.cause.message,
      source: parentSource,
      type: stackTrace && stackTrace.name,
      stack: stackTrace && toStackTraceString(stackTrace)
    });
    currentError = currentError.cause;
  }
  return causes.length ? causes : undefined;
}
;// CONCATENATED MODULE: ../core/esm/helper/instrumentMethod.js




function instrumentMethod_instrumentMethod(targetPrototype, method, onPreCall, opts) {
  var computeHandlingStack = opts && opts.computeHandlingStack;
  var original = targetPrototype[method];
  if (typeof original !== 'function') {
    if (startsWith(method, 'on')) {
      original = tools_noop;
    } else {
      return {
        stop: tools_noop
      };
    }
  }
  var stopped = false;
  var instrumentation = function instrumentation() {
    if (stopped) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
      return original.apply(this, arguments);
    }
    var parameters = arrayFrom(arguments);
    var postCallCallback;
    callMonitored(onPreCall, null, [{
      target: this,
      parameters: parameters,
      onPostCall: function onPostCall(callback) {
        postCallCallback = callback;
      },
      handlingStack: computeHandlingStack ? createHandlingStack() : undefined
    }]);
    var result = original.apply(this, parameters);
    if (postCallCallback) {
      callMonitored(postCallCallback, null, [result]);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return result;
  };
  targetPrototype[method] = instrumentation;
  return {
    stop: function stop() {
      stopped = true;
      // If the instrumentation has been removed by a third party, keep the last one
      if (targetPrototype[method] === instrumentation) {
        targetPrototype[method] = original;
      }
    }
  };
}
function instrumentSetter(targetPrototype, property, after) {
  var originalDescriptor = Object.getOwnPropertyDescriptor(targetPrototype, property);
  if (!originalDescriptor || !originalDescriptor.set || !originalDescriptor.configurable) {
    return {
      stop: noop
    };
  }
  var stoppedInstrumentation = noop;
  var _instrumentation = function instrumentation(target, value) {
    // put hooked setter into event loop to avoid of set latency
    setTimeout(function () {
      if (_instrumentation !== stoppedInstrumentation) {
        after(target, value);
      }
    }, 0);
  };
  var instrumentationWrapper = function instrumentationWrapper(value) {
    originalDescriptor.set.call(this, value);
    _instrumentation(this, value);
  };
  Object.defineProperty(targetPrototype, property, {
    set: instrumentationWrapper
  });
  return {
    stop: function stop() {
      if (Object.getOwnPropertyDescriptor(targetPrototype, property) && Object.getOwnPropertyDescriptor(targetPrototype, property).set === instrumentationWrapper) {
        Object.defineProperty(targetPrototype, property, originalDescriptor);
      }
      _instrumentation = stoppedInstrumentation;
    }
  };
}
;// CONCATENATED MODULE: ../core/esm/error/trackRuntimeError.js




function trackRuntimeError(errorObservable) {
  return startUnhandledErrorCollection(function (stackTrace, originalError) {
    errorObservable.notify(computeRawError({
      stackTrace: stackTrace,
      originalError: originalError,
      startClocks: tools_clocksNow(),
      nonErrorPrefix: NonErrorPrefix.UNCAUGHT,
      source: errorTools_ErrorSource.SOURCE,
      handling: enums_ErrorHandling.UNHANDLED
    }));
  });
}
;// CONCATENATED MODULE: ../core/esm/helper/observable.js

var _Observable = function _Observable(onFirstSubscribe) {
  this.observers = [];
  this.onLastUnsubscribe = undefined;
  this.onFirstSubscribe = onFirstSubscribe;
};
_Observable.prototype = {
  subscribe: function subscribe(f) {
    this.observers.push(f);
    if (this.observers.length === 1 && this.onFirstSubscribe) {
      this.onLastUnsubscribe = this.onFirstSubscribe(this) || undefined;
    }
    var _this = this;
    return {
      unsubscribe: function unsubscribe() {
        _this.observers = filter(_this.observers, function (other) {
          return f !== other;
        });
        if (!_this.observers.length && _this.onLastUnsubscribe) {
          _this.onLastUnsubscribe();
        }
      }
    };
  },
  notify: function notify(data) {
    tools_each(this.observers, function (observer) {
      observer(data);
    });
  }
};
var observable_Observable = _Observable;
function mergeObservables() {
  var observables = [].slice.call(arguments);
  return new observable_Observable(function (globalObservable) {
    var subscriptions = tools_map(observables, function (observable) {
      return observable.subscribe(function (data) {
        return globalObservable.notify(data);
      });
    });
    return function () {
      return tools_each(subscriptions, function (subscription) {
        return subscription.unsubscribe();
      });
    };
  });
}
;// CONCATENATED MODULE: ../core/esm/console/consoleObservable.js









var consoleObservablesByApi = {};
function initConsoleObservable(apis) {
  var consoleObservables = tools_map(apis, function (api) {
    if (!consoleObservablesByApi[api]) {
      consoleObservablesByApi[api] = createConsoleObservable(api);
    }
    return consoleObservablesByApi[api];
  });
  return mergeObservables.apply(this, consoleObservables);
}
function resetConsoleObservable() {
  consoleObservablesByApi = {};
}
/* eslint-disable no-console */
function createConsoleObservable(api) {
  return new observable_Observable(function (observable) {
    var originalConsoleApi = console[api];
    console[api] = function () {
      var params = [].slice.call(arguments);
      originalConsoleApi.apply(console, arguments);
      var handlingStack = createHandlingStack();
      callMonitored(function () {
        observable.notify(buildConsoleLog(params, api, handlingStack));
      });
    };
    return function () {
      console[api] = originalConsoleApi;
    };
  });
}
function buildConsoleLog(params, api, handlingStack) {
  var message = tools_map(params, function (param) {
    return formatConsoleParameters(param);
  }).join(' ');
  var error;
  if (api === ConsoleApiName.error) {
    var firstErrorParam = find(params, function (param) {
      return param instanceof Error;
    });
    error = {
      stack: firstErrorParam ? toStackTraceString(computeStackTrace(firstErrorParam)) : undefined,
      causes: firstErrorParam ? flattenErrorCauses(firstErrorParam, 'console') : undefined,
      startClocks: tools_clocksNow(),
      message: message,
      source: errorTools_ErrorSource.CONSOLE,
      handling: enums_ErrorHandling.HANDLED,
      handlingStack: handlingStack
    };
  }
  return {
    api: api,
    message: message,
    error: error,
    handlingStack: handlingStack
  };
}
function formatConsoleParameters(param) {
  if (typeof param === 'string') {
    return param;
  }
  if (param instanceof Error) {
    return formatErrorMessage(computeStackTrace(param));
  }
  return jsonStringify_jsonStringify(param, undefined, 2);
}
;// CONCATENATED MODULE: ../core/esm/browser/addEventListener.js



function addEventListener_addEventListener(eventTarget, event, listener, options) {
  return addEventListeners(eventTarget, [event], listener, options);
}

/**
 * Add event listeners to an event emitter object (Window, Element, mock object...).  This provides
 * a few conveniences compared to using `element.addEventListener` directly:
 *
 * * supports IE11 by:
 *   * using an option object only if needed
 *   * emulating the `once` option
 *
 * * wraps the listener with a `monitor` function
 *
 * * returns a `stop` function to remove the listener
 *
 * * with `once: true`, the listener will be called at most once, even if different events are
 *   listened
 */

function addEventListeners(eventTarget, eventNames, listener, options) {
  var wrappedListener = monitor(options && options.once ? function (event) {
    stop();
    listener(event);
  } : listener);
  options = options && options.passive ? {
    capture: options.capture,
    passive: options.passive
  } : options && options.capture;
  // Use the window.EventTarget.prototype when possible to avoid wrong overrides (e.g: https://github.com/salesforce/lwc/issues/1824)
  var listenerTarget = window.EventTarget && eventTarget instanceof EventTarget ? window.EventTarget.prototype : eventTarget;
  var add = getZoneJsOriginalValue(listenerTarget, 'addEventListener');
  tools_each(eventNames, function (eventName) {
    add.call(eventTarget, eventName, wrappedListener, options);
  });
  var stop = function stop() {
    var remove = getZoneJsOriginalValue(listenerTarget, 'removeEventListener');
    tools_each(eventNames, function (eventName) {
      remove.call(eventTarget, eventName, wrappedListener, options);
    });
  };
  return {
    stop: stop
  };
}
;// CONCATENATED MODULE: ../core/esm/report/reportObservable.js






var RawReportType = {
  intervention: 'intervention',
  deprecation: 'deprecation',
  cspViolation: 'csp_violation'
};
function initReportObservable(configuration, apis) {
  var observables = [];
  if (includes(apis, RawReportType.cspViolation)) {
    observables.push(createCspViolationReportObservable(configuration));
  }
  var reportTypes = filter(apis, function (api) {
    return api !== RawReportType.cspViolation;
  });
  if (reportTypes.length) {
    observables.push(createReportObservable(reportTypes));
  }
  return mergeObservables.apply(this, observables);
}
function createReportObservable(reportTypes) {
  return new observable_Observable(function (observable) {
    if (!window.ReportingObserver) {
      return;
    }
    var handleReports = monitor(function (reports) {
      tools_each(reports, function (report) {
        observable.notify(buildRawReportErrorFromReport(report));
      });
    });
    var observer = new window.ReportingObserver(handleReports, {
      types: reportTypes,
      buffered: true
    });
    observer.observe();
    return function () {
      observer.disconnect();
    };
  });
}
function createCspViolationReportObservable(configuration) {
  return new observable_Observable(function (observable) {
    var _addEventListener = addEventListener_addEventListener(document, DOM_EVENT.SECURITY_POLICY_VIOLATION, function (event) {
      observable.notify(buildRawReportErrorFromCspViolation(event));
    });
    return _addEventListener.stop;
  });
}
function buildRawReportErrorFromReport(report) {
  var body = report.body;
  var type = report.type;
  return buildRawReportError({
    type: body.id,
    message: type + ': ' + body.message,
    originalError: report,
    stack: buildStack(body.id, body.message, body.sourceFile, body.lineNumber, body.columnNumber)
  });
}
function buildRawReportError(partial) {
  return tools_assign({
    startClocks: tools_clocksNow(),
    source: ErrorSource.REPORT,
    handling: ErrorHandling.UNHANDLED
  }, partial);
}
function buildRawReportErrorFromCspViolation(event) {
  var message = "'" + event.blockedURI + "' blocked by '" + event.effectiveDirective + "' directive";
  return buildRawReportError({
    type: event.effectiveDirective,
    message: RawReportType.cspViolation + ': ' + message,
    originalError: event,
    csp: {
      disposition: event.disposition
    },
    stack: buildStack(event.effectiveDirective, event.originalPolicy ? "".concat(message, " of the policy \"").concat(safeTruncate(event.originalPolicy, 100, '...'), "\"") : 'no policy', event.sourceFile, event.lineNumber, event.columnNumber)
  });
}
function buildStack(name, message, sourceFile, lineNumber, columnNumber) {
  return sourceFile && toStackTraceString({
    name: name,
    message: message,
    stack: [{
      func: '?',
      url: sourceFile,
      line: lineNumber,
      column: columnNumber
    }]
  });
}
;// CONCATENATED MODULE: ../core/esm/helper/lifeCycle.js

var LifeCycleEventType = {
  AUTO_ACTION_COMPLETED: 'AUTO_ACTION_COMPLETED',
  BEFORE_VIEW_CREATED: 'BEFORE_VIEW_CREATED',
  VIEW_CREATED: 'VIEW_CREATED',
  VIEW_UPDATED: 'VIEW_UPDATED',
  BEFORE_VIEW_UPDATED: 'BEFORE_VIEW_UPDATED',
  VIEW_ENDED: 'VIEW_ENDED',
  AFTER_VIEW_ENDED: 'AFTER_VIEW_ENDED',
  SESSION_RENEWED: 'SESSION_RENEWED',
  SESSION_EXPIRED: 'SESSION_EXPIRED',
  PAGE_EXITED: 'PAGE_EXITED',
  REQUEST_STARTED: 'REQUEST_STARTED',
  REQUEST_COMPLETED: 'REQUEST_COMPLETED',
  RAW_RUM_EVENT_COLLECTED: 'RAW_RUM_EVENT_COLLECTED',
  RUM_EVENT_COLLECTED: 'RUM_EVENT_COLLECTED',
  RAW_ERROR_COLLECTED: 'RAW_ERROR_COLLECTED',
  RAW_LOG_COLLECTED: 'RAW_LOG_COLLECTED',
  LOG_COLLECTED: 'LOG_COLLECTED'
};
function LifeCycle() {
  this.callbacks = {};
}
LifeCycle.prototype = {
  notify: function notify(eventType, data) {
    var eventCallbacks = this.callbacks[eventType];
    if (eventCallbacks) {
      tools_each(eventCallbacks, function (callback) {
        callback(data);
      });
    }
  },
  subscribe: function subscribe(eventType, callback) {
    if (!this.callbacks[eventType]) {
      this.callbacks[eventType] = [];
    }
    this.callbacks[eventType].push(callback);
    var _this = this;
    return {
      unsubscribe: function unsubscribe() {
        _this.callbacks[eventType] = filter(_this.callbacks[eventType], function (other) {
          return other !== callback;
        });
      }
    };
  }
};
;// CONCATENATED MODULE: ../core/esm/helper/limitModification.js
function _toArray(r) {
  return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}


function limitModification(object, modifiableFieldPaths, modifier) {
  var clone = deepClone(object);
  var result = modifier(clone);
  objectEntries(modifiableFieldPaths).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      fieldPath = _ref2[0],
      fieldType = _ref2[1];
    return (
      // Traverse both object and clone simultaneously up to the path and apply the modification from the clone to the original object when the type is valid
      setValueAtPath(object, clone, fieldPath.split(/\.|(?=\[\])/), fieldType)
    );
  });
  return result;
}
function setValueAtPath(object, clone, pathSegments, fieldType) {
  var _pathSegments = _toArray(pathSegments),
    field = _pathSegments[0],
    restPathSegments = _pathSegments.slice(1);
  if (field === '[]') {
    if (Array.isArray(object) && Array.isArray(clone)) {
      object.forEach(function (item, i) {
        return setValueAtPath(item, clone[i], restPathSegments, fieldType);
      });
    }
    return;
  }
  if (!isValidObject(object) || !isValidObject(clone)) {
    return;
  }
  if (restPathSegments.length > 0) {
    return setValueAtPath(object[field], clone[field], restPathSegments, fieldType);
  }
  setNestedValue(object, field, clone[field], fieldType);
}
function setNestedValue(object, field, value, fieldType) {
  var newType = getType(value);
  if (newType === fieldType) {
    object[field] = sanitize(value);
  } else if (fieldType === 'object' && (newType === 'undefined' || newType === 'null')) {
    object[field] = {};
  }
}
function isValidObject(object) {
  return getType(object) === 'object';
}
;// CONCATENATED MODULE: ../core/esm/helper/createEventRateLimiter.js



function createEventRateLimiter(eventType, limit, onLimitReached) {
  var eventCount = 0;
  var allowNextEvent = false;
  return {
    isLimitReached: function isLimitReached() {
      if (eventCount === 0) {
        timer_setTimeout(function () {
          eventCount = 0;
        }, ONE_MINUTE);
      }
      eventCount += 1;
      if (eventCount <= limit || allowNextEvent) {
        allowNextEvent = false;
        return false;
      }
      if (eventCount === limit + 1) {
        allowNextEvent = true;
        try {
          onLimitReached({
            message: 'Reached max number of ' + eventType + 's by minute: ' + limit,
            source: errorTools_ErrorSource.AGENT,
            startClocks: tools_clocksNow()
          });
        } finally {
          allowNextEvent = false;
        }
      }
      return true;
    }
  };
}
;// CONCATENATED MODULE: ../core/esm/helper/urlPolyfill.js

function urlPolyfill_normalizeUrl(url) {
  return buildUrl(url, getLocationOrigin()).href;
}
function isValidUrl(url) {
  try {
    return !!buildUrl(url);
  } catch (e) {
    return false;
  }
}

// export function haveSameOrigin(url1, url2) {
//   return getOrigin(url1) === getOrigin(url2)
// }

function urlPolyfill_getOrigin(url) {
  return getLinkElementOrigin(buildUrl(url));
}
function getPathName(url) {
  var pathname = buildUrl(url).pathname;
  return pathname[0] === '/' ? pathname : '/' + pathname;
}
function getSearch(url) {
  return buildUrl(url).search;
}
function getHash(url) {
  return buildUrl(url).hash;
}
function buildUrl(url, base) {
  if (checkURLSupported()) {
    return base !== undefined ? new URL(url, base) : new URL(url);
  }
  if (base === undefined && !/:/.test(url)) {
    throw new Error('Invalid URL: ' + url);
  }
  var doc = document;
  var anchorElement = doc.createElement('a');
  if (base !== undefined) {
    doc = document.implementation.createHTMLDocument('');
    var baseElement = doc.createElement('base');
    baseElement.href = base;
    doc.head.appendChild(baseElement);
    doc.body.appendChild(anchorElement);
  }
  anchorElement.href = url;
  return anchorElement;
}
var isURLSupported;
function checkURLSupported() {
  if (isURLSupported !== undefined) {
    return isURLSupported;
  }
  try {
    var url = new URL('http://test/path');
    isURLSupported = url.href === 'http://test/path';
    return isURLSupported;
  } catch (e) {
    isURLSupported = false;
  }
  return isURLSupported;
}
;// CONCATENATED MODULE: ../core/esm/helper/mobileUtil.js
var userAgent = navigator.userAgent.toLowerCase();
var isAndroid = function isAndroid() {
  return /android/.test(userAgent);
};
var isIos = function isIos() {
  return /iphone os/.test(userAgent);
};
var JsBirdge = function JsBirdge() {
  this.bridge = window['FTWebViewJavascriptBridge'];
  this.tagMaps = {};
  window.mapWebViewCallBack = {};
  try {
    this.initBridge();
  } catch (err) {}
};
JsBirdge.prototype = {
  initBridge: function initBridge() {
    var _this = this;
    if (isIos()) {
      if (!_this.bridge) {
        if (window.WVJBCallbacks) {
          window.WVJBCallbacks.push(function (bridge) {
            _this.bridge = bridge;
          });
          return;
        } else {
          window.WVJBCallbacks = [function (bridge) {
            _this.bridge = bridge;
            return;
          }];
          var WVJBIframe = document.createElement('iframe');
          WVJBIframe.style.display = 'none';
          WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
          document.documentElement.appendChild(WVJBIframe);
          setTimeout(function () {
            document.documentElement.removeChild(WVJBIframe);
          }, 0);
        }
      }
    }
  },
  sendEvent: function sendEvent(params, callback) {
    if (typeof params === 'undefined') {
      params = {};
    }
    var _this = this;
    var tag = 'Unique id:' + new Date().getTime();
    if (params.name) {
      _this.tagMaps[params.name] = tag;
      window.mapWebViewCallBack[tag] = function (ret, err) {
        return Promise.resolve(ret, err);
      };
      params['_tag'] = tag;
      try {
        if (isIos()) {
          _this.bridge.callHandler('sendEvent', JSON.stringify(params), 'mapWebViewCallBack');
        } else {
          _this.bridge.sendEvent(JSON.stringify(params), 'mapWebViewCallBack');
        }
      } catch (err) {}
    } else {
      callback({
        error: '请传入发送事件的名称！！'
      });
    }
  },
  addEventListener: function addEventListener(params, callback) {
    var tag = 'Unique id:' + new Date().getTime();
    var _this = this;
    if (params.name) {
      _this.tagMaps[params.name] = tag;
      window.mapWebViewCallBack[tag] = function (ret, err) {
        callback(ret, err);
        return;
      };
      params['_tag'] = tag;
      try {
        if (isIos()) {
          _this.bridge.callHandler('addEventListener', JSON.stringify(params), 'mapWebViewCallBack');
        } else {
          _this.bridge.addEventListener(JSON.stringify(params), 'mapWebViewCallBack');
        }
      } catch (err) {}
    } else {
      callback({
        error: '请传入监听事件的名称！！'
      });
    }
  }
};
var JsBirdge = JsBirdge;
;// CONCATENATED MODULE: ../core/esm/helper/requestIdleCallback.js




/**
 * 'requestIdleCallback' with a shim.
 */
function requestIdleCallback(callback, opts) {
  // Note: check both 'requestIdleCallback' and 'cancelIdleCallback' existence because some polyfills only implement 'requestIdleCallback'.
  if (window.requestIdleCallback && window.cancelIdleCallback) {
    var id = window.requestIdleCallback(monitor(callback), opts);
    return function () {
      return window.cancelIdleCallback(id);
    };
  }
  return requestIdleCallbackShim(callback);
}
var MAX_TASK_TIME = 50;

/*
 * Shim from https://developer.chrome.com/blog/using-requestidlecallback#checking_for_requestidlecallback
 * Note: there is no simple way to support the "timeout" option, so we ignore it.
 */
function requestIdleCallbackShim(callback) {
  var start = dateNow();
  var timeoutId = timer_setTimeout(function () {
    callback({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, MAX_TASK_TIME - (dateNow() - start));
      }
    });
  }, 0);
  return function () {
    return timer_clearTimeout(timeoutId);
  };
}
;// CONCATENATED MODULE: ../core/esm/helper/taskQueue.js



/**
 * Maximum delay before starting to execute tasks in the queue. We don't want to wait too long
 * before running tasks, as it might hurt reliability (ex: if the user navigates away, we might lose
 * the opportunity to send some data). We also don't want to run tasks too often, as it might hurt
 * performance.
 */
var IDLE_CALLBACK_TIMEOUT = ONE_SECOND;

/**
 * Maximum amount of time allocated to running tasks when a timeout (`IDLE_CALLBACK_TIMEOUT`) is
 * reached. We should not run tasks for too long as it will hurt performance, but we should still
 * run some tasks to avoid postponing them forever.
 *
 * Rational: Running tasks for 30ms every second (IDLE_CALLBACK_TIMEOUT) should be acceptable.
 */
var MAX_EXECUTION_TIME_ON_TIMEOUT = 30;
function createTaskQueue() {
  var pendingTasks = [];
  function run(deadline) {
    var executionTimeRemaining;
    if (deadline.didTimeout) {
      var start = performance.now();
      executionTimeRemaining = function executionTimeRemaining() {
        return MAX_EXECUTION_TIME_ON_TIMEOUT - (performance.now() - start);
      };
    } else {
      executionTimeRemaining = deadline.timeRemaining.bind(deadline);
    }
    while (executionTimeRemaining() > 0 && pendingTasks.length) {
      pendingTasks.shift()();
    }
    if (pendingTasks.length) {
      scheduleNextRun();
    }
  }
  function scheduleNextRun() {
    requestIdleCallback(run, {
      timeout: IDLE_CALLBACK_TIMEOUT
    });
  }
  return {
    push: function push(task) {
      if (pendingTasks.push(task) === 1) {
        scheduleNextRun();
      }
    }
  };
}
;// CONCATENATED MODULE: ../core/esm/configuration/transportConfiguration.js

var TRIM_REGIX = /^\s+|\s+$/g;
var typeMap = {
  rum: '/rum',
  log: '/logging',
  sessionReplay: '/rum/replay'
};
function getEndPointUrl(configuration, type) {
  // type: rum, log,replay
  var subUrl = typeMap[type];
  if (!subUrl) return '';
  var url = configuration.datakitOrigin || configuration.datakitUrl || configuration.site;
  if (url.indexOf('/') === 0) {
    // 绝对路径这种 /xxx
    url = location.origin + trim(url);
  }
  var endpoint = url;
  if (url.lastIndexOf('/') === url.length - 1) {
    endpoint = trim(url) + 'v1/write' + subUrl;
  } else {
    endpoint = trim(url) + '/v1/write' + subUrl;
  }
  if (configuration.site && configuration.clientToken) {
    endpoint = endpoint + '?token=' + configuration.clientToken + '&to_headless=true';
  }
  return endpoint;
}
function trim(str) {
  return str.replace(TRIM_REGIX, '');
}
function computeTransportConfiguration(initConfiguration) {
  var isIntakeUrl = function isIntakeUrl(url) {
    return false;
  };
  if ('isIntakeUrl' in initConfiguration && isFunction(initConfiguration.isIntakeUrl) && isBoolean(initConfiguration.isIntakeUrl())) {
    isIntakeUrl = initConfiguration.isIntakeUrl;
  }
  var isServerError = function isServerError(request) {
    return false;
  };
  if ('isServerError' in initConfiguration && isFunction(initConfiguration.isServerError) && isBoolean(initConfiguration.isServerError())) {
    isServerError = initConfiguration.isServerError;
  }
  return {
    rumEndpoint: getEndPointUrl(initConfiguration, 'rum'),
    logsEndpoint: getEndPointUrl(initConfiguration, 'log'),
    sessionReplayEndPoint: getEndPointUrl(initConfiguration, 'sessionReplay'),
    isIntakeUrl: isIntakeUrl,
    isServerError: isServerError
  };
}
function isIntakeRequest(url, configuration) {
  var notTakeRequest = [configuration.rumEndpoint];
  if (configuration.logsEndpoint) {
    notTakeRequest.push(configuration.logsEndpoint);
  }
  if (configuration.sessionReplayEndPoint) {
    notTakeRequest.push(configuration.sessionReplayEndPoint);
  }
  // datakit 地址，log 地址，以及客户自定义过滤方法定义url
  return some(notTakeRequest, function (takeUrl) {
    return url.indexOf(takeUrl) === 0;
  }) || configuration.isIntakeUrl(url);
}
;// CONCATENATED MODULE: ../core/esm/browser/cookie.js

function getCookieName(name, options) {
  return "".concat(name, "_").concat(options && options.crossSite ? 'cs1' : 'cs0', "_").concat(options && options.domain ? 'd1' : 'd0', "_").concat(options && options.secure ? 'sec1' : 'sec0', "_").concat(options && options.partitioned ? 'part1' : 'part0');
}
function setCookie(name, value, expireDelay, options) {
  var date = new Date();
  date.setTime(date.getTime() + expireDelay);
  var expires = 'expires=' + date.toUTCString();
  var sameSite = options && options.crossSite ? 'none' : 'strict';
  var domain = options && options.domain ? ';domain=' + options.domain : '';
  var secure = options && options.secure ? ';secure' : '';
  var partitioned = options && options.partitioned ? ';partitioned' : '';
  document.cookie = getCookieName(name, options) + '=' + value + ';' + expires + ';path=/;samesite=' + sameSite + domain + secure + partitioned;
}
function cookie_getCookie(name, options) {
  return findCommaSeparatedValue(document.cookie, getCookieName(name, options));
}
var initCookieParsed;
/**
 * Returns a cached value of the cookie. Use this during SDK initialization (and whenever possible)
 * to avoid accessing document.cookie multiple times.
 */
function getInitCookie(name) {
  if (!initCookieParsed) {
    initCookieParsed = findCommaSeparatedValues(document.cookie);
  }
  return initCookieParsed.get(name);
}
function resetInitCookies() {
  initCookieParsed = undefined;
}
function deleteCookie(name, options) {
  setCookie(name, '', 0, options);
}
function areCookiesAuthorized(options) {
  if (document.cookie === undefined || document.cookie === null) {
    return false;
  }
  try {
    // Use a unique cookie name to avoid issues when the SDK is initialized multiple times during
    // the test cookie lifetime
    var testCookieName = "gc_cookie_test_".concat(UUID());
    var testCookieValue = 'test';
    setCookie(testCookieName, testCookieValue, ONE_MINUTE, options);
    var isCookieCorrectlySet = cookie_getCookie(testCookieName, options) === testCookieValue;
    deleteCookie(testCookieName, options);
    return isCookieCorrectlySet;
  } catch (error) {
    return false;
  }
}

/**
 * No API to retrieve it, number of levels for subdomain and suffix are unknown
 * strategy: find the minimal domain on which cookies are allowed to be set
 * https://web.dev/same-site-same-origin/#site
 */
var getCurrentSiteCache;
function getCurrentSite() {
  if (getCurrentSiteCache === undefined) {
    // Use a unique cookie name to avoid issues when the SDK is initialized multiple times during
    // the test cookie lifetime
    var testCookieName = "gc_site_test_".concat(UUID());
    var testCookieValue = 'test';
    var domainLevels = window.location.hostname.split('.');
    var candidateDomain = domainLevels.pop();
    while (domainLevels.length && !cookie_getCookie(testCookieName, {
      domain: candidateDomain
    })) {
      candidateDomain = "".concat(domainLevels.pop(), ".").concat(candidateDomain);
      setCookie(testCookieName, testCookieValue, ONE_SECOND, {
        domain: candidateDomain
      });
    }
    deleteCookie(testCookieName, {
      domain: candidateDomain
    });
    getCurrentSiteCache = candidateDomain;
  }
  return getCurrentSiteCache;
}
;// CONCATENATED MODULE: ../core/esm/session/sessionConstants.js

var SESSION_TIME_OUT_DELAY = 4 * ONE_HOUR;
var SESSION_EXPIRATION_DELAY = 15 * ONE_MINUTE;
var SESSION_STORE_KEY = '_gc_s';
;// CONCATENATED MODULE: ../core/esm/session/sessionState.js
function sessionState_slicedToArray(r, e) {
  return sessionState_arrayWithHoles(r) || sessionState_iterableToArrayLimit(r, e) || sessionState_unsupportedIterableToArray(r, e) || sessionState_nonIterableRest();
}
function sessionState_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function sessionState_unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return sessionState_arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? sessionState_arrayLikeToArray(r, a) : void 0;
  }
}
function sessionState_arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function sessionState_iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function sessionState_arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}


var SESSION_ENTRY_REGEXP = /^([a-zA-Z]+)=([a-z0-9-]+)$/;
var SESSION_ENTRY_SEPARATOR = '&';
var EXPIRED = '1';
function getExpiredSessionState() {
  return {
    isExpired: EXPIRED
  };
}
function isSessionInNotStartedState(session) {
  return isEmptyObject(session);
}
function isSessionStarted(session) {
  return !isSessionInNotStartedState(session);
}
function isSessionInExpiredState(session) {
  return session.isExpired !== undefined || !isActiveSession(session);
}
function isActiveSession(sessionState) {
  return (sessionState.created === undefined || dateNow() - Number(sessionState.created) < SESSION_TIME_OUT_DELAY) && (sessionState.expire === undefined || dateNow() < Number(sessionState.expire));
}
function expandSessionState(session) {
  session.expire = String(dateNow() + SESSION_EXPIRATION_DELAY);
}
function toSessionString(session) {
  return tools_map(objectEntries(session), function (item) {
    return item[0] + '=' + item[1];
  }).join(SESSION_ENTRY_SEPARATOR);
}
function toSessionState(sessionString) {
  var session = {};
  if (isValidSessionString(sessionString)) {
    sessionString.split(SESSION_ENTRY_SEPARATOR).forEach(function (entry) {
      var matches = SESSION_ENTRY_REGEXP.exec(entry);
      if (matches !== null) {
        var _matches = sessionState_slicedToArray(matches, 3),
          key = _matches[1],
          value = _matches[2];
        session[key] = value;
      }
    });
  }
  return session;
}
function isValidSessionString(sessionString) {
  return !!sessionString && (sessionString.indexOf(SESSION_ENTRY_SEPARATOR) !== -1 || SESSION_ENTRY_REGEXP.test(sessionString));
}
;// CONCATENATED MODULE: ../core/esm/session/sessionInCookie.js




function selectCookieStrategy(initConfiguration) {
  var cookieOptions = buildCookieOptions(initConfiguration);
  return areCookiesAuthorized(cookieOptions) ? {
    type: 'Cookie',
    cookieOptions: cookieOptions
  } : undefined;
}
function initCookieStrategy(cookieOptions) {
  var cookieStore = {
    /**
     * Lock strategy allows mitigating issues due to concurrent access to cookie.
     * This issue concerns only chromium browsers and enabling this on firefox increases cookie write failures.
     */
    isLockEnabled: isChromium(),
    persistSession: persistSessionCookie(cookieOptions),
    retrieveSession: retrieveSessionCookie(cookieOptions),
    expireSession: function expireSession() {
      return expireSessionCookie(cookieOptions);
    }
  };
  return cookieStore;
}
function persistSessionCookie(options) {
  return function (session) {
    setCookie(SESSION_STORE_KEY, toSessionString(session), SESSION_EXPIRATION_DELAY, options);
  };
}
function expireSessionCookie(options) {
  setCookie(SESSION_STORE_KEY, toSessionString(getExpiredSessionState()), SESSION_TIME_OUT_DELAY, options);
}
function retrieveSessionCookie(options) {
  return function () {
    var sessionString = cookie_getCookie(SESSION_STORE_KEY, options);
    return toSessionState(sessionString);
  };
}
function buildCookieOptions(initConfiguration) {
  var cookieOptions = {};
  cookieOptions.secure = !!initConfiguration.useSecureSessionCookie || !!initConfiguration.usePartitionedCrossSiteSessionCookie || !!initConfiguration.useCrossSiteSessionCookie;
  cookieOptions.crossSite = !!initConfiguration.usePartitionedCrossSiteSessionCookie || !!initConfiguration.useCrossSiteSessionCookie;
  cookieOptions.partitioned = !!initConfiguration.usePartitionedCrossSiteSessionCookie;
  if (initConfiguration.trackSessionAcrossSubdomains) {
    cookieOptions.domain = getCurrentSite();
  }
  return cookieOptions;
}
;// CONCATENATED MODULE: ../core/esm/session/sessionInLocalStorage.js



var LOCAL_STORAGE_TEST_KEY = '_gc_test_';
function selectLocalStorageStrategy() {
  try {
    var id = UUID();
    var testKey = "".concat(LOCAL_STORAGE_TEST_KEY).concat(id);
    localStorage.setItem(testKey, id);
    var retrievedId = localStorage.getItem(testKey);
    localStorage.removeItem(testKey);
    return id === retrievedId ? {
      type: 'LocalStorage'
    } : undefined;
  } catch (e) {
    return undefined;
  }
}
function initLocalStorageStrategy() {
  return {
    isLockEnabled: false,
    persistSession: persistInLocalStorage,
    retrieveSession: retrieveSessionFromLocalStorage,
    expireSession: expireSessionFromLocalStorage
  };
}
function persistInLocalStorage(sessionState) {
  localStorage.setItem(SESSION_STORE_KEY, toSessionString(sessionState));
}
function retrieveSessionFromLocalStorage() {
  var sessionString = localStorage.getItem(SESSION_STORE_KEY);
  return toSessionState(sessionString);
}
function expireSessionFromLocalStorage() {
  persistInLocalStorage(getExpiredSessionState());
}
;// CONCATENATED MODULE: ../core/esm/session/sessionStoreOperations.js



var LOCK_RETRY_DELAY = 10;
var LOCK_MAX_TRIES = 100;
var bufferedOperations = [];
var ongoingOperations;
function processSessionStoreOperations(operations, sessionStoreStrategy) {
  var numberOfRetries = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var isLockEnabled = sessionStoreStrategy.isLockEnabled,
    persistSession = sessionStoreStrategy.persistSession,
    expireSession = sessionStoreStrategy.expireSession;
  var persistWithLock = function persistWithLock(session) {
    return persistSession(tools_assign({}, session, {
      lock: currentLock
    }));
  };
  var retrieveStore = function retrieveStore() {
    var session = sessionStoreStrategy.retrieveSession();
    var lock = session.lock;
    if (session.lock) {
      delete session.lock;
    }
    return {
      session: session,
      lock: lock
    };
  };
  if (!ongoingOperations) {
    ongoingOperations = operations;
  }
  if (operations !== ongoingOperations) {
    bufferedOperations.push(operations);
    return;
  }
  if (isLockEnabled && numberOfRetries >= LOCK_MAX_TRIES) {
    next(sessionStoreStrategy);
    return;
  }
  var currentLock;
  var currentStore = retrieveStore();
  if (isLockEnabled) {
    // if someone has lock, retry later
    if (currentStore.lock) {
      retryLater(operations, sessionStoreStrategy, numberOfRetries);
      return;
    }
    // acquire lock
    currentLock = UUID();
    persistWithLock(currentStore.session);
    // if lock is not acquired, retry later
    currentStore = retrieveStore();
    if (currentStore.lock !== currentLock) {
      retryLater(operations, sessionStoreStrategy, numberOfRetries);
      return;
    }
  }
  var processedSession = operations.process(currentStore.session);
  if (isLockEnabled) {
    // if lock corrupted after process, retry later
    currentStore = retrieveStore();
    if (currentStore.lock !== currentLock) {
      retryLater(operations, sessionStoreStrategy, numberOfRetries);
      return;
    }
  }
  if (processedSession) {
    if (isSessionInExpiredState(processedSession)) {
      expireSession();
    } else {
      expandSessionState(processedSession);
      isLockEnabled ? persistWithLock(processedSession) : persistSession(processedSession);
    }
  }
  if (isLockEnabled) {
    // correctly handle lock around expiration would require to handle this case properly at several levels
    // since we don't have evidence of lock issues around expiration, let's just not do the corruption check for it
    if (!(processedSession && isSessionInExpiredState(processedSession))) {
      // if lock corrupted after persist, retry later
      currentStore = retrieveStore();
      if (currentStore.lock !== currentLock) {
        retryLater(operations, sessionStoreStrategy, numberOfRetries);
        return;
      }
      persistSession(currentStore.session);
      processedSession = currentStore.session;
    }
  }
  // call after even if session is not persisted in order to perform operations on
  // up-to-date session state value => the value could have been modified by another tab
  if (operations.after) {
    operations.after(processedSession || currentStore.session);
  }
  next(sessionStoreStrategy);
}
function retryLater(operations, sessionStore, currentNumberOfRetries) {
  timer_setTimeout(function () {
    processSessionStoreOperations(operations, sessionStore, currentNumberOfRetries + 1);
  }, LOCK_RETRY_DELAY);
}
function next(sessionStore) {
  ongoingOperations = undefined;
  var nextOperations = bufferedOperations.shift();
  if (nextOperations) {
    processSessionStoreOperations(nextOperations, sessionStore);
  }
}
;// CONCATENATED MODULE: ../core/esm/session/sessionStore.js








/**
 * Every second, the storage will be polled to check for any change that can occur
 * to the session state in another browser tab, or another window.
 * This value has been determined from our previous cookie-only implementation.
 */
var STORAGE_POLL_DELAY = ONE_SECOND;

/**
 * Checks if cookies are available as the preferred storage
 * Else, checks if LocalStorage is allowed and available
 */
function selectSessionStoreStrategyType(initConfiguration) {
  var sessionStoreStrategyType = selectCookieStrategy(initConfiguration);
  if (!sessionStoreStrategyType && initConfiguration.allowFallbackToLocalStorage) {
    sessionStoreStrategyType = selectLocalStorageStrategy();
  }
  return sessionStoreStrategyType;
}

/**
 * Different session concepts:
 * - tracked, the session has an id and is updated along the user navigation
 * - not tracked, the session does not have an id but it is updated along the user navigation
 * - inactive, no session in store or session expired, waiting for a renew session
 */
function startSessionStore(sessionStoreStrategyType, productKey, computeSessionState) {
  var renewObservable = new observable_Observable();
  var expireObservable = new observable_Observable();
  var sessionStateUpdateObservable = new observable_Observable();
  var sessionStoreStrategy = sessionStoreStrategyType.type === 'Cookie' ? initCookieStrategy(sessionStoreStrategyType.cookieOptions) : initLocalStorageStrategy();
  var expireSession = sessionStoreStrategy.expireSession;
  var watchSessionTimeoutId = timer_setInterval(watchSession, STORAGE_POLL_DELAY);
  var sessionCache;
  startSession();
  var _throttle = throttle(function () {
      processSessionStoreOperations({
        process: function process(sessionState) {
          if (isSessionInNotStartedState(sessionState)) {
            return;
          }
          var synchronizedSession = synchronizeSession(sessionState);
          expandOrRenewSessionState(synchronizedSession);
          return synchronizedSession;
        },
        after: function after(sessionState) {
          if (isSessionStarted(sessionState) && !hasSessionInCache()) {
            renewSessionInCache(sessionState);
          }
          sessionCache = sessionState;
        }
      }, sessionStoreStrategy);
    }, STORAGE_POLL_DELAY),
    throttledExpandOrRenewSession = _throttle.throttled,
    cancelExpandOrRenewSession = _throttle.cancel;
  function expandSession() {
    processSessionStoreOperations({
      process: function process(sessionState) {
        return hasSessionInCache() ? synchronizeSession(sessionState) : undefined;
      }
    }, sessionStoreStrategy);
  }

  /**
   * allows two behaviors:
   * - if the session is active, synchronize the session cache without updating the session store
   * - if the session is not active, clear the session store and expire the session cache
   */
  function watchSession() {
    processSessionStoreOperations({
      process: function process(sessionState) {
        return isSessionInExpiredState(sessionState) ? getExpiredSessionState() : undefined;
      },
      after: synchronizeSession
    }, sessionStoreStrategy);
  }
  function synchronizeSession(sessionState) {
    if (isSessionInExpiredState(sessionState)) {
      sessionState = getExpiredSessionState();
    }
    if (hasSessionInCache()) {
      if (isSessionInCacheOutdated(sessionState)) {
        expireSessionInCache();
      } else {
        sessionStateUpdateObservable.notify({
          previousState: sessionCache,
          newState: sessionState
        });
        sessionCache = sessionState;
      }
    }
    return sessionState;
  }
  function startSession() {
    processSessionStoreOperations({
      process: function process(sessionState) {
        if (isSessionInNotStartedState(sessionState)) {
          return getExpiredSessionState();
        }
      },
      after: function after(sessionState) {
        sessionCache = sessionState;
      }
    }, sessionStoreStrategy);
  }
  function expandOrRenewSessionState(sessionState) {
    if (isSessionInNotStartedState(sessionState)) {
      return false;
    }
    var _computeSessionState = computeSessionState(sessionState[productKey]),
      trackingType = _computeSessionState.trackingType,
      isTracked = _computeSessionState.isTracked;
    sessionState[productKey] = trackingType;
    delete sessionState.isExpired;
    if (isTracked && !sessionState.id) {
      sessionState.id = UUID();
      sessionState.created = String(dateNow());
    }
  }
  function hasSessionInCache() {
    return sessionCache[productKey] !== undefined;
  }
  function isSessionInCacheOutdated(sessionState) {
    return sessionCache.id !== sessionState.id || sessionCache[productKey] !== sessionState[productKey];
  }
  function expireSessionInCache() {
    sessionCache = getExpiredSessionState();
    expireObservable.notify();
  }
  function renewSessionInCache(sessionState) {
    sessionCache = sessionState;
    renewObservable.notify();
  }
  function updateSessionState(partialSessionState) {
    processSessionStoreOperations({
      process: function process(sessionState) {
        return tools_assign({}, sessionState, partialSessionState);
      },
      after: synchronizeSession
    }, sessionStoreStrategy);
  }
  return {
    expandOrRenewSession: throttledExpandOrRenewSession,
    expandSession: expandSession,
    getSession: function getSession() {
      return sessionCache;
    },
    renewObservable: renewObservable,
    expireObservable: expireObservable,
    sessionStateUpdateObservable: sessionStateUpdateObservable,
    restartSession: startSession,
    expire: function expire() {
      cancelExpandOrRenewSession();
      expireSession();
      synchronizeSession(getExpiredSessionState());
    },
    stop: function stop() {
      timer_clearInterval(watchSessionTimeoutId);
    },
    updateSessionState: updateSessionState
  };
}
;// CONCATENATED MODULE: ../core/esm/configuration/configuration.js






var DefaultPrivacyLevel = {
  ALLOW: 'allow',
  MASK: 'mask',
  MASK_USER_INPUT: 'mask-user-input'
};
function validateAndBuildConfiguration(initConfiguration) {
  if (initConfiguration.sampleRate !== undefined && !isPercentage(initConfiguration.sampleRate)) {
    display_display.error('Sample Rate should be a number between 0 and 100');
    return;
  }
  if (initConfiguration.sessionSampleRate !== undefined && !isPercentage(initConfiguration.sessionSampleRate)) {
    display_display.error('Sample Rate should be a number between 0 and 100');
    return;
  }
  if (initConfiguration.telemetrySampleRate !== undefined && !isPercentage(initConfiguration.telemetrySampleRate)) {
    display_display.error('Telemetry Sample Rate should be a number between 0 and 100');
    return;
  }
  var sessionSampleRate = tools_isNullUndefinedDefaultValue(initConfiguration.sessionSampleRate, initConfiguration.sampleRate);
  return tools_assign({
    beforeSend: initConfiguration.beforeSend && catchUserErrors_catchUserErrors(initConfiguration.beforeSend, 'beforeSend threw an error:'),
    sessionStoreStrategyType: selectSessionStoreStrategyType(initConfiguration),
    sessionSampleRate: tools_isNullUndefinedDefaultValue(sessionSampleRate, 100),
    service: initConfiguration.service,
    version: initConfiguration.version,
    env: initConfiguration.env,
    telemetrySampleRate: tools_isNullUndefinedDefaultValue(initConfiguration.telemetrySampleRate, 100),
    telemetryEnabled: tools_isNullUndefinedDefaultValue(initConfiguration.telemetryEnabled, false),
    silentMultipleInit: !!initConfiguration.silentMultipleInit,
    /**
     * beacon payload max queue size implementation is 64kb
     * ensure that we leave room for logs, rum and potential other users
     */
    batchBytesLimit: 16 * ONE_KIBI_BYTE,
    eventRateLimiterThreshold: 3000,
    maxTelemetryEventsPerPage: 15,
    /**
     * flush automatically, aim to be lower than ALB connection timeout
     * to maximize connection reuse.
     */
    flushTimeout: 30 * ONE_SECOND,
    /**
     * Logs intake limit
     */
    batchMessagesLimit: 50,
    messageBytesLimit: 256 * ONE_KIBI_BYTE,
    resourceUrlLimit: 5 * ONE_KIBI_BYTE,
    storeContextsToLocal: !!initConfiguration.storeContextsToLocal,
    // 存储到localstorage key ，默认不填，自动生成
    storeContextsKey: initConfiguration.storeContextsKey,
    sendContentTypeByJson: !!initConfiguration.sendContentTypeByJson,
    retryMaxSize: tools_isNullUndefinedDefaultValue(initConfiguration.retryMaxSize, -1)
  }, computeTransportConfiguration(initConfiguration));
}
function validatePostRequestRequireParamsConfiguration(initConfiguration) {
  if (!initConfiguration.site && !initConfiguration.datakitOrigin && !initConfiguration.datakitUrl) {
    display_display.error('datakitOrigin or site is not configured, no RUM data will be collected.');
    return false;
  }
  //   if (!initConfiguration.datakitUrl && !initConfiguration.datakitOrigin) {
  //     display.error(
  //       'datakitOrigin is not configured, no RUM data will be collected.'
  //     )
  //     return false
  //   }
  if (initConfiguration.site && !initConfiguration.clientToken) {
    display_display.error('clientToken is not configured, no RUM data will be collected.');
    return false;
  }
  return true;
}
;// CONCATENATED MODULE: ../core/esm/configuration/remoteConfiguration.js
function remoteConfiguration_typeof(o) {
  "@babel/helpers - typeof";

  return remoteConfiguration_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, remoteConfiguration_typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == remoteConfiguration_typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != remoteConfiguration_typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != remoteConfiguration_typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function remoteConfiguration_slicedToArray(r, e) {
  return remoteConfiguration_arrayWithHoles(r) || remoteConfiguration_iterableToArrayLimit(r, e) || remoteConfiguration_unsupportedIterableToArray(r, e) || remoteConfiguration_nonIterableRest();
}
function remoteConfiguration_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function remoteConfiguration_unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return remoteConfiguration_arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? remoteConfiguration_arrayLikeToArray(r, a) : void 0;
  }
}
function remoteConfiguration_arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function remoteConfiguration_iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function remoteConfiguration_arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}




function fetchAndApplyRemoteConfiguration(initConfiguration, callback) {
  fetchRemoteConfiguration(initConfiguration, function (remoteInitConfiguration) {
    callback(applyRemoteConfiguration(initConfiguration, remoteInitConfiguration));
  });
}
/**
 * 数据上报采样率，100 表示全收集；0 表示不收集。默认 100
 */
//   sessionSampleRate?: number | undefined
//   telemetrySampleRate?: number | undefined
//   silentMultipleInit?: boolean | undefined

//   service?: string | undefined
//   /** Web 应用当前环境，如 prod：线上环境；gray：灰度环境；pre：预发布环境；common：日常环境；local：本地环境。 */
//   env?: string | undefined
//   /** Web 应用的版本号。 */
//   version?: string | undefined
//   /** 链路数据采样百分比：100 表示全收集；0 表示不收集。 */
//   tracingSampleRate?: number | undefined
//   /**
//    * @deprecated use usePartitionedCrossSiteSessionCookie instead
//    */
//   useCrossSiteSessionCookie?: boolean | undefined
//   /**
//    * 是否使用跨域 cookie，开启第三方 cookie 跨分区实现。默认不允许跨域，例如嵌套跨域 iframe 的情况。
//    */
//   usePartitionedCrossSiteSessionCookie?: boolean | undefined
//   useSecureSessionCookie?: boolean | undefined
//   trackSessionAcrossSubdomains?: boolean | undefined
//   /**
//    * 是否把公共数据存储到localstorage,默认不存储
//    */
//   storeContextsToLocal?: boolean | undefined
//   /**
//    * 定义存储到 localstorage 的 key ，默认不填，自动生成, 该参数主要是为了区分在同一个域名下，不同子路径共用store 的问题
//    */
//   storeContextsKey?: string | undefined
//   /**
//    * 数据以 application/json 的发送方式，默认text
//    */
//   sendContentTypeByJson?: boolean | undefined
//   /**
//    * 在 cookie 不可用的情况下，可以开启该选项，把数据储存到 localstorage
//    */
// allowFallbackToLocalStorage ?: boolean | undefined
//   /**
//    * 错误会话补偿采样率：
//    * - 当会话未被 `sessionSampleRate` 采样时，若会话期间发生错误，则按此比例采集
//    * 此类会话将在错误发生时开始记录事件，并持续记录直到会话结束。
//    * - 取值范围 0-100，100 表示全采错误会话，0 表示忽略错误会话
//    */
//   sessionOnErrorSampleRate?: number | undefined

//   /**
//    * Session Replay 全量采集采样率：
//    * - 用于控制所有会话重放的全量数据采集比例
//    * - 取值范围 0-100，100 表示全量采集，0 表示不采集
//    **/
//   sessionReplaySampleRate?: number | undefined

//   /** 错误会话重放补偿采样率：
//    * - 当会话未被 `sessionReplaySampleRate` 采样时，若会话期间发生错误，则按此比例采集
//    * 此类回放将记录错误发生前最多一分钟的事件，并持续记录直到会话结束。
// 100 表示全收集；0 表示不收集。
//      */
//   sessionReplayOnErrorSampleRate?: number | undefined
//   /**
//    * 是否开启用户行为采集。
//    */
//   trackUserInteractions?: boolean | undefined
//   /**
//    * 指定 action 数据 name 获取方式，默认自动获取，可以指定元素特定属性名称,alt,name,title,aria-labelledby,aria-label,data-guance-action-name 这些属性
//    */
//   actionNameAttribute?: string | undefined
//   trackViewsManually?: boolean | undefined
//   /**
//    * sessionReplay 和 compressIntakeRequests数据压缩都是在 webwork 线程中完成，所以默认情况下，需要在开启csp 安全访问的情况下，允许 worker-src blob:; workerUrl 配置允许自行托管 worker 地址
//    */
//   workerUrl?: string
//   /**
//    * 压缩 RUM 数据请求内容，以减少发送大量数据时的带宽使用量。压缩在 Worker 线程中完成。
//    */
// compressIntakeRequests ?: boolean | undefined
//    /**
//      * 配置链路追踪工具类型，如果不配置默认为 ddtrace。目前支持 ddtrace、zipkin、skywalking_v3、jaeger、zipkin_single_header、w3c_traceparent 6 种数据类型。
//      */
//     traceType?: TraceType

var modifiableFieldPaths = {
  sessionSampleRate: 'number',
  telemetrySampleRate: 'number',
  silentMultipleInit: 'boolean',
  service: 'string',
  env: 'string',
  version: 'string',
  tracingSampleRate: 'number',
  useCrossSiteSessionCookie: 'boolean',
  usePartitionedCrossSiteSessionCookie: 'boolean',
  useSecureSessionCookie: 'boolean',
  trackSessionAcrossSubdomains: 'boolean',
  storeContextsToLocal: 'boolean',
  storeContextsKey: 'string',
  sendContentTypeByJson: 'boolean',
  allowFallbackToLocalStorage: 'boolean',
  sessionOnErrorSampleRate: 'number',
  sessionReplaySampleRate: 'number',
  sessionReplayOnErrorSampleRate: 'number',
  trackUserInteractions: 'boolean',
  trackInteractions: 'boolean',
  actionNameAttribute: 'string',
  trackViewsManually: 'boolean',
  workerUrl: 'string',
  compressIntakeRequests: 'boolean',
  traceType: 'string'
};
function modificationByFieldsPath(remoteConfiguration, modifiableFieldPaths) {
  var result = {};
  objectEntries(modifiableFieldPaths).forEach(function (_ref) {
    var _ref2 = remoteConfiguration_slicedToArray(_ref, 2),
      fieldPath = _ref2[0],
      fieldType = _ref2[1];
    // const sourceValue = sourceConfiguration[fieldPath]
    var remoteValue = remoteConfiguration[fieldPath];
    if (getType(remoteValue) === fieldType) {
      result[fieldPath] = remoteValue;
    }
  });
  return result;
}
function applyRemoteConfiguration(initConfiguration, remoteInitConfiguration) {
  var simpleRemoteInitConfiguration = {};
  for (var key in remoteInitConfiguration) {
    if (remoteInitConfiguration[key] !== undefined) {
      //  ex
      //        {
      //     "R.d1b454d0_22eb_11ef_9b66_95ca11aa2c6c.sessionSampleRate": 80
      // }
      //  transform to
      // {
      //     "sessionSampleRate": 80
      // }
      var simpleKey = key.replace('R.' + initConfiguration.applicationId + '.', '');
      simpleRemoteInitConfiguration[simpleKey] = remoteInitConfiguration[key];
    }
  }
  return _objectSpread(_objectSpread({}, initConfiguration), modificationByFieldsPath(simpleRemoteInitConfiguration, modifiableFieldPaths));
}
function fetchRemoteConfiguration(configuration, callback) {
  var xhr = new XMLHttpRequest();
  addEventListener_addEventListener(xhr, 'load', function () {
    if (xhr.status === 200) {
      var remoteConfiguration = JSON.parse(xhr.responseText);
      callback(remoteConfiguration.content);
    } else {
      callback({});
      displayRemoteConfigurationFetchingError();
    }
  });
  addEventListener_addEventListener(xhr, 'error', function () {
    callback({});
    displayRemoteConfigurationFetchingError();
  });
  xhr.open('GET', buildEndpoint(configuration));
  xhr.send();
}
function buildEndpoint(configuration) {
  var url = configuration.datakitOrigin || configuration.datakitUrl || configuration.site;
  if (url.indexOf('/') === 0) {
    // 绝对路径这种 /xxx
    url = location.origin + trim(url);
  }
  var endpoint = url;
  if (url.lastIndexOf('/') === url.length - 1) {
    endpoint = trim(url) + 'v1/env_variable';
  } else {
    endpoint = trim(url) + '/v1/env_variable';
  }
  // 这里需要加上token和app_id
  endpoint += '?app_id=' + configuration.applicationId;
  //testing-openway.dataflux.cn/v1/env_variable?token=a47fb0cdddaa4561a90d941317cdbc0b&app_id=d1b454d0_22eb_11ef_9b66_95ca11aa2c6c&to_headless=true
  if (configuration.site && configuration.clientToken) {
    endpoint = endpoint + '&token=' + configuration.clientToken + '&to_headless=true';
  }
  return endpoint;
}
function displayRemoteConfigurationFetchingError() {
  display_display.error('Error fetching the remote configuration.');
}
;// CONCATENATED MODULE: ../core/esm/browser/fetchObservable.js





var fetchObservable;
function initFetchObservable() {
  if (!fetchObservable) {
    fetchObservable = createFetchObservable();
  }
  return fetchObservable;
}
function resetFetchObservable() {
  fetchObservable = undefined;
}
function createFetchObservable() {
  return new observable_Observable(function (observable) {
    if (!window.fetch) {
      return;
    }
    var fetchMethod = instrumentMethod_instrumentMethod(window, 'fetch', function (call) {
      return beforeSend(call, observable);
    }, {
      computeHandlingStack: true
    });
    return fetchMethod.stop;
  });
}
function beforeSend(params, observable) {
  var parameters = params.parameters;
  var onPostCall = params.onPostCall;
  var handlingStack = params.handlingStack;
  var input = parameters[0];
  var init = parameters[1];
  //   var method =
  //       (init && init.method) || (input instanceof Request && input.method) || 'GET'
  //     const methodFromParams =
  //       (init && init.method) || (input instanceof Request && input.method)
  //     const method = methodFromParams ? methodFromParams.toUpperCase() : 'GET'
  var methodFromParams = init && init.method;
  if (methodFromParams === undefined && input instanceof Request) {
    methodFromParams = input.method;
  }
  var method = methodFromParams !== undefined ? String(methodFromParams).toUpperCase() : 'GET';
  var url = input instanceof Request ? input.url : urlPolyfill_normalizeUrl(String(input));
  var startClocks = tools_clocksNow();
  var context = {
    state: 'start',
    init: init,
    input: input,
    method: method,
    startClocks: startClocks,
    url: url,
    handlingStack: handlingStack
  };
  observable.notify(context);
  parameters[0] = context.input;
  parameters[1] = context.init;
  onPostCall(function (responsePromise) {
    return afterSend(observable, responsePromise, context);
  });
}
function afterSend(observable, responsePromise, startContext) {
  var context = startContext;
  var reportFetch = function reportFetch(partialContext) {
    context.state = 'resolve';
    tools_assign(context, partialContext);
    // context.duration = elapsed(context.startClocks.timeStamp, timeStampNow())
    // if ('stack' in response || response instanceof Error) {
    //   context.status = 0
    //   context.isAborted =
    //     response instanceof DOMException &&
    //     response.code === DOMException.ABORT_ERR
    //   context.error = response
    // } else if ('status' in response) {
    //   context.response = response
    //   try {
    //     context.responseType =
    //       (response.constructor === Response && response.type) || '' // issue The Response type getter can only be used on instances of Response
    //   } catch (err) {
    //     context.responseType = ''
    //   }

    //   context.status = response.status
    //   context.isAborted = false
    // }
    observable.notify(context);
  };
  responsePromise.then(monitor(function (response) {
    var responseType = '';
    try {
      responseType = response.constructor === Response && response.type || ''; // issue The Response type getter can only be used on instances of Response
    } catch (err) {
      responseType = '';
    }
    reportFetch({
      response: response,
      responseType: responseType,
      status: response.status,
      isAborted: false
    });
  }), monitor(function (error) {
    reportFetch({
      status: 0,
      isAborted: context.init && context.init.signal && context.init.signal.aborted || error instanceof DOMException && error.code === DOMException.ABORT_ERR,
      error: error
    });
  }));
}
;// CONCATENATED MODULE: ../core/esm/browser/xhrObservable.js





var xhrObservable;
var xhrContexts = new WeakMap();
function initXhrObservable() {
  if (!xhrObservable) {
    xhrObservable = createXhrObservable();
  }
  return xhrObservable;
}
function createXhrObservable() {
  return new Observable(function (observable) {
    var openInstrumentMethod = instrumentMethod(XMLHttpRequest.prototype, 'open', openXhr);
    var sendInstrumentMethod = instrumentMethod(XMLHttpRequest.prototype, 'send', function (call) {
      sendXhr(call, observable);
    }, {
      computeHandlingStack: true
    });
    var abortInstrumentMethod = instrumentMethod(XMLHttpRequest.prototype, 'abort', abortXhr);
    return function () {
      openInstrumentMethod.stop();
      sendInstrumentMethod.stop();
      abortInstrumentMethod.stop();
    };
  });
}
function openXhr(params) {
  var xhr = params.target;
  var method = params.parameters[0];
  var url = params.parameters[1];
  xhrContexts.set(xhr, {
    state: 'open',
    method: String(method).toUpperCase(),
    url: normalizeUrl(String(url))
  });
}
function sendXhr(params, observable) {
  var xhr = params.target;
  var handlingStack = params.handlingStack;
  var context = xhrContexts.get(xhr);
  if (!context) {
    return;
  }
  var startContext = context;
  startContext.state = 'start';
  startContext.startClocks = clocksNow();
  startContext.isAborted = false;
  startContext.xhr = xhr;
  startContext.handlingStack = handlingStack;
  var hasBeenReported = false;
  var stopInstrumentingOnReadyStateChange = instrumentMethod(xhr, 'onreadystatechange', function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      // Try to report the XHR as soon as possible, because the XHR may be mutated by the
      // application during a future event. For example, Angular is calling .abort() on
      // completed requests during a onreadystatechange event, so the status becomes '0'
      // before the request is collected.
      onEnd();
    }
  }).stop;
  var onEnd = function onEnd() {
    unsubscribeLoadEndListener();
    stopInstrumentingOnReadyStateChange();
    if (hasBeenReported) {
      return;
    }
    hasBeenReported = true;
    var completeContext = context;
    completeContext.state = 'complete';
    completeContext.duration = elapsed(startContext.startClocks.timeStamp, timeStampNow());
    completeContext.status = xhr.status;
    observable.notify(shallowClone(completeContext));
  };
  var unsubscribeLoadEndListener = addEventListener(xhr, 'loadend', onEnd).stop;
  observable.notify(startContext);
}
function abortXhr(params) {
  var xhr = params.target;
  var context = xhrContexts.get(xhr);
  if (context) {
    context.isAborted = true;
  }
}
;// CONCATENATED MODULE: ../core/esm/browser/pageExitObservable.js




var PageExitReason = {
  HIDDEN: 'visibility_hidden',
  UNLOADING: 'before_unload',
  PAGEHIDE: 'page_hide',
  FROZEN: 'page_frozen'
};
function createPageExitObservable() {
  return new observable_Observable(function (observable) {
    /**
     * Only event that guarantee to fire on mobile devices when the page transitions to background state
     * (e.g. when user switches to a different application, goes to homescreen, etc), or is being unloaded.
     */
    var visibilityChangeListener = addEventListeners(window, [DOM_EVENT.VISIBILITY_CHANGE, DOM_EVENT.FREEZE], function (event) {
      if (event.type === DOM_EVENT.VISIBILITY_CHANGE && document.visibilityState === 'hidden') {
        /**
         * Only event that guarantee to fire on mobile devices when the page transitions to background state
         * (e.g. when user switches to a different application, goes to homescreen, etc), or is being unloaded.
         */
        observable.notify({
          reason: PageExitReason.HIDDEN
        });
      } else if (event.type === DOM_EVENT.FREEZE) {
        /**
         * After transitioning in background a tab can be freezed to preserve resources. (cf: https://developer.chrome.com/blog/page-lifecycle-api)
         * Allow to collect events happening between hidden and frozen state.
         */
        observable.notify({
          reason: PageExitReason.FROZEN
        });
      }
    }, {
      capture: true
    });

    /**
     * Safari does not support yet to send a request during:
     * - a visibility change during doc unload (cf: https://bugs.webkit.org/show_bug.cgi?id=194897)
     * - a page hide transition (cf: https://bugs.webkit.org/show_bug.cgi?id=188329)
     */
    var beforeUnloadListener = addEventListener_addEventListener(window, DOM_EVENT.BEFORE_UNLOAD, function () {
      observable.notify({
        reason: PageExitReason.UNLOADING
      });
    });
    return function () {
      visibilityChangeListener.stop();
      beforeUnloadListener.stop();
    };
  });
}
function isPageExitReason(reason) {
  return includes(values(PageExitReason), reason);
}
;// CONCATENATED MODULE: ../core/esm/browser/htmlDomUtils.js
function isTextNode(node) {
  return node.nodeType === Node.TEXT_NODE;
}
function isCommentNode(node) {
  return node.nodeType === Node.COMMENT_NODE;
}
function isElementNode(node) {
  return node.nodeType === Node.ELEMENT_NODE;
}
function isNodeShadowHost(node) {
  return isElementNode(node) && Boolean(node.shadowRoot);
}
function isNodeShadowRoot(node) {
  var shadowRoot = node;
  return !!shadowRoot.host && shadowRoot.nodeType === Node.DOCUMENT_FRAGMENT_NODE && isElementNode(shadowRoot.host);
}
function hasChildNodes(node) {
  return node.childNodes.length > 0 || isNodeShadowHost(node);
}
// export function getChildNodes(node) {
//   return isNodeShadowHost(node) ? node.shadowRoot.childNodes : node.childNodes
// }
function forEachChildNodes(node, callback) {
  // node.childNodes.forEach(callback)
  var child = node.firstChild;
  while (child) {
    callback(child);
    child = child.nextSibling;
  }
  if (isNodeShadowHost(node)) {
    callback(node.shadowRoot);
  }
}
/**
 * Return `host` in case if the current node is a shadow root otherwise will return the `parentNode`
 */
function getParentNode(node) {
  return isNodeShadowRoot(node) ? node.host : node.parentNode;
}
;// CONCATENATED MODULE: ../core/esm/browser/runOnReadyState.js



function runOnReadyState(expectedReadyState, callback) {
  if (document.readyState === expectedReadyState || document.readyState === 'complete') {
    callback();
    return {
      stop: tools_noop
    };
  } else {
    var eventName = expectedReadyState === 'complete' ? DOM_EVENT.LOAD : DOM_EVENT.DOM_CONTENT_LOADED;
    return addEventListener_addEventListener(window, eventName, callback, {
      once: true
    });
  }
}
;// CONCATENATED MODULE: ../core/esm/dataMap.js

var commonTags = {
  sdk_name: '_gc.sdk_name',
  sdk_version: '_gc.sdk_version',
  app_id: 'application.id',
  env: 'env',
  service: 'service',
  version: 'version',
  source: 'source',
  userid: 'user.id',
  user_email: 'user.email',
  user_name: 'user.name',
  session_id: 'session.id',
  session_type: 'session.type',
  session_sampling: 'session.is_sampling',
  is_signin: 'user.is_signin',
  os: 'device.os',
  os_version: 'device.os_version',
  os_version_major: 'device.os_version_major',
  browser: 'device.browser',
  browser_version: 'device.browser_version',
  browser_version_major: 'device.browser_version_major',
  screen_size: 'device.screen_size',
  network_type: 'device.network_type',
  time_zone: 'device.time_zone',
  device: 'device.device',
  view_id: 'view.id',
  view_referrer: 'view.referrer',
  view_url: 'view.url',
  view_host: 'view.host',
  view_path: 'view.path',
  view_name: 'view.name',
  // 冗余一个字段
  view_path_group: 'view.path_group'
};
var commonFields = {
  view_url_query: 'view.url_query',
  action_id: 'action.id',
  action_ids: 'action.ids',
  view_in_foreground: 'view.in_foreground',
  display: 'display',
  session_has_replay: 'session.has_replay',
  is_login: 'user.is_login',
  page_states: '_gc.page_states',
  session_sample_rate: '_gc.configuration.session_sample_rate',
  session_replay_sample_rate: '_gc.configuration.session_replay_sample_rate',
  session_on_error_sample_rate: '_gc.configuration.session_on_error_sample_rate',
  session_replay_on_error_sample_rate: '_gc.configuration.session_replay_on_error_sample_rate',
  drift: '_gc.drift'
};
// 需要用双引号将字符串类型的field value括起来， 这里有数组标示[string, path]
var dataMap = {
  view: {
    type: enums_RumEventType.VIEW,
    tags: {
      view_loading_type: 'view.loading_type',
      view_apdex_level: 'view.apdex_level',
      view_privacy_replay_level: 'privacy.replay_level'
    },
    fields: {
      sampled_for_replay: 'session.sampled_for_replay',
      sampled_for_error_replay: 'session.sampled_for_error_replay',
      sampled_for_error_session: 'session.sampled_for_error_session',
      session_error_timestamp: 'session.error_timestamp_for_session',
      is_active: 'view.is_active',
      session_replay_stats: '_gc.replay_stats',
      session_is_active: 'session.is_active',
      view_error_count: 'view.error.count',
      view_resource_count: 'view.resource.count',
      view_long_task_count: 'view.long_task.count',
      view_action_count: 'view.action.count',
      first_contentful_paint: 'view.first_contentful_paint',
      largest_contentful_paint: 'view.largest_contentful_paint',
      largest_contentful_paint_element_selector: 'view.largest_contentful_paint_element_selector',
      cumulative_layout_shift: 'view.cumulative_layout_shift',
      cumulative_layout_shift_time: 'view.cumulative_layout_shift_time',
      cumulative_layout_shift_target_selector: 'view.cumulative_layout_shift_target_selector',
      first_input_delay: 'view.first_input_delay',
      loading_time: 'view.loading_time',
      dom_interactive: 'view.dom_interactive',
      dom_content_loaded: 'view.dom_content_loaded',
      dom_complete: 'view.dom_complete',
      load_event: 'view.load_event',
      first_input_time: 'view.first_input_time',
      first_input_target_selector: 'view.first_input_target_selector',
      first_paint_time: 'view.fpt',
      interaction_to_next_paint: 'view.interaction_to_next_paint',
      interaction_to_next_paint_target_selector: 'view.interaction_to_next_paint_target_selector',
      resource_load_time: 'view.resource_load_time',
      time_to_interactive: 'view.tti',
      dom: 'view.dom',
      dom_ready: 'view.dom_ready',
      time_spent: 'view.time_spent',
      first_byte: 'view.first_byte',
      frustration_count: 'view.frustration.count',
      custom_timings: 'view.custom_timings'
    }
  },
  resource: {
    type: enums_RumEventType.RESOURCE,
    tags: {
      trace_id: '_gc.trace_id',
      span_id: '_gc.span_id',
      resource_id: 'resource.id',
      resource_status: 'resource.status',
      resource_status_group: 'resource.status_group',
      resource_method: 'resource.method'
    },
    fields: {
      duration: 'resource.duration',
      resource_size: 'resource.size',
      resource_url: 'resource.url',
      resource_url_host: 'resource.url_host',
      resource_url_path: 'resource.url_path',
      resource_url_path_group: 'resource.url_path_group',
      resource_url_query: 'resource.url_query',
      resource_delivery_type: 'resource.delivery_type',
      resource_type: 'resource.type',
      resource_protocol: 'resource.protocol',
      resource_encode_size: 'resource.encoded_body_size',
      resource_decode_size: 'resource.decoded_body_size',
      resource_transfer_size: 'resource.transfer_size',
      resource_render_blocking_status: 'resource.render_blocking_status',
      resource_dns: 'resource.dns',
      resource_tcp: 'resource.tcp',
      resource_ssl: 'resource.ssl',
      resource_ttfb: 'resource.ttfb',
      resource_trans: 'resource.trans',
      resource_redirect: 'resource.redirect',
      resource_first_byte: 'resource.firstbyte',
      resource_dns_time: 'resource.dns_time',
      resource_download_time: 'resource.download_time',
      resource_first_byte_time: 'resource.first_byte_time',
      resource_connect_time: 'resource.connect_time',
      resource_ssl_time: 'resource.ssl_time',
      resource_redirect_time: 'resource.redirect_time'
    }
  },
  error: {
    type: enums_RumEventType.ERROR,
    tags: {
      error_id: 'error.id',
      trace_id: '_gc.trace_id',
      span_id: '_gc.span_id',
      error_source: 'error.source',
      error_type: 'error.type',
      error_handling: 'error.handling'
      //   resource_url: 'error.resource.url',
      //   resource_url_host: 'error.resource.url_host',
      //   resource_url_path: 'error.resource.url_path',
      //   resource_url_path_group: 'error.resource.url_path_group',
      //   resource_status: 'error.resource.status',
      //   resource_status_group: 'error.resource.status_group',
      //   resource_method: 'error.resource.method'
    },
    fields: {
      error_message: ['string', 'error.message'],
      error_stack: ['string', 'error.stack'],
      error_causes: ['string', 'error.causes'],
      error_handling_stack: ['string', 'error.handling_stack']
    }
  },
  long_task: {
    type: enums_RumEventType.LONG_TASK,
    tags: {
      long_task_id: 'long_task.id'
    },
    fields: {
      duration: 'long_task.duration',
      blocking_duration: 'long_task.blocking_duration',
      first_ui_event_timestamp: 'long_task.first_ui_event_timestamp',
      render_start: 'long_task.render_start',
      style_and_layout_start: 'long_task.style_and_layout_start',
      long_task_start_time: 'long_task.start_time',
      scripts: ['string', 'long_task.scripts']
    }
  },
  action: {
    type: enums_RumEventType.ACTION,
    tags: {
      action_type: 'action.type'
    },
    fields: {
      action_name: 'action.target.name',
      duration: 'action.loading_time',
      action_error_count: 'action.error.count',
      action_resource_count: 'action.resource.count',
      action_frustration_types: 'action.frustration.type',
      action_long_task_count: 'action.long_task.count',
      action_target: '_gc.action.target',
      action_position: '_gc.action.position'
    }
  },
  telemetry: {
    type: 'telemetry',
    fields: {
      status: 'telemetry.status',
      message: ['string', 'telemetry.message'],
      type: 'telemetry.type',
      error_stack: ['string', 'telemetry.error.stack'],
      error_kind: ['string', 'telemetry.error.kind'],
      connectivity: ['string', 'telemetry.connectivity'],
      runtime_env: ['string', 'telemetry.runtime_env'],
      usage: ['string', 'telemetry.usage'],
      configuration: ['string', 'telemetry.configuration']
    }
  },
  browser_log: {
    type: enums_RumEventType.LOGGER,
    tags: {
      error_source: 'error.source',
      error_type: 'error.type',
      error_resource_url: 'http.url',
      error_resource_url_host: 'http.url_host',
      error_resource_url_path: 'http.url_path',
      error_resource_url_path_group: 'http.url_path_group',
      error_resource_status: 'http.status_code',
      error_resource_status_group: 'http.status_group',
      error_resource_method: 'http.method',
      action_id: 'user_action.id',
      service: 'service',
      status: 'status'
    },
    fields: {
      message: ['string', 'message'],
      error_message: ['string', 'error.message'],
      error_stack: ['string', 'error.stack']
    }
  }
};
;// CONCATENATED MODULE: ../core/esm/session/sessionManagement.js








var VISIBILITY_CHECK_DELAY = ONE_MINUTE;
var SESSION_CONTEXT_TIMEOUT_DELAY = SESSION_TIME_OUT_DELAY;
var stopCallbacks = [];
function startSessionManager(configuration, productKey, computeSessionState) {
  var renewObservable = new observable_Observable();
  var expireObservable = new observable_Observable();
  var sessionStore = startSessionStore(configuration.sessionStoreStrategyType, productKey, computeSessionState);
  stopCallbacks.push(function () {
    return sessionStore.stop();
  });
  var sessionContextHistory = createValueHistory({
    expireDelay: SESSION_CONTEXT_TIMEOUT_DELAY
  });
  stopCallbacks.push(function () {
    return sessionContextHistory.stop();
  });
  sessionStore.renewObservable.subscribe(function () {
    sessionContextHistory.add(buildSessionContext(), relativeNow());
    renewObservable.notify();
  });
  sessionStore.expireObservable.subscribe(function () {
    expireObservable.notify();
    sessionContextHistory.closeActive(relativeNow());
  });

  // manager is started.
  sessionStore.expandOrRenewSession();
  sessionContextHistory.add(buildSessionContext(), clocksOrigin().relative);
  trackActivity(function () {
    sessionStore.expandOrRenewSession();
  });
  trackVisibility(function () {
    return sessionStore.expandSession();
  });
  trackResume(function () {
    sessionStore.restartSession();
  });
  function buildSessionContext() {
    return {
      id: sessionStore.getSession().id,
      trackingType: sessionStore.getSession()[productKey],
      hasError: !!sessionStore.getSession().hasError
    };
  }
  return {
    findSession: function findSession(startTime, options) {
      return sessionContextHistory.find(startTime, options);
    },
    renewObservable: renewObservable,
    expireObservable: expireObservable,
    sessionStateUpdateObservable: sessionStore.sessionStateUpdateObservable,
    expire: sessionStore.expire,
    updateSessionState: sessionStore.updateSessionState
  };
}
function stopSessionManager() {
  stopCallbacks.forEach(function (e) {
    e();
  });
  stopCallbacks = [];
}
function trackActivity(expandOrRenewSession) {
  var _addEventListeners = addEventListeners(window, [DOM_EVENT.CLICK, DOM_EVENT.TOUCH_START, DOM_EVENT.KEY_DOWN, DOM_EVENT.SCROLL], expandOrRenewSession, {
      capture: true,
      passive: true
    }),
    stop = _addEventListeners.stop;
  stopCallbacks.push(stop);
}
function trackVisibility(expandSession) {
  var expandSessionWhenVisible = function expandSessionWhenVisible() {
    if (document.visibilityState === 'visible') {
      expandSession();
    }
  };
  var _addEventListener = addEventListener_addEventListener(document, DOM_EVENT.VISIBILITY_CHANGE, expandSessionWhenVisible),
    stop = _addEventListener.stop;
  stopCallbacks.push(stop);
  var visibilityCheckInterval = timer_setInterval(expandSessionWhenVisible, VISIBILITY_CHECK_DELAY);
  stopCallbacks.push(function () {
    timer_clearInterval(visibilityCheckInterval);
  });
}
function trackResume(cb) {
  var _addEventListener2 = addEventListener_addEventListener(window, DOM_EVENT.RESUME, cb, {
      capture: true
    }),
    stop = _addEventListener2.stop;
  stopCallbacks.push(stop);
}
;// CONCATENATED MODULE: ../core/esm/transport/sendWithRetryStrategy.js




var MAX_ONGOING_BYTES_COUNT = 80 * ONE_KIBI_BYTE;
var MAX_ONGOING_REQUESTS = 32;
var MAX_QUEUE_BYTES_COUNT = 3 * ONE_MEBI_BYTE;
var MAX_BACKOFF_TIME = 256 * ONE_SECOND;
var INITIAL_BACKOFF_TIME = ONE_SECOND;
var TransportStatus = {
  UP: 0,
  FAILURE_DETECTED: 1,
  DOWN: 2
};
var RetryReason = {
  AFTER_SUCCESS: 0,
  AFTER_RESUME: 1
};
function sendWithRetryStrategy(payload, state, sendStrategy, endpointUrl, reportError) {
  if (state.transportStatus === TransportStatus.UP && state.queuedPayloads.size() === 0 && state.bandwidthMonitor.canHandle(payload)) {
    send(payload, state, sendStrategy, {
      onSuccess: function onSuccess() {
        return retryQueuedPayloads(RetryReason.AFTER_SUCCESS, state, sendStrategy, endpointUrl, reportError);
      },
      onFailure: function onFailure() {
        state.queuedPayloads.enqueue(payload);
        scheduleRetry(state, sendStrategy, endpointUrl, reportError);
      }
    });
  } else {
    state.queuedPayloads.enqueue(payload);
  }
}
function scheduleRetry(state, sendStrategy, endpointUrl, reportError) {
  if (state.transportStatus !== TransportStatus.DOWN) {
    return;
  }
  timer_setTimeout(function () {
    var payload = state.queuedPayloads.first();
    send(payload, state, sendStrategy, {
      onSuccess: function onSuccess() {
        state.queuedPayloads.dequeue();
        state.currentBackoffTime = INITIAL_BACKOFF_TIME;
        retryQueuedPayloads(RetryReason.AFTER_RESUME, state, sendStrategy, endpointUrl, reportError);
      },
      onFailure: function onFailure() {
        state.currentBackoffTime = Math.min(MAX_BACKOFF_TIME, state.currentBackoffTime * 2);
        scheduleRetry(state, sendStrategy, endpointUrl, reportError);
      }
    });
  }, state.currentBackoffTime);
}
function send(payload, state, sendStrategy, responseData) {
  var onSuccess = responseData.onSuccess;
  var onFailure = responseData.onFailure;
  state.bandwidthMonitor.add(payload);
  sendStrategy(payload, function (response) {
    state.bandwidthMonitor.remove(payload);
    if (!shouldRetryRequest(response, state, payload)) {
      state.transportStatus = TransportStatus.UP;
      onSuccess();
    } else {
      // do not consider transport down if another ongoing request could succeed
      state.transportStatus = state.bandwidthMonitor.ongoingRequestCount > 0 ? TransportStatus.FAILURE_DETECTED : TransportStatus.DOWN;
      payload.retry = {
        count: payload.retry ? payload.retry.count + 1 : 1,
        lastFailureStatus: response.status
      };
      onFailure();
    }
  });
}
function retryQueuedPayloads(reason, state, sendStrategy, endpointUrl, reportError) {
  if (reason === RetryReason.AFTER_SUCCESS && state.queuedPayloads.isFull() && !state.queueFullReported) {
    reportError({
      message: 'Reached max ' + endpointUrl + ' events size queued for upload: ' + MAX_QUEUE_BYTES_COUNT / ONE_MEBI_BYTE + 'MiB',
      source: errorTools_ErrorSource.AGENT,
      startClocks: tools_clocksNow()
    });
    state.queueFullReported = true;
  }
  var previousQueue = state.queuedPayloads;
  state.queuedPayloads = newPayloadQueue();
  while (previousQueue.size() > 0) {
    sendWithRetryStrategy(previousQueue.dequeue(), state, sendStrategy, endpointUrl, reportError);
  }
}
function shouldRetryRequest(response, state, payload) {
  if (state.retryMaxSize > -1 && payload.retry && payload.retry.count > state.retryMaxSize) return false;
  return response.type !== 'opaque' && (response.status === 0 && !navigator.onLine || response.status === 408 || response.status === 429 || response.status >= 500);
}
function newRetryState(retryMaxSize) {
  return {
    transportStatus: TransportStatus.UP,
    currentBackoffTime: INITIAL_BACKOFF_TIME,
    bandwidthMonitor: newBandwidthMonitor(),
    queuedPayloads: newPayloadQueue(),
    queueFullReported: false,
    retryMaxSize: retryMaxSize
  };
}
function newPayloadQueue() {
  var queue = [];
  return {
    bytesCount: 0,
    enqueue: function enqueue(payload) {
      if (this.isFull()) {
        return;
      }
      queue.push(payload);
      this.bytesCount += payload.bytesCount;
    },
    first: function first() {
      return queue[0];
    },
    dequeue: function dequeue() {
      var payload = queue.shift();
      if (payload) {
        this.bytesCount -= payload.bytesCount;
      }
      return payload;
    },
    size: function size() {
      return queue.length;
    },
    isFull: function isFull() {
      return this.bytesCount >= MAX_QUEUE_BYTES_COUNT;
    }
  };
}
function newBandwidthMonitor() {
  return {
    ongoingRequestCount: 0,
    ongoingByteCount: 0,
    canHandle: function canHandle(payload) {
      return this.ongoingRequestCount === 0 || this.ongoingByteCount + payload.bytesCount <= MAX_ONGOING_BYTES_COUNT && this.ongoingRequestCount < MAX_ONGOING_REQUESTS;
    },
    add: function add(payload) {
      this.ongoingRequestCount += 1;
      this.ongoingByteCount += payload.bytesCount;
    },
    remove: function remove(payload) {
      this.ongoingRequestCount -= 1;
      this.ongoingByteCount -= payload.bytesCount;
    }
  };
}
;// CONCATENATED MODULE: ../core/esm/telemetry/types.js
var types_TelemetryType = {
  log: 'log',
  configuration: 'configuration',
  usage: 'usage'
};
var types_TelemetryStatusType = {
  debug: 'debug',
  error: 'error'
};
;// CONCATENATED MODULE: ../core/esm/telemetry/telemetry.js











var ALLOWED_FRAME_URLS = ['https://static.guance.com', 'http://localhost', '<anonymous>'];
var TelemetryService = {
  LOGS: 'browser-logs-sdk',
  RUM: 'browser-rum-sdk'
};

// eslint-disable-next-line local-rules/disallow-side-effects
var preStartTelemetryBuffer = boundedBuffer_createBoundedBuffer();
var _onRawTelemetryEventCollected2 = function onRawTelemetryEventCollected(event) {
  preStartTelemetryBuffer.add(function () {
    _onRawTelemetryEventCollected2(event);
  });
};
function startTelemetry(telemetryService, configuration) {
  var contextProvider;
  var observable = new Observable();
  var alreadySentEvents = new Set();
  var telemetryEnabled = configuration.telemetryEnabled && performDraw(configuration.telemetrySampleRate);
  var runtimeEnvInfo = getRuntimeEnvInfo();
  _onRawTelemetryEventCollected2 = function _onRawTelemetryEventCollected(rawEvent) {
    var stringifiedEvent = jsonStringify(rawEvent);
    if (telemetryEnabled && alreadySentEvents.size < configuration.maxTelemetryEventsPerPage && !alreadySentEvents.has(stringifiedEvent)) {
      var event = toTelemetryEvent(telemetryService, rawEvent, runtimeEnvInfo);
      observable.notify(event);
      alreadySentEvents.add(stringifiedEvent);
    }
  };
  startMonitorErrorCollection(addTelemetryError);
  function toTelemetryEvent(telemetryService, event, runtimeEnvInfo) {
    return extend2Lev({
      type: 'telemetry',
      date: timeStampNow(),
      service: telemetryService,
      version: "3.2.24",
      source: 'browser',
      telemetry: extend2Lev(event, {
        runtime_env: runtimeEnvInfo,
        connectivity: getConnectivity()
      })
    }, contextProvider !== undefined ? contextProvider() : {});
  }
  return {
    setContextProvider: function setContextProvider(provider) {
      contextProvider = provider;
    },
    observable: observable,
    enabled: telemetryEnabled
  };
}
function getRuntimeEnvInfo() {
  return {
    is_local_file: window.location.protocol === 'file:',
    is_worker: 'WorkerGlobalScope' in self
  };
}
function startFakeTelemetry() {
  var events = [];
  _onRawTelemetryEventCollected2 = function _onRawTelemetryEventCollected(event) {
    events.push(event);
  };
  return events;
}
function drainPreStartTelemetry() {
  preStartTelemetryBuffer.drain();
}
function resetTelemetry() {
  preStartTelemetryBuffer = createBoundedBuffer();
  _onRawTelemetryEventCollected2 = function _onRawTelemetryEventCollected(event) {
    preStartTelemetryBuffer.add(function () {
      _onRawTelemetryEventCollected2(event);
    });
  };
}
function addTelemetryDebug(message, context) {
  displayIfDebugEnabled(message, context);
  _onRawTelemetryEventCollected2(assign({
    type: TelemetryType.log,
    message: message,
    status: TelemetryStatusType.debug
  }, context));
}
function addTelemetryError(e, context) {
  _onRawTelemetryEventCollected2(tools_assign({
    type: types_TelemetryType.log,
    status: types_TelemetryStatusType.error
  }, formatError(e), context));
}
function addTelemetryConfiguration(configuration) {
  _onRawTelemetryEventCollected2({
    type: TelemetryType.configuration,
    configuration: configuration
  });
}
function addTelemetryUsage(usage) {
  _onRawTelemetryEventCollected2({
    type: TelemetryType.usage,
    usage: usage
  });
}
function formatError(e) {
  if (e instanceof Error) {
    var stackTrace = computeStackTrace(e);
    return {
      error: {
        kind: stackTrace.name,
        stack: toStackTraceString(scrubCustomerFrames(stackTrace))
      },
      message: stackTrace.message
    };
  }
  return {
    error: {
      stack: NO_ERROR_STACK_PRESENT_MESSAGE
    },
    message: NonErrorPrefix.UNCAUGHT + ' ' + jsonStringify_jsonStringify(e)
  };
}
function scrubCustomerFrames(stackTrace) {
  stackTrace.stack = stackTrace.stack.filter(function (frame) {
    return !frame.url || ALLOWED_FRAME_URLS.some(function (allowedFrameUrl) {
      return startsWith(frame.url, allowedFrameUrl);
    });
  });
  return stackTrace;
}
;// CONCATENATED MODULE: ../core/esm/transport/httpRequest.js




/**
 * Use POST request without content type to:
 * - avoid CORS preflight requests
 * - allow usage of sendBeacon
 *
 * multiple elements are sent separated by \n in order
 * to be parsed correctly without content type header
 */
function addBatchPrecision(url, encoding) {
  if (!url) return url;
  url = url + (url.indexOf('?') === -1 ? '?' : '&') + 'precision=ms';
  if (encoding) {
    url = url + '&encoding=' + encoding;
  }
  return url;
}
function createHttpRequest(endpointUrl, bytesLimit, retryMaxSize, reportError) {
  if (retryMaxSize === undefined) {
    retryMaxSize = -1;
  }
  var retryState = newRetryState(retryMaxSize);
  var sendStrategyForRetry = function sendStrategyForRetry(payload, onResponse) {
    return fetchKeepAliveStrategy(endpointUrl, bytesLimit, payload, onResponse);
  };
  return {
    send: function send(payload) {
      sendWithRetryStrategy(payload, retryState, sendStrategyForRetry, endpointUrl, reportError);
    },
    /**
     * Since fetch keepalive behaves like regular fetch on Firefox,
     * keep using sendBeaconStrategy on exit
     */
    sendOnExit: function sendOnExit(payload) {
      sendBeaconStrategy(endpointUrl, bytesLimit, payload);
    }
  };
}
function sendBeaconStrategy(endpointUrl, bytesLimit, payload) {
  var data = payload.data;
  var bytesCount = payload.bytesCount;
  var url = addBatchPrecision(endpointUrl, payload.encoding);
  var canUseBeacon = !!navigator.sendBeacon && bytesCount < bytesLimit;
  if (canUseBeacon) {
    try {
      var beaconData;
      if (payload.type) {
        beaconData = new Blob([data], {
          type: payload.type
        });
      } else {
        beaconData = data;
      }
      var isQueued = navigator.sendBeacon(url, beaconData);
      if (isQueued) {
        return;
      }
    } catch (e) {
      reportBeaconError(e);
    }
  }
  sendXHR(url, payload);
}
var hasReportedBeaconError = false;
function reportBeaconError(e) {
  if (!hasReportedBeaconError) {
    hasReportedBeaconError = true;
    addTelemetryError(e);
  }
}
function fetchKeepAliveStrategy(endpointUrl, bytesLimit, payload, onResponse) {
  var data = payload.data;
  var bytesCount = payload.bytesCount;
  var url = addBatchPrecision(endpointUrl, payload.encoding);
  var canUseKeepAlive = isKeepAliveSupported() && bytesCount < bytesLimit;
  if (canUseKeepAlive) {
    var fetchOption = {
      method: 'POST',
      body: data,
      keepalive: true,
      mode: 'cors'
    };
    if (payload.type) {
      fetchOption.headers = {
        'Content-Type': payload.type
      };
    }
    fetch(url, fetchOption).then(monitor(function (response) {
      if (typeof onResponse === 'function') {
        onResponse({
          status: response.status,
          type: response.type
        });
      }
    }), monitor(function () {
      // failed to queue the request
      sendXHR(url, payload, onResponse);
    }));
  } else {
    sendXHR(url, payload, onResponse);
  }
}
function isKeepAliveSupported() {
  // Request can throw, cf https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#errors
  try {
    return window.Request && 'keepalive' in new Request('http://a');
  } catch (_unused) {
    return false;
  }
}
function sendXHR(url, payload, onResponse) {
  var data = payload.data;
  var request = new XMLHttpRequest();
  request.open('POST', url, true);
  if (data instanceof Blob) {
    request.setRequestHeader('Content-Type', data.type);
  } else if (payload.type) {
    request.setRequestHeader('Content-Type', payload.type);
  }
  addEventListener_addEventListener(request, 'loadend', function () {
    if (typeof onResponse === 'function') {
      onResponse({
        status: request.status
      });
    }
  }, {
    once: true
  });
  request.send(data);
}
;// CONCATENATED MODULE: ../core/esm/helper/serialisation/rowData.js
function rowData_typeof(o) {
  "@babel/helpers - typeof";

  return rowData_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, rowData_typeof(o);
}


function escapeRowData(str) {
  if (rowData_typeof(str) === 'object' && str) {
    str = jsonStringify_jsonStringify(str);
  } else if (!isString(str)) {
    return str;
  }
  var reg = /[\s=,"]/g;
  return String(str).replace(reg, function (word) {
    return '\\' + word;
  });
}
function escapeJsonValue(value, isTag) {
  if (rowData_typeof(value) === 'object' && value) {
    value = jsonStringify_jsonStringify(value);
  } else if (isTag) {
    // tag  json  只能是字符串
    value = '' + value;
  }
  return value;
}
function escapeFieldValueStr(str) {
  return '"' + str.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
}
function escapeRowField(value) {
  if (rowData_typeof(value) === 'object' && value) {
    return escapeFieldValueStr(jsonStringify_jsonStringify(value));
  } else if (isString(value)) {
    return escapeFieldValueStr(value);
  } else {
    return value;
  }
}
;// CONCATENATED MODULE: ../core/esm/transport/batch.js








// https://en.wikipedia.org/wiki/UTF-8
// eslint-disable-next-line no-control-regex
var CUSTOM_KEYS = 'custom_keys';
var processedMessageByDataMap = function processedMessageByDataMap(message) {
  if (!message || !message.type) return {
    rowStr: '',
    rowData: undefined
  };
  var rowData = {
    tags: {},
    fields: {}
  };
  var hasFileds = false;
  var rowStr = '';
  tools_each(dataMap, function (value, key) {
    if (value.type === message.type) {
      rowStr += key + ',';
      rowData.measurement = key;
      var tagsStr = [];
      var tags = extend({}, commonTags, value.tags);
      var filterFileds = ['date', 'type', CUSTOM_KEYS]; // 已经在datamap中定义过的fields和tags
      tools_each(tags, function (value_path, _key) {
        var _value = findByPath(message, value_path);
        filterFileds.push(_key);
        if (_value || isNumber(_value)) {
          rowData.tags[_key] = escapeJsonValue(_value, true);
          tagsStr.push(escapeRowData(_key) + '=' + escapeRowData(_value));
        }
      });
      var fieldsStr = [];
      var fields = extend({}, commonFields, value.fields);
      tools_each(fields, function (_value, _key) {
        if (tools_isArray(_value) && _value.length === 2) {
          var value_path = _value[1];
          var _valueData = findByPath(message, value_path);
          filterFileds.push(_key);
          if (_valueData !== undefined && _valueData !== null) {
            rowData.fields[_key] = escapeJsonValue(_valueData); // 这里不需要转译
            fieldsStr.push(escapeRowData(_key) + '=' + escapeRowField(_valueData));
          }
        } else if (isString(_value)) {
          var _valueData = findByPath(message, _value);
          filterFileds.push(_key);
          if (_valueData !== undefined && _valueData !== null) {
            rowData.fields[_key] = escapeJsonValue(_valueData); // 这里不需要转译
            fieldsStr.push(escapeRowData(_key) + '=' + escapeRowField(_valueData));
          }
        }
      });
      if (message.context && isObject(message.context) && !isEmptyObject(message.context)) {
        // 自定义tag， 存储成field
        var _tagKeys = [];
        tools_each(message.context, function (_value, _key) {
          // 如果和之前tag重名，则舍弃
          if (filterFileds.indexOf(_key) > -1) return;
          filterFileds.push(_key);
          if (_value !== undefined && _value !== null) {
            _tagKeys.push(_key);
            rowData.fields[_key] = escapeJsonValue(_value); // 这里不需要转译
            fieldsStr.push(escapeRowData(_key) + '=' + escapeRowField(_value));
          }
        });
        if (_tagKeys.length) {
          rowData.fields[CUSTOM_KEYS] = escapeJsonValue(_tagKeys);
          fieldsStr.push(escapeRowData(CUSTOM_KEYS) + '=' + escapeRowField(_tagKeys));
        }
      }
      if (message.type === enums_RumEventType.LOGGER) {
        // 这里处理日志类型数据自定义字段
        tools_each(message, function (value, key) {
          if (filterFileds.indexOf(key) === -1 && value !== undefined && value !== null) {
            rowData.fields[key] = escapeJsonValue(value); // 这里不需要转译
            fieldsStr.push(escapeRowData(key) + '=' + escapeRowField(value));
          }
        });
      }
      if (tagsStr.length) {
        rowStr += tagsStr.join(',');
      }
      if (fieldsStr.length) {
        rowStr += ' ';
        rowStr += fieldsStr.join(',');
        hasFileds = true;
      }
      rowStr = rowStr + ' ' + message.date;
      rowData.time = message.date; // 这里不需要转译
    }
  });
  return {
    rowStr: hasFileds ? rowStr : '',
    rowData: hasFileds ? rowData : undefined
  };
};
function createBatch(options) {
  var encoder = options.encoder;
  var request = options.request;
  var messageBytesLimit = options.messageBytesLimit;
  var sendContentTypeByJson = options.sendContentTypeByJson;
  var flushController = options.flushController;
  var upsertBuffer = {};
  var flushSubscription = flushController.flushObservable.subscribe(function (event) {
    flush(event);
  });
  function getMessageText(messages) {
    var isEmpty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (sendContentTypeByJson) {
      if (isEmpty) {
        return '[' + messages.join(',');
      } else {
        return ',' + messages.join(',');
      }
    } else {
      if (isEmpty) {
        return messages.join('\n');
      } else {
        return '\n' + messages.join('\n');
      }
    }
  }
  function push(serializedMessage, estimatedMessageBytesCount, key) {
    flushController.notifyBeforeAddMessage(estimatedMessageBytesCount);
    if (key !== undefined) {
      upsertBuffer[key] = serializedMessage;
      flushController.notifyAfterAddMessage();
    } else {
      encoder.write(getMessageText([serializedMessage], encoder.isEmpty()), function (realMessageBytesCount) {
        flushController.notifyAfterAddMessage(realMessageBytesCount - estimatedMessageBytesCount);
      });
    }
  }
  function hasMessageFor(key) {
    return key !== undefined && upsertBuffer[key] !== undefined;
  }
  function remove(key) {
    var removedMessage = upsertBuffer[key];
    delete upsertBuffer[key];
    var messageBytesCount = encoder.estimateEncodedBytesCount(removedMessage);
    flushController.notifyAfterRemoveMessage(messageBytesCount);
  }
  function process(message) {
    var processedMessage = '';
    if (sendContentTypeByJson) {
      processedMessage = jsonStringify_jsonStringify(processedMessageByDataMap(message).rowData);
    } else {
      processedMessage = processedMessageByDataMap(message).rowStr;
    }
    return processedMessage;
  }
  function addOrUpdate(message, key) {
    var serializedMessage = process(message);
    var estimatedMessageBytesCount = encoder.estimateEncodedBytesCount(serializedMessage);
    if (estimatedMessageBytesCount >= messageBytesLimit) {
      display_display.warn("Discarded a message whose size was bigger than the maximum allowed size ".concat(messageBytesLimit, "KB."));
      return;
    }
    if (hasMessageFor(key)) {
      remove(key);
    }
    push(serializedMessage, estimatedMessageBytesCount, key);
  }
  function flush(event) {
    var upsertMessages = values(upsertBuffer).join(sendContentTypeByJson ? ',' : '\n');
    upsertBuffer = {};
    var isPageExit = isPageExitReason(event.reason);
    var send = isPageExit ? request.sendOnExit : request.send;
    if (isPageExit &&
    // Note: checking that the encoder is async is not strictly needed, but it's an optimization:
    // if the encoder is async we need to send two requests in some cases (one for encoded data
    // and the other for non-encoded data). But if it's not async, we don't have to worry about
    // it and always send a single request.
    encoder.isAsync) {
      // 咱不支持json 模式
      var encoderResult = encoder.finishSync();

      // Send encoded messages
      if (encoderResult.outputBytesCount) {
        send(formatPayloadFromEncoder(encoderResult, sendContentTypeByJson));
      }

      // Send messages that are not yet encoded at this point
      var pendingMessages = [encoderResult.pendingData, upsertMessages].filter(Boolean).join('\n');
      if (pendingMessages) {
        send({
          data: pendingMessages,
          bytesCount: computeBytesCount(pendingMessages)
        });
      }
    } else {
      if (upsertMessages) {
        var text = getMessageText([upsertMessages], encoder.isEmpty());
        if (sendContentTypeByJson) {
          text += ']';
        }
        encoder.write(text);
      } else {
        if (sendContentTypeByJson) {
          encoder.write(']');
        }
      }
      encoder.finish(function (encoderResult) {
        send(formatPayloadFromEncoder(encoderResult));
      });
    }
  }
  return {
    flushController: flushController,
    add: addOrUpdate,
    upsert: addOrUpdate,
    stop: flushSubscription.unsubscribe
  };
}
function formatPayloadFromEncoder(encoderResult, sendContentTypeByJson) {
  var data;
  if (typeof encoderResult.output === 'string') {
    data = encoderResult.output;
  } else {
    data = new Blob([encoderResult.output], {
      // This will set the 'Content-Type: text/plain' header. Reasoning:
      // * The intake rejects the request if there is no content type.
      // * The browser will issue CORS preflight requests if we set it to 'application/json', which
      // could induce higher intake load (and maybe has other impacts).
      // * Also it's not quite JSON, since we are concatenating multiple JSON objects separated by
      // new lines.
      type: 'text/plain'
    });
  }
  return {
    data: data,
    type: sendContentTypeByJson ? 'application/json;UTF-8' : undefined,
    bytesCount: encoderResult.outputBytesCount,
    encoding: encoderResult.encoding
  };
}
;// CONCATENATED MODULE: ../core/esm/transport/flushController.js



// type FlushReason = PageExitReason | 'duration_limit' | 'bytes_limit' | 'messages_limit' | 'session_expire'

/**
 * Returns a "flush controller", responsible of notifying when flushing a pool of pending data needs
 * to happen. The implementation is designed to support both synchronous and asynchronous usages,
 * but relies on invariants described in each method documentation to keep a coherent state.
 */
function createFlushController(_ref) {
  var messagesLimit = _ref.messagesLimit,
    bytesLimit = _ref.bytesLimit,
    durationLimit = _ref.durationLimit,
    pageExitObservable = _ref.pageExitObservable,
    sessionExpireObservable = _ref.sessionExpireObservable;
  pageExitObservable.subscribe(function (event) {
    return flush(event.reason);
  });
  sessionExpireObservable.subscribe(function () {
    return flush('session_expire');
  });
  var flushObservable = new observable_Observable(function () {
    return function () {
      pageExitSubscription.unsubscribe();
      sessionExpireSubscription.unsubscribe();
    };
  });
  var currentBytesCount = 0;
  var currentMessagesCount = 0;
  function flush(flushReason) {
    if (currentMessagesCount === 0) {
      return;
    }
    var messagesCount = currentMessagesCount;
    var bytesCount = currentBytesCount;
    currentMessagesCount = 0;
    currentBytesCount = 0;
    cancelDurationLimitTimeout();
    flushObservable.notify({
      reason: flushReason,
      messagesCount: messagesCount,
      bytesCount: bytesCount
    });
  }
  var durationLimitTimeoutId;
  function scheduleDurationLimitTimeout() {
    if (durationLimitTimeoutId === undefined) {
      durationLimitTimeoutId = timer_setTimeout(function () {
        flush('duration_limit');
      }, durationLimit);
    }
  }
  function cancelDurationLimitTimeout() {
    timer_clearTimeout(durationLimitTimeoutId);
    durationLimitTimeoutId = undefined;
  }
  return {
    flushObservable: flushObservable,
    getMessagesCount: function getMessagesCount() {
      return currentMessagesCount;
    },
    /**
     * Notifies that a message will be added to a pool of pending messages waiting to be flushed.
     *
     * This function needs to be called synchronously, right before adding the message, so no flush
     * event can happen after `notifyBeforeAddMessage` and before adding the message.
     */
    notifyBeforeAddMessage: function notifyBeforeAddMessage(estimatedMessageBytesCount) {
      if (currentBytesCount + estimatedMessageBytesCount >= bytesLimit) {
        flush('bytes_limit');
      }
      // Consider the message to be added now rather than in `notifyAfterAddMessage`, because if no
      // message was added yet and `notifyAfterAddMessage` is called asynchronously, we still want
      // to notify when a flush is needed (for example on page exit).
      currentMessagesCount += 1;
      currentBytesCount += estimatedMessageBytesCount;
      scheduleDurationLimitTimeout();
    },
    /**
     * Notifies that a message *was* added to a pool of pending messages waiting to be flushed.
     *
     * This function can be called asynchronously after the message was added, but in this case it
     * should not be called if a flush event occurred in between.
     */
    notifyAfterAddMessage: function notifyAfterAddMessage(messageBytesCountDiff) {
      if (messageBytesCountDiff === undefined) {
        messageBytesCountDiff = 0;
      }
      currentBytesCount += messageBytesCountDiff;
      if (currentMessagesCount >= messagesLimit) {
        flush('messages_limit');
      } else if (currentBytesCount >= bytesLimit) {
        flush('bytes_limit');
      }
    },
    /**
     * Notifies that a message was removed from a pool of pending messages waiting to be flushed.
     *
     * This function needs to be called synchronously, right after removing the message, so no flush
     * event can happen after removing the message and before `notifyAfterRemoveMessage`.
     *
     * @param messageBytesCount: the message bytes count that was added to the pool. Should
     * correspond to the sum of bytes counts passed to `notifyBeforeAddMessage` and
     * `notifyAfterAddMessage`.
     */
    notifyAfterRemoveMessage: function notifyAfterRemoveMessage(messageBytesCount) {
      currentBytesCount -= messageBytesCount;
      currentMessagesCount -= 1;
      if (currentMessagesCount === 0) {
        cancelDurationLimitTimeout();
      }
    }
  };
}
;// CONCATENATED MODULE: ../core/esm/transport/startBatchWithReplica.js



function startBatchWithReplica(configuration, primary, reportError, pageExitObservable, sessionExpireObservable, batchFactoryImp) {
  if (batchFactoryImp === undefined) {
    batchFactoryImp = createBatch;
  }
  var primaryBatch = createBatchFromConfig(configuration, primary);
  function createBatchFromConfig(configuration, batchConfiguration) {
    return batchFactoryImp({
      encoder: batchConfiguration.encoder,
      request: createHttpRequest(batchConfiguration.endpoint, configuration.batchBytesLimit, configuration.retryMaxSize, reportError),
      flushController: createFlushController({
        messagesLimit: configuration.batchMessagesLimit,
        bytesLimit: configuration.batchBytesLimit,
        durationLimit: configuration.flushTimeout,
        pageExitObservable: pageExitObservable,
        sessionExpireObservable: sessionExpireObservable
      }),
      messageBytesLimit: configuration.messageBytesLimit,
      sendContentTypeByJson: configuration.sendContentTypeByJson
    });
  }
  return {
    flushObservable: primaryBatch.flushController.flushObservable,
    add: function add(message) {
      primaryBatch.add(message);
    },
    upsert: function upsert(message, key) {
      primaryBatch.upsert(message, key);
    },
    stop: function stop() {
      primaryBatch.stop();
    }
  };
}
;// CONCATENATED MODULE: ../core/esm/transport/eventBridge.js

function getEventBridgeGlobal() {
  return getGlobalObject().FTWebViewJavascriptBridge;
}
function getEventBridge() {
  var eventBridgeGlobal = getEventBridgeGlobal();
  if (!eventBridgeGlobal) {
    return;
  }
  return {
    getCapabilities: function getCapabilities() {
      return JSON.parse(eventBridgeGlobal.getCapabilities && eventBridgeGlobal.getCapabilities() || '[]');
    },
    getPrivacyLevel: function getPrivacyLevel() {
      return eventBridgeGlobal.getPrivacyLevel && eventBridgeGlobal.getPrivacyLevel();
    },
    getAllowedWebViewHosts: function getAllowedWebViewHosts() {
      return JSON.parse(eventBridgeGlobal.getAllowedWebViewHosts && eventBridgeGlobal.getAllowedWebViewHosts() || '[]');
    },
    send: function send(eventType, event, viewId) {
      var view = viewId ? {
        id: viewId
      } : undefined;
      eventBridgeGlobal.sendEvent(JSON.stringify({
        name: eventType,
        data: event,
        view: view
      }));
    }
  };
}
var BridgeCapability = {
  RECORDS: 'records'
};
function bridgeSupports(capability) {
  var bridge = getEventBridge();
  return !!bridge && bridge.getCapabilities().includes(capability);
}
function canUseEventBridge() {
  var _getGlobalObject$loca;
  var currentHost = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (_getGlobalObject$loca = getGlobalObject().location) === null || _getGlobalObject$loca === void 0 ? void 0 : _getGlobalObject$loca.hostname;
  var eventBridgeGlobal = getEventBridgeGlobal();
  if (eventBridgeGlobal && eventBridgeGlobal.getAllowedWebViewHosts === undefined) {
    return true;
  }
  if (eventBridgeGlobal && eventBridgeGlobal.getAllowedWebViewHosts && eventBridgeGlobal.getAllowedWebViewHosts() === null) {
    return true;
  }
  var bridge = getEventBridge();
  return !!bridge && bridge.getAllowedWebViewHosts().some(function (allowedHost) {
    return currentHost === allowedHost || currentHost.endsWith(".".concat(allowedHost));
  });
}
;// CONCATENATED MODULE: ../core/esm/transport/index.js





;// CONCATENATED MODULE: ../core/esm/synthetics/syntheticsWorkerValues.js

var SYNTHETICS_TEST_ID_COOKIE_NAME = 'guance-synthetics-public-id';
var SYNTHETICS_RESULT_ID_COOKIE_NAME = 'guance-synthetics-result-id';
var SYNTHETICS_INJECTS_RUM_COOKIE_NAME = 'guance-synthetics-injects-rum';
function willSyntheticsInjectRum() {
  return Boolean(window._GUANCE_SYNTHETICS_INJECTS_RUM || cookie_getCookie(SYNTHETICS_INJECTS_RUM_COOKIE_NAME));
}
function getSyntheticsTestId() {
  var value = window._GUANCE_SYNTHETICS_PUBLIC_ID || getCookie(SYNTHETICS_TEST_ID_COOKIE_NAME);
  return typeof value === 'string' ? value : undefined;
}
function getSyntheticsResultId() {
  var value = window._GUANCE_SYNTHETICS_RESULT_ID || getCookie(SYNTHETICS_RESULT_ID_COOKIE_NAME);
  return typeof value === 'string' ? value : undefined;
}
;// CONCATENATED MODULE: ../core/esm/helper/serialisation/contextManager.js
function contextManager_typeof(o) {
  "@babel/helpers - typeof";

  return contextManager_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, contextManager_typeof(o);
}
function contextManager_slicedToArray(r, e) {
  return contextManager_arrayWithHoles(r) || contextManager_iterableToArrayLimit(r, e) || contextManager_unsupportedIterableToArray(r, e) || contextManager_nonIterableRest();
}
function contextManager_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function contextManager_unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return contextManager_arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? contextManager_arrayLikeToArray(r, a) : void 0;
  }
}
function contextManager_arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function contextManager_iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function contextManager_arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function contextManager_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function contextManager_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? contextManager_ownKeys(Object(t), !0).forEach(function (r) {
      contextManager_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : contextManager_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function contextManager_defineProperty(e, r, t) {
  return (r = contextManager_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function contextManager_toPropertyKey(t) {
  var i = contextManager_toPrimitive(t, "string");
  return "symbol" == contextManager_typeof(i) ? i : i + "";
}
function contextManager_toPrimitive(t, r) {
  if ("object" != contextManager_typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != contextManager_typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}




function ensureProperties(context, propertiesConfig, name) {
  var newContext = contextManager_objectSpread({}, context);
  for (var _i = 0, _Object$entries = Object.entries(propertiesConfig); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = contextManager_slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      _Object$entries$_i$ = _Object$entries$_i[1],
      required = _Object$entries$_i$.required,
      type = _Object$entries$_i$.type;
    /**
     * Ensure specified properties are strings as defined here:
     */
    if (type === 'string' && key in newContext) {
      newContext[key] = String(newContext[key]);
    }
    if (required && !(key in context)) {
      display_display.warn("The property ".concat(key, " of ").concat(name, " context is required; context will not be sent to the intake."));
    }
  }
  return newContext;
}
function createContextManager() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    customerDataTracker = _ref.customerDataTracker,
    _ref$propertiesConfig = _ref.propertiesConfig,
    propertiesConfig = _ref$propertiesConfig === void 0 ? {} : _ref$propertiesConfig;
  var context = {};
  var changeObservable = new observable_Observable();
  var contextManager = {
    getContext: function getContext() {
      return deepClone(context);
    },
    setContext: function setContext(newContext) {
      if (getType(newContext) === 'object') {
        context = sanitize(ensureProperties(newContext, propertiesConfig, name));
        customerDataTracker === null || customerDataTracker === void 0 || customerDataTracker.updateCustomerData(context);
      } else {
        contextManager.clearContext();
      }
      changeObservable.notify();
    },
    setContextProperty: function setContextProperty(key, property) {
      context[key] = sanitize(ensureProperties(contextManager_defineProperty({}, key, property), propertiesConfig, name)[key]);
      customerDataTracker === null || customerDataTracker === void 0 || customerDataTracker.updateCustomerData(context);
      changeObservable.notify();
    },
    removeContextProperty: function removeContextProperty(key) {
      delete context[key];
      customerDataTracker === null || customerDataTracker === void 0 || customerDataTracker.updateCustomerData(context);
      ensureProperties(context, propertiesConfig, name);
      changeObservable.notify();
    },
    clearContext: function clearContext() {
      context = {};
      customerDataTracker === null || customerDataTracker === void 0 || customerDataTracker.resetCustomerData();
      changeObservable.notify();
    },
    changeObservable: changeObservable
  };
  return contextManager;
}
;// CONCATENATED MODULE: ../core/esm/helper/serialisation/const.js
// RUM and logs batch bytes limit is 16KB
// ensure that we leave room for other event attributes and maintain a decent amount of event per batch
// (3KB (customer data) + 1KB (other attributes)) * 4 (events per batch) = 16KB

var CustomerDataType = {
  FeatureFlag: 'feature flag evaluation',
  User: 'user',
  GlobalContext: 'global context',
  View: 'view'
};
;// CONCATENATED MODULE: ../core/esm/helper/serialisation/storedContextManager.js



var CONTEXT_STORE_KEY_PREFIX = '_gc_s';
var storageListeners = [];
function storeContextManager(configuration, contextManager, productKey, customerDataType) {
  var storageKey = buildStorageKey(configuration, productKey, customerDataType);
  storageListeners.push(addEventListener_addEventListener(window, DOM_EVENT.STORAGE, function (params) {
    if (storageKey === params.key) {
      synchronizeWithStorage();
    }
  }));
  contextManager.changeObservable.subscribe(dumpToStorage);
  contextManager.setContext(tools_extend2Lev(getFromStorage(), contextManager.getContext()));
  function synchronizeWithStorage() {
    contextManager.setContext(getFromStorage());
  }
  function dumpToStorage() {
    localStorage.setItem(storageKey, JSON.stringify(contextManager.getContext()));
  }
  function getFromStorage() {
    var rawContext = localStorage.getItem(storageKey);
    return rawContext !== null ? JSON.parse(rawContext) : {};
  }
  return contextManager;
}
function buildStorageKey(configuration, productKey, customerDataType) {
  // storeContextsKey
  if (configuration.storeContextsKey && isString(configuration.storeContextsKey)) {
    return CONTEXT_STORE_KEY_PREFIX + '_' + productKey + '_' + customerDataType + '_' + configuration.storeContextsKey;
  } else {
    return CONTEXT_STORE_KEY_PREFIX + '_' + productKey + '_' + customerDataType;
  }
}
function removeStorageListeners() {
  map(storageListeners, function (listener) {
    listener.stop();
  });
}
;// CONCATENATED MODULE: ../core/esm/helper/serialisation/customerDataTracker.js





// RUM and logs batch bytes limit is 16KB
// ensure that we leave room for other event attributes and maintain a decent amount of event per batch
// (3KB (customer data) + 1KB (other attributes)) * 4 (events per batch) = 16KB
var CUSTOMER_DATA_BYTES_LIMIT = 3 * ONE_KIBI_BYTE;

// We observed that the compression ratio is around 8 in general, but we also want to keep a margin
// because some data might not be compressed (ex: last view update on page exit). We chose 16KiB
// because it is also the limit of the 'batchBytesCount' that we use for RUM and Logs data, but this
// is a bit arbitrary.
var CUSTOMER_COMPRESSED_DATA_BYTES_LIMIT = 16 * ONE_KIBI_BYTE;
var BYTES_COMPUTATION_THROTTLING_DELAY = 200;
var CustomerDataCompressionStatus = {
  Unknown: 0,
  Enabled: 1,
  Disabled: 2
};
function createCustomerDataTrackerManager() {
  var compressionStatus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : CustomerDataCompressionStatus.Disabled;
  var customerDataTrackers = new Map();
  var alreadyWarned = false;
  function checkCustomerDataLimit() {
    var initialBytesCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (alreadyWarned || compressionStatus === CustomerDataCompressionStatus.Unknown) {
      return;
    }
    var bytesCountLimit = compressionStatus === CustomerDataCompressionStatus.Disabled ? CUSTOMER_DATA_BYTES_LIMIT : CUSTOMER_COMPRESSED_DATA_BYTES_LIMIT;
    var bytesCount = initialBytesCount;
    customerDataTrackers.forEach(function (tracker) {
      bytesCount += tracker.getBytesCount();
    });
    if (bytesCount > bytesCountLimit) {
      displayCustomerDataLimitReachedWarning(bytesCountLimit);
      alreadyWarned = true;
    }
  }
  return {
    /**
     * Creates a detached tracker. The manager will not store a reference to that tracker, and the
     * bytes count will be counted independently from other detached trackers.
     *
     * This is particularly useful when we don't know when the tracker will be unused, so we don't
     * leak memory (ex: when used in Logger instances).
     */
    createDetachedTracker: function createDetachedTracker() {
      var tracker = createCustomerDataTracker(function () {
        return checkCustomerDataLimit(tracker.getBytesCount());
      });
      return tracker;
    },
    /**
     * Creates a tracker if it doesn't exist, and returns it.
     */
    getOrCreateTracker: function getOrCreateTracker(type) {
      if (!customerDataTrackers.has(type)) {
        customerDataTrackers.set(type, createCustomerDataTracker(checkCustomerDataLimit));
      }
      return customerDataTrackers.get(type);
    },
    setCompressionStatus: function setCompressionStatus(newCompressionStatus) {
      if (compressionStatus === CustomerDataCompressionStatus.Unknown) {
        compressionStatus = newCompressionStatus;
        checkCustomerDataLimit();
      }
    },
    getCompressionStatus: function getCompressionStatus() {
      return compressionStatus;
    },
    stop: function stop() {
      customerDataTrackers.forEach(function (tracker) {
        return tracker.stop();
      });
      customerDataTrackers.clear();
    }
  };
}
function createCustomerDataTracker(checkCustomerDataLimit) {
  var bytesCountCache = 0;

  // Throttle the bytes computation to minimize the impact on performance.
  // Especially useful if the user call context APIs synchronously multiple times in a row
  var _throttle = throttle(function (context) {
      bytesCountCache = computeBytesCount(jsonStringify_jsonStringify(context));
      checkCustomerDataLimit();
    }, BYTES_COMPUTATION_THROTTLING_DELAY),
    computeBytesCountThrottled = _throttle.throttled,
    cancelComputeBytesCount = _throttle.cancel;
  var resetBytesCount = function resetBytesCount() {
    cancelComputeBytesCount();
    bytesCountCache = 0;
  };
  return {
    updateCustomerData: function updateCustomerData(context) {
      if (isEmptyObject(context)) {
        resetBytesCount();
      } else {
        computeBytesCountThrottled(context);
      }
    },
    resetCustomerData: resetBytesCount,
    getBytesCount: function getBytesCount() {
      return bytesCountCache;
    },
    stop: function stop() {
      cancelComputeBytesCount();
    }
  };
}
function displayCustomerDataLimitReachedWarning(bytesCountLimit) {
  display_display.warn("Customer data exceeds the recommended ".concat(bytesCountLimit / ONE_KIBI_BYTE, "KiB threshold."));
}
;// CONCATENATED MODULE: ../core/esm/helper/encoder.js

function createIdentityEncoder() {
  var output = '';
  var outputBytesCount = 0;
  return {
    isAsync: false,
    isEmpty: function isEmpty() {
      return !output;
    },
    write: function write(data, callback) {
      var additionalEncodedBytesCount = computeBytesCount(data);
      outputBytesCount += additionalEncodedBytesCount;
      output += data;
      if (callback) {
        callback(additionalEncodedBytesCount);
      }
    },
    finish: function finish(callback) {
      callback(this.finishSync());
    },
    finishSync: function finishSync() {
      var result = {
        output: output,
        outputBytesCount: outputBytesCount,
        rawBytesCount: outputBytesCount,
        pendingData: ''
      };
      output = '';
      outputBytesCount = 0;
      return result;
    },
    estimateEncodedBytesCount: function estimateEncodedBytesCount(data) {
      return data.length;
    }
  };
}
;// CONCATENATED MODULE: ../core/esm/user/user.js



/**
 * Clone input data and ensure known user properties (id, name, email)
 * are strings, as defined here:
 */
function sanitizeUser(newUser) {
  // We shallow clone only to prevent mutation of user data.
  var user = tools_assign({}, newUser);
  var keys = ['id', 'name', 'email'];
  tools_each(keys, function (key) {
    if (key in user) {
      user[key] = String(user[key]);
    }
  });
  return user;
}

/**
 * Simple check to ensure user is valid
 */
function checkUser(newUser) {
  var isValid = getType(newUser) === 'object';
  if (!isValid) {
    display_display.error('Unsupported user:', newUser);
  }
  return isValid;
}
;// CONCATENATED MODULE: ../core/esm/user/index.js

;// CONCATENATED MODULE: ../core/esm/helper/polyfills.js
// ie11 supports WeakMap but not WeakSet
var PLACEHOLDER = 1;
function polyfills_WeakSet(initialValues) {
  this.map = new WeakMap();
  if (initialValues) {
    initialValues.forEach(function (value) {
      this.map.set(value, PLACEHOLDER);
    });
  }
}
polyfills_WeakSet.prototype.add = function (value) {
  this.map.set(value, PLACEHOLDER);
  return this;
};
polyfills_WeakSet.prototype["delete"] = function (value) {
  return this.map["delete"](value);
};
polyfills_WeakSet.prototype.has = function (value) {
  return this.map.has(value);
};
;// CONCATENATED MODULE: ../core/esm/helper/displayAlreadyInitializedError.js

function displayAlreadyInitializedError(sdkName, initConfiguration) {
  if (!initConfiguration.silentMultipleInit) {
    display_display.error(sdkName + ' is already initialized.');
  }
}
;// CONCATENATED MODULE: ../core/esm/index.js






















// export * from './helper/readBytesFromStream'






























// export * from './telemetry/telemetry'



;// CONCATENATED MODULE: ./src/domain/rumSessionManager.js

var RUM_SESSION_KEY = 'rum';
var RumSessionPlan = {
  WITHOUT_SESSION_REPLAY: 1,
  WITH_SESSION_REPLAY: 2,
  WITH_ERROR_SESSION_REPLAY: 3
};
var ERROR_SESSION = '1';
var RumTrackingType = {
  NOT_TRACKED: '0',
  // Note: the "tracking type" value (stored in the session cookie) does not match the "session
  // plan" value (sent in RUM events). This is expected, and was done to keep retrocompatibility
  // with active sessions when upgrading the SDK.

  TRACKED_WITH_SESSION_AND_WITH_SESSION_REPLAY: '1',
  TRACKED_WITH_SESSION_AND_WITHOUT_SESSION_REPLAY: '2',
  TRACKED_WITH_SESSION_AND_WITH_ERROR_SESSION_REPLAY: '3',
  TRACKED_WITH_ERROR_SESSION_AND_WITH_SESSION_REPLAY: '4',
  TRACKED_WITH_ERROR_SESSION_AND_WITHOUT_SESSION_REPLAY: '5',
  TRACKED_WITH_ERROR_SESSION_AND_WITH_ERROR_SESSION_REPLAY: '6'
};
function startRumSessionManager(configuration, lifeCycle) {
  var sessionManager = startSessionManager(configuration, RUM_SESSION_KEY, function (rawTrackingType) {
    return computeSessionState(configuration, rawTrackingType);
  });
  sessionManager.expireObservable.subscribe(function () {
    lifeCycle.notify(LifeCycleEventType.SESSION_EXPIRED);
  });
  sessionManager.renewObservable.subscribe(function () {
    lifeCycle.notify(LifeCycleEventType.SESSION_RENEWED);
  });
  sessionManager.sessionStateUpdateObservable.subscribe(function (_ref) {
    var previousState = _ref.previousState,
      newState = _ref.newState;
    if (!previousState.hasError && newState.hasError) {
      var sessionEntity = sessionManager.findSession();
      if (sessionEntity) {
        sessionEntity.hasError = true;
        sessionEntity.ets = newState.ets || tools_timeStampNow();
      }
    }
  });
  return {
    findTrackedSession: function findTrackedSession(startTime) {
      var session = sessionManager.findSession(startTime);
      if (!session || !isTypeTracked(session.trackingType)) {
        return;
      }
      var isErrorSession = session.trackingType === RumTrackingType.TRACKED_WITH_ERROR_SESSION_AND_WITHOUT_SESSION_REPLAY || session.trackingType === RumTrackingType.TRACKED_WITH_ERROR_SESSION_AND_WITH_SESSION_REPLAY || session.trackingType === RumTrackingType.TRACKED_WITH_ERROR_SESSION_AND_WITH_ERROR_SESSION_REPLAY;
      var plan = RumSessionPlan.WITHOUT_SESSION_REPLAY;
      if (session.trackingType === RumTrackingType.TRACKED_WITH_SESSION_AND_WITH_SESSION_REPLAY || session.trackingType === RumTrackingType.TRACKED_WITH_ERROR_SESSION_AND_WITH_SESSION_REPLAY) {
        plan = RumSessionPlan.WITH_SESSION_REPLAY;
      } else if (session.trackingType === RumTrackingType.TRACKED_WITH_ERROR_SESSION_AND_WITH_ERROR_SESSION_REPLAY || session.trackingType === RumTrackingType.TRACKED_WITH_SESSION_AND_WITH_ERROR_SESSION_REPLAY) {
        plan = RumSessionPlan.WITH_ERROR_SESSION_REPLAY;
      }
      return {
        id: session.id,
        plan: plan,
        errorSessionReplayAllowed: plan === RumSessionPlan.WITH_ERROR_SESSION_REPLAY,
        sessionHasError: session.hasError,
        isErrorSession: isErrorSession,
        sessionErrorTimestamp: session.ets,
        sessionReplayAllowed: plan === RumSessionPlan.WITH_SESSION_REPLAY || plan === RumSessionPlan.WITH_ERROR_SESSION_REPLAY
      };
    },
    expire: sessionManager.expire,
    expireObservable: sessionManager.expireObservable,
    sessionStateUpdateObservable: sessionManager.sessionStateUpdateObservable,
    setErrorForSession: function setErrorForSession() {
      return sessionManager.updateSessionState({
        hasError: '1',
        ets: tools_timeStampNow()
      });
    }
  };
}

/**
 * Start a tracked replay session stub
 * It needs to be a premium plan in order to get long tasks
 */
function startRumSessionManagerStub() {
  var session = {
    id: '00000000-aaaa-0000-aaaa-000000000000',
    plan: RumSessionPlan.WITHOUT_SESSION_REPLAY,
    // plan value should not be taken into account for mobile
    isErrorSession: false,
    sessionErrorTimestamp: 0,
    sessionReplayAllowed: bridgeSupports(BridgeCapability.RECORDS) ? true : false,
    errorSessionReplayAllowed: false,
    sessionHasError: false
  };
  return {
    findTrackedSession: function findTrackedSession() {
      return session;
    },
    expire: tools_noop,
    expireObservable: new observable_Observable(),
    setErrorForSession: function setErrorForSession() {}
  };
}
function computeSessionState(configuration, rawTrackingType) {
  var sessionSampleRate = configuration.sessionSampleRate,
    sessionOnErrorSampleRate = configuration.sessionOnErrorSampleRate,
    sessionReplaySampleRate = configuration.sessionReplaySampleRate,
    sessionReplayOnErrorSampleRate = configuration.sessionReplayOnErrorSampleRate;
  var isSession = tools_performDraw(sessionSampleRate);
  var isErrorSession = tools_performDraw(sessionOnErrorSampleRate);
  var isSessionReplay = tools_performDraw(sessionReplaySampleRate);
  var isErrorSessionReplay = tools_performDraw(sessionReplayOnErrorSampleRate);
  var trackingType;
  if (hasValidRumSession(rawTrackingType)) {
    trackingType = rawTrackingType;
  } else if (!isErrorSession && !isSession) {
    trackingType = RumTrackingType.NOT_TRACKED;
  } else if (isSession && isSessionReplay) {
    trackingType = RumTrackingType.TRACKED_WITH_SESSION_AND_WITH_SESSION_REPLAY;
  } else if (isSession && isErrorSessionReplay) {
    trackingType = RumTrackingType.TRACKED_WITH_SESSION_AND_WITH_ERROR_SESSION_REPLAY;
  } else if (isSession && !isSessionReplay && !isErrorSessionReplay) {
    trackingType = RumTrackingType.TRACKED_WITH_SESSION_AND_WITHOUT_SESSION_REPLAY;
  } else if (isErrorSession && isSessionReplay) {
    trackingType = RumTrackingType.TRACKED_WITH_ERROR_SESSION_AND_WITH_SESSION_REPLAY;
  } else if (isErrorSession && isErrorSessionReplay) {
    trackingType = RumTrackingType.TRACKED_WITH_ERROR_SESSION_AND_WITH_ERROR_SESSION_REPLAY;
  } else if (isErrorSession && !isSessionReplay && !isErrorSessionReplay) {
    trackingType = RumTrackingType.TRACKED_WITH_ERROR_SESSION_AND_WITHOUT_SESSION_REPLAY;
  }
  //   if (hasValidRumSession(rawTrackingType)) {
  //     trackingType = rawTrackingType
  //   } else if (
  //     !performDraw(configuration.sessionSampleRate) &&
  //     !performDraw(configuration.sessionOnErrorSampleRate)
  //   ) {
  //     trackingType = RumTrackingType.NOT_TRACKED
  //   } else if (
  //     !performDraw(configuration.sessionReplaySampleRate) &&
  //     !performDraw(configuration.sessionReplayOnErrorSampleRate)
  //   ) {
  //     trackingType = RumTrackingType.TRACKED_WITHOUT_SESSION_REPLAY
  //   } else if (performDraw(configuration.sessionReplayOnErrorSampleRate)) {
  //     trackingType = RumTrackingType.TRACKED_WITH_ERROR_SESSION_REPLAY
  //   } else {
  //     trackingType = RumTrackingType.TRACKED_WITH_SESSION_REPLAY
  //   }
  return {
    trackingType: trackingType,
    isTracked: isTypeTracked(trackingType)
  };
}
function hasValidRumSession(trackingType) {
  return trackingType === RumTrackingType.NOT_TRACKED || trackingType === RumTrackingType.TRACKED_WITH_ERROR_SESSION_AND_WITHOUT_SESSION_REPLAY || trackingType === RumTrackingType.TRACKED_WITH_ERROR_SESSION_AND_WITH_ERROR_SESSION_REPLAY || trackingType === RumTrackingType.TRACKED_WITH_ERROR_SESSION_AND_WITH_SESSION_REPLAY || trackingType === RumTrackingType.TRACKED_WITH_SESSION_AND_WITHOUT_SESSION_REPLAY || trackingType === RumTrackingType.TRACKED_WITH_SESSION_AND_WITH_ERROR_SESSION_REPLAY || trackingType === RumTrackingType.TRACKED_WITH_SESSION_AND_WITH_SESSION_REPLAY;
}
function isTypeTracked(rumSessionType) {
  return rumSessionType !== RumTrackingType.NOT_TRACKED;
}
;// CONCATENATED MODULE: ./src/domain/usr/index.js

var USR_ID_COOKIE_NAME = '_gc_usr_id';
var ANONYMOUS_ID_EXPIRATION = 60 * 24 * ONE_HOUR;
function initUsrCookie(cookieOptions) {
  var usrCacheId = cookie_getCookie(USR_ID_COOKIE_NAME, cookieOptions);
  if (!usrCacheId) {
    usrCacheId = UUID();
    setCookie(USR_ID_COOKIE_NAME, usrCacheId, ANONYMOUS_ID_EXPIRATION, cookieOptions);
  }
  return usrCacheId;
}
function initUsrLocalStorage() {
  var usrCacheId = localStorage.getItem(USR_ID_COOKIE_NAME);
  if (!usrCacheId) {
    usrCacheId = UUID();
    localStorage.setItem(USR_ID_COOKIE_NAME, usrCacheId);
  }
  return usrCacheId;
}
var startCacheUsrCache = function startCacheUsrCache(configuration) {
  if (!configuration.sessionStoreStrategyType) return;
  var usrCacheId;
  if (configuration.sessionStoreStrategyType.type === 'Cookie') {
    usrCacheId = initUsrCookie(configuration.sessionStoreStrategyType.cookieOptions);
  } else {
    usrCacheId = initUsrLocalStorage();
  }
  return {
    getId: function getId() {
      return usrCacheId;
    }
  };
};
;// CONCATENATED MODULE: ./src/domain/locationChangeObservable.js

function createLocationChangeObservable(location) {
  var currentLocation = tools_shallowClone(location);
  return new observable_Observable(function (observable) {
    var _trackHistory = trackHistory(onLocationChange);
    var _trackHash = trackHash(onLocationChange);
    function onLocationChange() {
      if (currentLocation.href === location.href) {
        return;
      }
      var newLocation = tools_shallowClone(location);
      observable.notify({
        newLocation: newLocation,
        oldLocation: currentLocation
      });
      currentLocation = newLocation;
    }
    return function () {
      _trackHistory.stop();
      _trackHash.stop();
    };
  });
}
function trackHistory(onHistoryChange) {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  var pushState = instrumentMethod_instrumentMethod(History.prototype, 'pushState', function (params) {
    var onPostCall = params.onPostCall;
    onPostCall(onHistoryChange);
  });
  var replaceState = instrumentMethod_instrumentMethod(History.prototype, 'replaceState', function (params) {
    var onPostCall = params.onPostCall;
    onPostCall(onHistoryChange);
  });
  var popState = addEventListener_addEventListener(window, DOM_EVENT.POP_STATE, onHistoryChange);
  return {
    stop: function stop() {
      pushState.stop();
      replaceState.stop();
      popState.stop();
    }
  };
}
function trackHash(onHashChange) {
  return addEventListener_addEventListener(window, DOM_EVENT.HASH_CHANGE, onHashChange);
}
;// CONCATENATED MODULE: ./src/domain/deflate/deflateEncoder.js

var DeflateEncoderStreamId = {
  REPLAY: 1,
  RUM: 2
};
function createDeflateEncoder(worker, streamId) {
  var rawBytesCount = 0;
  var compressedData = [];
  var compressedDataTrailer;
  var nextWriteActionId = 0;
  var pendingWriteActions = [];
  var wokerListener = addEventListener_addEventListener(worker, 'message', function (params) {
    var workerResponse = params.data;
    if (workerResponse.type !== 'wrote' || workerResponse.streamId && workerResponse.streamId !== streamId) {
      return;
    }
    rawBytesCount += workerResponse.additionalBytesCount;
    compressedData.push(workerResponse.result);
    compressedDataTrailer = workerResponse.trailer;
    var nextPendingAction = pendingWriteActions.shift();
    if (nextPendingAction && nextPendingAction.id === workerResponse.id) {
      if (nextPendingAction.writeCallback) {
        nextPendingAction.writeCallback(workerResponse.result.byteLength);
      } else if (nextPendingAction.finishCallback) {
        nextPendingAction.finishCallback();
      }
    } else {
      removeMessageListener();
      (0,esm_namespaceObject.addTelemetryDebug)('Worker responses received out of order.');
    }
  });
  var removeMessageListener = wokerListener.stop;
  function consumeResult() {
    var output = compressedData.length === 0 ? new Uint8Array(0) : concatBuffers(compressedData.concat(compressedDataTrailer));
    var result = {
      rawBytesCount: rawBytesCount,
      output: output,
      outputBytesCount: output.byteLength,
      encoding: 'deflate'
    };
    rawBytesCount = 0;
    compressedData = [];
    return result;
  }
  function sendResetIfNeeded() {
    if (nextWriteActionId > 0) {
      worker.postMessage({
        action: 'reset',
        streamId: streamId
      });
      nextWriteActionId = 0;
    }
  }
  return {
    isAsync: true,
    isEmpty: function isEmpty() {
      return nextWriteActionId === 0;
    },
    write: function write(data, callback) {
      worker.postMessage({
        action: 'write',
        id: nextWriteActionId,
        data: data,
        streamId: streamId
      });
      pendingWriteActions.push({
        id: nextWriteActionId,
        writeCallback: callback,
        data: data
      });
      nextWriteActionId += 1;
    },
    finish: function finish(callback) {
      sendResetIfNeeded();
      if (!pendingWriteActions.length) {
        callback(consumeResult());
      } else {
        // Make sure we do not call any write callback
        pendingWriteActions.forEach(function (pendingWriteAction) {
          delete pendingWriteAction.writeCallback;
        });

        // Wait for the last action to finish before calling the finish callback
        pendingWriteActions[pendingWriteActions.length - 1].finishCallback = function () {
          return callback(consumeResult());
        };
      }
    },
    finishSync: function finishSync() {
      sendResetIfNeeded();
      var pendingData = pendingWriteActions.map(function (pendingWriteAction) {
        // Make sure we do not call any write or finish callback
        delete pendingWriteAction.writeCallback;
        delete pendingWriteAction.finishCallback;
        return pendingWriteAction.data;
      }).join('');
      return tools_assign(consumeResult(), {
        pendingData: pendingData
      });
    },
    estimateEncodedBytesCount: function estimateEncodedBytesCount(data) {
      // This is a rough estimation of the data size once it'll be encoded by deflate. We observed
      // that if it's the first chunk of data pushed to the stream, the ratio is lower (3-4), but
      // after that the ratio is greater (10+). We chose 8 here, which (on average) seems to produce
      // requests of the expected size.
      return data.length / 8;
    },
    stop: function stop() {
      removeMessageListener();
    }
  };
}
;// CONCATENATED MODULE: ./src/domain/deflate/deflateWorker.js

var INITIALIZATION_TIME_OUT_DELAY = 10 * ONE_SECOND;
function createDeflateWorker(configuration) {
  return new Worker(configuration.workerUrl || URL.createObjectURL(new Blob(["var __webpack_exports__ = {};\n\n;// CONCATENATED MODULE: ../core/esm/helper/byteUtils.js\nvar ONE_KIBI_BYTE = 1024;\nvar ONE_MEBI_BYTE = 1024 * ONE_KIBI_BYTE;\n// eslint-disable-next-line no-control-regex\nvar HAS_MULTI_BYTES_CHARACTERS = /[^\\u0000-\\u007F]/;\nfunction computeBytesCount(candidate) {\n  // Accurate bytes count computations can degrade performances when there is a lot of events to process\n  if (!HAS_MULTI_BYTES_CHARACTERS.test(candidate)) {\n    return candidate.length;\n  }\n  if (window.TextEncoder !== undefined) {\n    return new TextEncoder().encode(candidate).length;\n  }\n  return new Blob([candidate]).size;\n}\nfunction concatBuffers(buffers) {\n  var length = buffers.reduce(function (total, buffer) {\n    return total + buffer.length;\n  }, 0);\n  var result = new Uint8Array(length);\n  var offset = 0;\n  for (var _i = 0, buffers_1 = buffers; _i < buffers_1.length; _i++) {\n    var buffer = buffers_1[_i];\n    result.set(buffer, offset);\n    offset += buffer.length;\n  }\n  return result;\n}\n;// CONCATENATED MODULE: ../core/esm/worker.js\n\n;// CONCATENATED MODULE: ./src/domain/deflate.js\n/* eslint-disable camelcase, no-bitwise */\n// This file comes from and was trimmed from unused code https://github.com/nodeca/pako/blob/034669ba0f1a4c0590e45f7c2820128200f972b3/dist/pako_deflate.es5.js\n\n// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin\n//\n// This software is provided 'as-is', without any express or implied\n// warranty. In no event will the authors be held liable for any damages\n// arising from the use of this software.\n//\n// Permission is granted to anyone to use this software for any purpose,\n// including commercial applications, and to alter it and redistribute it\n// freely, subject to the following restrictions:\n//\n// 1. The origin of this software must not be misrepresented; you must not\n//   claim that you wrote the original software. If you use this software\n//   in a product, an acknowledgment in the product documentation would be\n//   appreciated but is not required.\n// 2. Altered source versions must be plainly marked as such, and must not be\n//   misrepresented as being the original software.\n// 3. This notice may not be removed or altered from any source distribution.\n\n/* Public constants ========================================================== */\n\n/* =========================================================================== */\n// const Z_FILTERED          = 1;\n// const Z_HUFFMAN_ONLY      = 2;\n// const Z_RLE               = 3;\n\nvar Z_FIXED = 4; // const Z_DEFAULT_STRATEGY  = 0;\n\n/* Possible values of the data_type field (though see inflate()) */\n\nvar Z_BINARY = 0;\nvar Z_TEXT = 1; // const Z_ASCII             = 1; // = Z_TEXT\n\nvar Z_UNKNOWN = 2;\n/* ============================================================================ */\n\nfunction zero(buf) {\n  var len = buf.length;\n  while (--len >= 0) {\n    buf[len] = 0;\n  }\n} // From zutil.h\n\nvar STORED_BLOCK = 0;\nvar STATIC_TREES = 1;\nvar DYN_TREES = 2;\n/* The three kinds of block type */\n\nvar MIN_MATCH = 3;\nvar MAX_MATCH = 258;\n/* The minimum and maximum match lengths */\n// From deflate.h\n\n/* ===========================================================================\n * Internal compression state.\n */\n\nvar LENGTH_CODES = 29;\n/* number of length codes, not counting the special END_BLOCK code */\n\nvar LITERALS = 256;\n/* number of literal bytes 0..255 */\n\nvar L_CODES = LITERALS + 1 + LENGTH_CODES;\n/* number of Literal or Length codes, including the END_BLOCK code */\n\nvar D_CODES = 30;\n/* number of distance codes */\n\nvar BL_CODES = 19;\n/* number of codes used to transfer the bit lengths */\n\nvar HEAP_SIZE = 2 * L_CODES + 1;\n/* maximum heap size */\n\nvar MAX_BITS = 15;\n/* All codes must not exceed MAX_BITS bits */\n\nvar Buf_size = 16;\n/* size of bit buffer in bi_buf */\n\n/* ===========================================================================\n * Constants\n */\n\nvar MAX_BL_BITS = 7;\n/* Bit length codes must not exceed MAX_BL_BITS bits */\n\nvar END_BLOCK = 256;\n/* end of block literal code */\n\nvar REP_3_6 = 16;\n/* repeat previous bit length 3-6 times (2 bits of repeat count) */\n\nvar REPZ_3_10 = 17;\n/* repeat a zero length 3-10 times  (3 bits of repeat count) */\n\nvar REPZ_11_138 = 18;\n/* repeat a zero length 11-138 times  (7 bits of repeat count) */\n\nvar extra_lbits = /* extra bits for each length code */\nnew Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);\nvar extra_dbits = /* extra bits for each distance code */\nnew Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);\nvar extra_blbits = /* extra bits for each bit length code */\nnew Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);\nvar bl_order = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);\n/* eslint-enable comma-spacing,array-bracket-spacing */\n\n/* The lengths of the bit length codes are sent in order of decreasing\n * probability, to avoid transmitting the lengths for unused bit length codes.\n */\n\n/* ===========================================================================\n * Local data. These are initialized only once.\n */\n// We pre-fill arrays with 0 to avoid uninitialized gaps\n\nvar DIST_CODE_LEN = 512;\n/* see definition of array dist_code below */\n// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1\n\nvar static_ltree = new Array((L_CODES + 2) * 2);\nzero(static_ltree);\n/* The static literal tree. Since the bit lengths are imposed, there is no\n * need for the L_CODES extra codes used during heap construction. However\n * The codes 286 and 287 are needed to build a canonical tree (see _tr_init\n * below).\n */\n\nvar static_dtree = new Array(D_CODES * 2);\nzero(static_dtree);\n/* The static distance tree. (Actually a trivial tree since all codes use\n * 5 bits.)\n */\n\nvar _dist_code = new Array(DIST_CODE_LEN);\nzero(_dist_code);\n/* Distance codes. The first 256 values correspond to the distances\n * 3 .. 258, the last 256 values correspond to the top 8 bits of\n * the 15 bit distances.\n */\n\nvar _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);\nzero(_length_code);\n/* length code for each normalized match length (0 == MIN_MATCH) */\n\nvar base_length = new Array(LENGTH_CODES);\nzero(base_length);\n/* First normalized length for each code (0 = MIN_MATCH) */\n\nvar base_dist = new Array(D_CODES);\nzero(base_dist);\n/* First normalized distance for each code (0 = distance of 1) */\n\nfunction StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {\n  this.static_tree = static_tree;\n  /* static tree or NULL */\n\n  this.extra_bits = extra_bits;\n  /* extra bits for each code or NULL */\n\n  this.extra_base = extra_base;\n  /* base index for extra_bits */\n\n  this.elems = elems;\n  /* max number of elements in the tree */\n\n  this.max_length = max_length;\n  /* max bit length for the codes */\n  // show if `static_tree` has data or dummy - needed for monomorphic objects\n\n  this.has_stree = static_tree && static_tree.length;\n}\nvar static_l_desc;\nvar static_d_desc;\nvar static_bl_desc;\nfunction TreeDesc(dyn_tree, stat_desc) {\n  this.dyn_tree = dyn_tree;\n  /* the dynamic tree */\n\n  this.max_code = 0;\n  /* largest code with non zero frequency */\n\n  this.stat_desc = stat_desc;\n  /* the corresponding static tree */\n}\nvar d_code = function d_code(dist) {\n  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];\n};\n/* ===========================================================================\n * Output a short LSB first on the stream.\n * IN assertion: there is enough room in pendingBuf.\n */\n\nvar put_short = function put_short(s, w) {\n  //    put_byte(s, (uch)((w) & 0xff));\n  //    put_byte(s, (uch)((ush)(w) >> 8));\n  s.pending_buf[s.pending++] = w & 0xff;\n  s.pending_buf[s.pending++] = w >>> 8 & 0xff;\n};\n/* ===========================================================================\n * Send a value on a given number of bits.\n * IN assertion: length <= 16 and value fits in length bits.\n */\n\nvar send_bits = function send_bits(s, value, length) {\n  if (s.bi_valid > Buf_size - length) {\n    s.bi_buf |= value << s.bi_valid & 0xffff;\n    put_short(s, s.bi_buf);\n    s.bi_buf = value >> Buf_size - s.bi_valid;\n    s.bi_valid += length - Buf_size;\n  } else {\n    s.bi_buf |= value << s.bi_valid & 0xffff;\n    s.bi_valid += length;\n  }\n};\nvar send_code = function send_code(s, c, tree) {\n  send_bits(s, tree[c * 2], /* .Code */\n  tree[c * 2 + 1]\n  /* .Len */);\n};\n/* ===========================================================================\n * Reverse the first len bits of a code, using straightforward code (a faster\n * method would use a table)\n * IN assertion: 1 <= len <= 15\n */\n\nvar bi_reverse = function bi_reverse(code, len) {\n  var res = 0;\n  do {\n    res |= code & 1;\n    code >>>= 1;\n    res <<= 1;\n  } while (--len > 0);\n  return res >>> 1;\n};\n/* ===========================================================================\n * Flush the bit buffer, keeping at most 7 bits in it.\n */\n\nvar bi_flush = function bi_flush(s) {\n  if (s.bi_valid === 16) {\n    put_short(s, s.bi_buf);\n    s.bi_buf = 0;\n    s.bi_valid = 0;\n  } else if (s.bi_valid >= 8) {\n    s.pending_buf[s.pending++] = s.bi_buf & 0xff;\n    s.bi_buf >>= 8;\n    s.bi_valid -= 8;\n  }\n};\n/* ===========================================================================\n * Compute the optimal bit lengths for a tree and update the total bit length\n * for the current block.\n * IN assertion: the fields freq and dad are set, heap[heap_max] and\n *    above are the tree nodes sorted by increasing frequency.\n * OUT assertions: the field len is set to the optimal bit length, the\n *     array bl_count contains the frequencies for each bit length.\n *     The length opt_len is updated; static_len is also updated if stree is\n *     not null.\n */\n\nvar gen_bitlen = function gen_bitlen(s, desc //    deflate_state *s; //    tree_desc *desc;    /* the tree descriptor */\n) {\n  var tree = desc.dyn_tree;\n  var max_code = desc.max_code;\n  var stree = desc.stat_desc.static_tree;\n  var has_stree = desc.stat_desc.has_stree;\n  var extra = desc.stat_desc.extra_bits;\n  var base = desc.stat_desc.extra_base;\n  var max_length = desc.stat_desc.max_length;\n  var h;\n  /* heap index */\n\n  var n;\n  var m;\n  /* iterate over the tree elements */\n\n  var bits;\n  /* bit length */\n\n  var xbits;\n  /* extra bits */\n\n  var f;\n  /* frequency */\n\n  var overflow = 0;\n  /* number of elements with bit length too large */\n\n  for (bits = 0; bits <= MAX_BITS; bits++) {\n    s.bl_count[bits] = 0;\n  }\n  /* In a first pass, compute the optimal bit lengths (which may\n   * overflow in the case of the bit length tree).\n   */\n\n  tree[s.heap[s.heap_max] * 2 + 1] = /* .Len */\n  0;\n  /* root of the heap */\n\n  for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {\n    n = s.heap[h];\n    bits = tree[tree[n * 2 + 1] * /* .Dad */\n    2 + 1] + /* .Len */\n    1;\n    if (bits > max_length) {\n      bits = max_length;\n      overflow++;\n    }\n    tree[n * 2 + 1] = /* .Len */\n    bits;\n    /* We overwrite tree[n].Dad which is no longer needed */\n\n    if (n > max_code) {\n      continue;\n    }\n    /* not a leaf node */\n\n    s.bl_count[bits]++;\n    xbits = 0;\n    if (n >= base) {\n      xbits = extra[n - base];\n    }\n    f = tree[n * 2];\n    /* .Freq */\n    s.opt_len += f * (bits + xbits);\n    if (has_stree) {\n      s.static_len += f * (stree[n * 2 + 1] + /* .Len */\n      xbits);\n    }\n  }\n  if (overflow === 0) {\n    return;\n  } // Trace((stderr,\"\\nbit length overflow\\n\"));\n\n  /* This happens for example on obj2 and pic of the Calgary corpus */\n\n  /* Find the first bit length which could increase: */\n\n  do {\n    bits = max_length - 1;\n    while (s.bl_count[bits] === 0) {\n      bits--;\n    }\n    s.bl_count[bits]--;\n    /* move one leaf down the tree */\n\n    s.bl_count[bits + 1] += 2;\n    /* move one overflow item as its brother */\n\n    s.bl_count[max_length]--;\n    /* The brother of the overflow item also moves one step up,\n     * but this does not affect bl_count[max_length]\n     */\n\n    overflow -= 2;\n  } while (overflow > 0);\n  /* Now recompute all bit lengths, scanning in increasing frequency.\n   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all\n   * lengths instead of fixing only the wrong ones. This idea is taken\n   * from 'ar' written by Haruhiko Okumura.)\n   */\n\n  for (bits = max_length; bits !== 0; bits--) {\n    n = s.bl_count[bits];\n    while (n !== 0) {\n      m = s.heap[--h];\n      if (m > max_code) {\n        continue;\n      }\n      if (tree[m * 2 + 1] !== /* .Len */\n      bits) {\n        // Trace((stderr,\"code %d bits %d->%d\\n\", m, tree[m].Len, bits));\n        s.opt_len += (bits - tree[m * 2 + 1]) * /* .Len */\n        tree[m * 2];\n        /* .Freq */\n        tree[m * 2 + 1] = /* .Len */\n        bits;\n      }\n      n--;\n    }\n  }\n};\n/* ===========================================================================\n * Generate the codes for a given tree and bit counts (which need not be\n * optimal).\n * IN assertion: the array bl_count contains the bit length statistics for\n * the given tree and the field len is set for all tree elements.\n * OUT assertion: the field code is set for all tree elements of non\n *     zero code length.\n */\n\nvar gen_codes = function gen_codes(tree, max_code, bl_count\n//    ct_data *tree;             /* the tree to decorate */\n//    int max_code;              /* largest code with non zero frequency */\n//    ushf *bl_count;            /* number of codes at each bit length */\n) {\n  var next_code = new Array(MAX_BITS + 1);\n  /* next code value for each bit length */\n\n  var code = 0;\n  /* running code value */\n\n  var bits;\n  /* bit index */\n\n  var n;\n  /* code index */\n\n  /* The distribution counts are first used to generate the code values\n   * without bit reversal.\n   */\n\n  for (bits = 1; bits <= MAX_BITS; bits++) {\n    next_code[bits] = code = code + bl_count[bits - 1] << 1;\n  }\n  /* Check that the bit counts in bl_count are consistent. The last code\n   * must be all ones.\n   */\n  // Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,\n  //        \"inconsistent bit counts\");\n  // Tracev((stderr,\"\\ngen_codes: max_code %d \", max_code));\n\n  for (n = 0; n <= max_code; n++) {\n    var len = tree[n * 2 + 1];\n    /* .Len */\n    if (len === 0) {\n      continue;\n    }\n    /* Now reverse the bits */\n\n    tree[n * 2] = /* .Code */\n    bi_reverse(next_code[len]++, len); // Tracecv(tree != static_ltree, (stderr,\"\\nn %3d %c l %2d c %4x (%x) \",\n    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));\n  }\n};\n/* ===========================================================================\n * Initialize the various 'constant' tables.\n */\n\nvar tr_static_init = function tr_static_init() {\n  var n;\n  /* iterates over tree elements */\n\n  var bits;\n  /* bit counter */\n\n  var length;\n  /* length value */\n\n  var code;\n  /* code value */\n\n  var dist;\n  /* distance index */\n\n  var bl_count = new Array(MAX_BITS + 1);\n  /* number of codes at each bit length for an optimal tree */\n  // do check in _tr_init()\n  // if (static_init_done) return;\n\n  /* For some embedded targets, global variables are not initialized: */\n\n  /* #ifdef NO_INIT_GLOBAL_POINTERS\n      static_l_desc.static_tree = static_ltree;\n      static_l_desc.extra_bits = extra_lbits;\n      static_d_desc.static_tree = static_dtree;\n      static_d_desc.extra_bits = extra_dbits;\n      static_bl_desc.extra_bits = extra_blbits;\n    #endif */\n\n  /* Initialize the mapping length (0..255) -> length code (0..28) */\n\n  length = 0;\n  for (code = 0; code < LENGTH_CODES - 1; code++) {\n    base_length[code] = length;\n    for (n = 0; n < 1 << extra_lbits[code]; n++) {\n      _length_code[length++] = code;\n    }\n  } // Assert (length == 256, \"tr_static_init: length != 256\");\n\n  /* Note that the length 255 (match length 258) can be represented\n   * in two different ways: code 284 + 5 bits or code 285, so we\n   * overwrite length_code[255] to use the best encoding:\n   */\n\n  _length_code[length - 1] = code;\n  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */\n\n  dist = 0;\n  for (code = 0; code < 16; code++) {\n    base_dist[code] = dist;\n    for (n = 0; n < 1 << extra_dbits[code]; n++) {\n      _dist_code[dist++] = code;\n    }\n  } // Assert (dist == 256, \"tr_static_init: dist != 256\");\n\n  dist >>= 7;\n  /* from now on, all distances are divided by 128 */\n\n  for (; code < D_CODES; code++) {\n    base_dist[code] = dist << 7;\n    for (n = 0; n < 1 << extra_dbits[code] - 7; n++) {\n      _dist_code[256 + dist++] = code;\n    }\n  } // Assert (dist == 256, \"tr_static_init: 256+dist != 512\");\n\n  /* Construct the codes of the static literal tree */\n\n  for (bits = 0; bits <= MAX_BITS; bits++) {\n    bl_count[bits] = 0;\n  }\n  n = 0;\n  while (n <= 143) {\n    static_ltree[n * 2 + 1] = /* .Len */\n    8;\n    n++;\n    bl_count[8]++;\n  }\n  while (n <= 255) {\n    static_ltree[n * 2 + 1] = /* .Len */\n    9;\n    n++;\n    bl_count[9]++;\n  }\n  while (n <= 279) {\n    static_ltree[n * 2 + 1] = /* .Len */\n    7;\n    n++;\n    bl_count[7]++;\n  }\n  while (n <= 287) {\n    static_ltree[n * 2 + 1] = /* .Len */\n    8;\n    n++;\n    bl_count[8]++;\n  }\n  /* Codes 286 and 287 do not exist, but we must include them in the\n   * tree construction to get a canonical Huffman tree (longest code\n   * all ones)\n   */\n\n  gen_codes(static_ltree, L_CODES + 1, bl_count);\n  /* The static distance tree is trivial: */\n\n  for (n = 0; n < D_CODES; n++) {\n    static_dtree[n * 2 + 1] = /* .Len */\n    5;\n    static_dtree[n * 2] = /* .Code */\n    bi_reverse(n, 5);\n  } // Now data ready and we can init static trees\n\n  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);\n  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);\n  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS);\n  // static_init_done = true;\n};\n/* ===========================================================================\n * Initialize a new block.\n */\n\nvar init_block = function init_block(s) {\n  var n;\n  /* iterates over tree elements */\n\n  /* Initialize the trees. */\n\n  for (n = 0; n < L_CODES; n++) {\n    s.dyn_ltree[n * 2] = /* .Freq */\n    0;\n  }\n  for (n = 0; n < D_CODES; n++) {\n    s.dyn_dtree[n * 2] = /* .Freq */\n    0;\n  }\n  for (n = 0; n < BL_CODES; n++) {\n    s.bl_tree[n * 2] = /* .Freq */\n    0;\n  }\n  s.dyn_ltree[END_BLOCK * 2] = /* .Freq */\n  1;\n  s.opt_len = s.static_len = 0;\n  s.last_lit = s.matches = 0;\n};\n/* ===========================================================================\n * Flush the bit buffer and align the output on a byte boundary\n */\n\nvar bi_windup = function bi_windup(s) {\n  if (s.bi_valid > 8) {\n    put_short(s, s.bi_buf);\n  } else if (s.bi_valid > 0) {\n    // put_byte(s, (Byte)s->bi_buf);\n    s.pending_buf[s.pending++] = s.bi_buf;\n  }\n  s.bi_buf = 0;\n  s.bi_valid = 0;\n};\n/* ===========================================================================\n * Copy a stored block, storing first the length and its\n * one's complement if requested.\n */\n\nvar copy_block = function copy_block(s, buf, len, header\n// DeflateState *s;\n// charf    *buf;    /* the input data */\n// unsigned len;     /* its length */\n// int      header;  /* true if block header must be written */\n) {\n  bi_windup(s);\n  /* align on byte boundary */\n\n  if (header) {\n    put_short(s, len);\n    put_short(s, ~len);\n  }\n  //  while (len--) {\n  //    put_byte(s, *buf++);\n  //  }\n\n  s.pending_buf.set(s.window.subarray(buf, buf + len), s.pending);\n  s.pending += len;\n};\n/* ===========================================================================\n * Compares to subtrees, using the tree depth as tie breaker when\n * the subtrees have equal frequency. This minimizes the worst case length.\n */\n\nvar smaller = function smaller(tree, n, m, depth) {\n  var _n2 = n * 2;\n  var _m2 = m * 2;\n  return tree[_n2] < /* .Freq */\n  tree[_m2] || (/* .Freq */\n  tree[_n2] === /* .Freq */\n  tree[_m2] && /* .Freq */\n  depth[n] <= depth[m]);\n};\n/* ===========================================================================\n * Restore the heap property by moving down the tree starting at node k,\n * exchanging a node with the smallest of its two sons if necessary, stopping\n * when the heap property is re-established (each father smaller than its\n * two sons).\n */\n\nvar pqdownheap = function pqdownheap(s, tree, k\n//    deflate_state *s;\n//    ct_data *tree;  /* the tree to restore */\n//    int k;               /* node to move down */\n) {\n  var v = s.heap[k];\n  var j = k << 1;\n  /* left son of k */\n\n  while (j <= s.heap_len) {\n    /* Set j to the smallest of the two sons: */\n    if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {\n      j++;\n    }\n    /* Exit if v is smaller than both sons */\n\n    if (smaller(tree, v, s.heap[j], s.depth)) {\n      break;\n    }\n    /* Exchange v with the smallest son */\n\n    s.heap[k] = s.heap[j];\n    k = j;\n    /* And continue down the tree, setting j to the left son of k */\n\n    j <<= 1;\n  }\n  s.heap[k] = v;\n}; // inlined manually\n// const SMALLEST = 1;\n\n/* ===========================================================================\n * Send the block data compressed using the given Huffman trees\n */\n\nvar compress_block = function compress_block(s, ltree, dtree\n//    deflate_state *s;\n//    const ct_data *ltree; /* literal tree */\n//    const ct_data *dtree; /* distance tree */\n) {\n  var dist;\n  /* distance of matched string */\n\n  var lc;\n  /* match length or unmatched char (if dist == 0) */\n\n  var lx = 0;\n  /* running index in l_buf */\n\n  var code;\n  /* the code to send */\n\n  var extra;\n  /* number of extra bits to send */\n\n  if (s.last_lit !== 0) {\n    do {\n      dist = s.pending_buf[s.d_buf + lx * 2] << 8 | s.pending_buf[s.d_buf + lx * 2 + 1];\n      lc = s.pending_buf[s.l_buf + lx];\n      lx++;\n      if (dist === 0) {\n        send_code(s, lc, ltree);\n        /* send a literal byte */\n        // Tracecv(isgraph(lc), (stderr,\" '%c' \", lc));\n      } else {\n        /* Here, lc is the match length - MIN_MATCH */\n        code = _length_code[lc];\n        send_code(s, code + LITERALS + 1, ltree);\n        /* send the length code */\n\n        extra = extra_lbits[code];\n        if (extra !== 0) {\n          lc -= base_length[code];\n          send_bits(s, lc, extra);\n          /* send the extra length bits */\n        }\n        dist--;\n        /* dist is now the match distance - 1 */\n\n        code = d_code(dist); // Assert (code < D_CODES, \"bad d_code\");\n\n        send_code(s, code, dtree);\n        /* send the distance code */\n\n        extra = extra_dbits[code];\n        if (extra !== 0) {\n          dist -= base_dist[code];\n          send_bits(s, dist, extra);\n          /* send the extra distance bits */\n        }\n      }\n      /* literal or match pair ? */\n\n      /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */\n      // Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,\n      //       \"pendingBuf overflow\");\n    } while (lx < s.last_lit);\n  }\n  send_code(s, END_BLOCK, ltree);\n};\n/* ===========================================================================\n * Construct one Huffman tree and assigns the code bit strings and lengths.\n * Update the total bit length for the current block.\n * IN assertion: the field freq is set for all tree elements.\n * OUT assertions: the fields len and code are set to the optimal bit length\n *     and corresponding code. The length opt_len is updated; static_len is\n *     also updated if stree is not null. The field max_code is set.\n */\n\nvar build_tree = function build_tree(s, desc //    deflate_state *s; //    tree_desc *desc; /* the tree descriptor */\n) {\n  var tree = desc.dyn_tree;\n  var stree = desc.stat_desc.static_tree;\n  var has_stree = desc.stat_desc.has_stree;\n  var elems = desc.stat_desc.elems;\n  var n;\n  var m;\n  /* iterate over heap elements */\n\n  var max_code = -1;\n  /* largest code with non zero frequency */\n\n  var node;\n  /* new node being created */\n\n  /* Construct the initial heap, with least frequent element in\n   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].\n   * heap[0] is not used.\n   */\n\n  s.heap_len = 0;\n  s.heap_max = HEAP_SIZE;\n  for (n = 0; n < elems; n++) {\n    if (tree[n * 2] !== /* .Freq */\n    0) {\n      s.heap[++s.heap_len] = max_code = n;\n      s.depth[n] = 0;\n    } else {\n      tree[n * 2 + 1] = /* .Len */\n      0;\n    }\n  }\n  /* The pkzip format requires that at least one distance code exists,\n   * and that at least one bit should be sent even if there is only one\n   * possible code. So to avoid special checks later on we force at least\n   * two codes of non zero frequency.\n   */\n\n  while (s.heap_len < 2) {\n    node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;\n    tree[node * 2] = /* .Freq */\n    1;\n    s.depth[node] = 0;\n    s.opt_len--;\n    if (has_stree) {\n      s.static_len -= stree[node * 2 + 1];\n      /* .Len */\n    }\n    /* node is 0 or 1 so it does not have extra bits */\n  }\n  desc.max_code = max_code;\n  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,\n   * establish sub-heaps of increasing lengths:\n   */\n\n  for (n = s.heap_len >> 1; /* int /2 */\n  n >= 1; n--) {\n    pqdownheap(s, tree, n);\n  }\n  /* Construct the Huffman tree by repeatedly combining the least two\n   * frequent nodes.\n   */\n\n  node = elems;\n  /* next internal node of the tree */\n\n  do {\n    // pqremove(s, tree, n);  /* n = node of least frequency */\n\n    /** * pqremove ** */\n    n = s.heap[1];\n    /* SMALLEST */\n    s.heap[1] = s.heap[s.heap_len--];\n    /* SMALLEST */\n    pqdownheap(s, tree, 1\n    /* SMALLEST */);\n    /***/\n\n    m = s.heap[1];\n    /* SMALLEST */\n    /* m = node of next least frequency */\n\n    s.heap[--s.heap_max] = n;\n    /* keep the nodes sorted by frequency */\n\n    s.heap[--s.heap_max] = m;\n    /* Create a new node father of n and m */\n\n    tree[node * 2] = /* .Freq */\n    tree[n * 2] + /* .Freq */\n    tree[m * 2];\n    /* .Freq */\n    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;\n    tree[n * 2 + 1] = /* .Dad */\n    tree[m * 2 + 1] = /* .Dad */\n    node;\n    /* and insert the new node in the heap */\n\n    s.heap[1] = node++;\n    /* SMALLEST */\n    pqdownheap(s, tree, 1\n    /* SMALLEST */);\n  } while (s.heap_len >= 2);\n  s.heap[--s.heap_max] = s.heap[1];\n  /* SMALLEST */\n  /* At this point, the fields freq and dad are set. We can now\n   * generate the bit lengths.\n   */\n\n  gen_bitlen(s, desc);\n  /* The field len is now set, we can generate the bit codes */\n\n  gen_codes(tree, max_code, s.bl_count);\n};\n/* ===========================================================================\n * Scan a literal or distance tree to determine the frequencies of the codes\n * in the bit length tree.\n */\n\nvar scan_tree = function scan_tree(s, tree, max_code\n//    deflate_state *s;\n//    ct_data *tree;   /* the tree to be scanned */\n//    int max_code;    /* and its largest code of non zero frequency */\n) {\n  var n;\n  /* iterates over all tree elements */\n\n  var prevlen = -1;\n  /* last emitted length */\n\n  var curlen;\n  /* length of current code */\n\n  var nextlen = tree[0 * 2 + 1];\n  /* .Len */\n  /* length of next code */\n\n  var count = 0;\n  /* repeat count of the current code */\n\n  var max_count = 7;\n  /* max repeat count */\n\n  var min_count = 4;\n  /* min repeat count */\n\n  if (nextlen === 0) {\n    max_count = 138;\n    min_count = 3;\n  }\n  tree[(max_code + 1) * 2 + 1] = /* .Len */\n  0xffff;\n  /* guard */\n\n  for (n = 0; n <= max_code; n++) {\n    curlen = nextlen;\n    nextlen = tree[(n + 1) * 2 + 1];\n    /* .Len */\n\n    if (++count < max_count && curlen === nextlen) {\n      continue;\n    } else if (count < min_count) {\n      s.bl_tree[curlen * 2] += /* .Freq */\n      count;\n    } else if (curlen !== 0) {\n      if (curlen !== prevlen) {\n        s.bl_tree[curlen * 2] /* .Freq */++;\n      }\n      s.bl_tree[REP_3_6 * 2] /* .Freq */++;\n    } else if (count <= 10) {\n      s.bl_tree[REPZ_3_10 * 2] /* .Freq */++;\n    } else {\n      s.bl_tree[REPZ_11_138 * 2] /* .Freq */++;\n    }\n    count = 0;\n    prevlen = curlen;\n    if (nextlen === 0) {\n      max_count = 138;\n      min_count = 3;\n    } else if (curlen === nextlen) {\n      max_count = 6;\n      min_count = 3;\n    } else {\n      max_count = 7;\n      min_count = 4;\n    }\n  }\n};\n/* ===========================================================================\n * Send a literal or distance tree in compressed form, using the codes in\n * bl_tree.\n */\n\nvar send_tree = function send_tree(s, tree, max_code\n//    deflate_state *s;\n//    ct_data *tree; /* the tree to be scanned */\n//    int max_code;       /* and its largest code of non zero frequency */\n) {\n  var n;\n  /* iterates over all tree elements */\n\n  var prevlen = -1;\n  /* last emitted length */\n\n  var curlen;\n  /* length of current code */\n\n  var nextlen = tree[0 * 2 + 1];\n  /* .Len */\n  /* length of next code */\n\n  var count = 0;\n  /* repeat count of the current code */\n\n  var max_count = 7;\n  /* max repeat count */\n\n  var min_count = 4;\n  /* min repeat count */\n\n  /* tree[max_code+1].Len = -1; */\n\n  /* guard already set */\n\n  if (nextlen === 0) {\n    max_count = 138;\n    min_count = 3;\n  }\n  for (n = 0; n <= max_code; n++) {\n    curlen = nextlen;\n    nextlen = tree[(n + 1) * 2 + 1];\n    /* .Len */\n\n    if (++count < max_count && curlen === nextlen) {\n      continue;\n    } else if (count < min_count) {\n      do {\n        send_code(s, curlen, s.bl_tree);\n      } while (--count !== 0);\n    } else if (curlen !== 0) {\n      if (curlen !== prevlen) {\n        send_code(s, curlen, s.bl_tree);\n        count--;\n      } // Assert(count >= 3 && count <= 6, \" 3_6?\");\n\n      send_code(s, REP_3_6, s.bl_tree);\n      send_bits(s, count - 3, 2);\n    } else if (count <= 10) {\n      send_code(s, REPZ_3_10, s.bl_tree);\n      send_bits(s, count - 3, 3);\n    } else {\n      send_code(s, REPZ_11_138, s.bl_tree);\n      send_bits(s, count - 11, 7);\n    }\n    count = 0;\n    prevlen = curlen;\n    if (nextlen === 0) {\n      max_count = 138;\n      min_count = 3;\n    } else if (curlen === nextlen) {\n      max_count = 6;\n      min_count = 3;\n    } else {\n      max_count = 7;\n      min_count = 4;\n    }\n  }\n};\n/* ===========================================================================\n * Construct the Huffman tree for the bit lengths and return the index in\n * bl_order of the last bit length code to send.\n */\n\nvar build_bl_tree = function build_bl_tree(s) {\n  var max_blindex;\n  /* index of last bit length code of non zero freq */\n\n  /* Determine the bit length frequencies for literal and distance trees */\n\n  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);\n  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);\n  /* Build the bit length tree: */\n\n  build_tree(s, s.bl_desc);\n  /* opt_len now includes the length of the tree representations, except\n   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.\n   */\n\n  /* Determine the number of bit length codes to send. The pkzip format\n   * requires that at least 4 bit length codes be sent. (appnote.txt says\n   * 3 but the actual value used is 4.)\n   */\n\n  for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {\n    if (s.bl_tree[bl_order[max_blindex] * 2 + 1] !== /* .Len */\n    0) {\n      break;\n    }\n  }\n  /* Update opt_len to include the bit length tree and counts */\n\n  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4; // Tracev((stderr, \"\\ndyn trees: dyn %ld, stat %ld\",\n  //        s->opt_len, s->static_len));\n\n  return max_blindex;\n};\n/* ===========================================================================\n * Send the header for a block using dynamic Huffman trees: the counts, the\n * lengths of the bit length codes, the literal tree and the distance tree.\n * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.\n */\n\nvar send_all_trees = function send_all_trees(s, lcodes, dcodes, blcodes //    deflate_state *s; //    int lcodes, dcodes, blcodes; /* number of codes for each tree */\n) {\n  var rank;\n  /* index in bl_order */\n  // Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, \"not enough codes\");\n  // Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,\n  //        \"too many codes\");\n  // Tracev((stderr, \"\\nbl counts: \"));\n\n  send_bits(s, lcodes - 257, 5);\n  /* not +255 as stated in appnote.txt */\n\n  send_bits(s, dcodes - 1, 5);\n  send_bits(s, blcodes - 4, 4);\n  /* not -3 as stated in appnote.txt */\n\n  for (rank = 0; rank < blcodes; rank++) {\n    // Tracev((stderr, \"\\nbl code %2d \", bl_order[rank]));\n    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1], /* .Len */\n    3);\n  } // Tracev((stderr, \"\\nbl tree: sent %ld\", s->bits_sent));\n\n  send_tree(s, s.dyn_ltree, lcodes - 1);\n  /* literal tree */\n  // Tracev((stderr, \"\\nlit tree: sent %ld\", s->bits_sent));\n\n  send_tree(s, s.dyn_dtree, dcodes - 1);\n  /* distance tree */\n  // Tracev((stderr, \"\\ndist tree: sent %ld\", s->bits_sent));\n};\n/* ===========================================================================\n * Check if the data type is TEXT or BINARY, using the following algorithm:\n * - TEXT if the two conditions below are satisfied:\n *    a) There are no non-portable control characters belonging to the\n *       \"black list\" (0..6, 14..25, 28..31).\n *    b) There is at least one printable character belonging to the\n *       \"white list\" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).\n * - BINARY otherwise.\n * - The following partially-portable control characters form a\n *   \"gray list\" that is ignored in this detection algorithm:\n *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).\n * IN assertion: the fields Freq of dyn_ltree are set.\n */\n\nvar detect_data_type = function detect_data_type(s) {\n  /* black_mask is the bit mask of black-listed bytes\n   * set bits 0..6, 14..25, and 28..31\n   * 0xf3ffc07f = binary 11110011111111111100000001111111\n   */\n  var black_mask = 0xf3ffc07f;\n  var n;\n  /* Check for non-textual (\"black-listed\") bytes. */\n\n  for (n = 0; n <= 31; n++, black_mask >>>= 1) {\n    if (black_mask & 1 && s.dyn_ltree[n * 2] !== /* .Freq */\n    0) {\n      return Z_BINARY;\n    }\n  }\n  /* Check for textual (\"white-listed\") bytes. */\n\n  if (s.dyn_ltree[9 * 2] !== /* .Freq */\n  0 || s.dyn_ltree[10 * 2] !== /* .Freq */\n  0 || s.dyn_ltree[13 * 2] !== /* .Freq */\n  0) {\n    return Z_TEXT;\n  }\n  for (n = 32; n < LITERALS; n++) {\n    if (s.dyn_ltree[n * 2] !== /* .Freq */\n    0) {\n      return Z_TEXT;\n    }\n  }\n  /* There are no \"black-listed\" or \"white-listed\" bytes:\n   * this stream either is empty or has tolerated (\"gray-listed\") bytes only.\n   */\n\n  return Z_BINARY;\n};\nvar static_init_done = false;\n/* ===========================================================================\n * Initialize the tree data structures for a new zlib stream.\n */\n\nvar _tr_init = function _tr_init(s) {\n  if (!static_init_done) {\n    tr_static_init();\n    static_init_done = true;\n  }\n  s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);\n  s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);\n  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);\n  s.bi_buf = 0;\n  s.bi_valid = 0;\n  /* Initialize the first block of the first file: */\n\n  init_block(s);\n};\n/* ===========================================================================\n * Send a stored block\n */\n\nvar _tr_stored_block = function _tr_stored_block(s, buf, stored_len, last\n// DeflateState *s;\n// charf *buf;       /* input block */\n// ulg stored_len;   /* length of input block */\n// int last;         /* one if this is the last block for a file */\n) {\n  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);\n  /* send block type */\n\n  copy_block(s, buf, stored_len, true);\n  /* with header */\n};\n/* ===========================================================================\n * Send one empty static block to give enough lookahead for inflate.\n * This takes 10 bits, of which 7 may remain in the bit buffer.\n */\n\nvar _tr_align = function _tr_align(s) {\n  send_bits(s, STATIC_TREES << 1, 3);\n  send_code(s, END_BLOCK, static_ltree);\n  bi_flush(s);\n};\n/* ===========================================================================\n * Determine the best encoding for the current block: dynamic trees, static\n * trees or store, and output the encoded block to the zip file.\n */\n\nvar _tr_flush_block = function _tr_flush_block(s, buf, stored_len, last\n// DeflateState *s;\n// charf *buf;       /* input block, or NULL if too old */\n// ulg stored_len;   /* length of input block */\n// int last;         /* one if this is the last block for a file */\n) {\n  var opt_lenb;\n  var static_lenb;\n  /* opt_len and static_len in bytes */\n\n  var max_blindex = 0;\n  /* index of last bit length code of non zero freq */\n\n  /* Build the Huffman trees unless a stored block is forced */\n\n  if (s.level > 0) {\n    /* Check if the file is binary or text */\n    if (s.strm.data_type === Z_UNKNOWN) {\n      s.strm.data_type = detect_data_type(s);\n    }\n    /* Construct the literal and distance trees */\n\n    build_tree(s, s.l_desc); // Tracev((stderr, \"\\nlit data: dyn %ld, stat %ld\", s->opt_len,\n    //        s->static_len));\n\n    build_tree(s, s.d_desc); // Tracev((stderr, \"\\ndist data: dyn %ld, stat %ld\", s->opt_len,\n    //        s->static_len));\n\n    /* At this point, opt_len and static_len are the total bit lengths of\n     * the compressed block data, excluding the tree representations.\n     */\n\n    /* Build the bit length tree for the above two trees, and get the index\n     * in bl_order of the last bit length code to send.\n     */\n\n    max_blindex = build_bl_tree(s);\n    /* Determine the best encoding. Compute the block lengths in bytes. */\n\n    opt_lenb = s.opt_len + 3 + 7 >>> 3;\n    static_lenb = s.static_len + 3 + 7 >>> 3; // Tracev((stderr, \"\\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u \",\n    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,\n    //        s->last_lit));\n\n    if (static_lenb <= opt_lenb) {\n      opt_lenb = static_lenb;\n    }\n  } else {\n    // Assert(buf != (char*)0, \"lost buf\");\n    opt_lenb = static_lenb = stored_len + 5;\n    /* force a stored block */\n  }\n  if (stored_len + 4 <= opt_lenb && buf !== -1) {\n    /* 4: two words for the lengths */\n\n    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.\n     * Otherwise we can't have processed more than WSIZE input bytes since\n     * the last block flush, because compression would have been\n     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to\n     * transform a block into a stored block.\n     */\n    _tr_stored_block(s, buf, stored_len, last);\n  } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {\n    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);\n    compress_block(s, static_ltree, static_dtree);\n  } else {\n    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);\n    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);\n    compress_block(s, s.dyn_ltree, s.dyn_dtree);\n  } // Assert (s->compressed_len == s->bits_sent, \"bad compressed size\");\n\n  /* The above check is made mod 2^32, for files larger than 512 MB\n   * and uLong implemented on 32 bits.\n   */\n\n  init_block(s);\n  if (last) {\n    bi_windup(s);\n  } // Tracev((stderr,\"\\ncomprlen %lu(%lu) \", s->compressed_len>>3,\n  //       s->compressed_len-7*last));\n};\n/* ===========================================================================\n * Save the match info and tally the frequency counts. Return true if\n * the current block must be flushed.\n */\n\nvar _tr_tally = function _tr_tally(s, dist, lc\n//    deflate_state *s;\n//    unsigned dist;  /* distance of matched string */\n//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */\n) {\n  // let out_length, in_length, dcode;\n  s.pending_buf[s.d_buf + s.last_lit * 2] = dist >>> 8 & 0xff;\n  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;\n  s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;\n  s.last_lit++;\n  if (dist === 0) {\n    /* lc is the unmatched char */\n    s.dyn_ltree[lc * 2] /* .Freq */++;\n  } else {\n    s.matches++;\n    /* Here, lc is the match length - MIN_MATCH */\n\n    dist--;\n    /* dist = match distance - 1 */\n    // Assert((ush)dist < (ush)MAX_DIST(s) &&\n    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&\n    //       (ush)d_code(dist) < (ush)D_CODES,  \"_tr_tally: bad match\");\n\n    s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2] /* .Freq */++;\n    s.dyn_dtree[d_code(dist) * 2] /* .Freq */++;\n  } // (!) This block is disabled in zlib defaults,\n  // don't enable it for binary compatibility\n  // #ifdef TRUNCATE_BLOCK\n  //  /* Try to guess if it is profitable to stop the current block here */\n  //  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {\n  //    /* Compute an upper bound for the compressed length */\n  //    out_length = s.last_lit*8;\n  //    in_length = s.strstart - s.block_start;\n  //\n  //    for (dcode = 0; dcode < D_CODES; dcode++) {\n  //      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);\n  //    }\n  //    out_length >>>= 3;\n  //    //Tracev((stderr,\"\\nlast_lit %u, in %ld, out ~%ld(%ld%%) \",\n  //    //       s->last_lit, in_length, out_length,\n  //    //       100L - out_length*100L/in_length));\n  //    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {\n  //      return true;\n  //    }\n  //  }\n  // #endif\n\n  return s.last_lit === s.lit_bufsize - 1;\n  /* We avoid equality with lit_bufsize because of wraparound at 64K\n   * on 16 bit machines and because stored blocks are restricted to\n   * 64K-1 bytes.\n   */\n};\nvar _tr_init_1 = _tr_init;\nvar _tr_stored_block_1 = _tr_stored_block;\nvar _tr_flush_block_1 = _tr_flush_block;\nvar _tr_tally_1 = _tr_tally;\nvar _tr_align_1 = _tr_align;\nvar trees = {\n  _tr_init: _tr_init_1,\n  _tr_stored_block: _tr_stored_block_1,\n  _tr_flush_block: _tr_flush_block_1,\n  _tr_tally: _tr_tally_1,\n  _tr_align: _tr_align_1\n};\n\n// It isn't worth it to make additional optimizations as in original.\n// Small size is preferable.\n// (C) 1995-2013 Jean-loup Gailly and Mark Adler\n// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin\n//\n// This software is provided 'as-is', without any express or implied\n// warranty. In no event will the authors be held liable for any damages\n// arising from the use of this software.\n//\n// Permission is granted to anyone to use this software for any purpose,\n// including commercial applications, and to alter it and redistribute it\n// freely, subject to the following restrictions:\n//\n// 1. The origin of this software must not be misrepresented; you must not\n//   claim that you wrote the original software. If you use this software\n//   in a product, an acknowledgment in the product documentation would be\n//   appreciated but is not required.\n// 2. Altered source versions must be plainly marked as such, and must not be\n//   misrepresented as being the original software.\n// 3. This notice may not be removed or altered from any source distribution.\n\nvar adler32 = function adler32(adler, buf, len, pos) {\n  var s1 = adler & 0xffff | 0;\n  var s2 = adler >>> 16 & 0xffff | 0;\n  var n = 0;\n  while (len !== 0) {\n    // Set limit ~ twice less than 5552, to keep\n    // s2 in 31-bits, because we force signed ints.\n    // in other case %= will fail.\n    n = len > 2000 ? 2000 : len;\n    len -= n;\n    do {\n      s1 = s1 + buf[pos++] | 0;\n      s2 = s2 + s1 | 0;\n    } while (--n);\n    s1 %= 65521;\n    s2 %= 65521;\n  }\n  return s1 | s2 << 16 | 0;\n};\nvar adler32_1 = adler32;\n\n// So write code to minimize size - no pregenerated tables\n// and array tools dependencies.\n// (C) 1995-2013 Jean-loup Gailly and Mark Adler\n// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin\n//\n// This software is provided 'as-is', without any express or implied\n// warranty. In no event will the authors be held liable for any damages\n// arising from the use of this software.\n//\n// Permission is granted to anyone to use this software for any purpose,\n// including commercial applications, and to alter it and redistribute it\n// freely, subject to the following restrictions:\n//\n// 1. The origin of this software must not be misrepresented; you must not\n//   claim that you wrote the original software. If you use this software\n//   in a product, an acknowledgment in the product documentation would be\n//   appreciated but is not required.\n// 2. Altered source versions must be plainly marked as such, and must not be\n//   misrepresented as being the original software.\n// 3. This notice may not be removed or altered from any source distribution.\n// Use ordinary array, since untyped makes no boost here\n\nvar makeTable = function makeTable() {\n  var c;\n  var table = [];\n  for (var n = 0; n < 256; n++) {\n    c = n;\n    for (var k = 0; k < 8; k++) {\n      c = c & 1 ? 0xedb88320 ^ c >>> 1 : c >>> 1;\n    }\n    table[n] = c;\n  }\n  return table;\n}; // Create table on load. Just 255 signed longs. Not a problem.\n\nvar crcTable = new Uint32Array(makeTable());\nvar crc32 = function crc32(crc, buf, len, pos) {\n  var t = crcTable;\n  var end = pos + len;\n  crc ^= -1;\n  for (var i = pos; i < end; i++) {\n    crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 0xff];\n  }\n  return crc ^ -1; // >>> 0;\n};\nvar crc32_1 = crc32;\n\n// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin\n//\n// This software is provided 'as-is', without any express or implied\n// warranty. In no event will the authors be held liable for any damages\n// arising from the use of this software.\n//\n// Permission is granted to anyone to use this software for any purpose,\n// including commercial applications, and to alter it and redistribute it\n// freely, subject to the following restrictions:\n//\n// 1. The origin of this software must not be misrepresented; you must not\n//   claim that you wrote the original software. If you use this software\n//   in a product, an acknowledgment in the product documentation would be\n//   appreciated but is not required.\n// 2. Altered source versions must be plainly marked as such, and must not be\n//   misrepresented as being the original software.\n// 3. This notice may not be removed or altered from any source distribution.\n\nvar messages = {\n  2: 'need dictionary',\n  /* Z_NEED_DICT       2  */\n  1: 'stream end',\n  /* Z_STREAM_END      1  */\n  0: '',\n  /* Z_OK              0  */\n  '-1': 'file error',\n  /* Z_ERRNO         (-1) */\n  '-2': 'stream error',\n  /* Z_STREAM_ERROR  (-2) */\n  '-3': 'data error',\n  /* Z_DATA_ERROR    (-3) */\n  '-4': 'insufficient memory',\n  /* Z_MEM_ERROR     (-4) */\n  '-5': 'buffer error',\n  /* Z_BUF_ERROR     (-5) */\n  '-6': 'incompatible version'\n  /* Z_VERSION_ERROR (-6) */\n};\n\n// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin\n//\n// This software is provided 'as-is', without any express or implied\n// warranty. In no event will the authors be held liable for any damages\n// arising from the use of this software.\n//\n// Permission is granted to anyone to use this software for any purpose,\n// including commercial applications, and to alter it and redistribute it\n// freely, subject to the following restrictions:\n//\n// 1. The origin of this software must not be misrepresented; you must not\n//   claim that you wrote the original software. If you use this software\n//   in a product, an acknowledgment in the product documentation would be\n//   appreciated but is not required.\n// 2. Altered source versions must be plainly marked as such, and must not be\n//   misrepresented as being the original software.\n// 3. This notice may not be removed or altered from any source distribution.\n\nvar constants = {\n  /* Allowed flush values; see deflate() and inflate() below for details */\n  Z_NO_FLUSH: 0,\n  Z_PARTIAL_FLUSH: 1,\n  Z_SYNC_FLUSH: 2,\n  Z_FULL_FLUSH: 3,\n  Z_FINISH: 4,\n  Z_BLOCK: 5,\n  Z_TREES: 6,\n  /* Return codes for the compression/decompression functions. Negative values\n   * are errors, positive values are used for special but normal events.\n   */\n  Z_OK: 0,\n  Z_STREAM_END: 1,\n  Z_NEED_DICT: 2,\n  Z_ERRNO: -1,\n  Z_STREAM_ERROR: -2,\n  Z_DATA_ERROR: -3,\n  Z_MEM_ERROR: -4,\n  Z_BUF_ERROR: -5,\n  // Z_VERSION_ERROR: -6,\n\n  /* compression levels */\n  Z_NO_COMPRESSION: 0,\n  Z_BEST_SPEED: 1,\n  Z_BEST_COMPRESSION: 9,\n  Z_DEFAULT_COMPRESSION: -1,\n  Z_FILTERED: 1,\n  Z_HUFFMAN_ONLY: 2,\n  Z_RLE: 3,\n  Z_FIXED: 4,\n  Z_DEFAULT_STRATEGY: 0,\n  /* Possible values of the data_type field (though see inflate()) */\n  Z_BINARY: 0,\n  Z_TEXT: 1,\n  // Z_ASCII:                1, // = Z_TEXT (deprecated)\n  Z_UNKNOWN: 2,\n  /* The deflate compression method */\n  Z_DEFLATED: 8 // Z_NULL:                 null // Use -1 or null inline, depending on var type\n};\n\n// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin\n//\n// This software is provided 'as-is', without any express or implied\n// warranty. In no event will the authors be held liable for any damages\n// arising from the use of this software.\n//\n// Permission is granted to anyone to use this software for any purpose,\n// including commercial applications, and to alter it and redistribute it\n// freely, subject to the following restrictions:\n//\n// 1. The origin of this software must not be misrepresented; you must not\n//   claim that you wrote the original software. If you use this software\n//   in a product, an acknowledgment in the product documentation would be\n//   appreciated but is not required.\n// 2. Altered source versions must be plainly marked as such, and must not be\n//   misrepresented as being the original software.\n// 3. This notice may not be removed or altered from any source distribution.\n\nvar _tr_init$1 = trees._tr_init;\nvar _tr_stored_block$1 = trees._tr_stored_block;\nvar _tr_flush_block$1 = trees._tr_flush_block;\nvar _tr_tally$1 = trees._tr_tally;\nvar _tr_align$1 = trees._tr_align;\n/* Public constants ========================================================== */\n\n/* =========================================================================== */\n\nvar Z_NO_FLUSH = constants.Z_NO_FLUSH;\nvar Z_PARTIAL_FLUSH = constants.Z_PARTIAL_FLUSH;\nvar Z_FULL_FLUSH = constants.Z_FULL_FLUSH;\nvar Z_FINISH = constants.Z_FINISH;\nvar Z_BLOCK = constants.Z_BLOCK;\nvar Z_OK = constants.Z_OK;\nvar Z_STREAM_END = constants.Z_STREAM_END;\nvar Z_STREAM_ERROR = constants.Z_STREAM_ERROR;\nvar Z_DATA_ERROR = constants.Z_DATA_ERROR;\nvar Z_BUF_ERROR = constants.Z_BUF_ERROR;\nvar Z_DEFAULT_COMPRESSION = constants.Z_DEFAULT_COMPRESSION;\nvar Z_FILTERED = constants.Z_FILTERED;\nvar Z_HUFFMAN_ONLY = constants.Z_HUFFMAN_ONLY;\nvar Z_RLE = constants.Z_RLE;\nvar Z_FIXED$1 = constants.Z_FIXED;\nvar Z_DEFAULT_STRATEGY = constants.Z_DEFAULT_STRATEGY;\nvar Z_UNKNOWN$1 = constants.Z_UNKNOWN;\nvar Z_DEFLATED = constants.Z_DEFLATED;\n/* ============================================================================ */\n\nvar MAX_MEM_LEVEL = 9;\n/* Maximum value for memLevel in deflateInit2 */\n\nvar MAX_WBITS = 15;\n/* 32K LZ77 window */\n\nvar DEF_MEM_LEVEL = 8;\nvar LENGTH_CODES$1 = 29;\n/* number of length codes, not counting the special END_BLOCK code */\n\nvar LITERALS$1 = 256;\n/* number of literal bytes 0..255 */\n\nvar L_CODES$1 = LITERALS$1 + 1 + LENGTH_CODES$1;\n/* number of Literal or Length codes, including the END_BLOCK code */\n\nvar D_CODES$1 = 30;\n/* number of distance codes */\n\nvar BL_CODES$1 = 19;\n/* number of codes used to transfer the bit lengths */\n\nvar HEAP_SIZE$1 = 2 * L_CODES$1 + 1;\n/* maximum heap size */\n\nvar MAX_BITS$1 = 15;\n/* All codes must not exceed MAX_BITS bits */\n\nvar MIN_MATCH$1 = 3;\nvar MAX_MATCH$1 = 258;\nvar MIN_LOOKAHEAD = MAX_MATCH$1 + MIN_MATCH$1 + 1;\nvar PRESET_DICT = 0x20;\nvar INIT_STATE = 42;\nvar EXTRA_STATE = 69;\nvar NAME_STATE = 73;\nvar COMMENT_STATE = 91;\nvar HCRC_STATE = 103;\nvar BUSY_STATE = 113;\nvar FINISH_STATE = 666;\nvar BS_NEED_MORE = 1;\n/* block not completed, need more input or more output */\n\nvar BS_BLOCK_DONE = 2;\n/* block flush performed */\n\nvar BS_FINISH_STARTED = 3;\n/* finish started, need only more output at next deflate */\n\nvar BS_FINISH_DONE = 4;\n/* finish done, accept no more input or output */\n\nvar OS_CODE = 0x03; // Unix :) . Don't detect, use this default.\n\nvar err = function err(strm, errorCode) {\n  strm.msg = messages[errorCode];\n  return errorCode;\n};\nvar rank = function rank(f) {\n  return (f << 1) - (f > 4 ? 9 : 0);\n};\nvar zero$1 = function zero(buf) {\n  var len = buf.length;\n  while (--len >= 0) {\n    buf[len] = 0;\n  }\n};\nvar HASH_ZLIB = function HASH_ZLIB(s, prev, data) {\n  return (prev << s.hash_shift ^ data) & s.hash_mask;\n}; // This hash causes less collisions, https://github.com/nodeca/pako/issues/135\n// But breaks binary compatibility\n// let HASH_FAST = (s, prev, data) => ((prev << 8) + (prev >> 8) + (data << 4)) & s.hash_mask;\n\nvar HASH = HASH_ZLIB;\n/* =========================================================================\n * Flush as much pending output as possible. All deflate() output goes\n * through this function so some applications may wish to modify it\n * to avoid allocating a large strm->output buffer and copying into it.\n * (See also read_buf()).\n */\n\nvar flush_pending = function flush_pending(strm) {\n  var s = strm.state; // _tr_flush_bits(s);\n\n  var len = s.pending;\n  if (len > strm.avail_out) {\n    len = strm.avail_out;\n  }\n  if (len === 0) {\n    return;\n  }\n  strm.output.set(s.pending_buf.subarray(s.pending_out, s.pending_out + len), strm.next_out);\n  strm.next_out += len;\n  s.pending_out += len;\n  strm.total_out += len;\n  strm.avail_out -= len;\n  s.pending -= len;\n  if (s.pending === 0) {\n    s.pending_out = 0;\n  }\n};\nvar flush_block_only = function flush_block_only(s, last) {\n  _tr_flush_block$1(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);\n  s.block_start = s.strstart;\n  flush_pending(s.strm);\n};\nvar put_byte = function put_byte(s, b) {\n  s.pending_buf[s.pending++] = b;\n};\n/* =========================================================================\n * Put a short in the pending buffer. The 16-bit value is put in MSB order.\n * IN assertion: the stream state is correct and there is enough room in\n * pending_buf.\n */\n\nvar putShortMSB = function putShortMSB(s, b) {\n  //  put_byte(s, (Byte)(b >> 8));\n  //  put_byte(s, (Byte)(b & 0xff));\n  s.pending_buf[s.pending++] = b >>> 8 & 0xff;\n  s.pending_buf[s.pending++] = b & 0xff;\n};\n/* ===========================================================================\n * Read a new buffer from the current input stream, update the adler32\n * and total number of bytes read.  All deflate() input goes through\n * this function so some applications may wish to modify it to avoid\n * allocating a large strm->input buffer and copying from it.\n * (See also flush_pending()).\n */\n\nvar read_buf = function read_buf(strm, buf, start, size) {\n  var len = strm.avail_in;\n  if (len > size) {\n    len = size;\n  }\n  if (len === 0) {\n    return 0;\n  }\n  strm.avail_in -= len; // zmemcpy(buf, strm->next_in, len);\n\n  buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start);\n  if (strm.state.wrap === 1) {\n    strm.adler = adler32_1(strm.adler, buf, len, start);\n  } else if (strm.state.wrap === 2) {\n    strm.adler = crc32_1(strm.adler, buf, len, start);\n  }\n  strm.next_in += len;\n  strm.total_in += len;\n  return len;\n};\n/* ===========================================================================\n * Set match_start to the longest match starting at the given string and\n * return its length. Matches shorter or equal to prev_length are discarded,\n * in which case the result is equal to prev_length and match_start is\n * garbage.\n * IN assertions: cur_match is the head of the hash chain for the current\n *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1\n * OUT assertion: the match length is not greater than s->lookahead.\n */\n\nvar longest_match = function longest_match(s, cur_match) {\n  var chain_length = s.max_chain_length;\n  /* max hash chain length */\n\n  var scan = s.strstart;\n  /* current string */\n\n  var match;\n  /* matched string */\n\n  var len;\n  /* length of current match */\n\n  var best_len = s.prev_length;\n  /* best match length so far */\n\n  var nice_match = s.nice_match;\n  /* stop if match long enough */\n\n  var limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0;\n  /* NIL */\n  var _win = s.window; // shortcut\n\n  var wmask = s.w_mask;\n  var prev = s.prev;\n  /* Stop when cur_match becomes <= limit. To simplify the code,\n   * we prevent matches with the string of window index 0.\n   */\n\n  var strend = s.strstart + MAX_MATCH$1;\n  var scan_end1 = _win[scan + best_len - 1];\n  var scan_end = _win[scan + best_len];\n  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.\n   * It is easy to get rid of this optimization if necessary.\n   */\n  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, \"Code too clever\");\n\n  /* Do not waste too much time if we already have a good match: */\n\n  if (s.prev_length >= s.good_match) {\n    chain_length >>= 2;\n  }\n  /* Do not look for matches beyond the end of the input. This is necessary\n   * to make deflate deterministic.\n   */\n\n  if (nice_match > s.lookahead) {\n    nice_match = s.lookahead;\n  } // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, \"need lookahead\");\n\n  do {\n    // Assert(cur_match < s->strstart, \"no future\");\n    match = cur_match;\n    /* Skip to next match if the match length cannot increase\n     * or if the match length is less than 2.  Note that the checks below\n     * for insufficient lookahead only occur occasionally for performance\n     * reasons.  Therefore uninitialized memory will be accessed, and\n     * conditional jumps will be made that depend on those values.\n     * However the length of the match is limited to the lookahead, so\n     * the output of deflate is not affected by the uninitialized values.\n     */\n\n    if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {\n      continue;\n    }\n    /* The check at best_len-1 can be removed because it will be made\n     * again later. (This heuristic is not always a win.)\n     * It is not necessary to compare scan[2] and match[2] since they\n     * are always equal when the other bytes match, given that\n     * the hash keys are equal and that HASH_BITS >= 8.\n     */\n\n    scan += 2;\n    match++; // Assert(*scan == *match, \"match[2]?\");\n\n    /* We check for insufficient lookahead only every 8th comparison;\n     * the 256th check will be made at strstart+258.\n     */\n\n    do {\n      /* jshint noempty:false */\n    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend); // Assert(scan <= s->window+(unsigned)(s->window_size-1), \"wild scan\");\n\n    len = MAX_MATCH$1 - (strend - scan);\n    scan = strend - MAX_MATCH$1;\n    if (len > best_len) {\n      s.match_start = cur_match;\n      best_len = len;\n      if (len >= nice_match) {\n        break;\n      }\n      scan_end1 = _win[scan + best_len - 1];\n      scan_end = _win[scan + best_len];\n    }\n  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);\n  if (best_len <= s.lookahead) {\n    return best_len;\n  }\n  return s.lookahead;\n};\n/* ===========================================================================\n * Fill the window when the lookahead becomes insufficient.\n * Updates strstart and lookahead.\n *\n * IN assertion: lookahead < MIN_LOOKAHEAD\n * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD\n *    At least one byte has been read, or avail_in == 0; reads are\n *    performed for at least two bytes (required for the zip translate_eol\n *    option -- not supported here).\n */\n\nvar fill_window = function fill_window(s) {\n  var _w_size = s.w_size;\n  var p;\n  var n;\n  var m;\n  var more;\n  var str; // Assert(s->lookahead < MIN_LOOKAHEAD, \"already enough lookahead\");\n\n  do {\n    more = s.window_size - s.lookahead - s.strstart; // JS ints have 32 bit, block below not needed\n\n    /* Deal with !@#$% 64K limit: */\n    // if (sizeof(int) <= 2) {\n    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {\n    //        more = wsize;\n    //\n    //  } else if (more == (unsigned)(-1)) {\n    //        /* Very unlikely, but possible on 16 bit machine if\n    //         * strstart == 0 && lookahead == 1 (input done a byte at time)\n    //         */\n    //        more--;\n    //    }\n    // }\n\n    /* If the window is almost full and there is insufficient lookahead,\n     * move the upper half to the lower one to make room in the upper half.\n     */\n\n    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {\n      s.window.set(s.window.subarray(_w_size, _w_size + _w_size), 0);\n      s.match_start -= _w_size;\n      s.strstart -= _w_size;\n      /* we now have strstart >= MAX_DIST */\n\n      s.block_start -= _w_size;\n      /* Slide the hash table (could be avoided with 32 bit values\n         at the expense of memory usage). We slide even when level == 0\n         to keep the hash table consistent if we switch back to level > 0\n         later. (Using level 0 permanently is not an optimal usage of\n         zlib, so we don't care about this pathological case.)\n         */\n\n      n = s.hash_size;\n      p = n;\n      do {\n        m = s.head[--p];\n        s.head[p] = m >= _w_size ? m - _w_size : 0;\n      } while (--n);\n      n = _w_size;\n      p = n;\n      do {\n        m = s.prev[--p];\n        s.prev[p] = m >= _w_size ? m - _w_size : 0;\n        /* If n is not on any hash chain, prev[n] is garbage but\n         * its value will never be used.\n         */\n      } while (--n);\n      more += _w_size;\n    }\n    if (s.strm.avail_in === 0) {\n      break;\n    }\n    /* If there was no sliding:\n     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&\n     *    more == window_size - lookahead - strstart\n     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)\n     * => more >= window_size - 2*WSIZE + 2\n     * In the BIG_MEM or MMAP case (not yet supported),\n     *   window_size == input_size + MIN_LOOKAHEAD  &&\n     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.\n     * Otherwise, window_size == 2*WSIZE so more >= 2.\n     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.\n     */\n    // Assert(more >= 2, \"more < 2\");\n\n    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);\n    s.lookahead += n;\n    /* Initialize the hash value now that we have some input: */\n\n    if (s.lookahead + s.insert >= MIN_MATCH$1) {\n      str = s.strstart - s.insert;\n      s.ins_h = s.window[str];\n      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */\n\n      s.ins_h = HASH(s, s.ins_h, s.window[str + 1]); // #if MIN_MATCH != 3\n      //        Call update_hash() MIN_MATCH-3 more times\n      // #endif\n\n      while (s.insert) {\n        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */\n        s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH$1 - 1]);\n        s.prev[str & s.w_mask] = s.head[s.ins_h];\n        s.head[s.ins_h] = str;\n        str++;\n        s.insert--;\n        if (s.lookahead + s.insert < MIN_MATCH$1) {\n          break;\n        }\n      }\n    }\n    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,\n     * but this is not important since only literal bytes will be emitted.\n     */\n  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);\n  /* If the WIN_INIT bytes after the end of the current data have never been\n   * written, then zero those bytes in order to avoid memory check reports of\n   * the use of uninitialized (or uninitialised as Julian writes) bytes by\n   * the longest match routines.  Update the high water mark for the next\n   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match\n   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.\n   */\n  //  if (s.high_water < s.window_size) {\n  //    const curr = s.strstart + s.lookahead;\n  //    let init = 0;\n  //\n  //    if (s.high_water < curr) {\n  //      /* Previous high water mark below current data -- zero WIN_INIT\n  //       * bytes or up to end of window, whichever is less.\n  //       */\n  //      init = s.window_size - curr;\n  //      if (init > WIN_INIT)\n  //        init = WIN_INIT;\n  //      zmemzero(s->window + curr, (unsigned)init);\n  //      s->high_water = curr + init;\n  //    }\n  //    else if (s->high_water < (ulg)curr + WIN_INIT) {\n  //      /* High water mark at or above current data, but below current data\n  //       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up\n  //       * to end of window, whichever is less.\n  //       */\n  //      init = (ulg)curr + WIN_INIT - s->high_water;\n  //      if (init > s->window_size - s->high_water)\n  //        init = s->window_size - s->high_water;\n  //      zmemzero(s->window + s->high_water, (unsigned)init);\n  //      s->high_water += init;\n  //    }\n  //  }\n  //\n  //  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,\n  //    \"not enough room for search\");\n};\n/* ===========================================================================\n * Copy without compression as much as possible from the input stream, return\n * the current block state.\n * This function does not insert new strings in the dictionary since\n * uncompressible data is probably not useful. This function is used\n * only for the level=0 compression option.\n * NOTE: this function should be optimized to avoid extra copying from\n * window to pending_buf.\n */\n\nvar deflate_stored = function deflate_stored(s, flush) {\n  /* Stored blocks are limited to 0xffff bytes, pending_buf is limited\n   * to pending_buf_size, and each stored block has a 5 byte header:\n   */\n  var max_block_size = 0xffff;\n  if (max_block_size > s.pending_buf_size - 5) {\n    max_block_size = s.pending_buf_size - 5;\n  }\n  /* Copy as much as possible from input to output: */\n\n  for (;;) {\n    /* Fill the window as much as possible: */\n    if (s.lookahead <= 1) {\n      // Assert(s->strstart < s->w_size+MAX_DIST(s) ||\n      //  s->block_start >= (long)s->w_size, \"slide too late\");\n      //      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||\n      //        s.block_start >= s.w_size)) {\n      //        throw  new Error(\"slide too late\");\n      //      }\n      fill_window(s);\n      if (s.lookahead === 0 && flush === Z_NO_FLUSH) {\n        return BS_NEED_MORE;\n      }\n      if (s.lookahead === 0) {\n        break;\n      }\n      /* flush the current block */\n    } // Assert(s->block_start >= 0L, \"block gone\");\n    //    if (s.block_start < 0) throw new Error(\"block gone\");\n\n    s.strstart += s.lookahead;\n    s.lookahead = 0;\n    /* Emit a stored block if pending_buf will be full: */\n\n    var max_start = s.block_start + max_block_size;\n    if (s.strstart === 0 || s.strstart >= max_start) {\n      /* strstart == 0 is possible when wraparound on 16-bit machine */\n      s.lookahead = s.strstart - max_start;\n      s.strstart = max_start;\n      /** * FLUSH_BLOCK(s, 0); ** */\n\n      flush_block_only(s, false);\n      if (s.strm.avail_out === 0) {\n        return BS_NEED_MORE;\n      }\n      /***/\n    }\n    /* Flush if we may have to slide, otherwise block_start may become\n     * negative and the data will be gone:\n     */\n\n    if (s.strstart - s.block_start >= s.w_size - MIN_LOOKAHEAD) {\n      /** * FLUSH_BLOCK(s, 0); ** */\n      flush_block_only(s, false);\n      if (s.strm.avail_out === 0) {\n        return BS_NEED_MORE;\n      }\n      /***/\n    }\n  }\n  s.insert = 0;\n  if (flush === Z_FINISH) {\n    /** * FLUSH_BLOCK(s, 1); ** */\n    flush_block_only(s, true);\n    if (s.strm.avail_out === 0) {\n      return BS_FINISH_STARTED;\n    }\n    /***/\n\n    return BS_FINISH_DONE;\n  }\n  if (s.strstart > s.block_start) {\n    /** * FLUSH_BLOCK(s, 0); ** */\n    flush_block_only(s, false);\n    if (s.strm.avail_out === 0) {\n      return BS_NEED_MORE;\n    }\n    /***/\n  }\n  return BS_NEED_MORE;\n};\n/* ===========================================================================\n * Compress as much as possible from the input stream, return the current\n * block state.\n * This function does not perform lazy evaluation of matches and inserts\n * new strings in the dictionary only for unmatched strings or for short\n * matches. It is used only for the fast compression options.\n */\n\nvar deflate_fast = function deflate_fast(s, flush) {\n  var hash_head;\n  /* head of the hash chain */\n\n  var bflush;\n  /* set if current block must be flushed */\n\n  for (;;) {\n    /* Make sure that we always have enough lookahead, except\n     * at the end of the input file. We need MAX_MATCH bytes\n     * for the next match, plus MIN_MATCH bytes to insert the\n     * string following the next match.\n     */\n    if (s.lookahead < MIN_LOOKAHEAD) {\n      fill_window(s);\n      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {\n        return BS_NEED_MORE;\n      }\n      if (s.lookahead === 0) {\n        break;\n        /* flush the current block */\n      }\n    }\n    /* Insert the string window[strstart .. strstart+2] in the\n     * dictionary, and set hash_head to the head of the hash chain:\n     */\n\n    hash_head = 0;\n    /* NIL */\n\n    if (s.lookahead >= MIN_MATCH$1) {\n      /** * INSERT_STRING(s, s.strstart, hash_head); ** */\n      s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH$1 - 1]);\n      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];\n      s.head[s.ins_h] = s.strstart;\n      /***/\n    }\n    /* Find the longest match, discarding those <= prev_length.\n     * At this point we have always match_length < MIN_MATCH\n     */\n\n    if (hash_head !== 0 && /* NIL */\n    s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {\n      /* To simplify the code, we prevent matches with the string\n       * of window index 0 (in particular we have to avoid a match\n       * of the string with itself at the start of the input file).\n       */\n      s.match_length = longest_match(s, hash_head);\n      /* longest_match() sets match_start */\n    }\n    if (s.match_length >= MIN_MATCH$1) {\n      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only\n\n      /** * _tr_tally_dist(s, s.strstart - s.match_start,\n                       s.match_length - MIN_MATCH, bflush); ** */\n      bflush = _tr_tally$1(s, s.strstart - s.match_start, s.match_length - MIN_MATCH$1);\n      s.lookahead -= s.match_length;\n      /* Insert new strings in the hash table only if the match length\n       * is not too large. This saves time but degrades compression.\n       */\n\n      if (s.match_length <= s.max_lazy_match && /* max_insert_length */\n      s.lookahead >= MIN_MATCH$1) {\n        s.match_length--;\n        /* string at strstart already in table */\n\n        do {\n          s.strstart++;\n          /** * INSERT_STRING(s, s.strstart, hash_head); ** */\n\n          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH$1 - 1]);\n          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];\n          s.head[s.ins_h] = s.strstart;\n          /***/\n\n          /* strstart never exceeds WSIZE-MAX_MATCH, so there are\n           * always MIN_MATCH bytes ahead.\n           */\n        } while (--s.match_length !== 0);\n        s.strstart++;\n      } else {\n        s.strstart += s.match_length;\n        s.match_length = 0;\n        s.ins_h = s.window[s.strstart];\n        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */\n\n        s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + 1]); // #if MIN_MATCH != 3\n        //                Call UPDATE_HASH() MIN_MATCH-3 more times\n        // #endif\n\n        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not\n         * matter since it will be recomputed at next deflate call.\n         */\n      }\n    } else {\n      /* No match, output a literal byte */\n      // Tracevv((stderr,\"%c\", s.window[s.strstart]));\n\n      /** * _tr_tally_lit(s, s.window[s.strstart], bflush); ** */\n      bflush = _tr_tally$1(s, 0, s.window[s.strstart]);\n      s.lookahead--;\n      s.strstart++;\n    }\n    if (bflush) {\n      /** * FLUSH_BLOCK(s, 0); ** */\n      flush_block_only(s, false);\n      if (s.strm.avail_out === 0) {\n        return BS_NEED_MORE;\n      }\n      /***/\n    }\n  }\n  s.insert = s.strstart < MIN_MATCH$1 - 1 ? s.strstart : MIN_MATCH$1 - 1;\n  if (flush === Z_FINISH) {\n    /** * FLUSH_BLOCK(s, 1); ** */\n    flush_block_only(s, true);\n    if (s.strm.avail_out === 0) {\n      return BS_FINISH_STARTED;\n    }\n    /***/\n\n    return BS_FINISH_DONE;\n  }\n  if (s.last_lit) {\n    /** * FLUSH_BLOCK(s, 0); ** */\n    flush_block_only(s, false);\n    if (s.strm.avail_out === 0) {\n      return BS_NEED_MORE;\n    }\n    /***/\n  }\n  return BS_BLOCK_DONE;\n};\n/* ===========================================================================\n * Same as above, but achieves better compression. We use a lazy\n * evaluation for matches: a match is finally adopted only if there is\n * no better match at the next window position.\n */\n\nvar deflate_slow = function deflate_slow(s, flush) {\n  var hash_head;\n  /* head of hash chain */\n\n  var bflush;\n  /* set if current block must be flushed */\n\n  var max_insert;\n  /* Process the input block. */\n\n  for (;;) {\n    /* Make sure that we always have enough lookahead, except\n     * at the end of the input file. We need MAX_MATCH bytes\n     * for the next match, plus MIN_MATCH bytes to insert the\n     * string following the next match.\n     */\n    if (s.lookahead < MIN_LOOKAHEAD) {\n      fill_window(s);\n      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {\n        return BS_NEED_MORE;\n      }\n      if (s.lookahead === 0) {\n        break;\n      }\n      /* flush the current block */\n    }\n    /* Insert the string window[strstart .. strstart+2] in the\n     * dictionary, and set hash_head to the head of the hash chain:\n     */\n\n    hash_head = 0;\n    /* NIL */\n\n    if (s.lookahead >= MIN_MATCH$1) {\n      /** * INSERT_STRING(s, s.strstart, hash_head); ** */\n      s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH$1 - 1]);\n      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];\n      s.head[s.ins_h] = s.strstart;\n      /***/\n    }\n    /* Find the longest match, discarding those <= prev_length.\n     */\n\n    s.prev_length = s.match_length;\n    s.prev_match = s.match_start;\n    s.match_length = MIN_MATCH$1 - 1;\n    if (hash_head !== 0 && /* NIL */\n    s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD\n    /* MAX_DIST(s) */) {\n      /* To simplify the code, we prevent matches with the string\n       * of window index 0 (in particular we have to avoid a match\n       * of the string with itself at the start of the input file).\n       */\n      s.match_length = longest_match(s, hash_head);\n      /* longest_match() sets match_start */\n\n      if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH$1 && s.strstart - s.match_start > 4096)\n      /* TOO_FAR */) {\n        /* If prev_match is also MIN_MATCH, match_start is garbage\n         * but we will ignore the current match anyway.\n         */\n        s.match_length = MIN_MATCH$1 - 1;\n      }\n    }\n    /* If there was a match at the previous step and the current\n     * match is not better, output the previous match:\n     */\n\n    if (s.prev_length >= MIN_MATCH$1 && s.match_length <= s.prev_length) {\n      max_insert = s.strstart + s.lookahead - MIN_MATCH$1;\n      /* Do not insert strings in hash table beyond this. */\n      // check_match(s, s.strstart-1, s.prev_match, s.prev_length);\n\n      /** *_tr_tally_dist(s, s.strstart - 1 - s.prev_match,\n                       s.prev_length - MIN_MATCH, bflush);** */\n\n      bflush = _tr_tally$1(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH$1);\n      /* Insert in hash table all strings up to the end of the match.\n       * strstart-1 and strstart are already inserted. If there is not\n       * enough lookahead, the last two strings are not inserted in\n       * the hash table.\n       */\n\n      s.lookahead -= s.prev_length - 1;\n      s.prev_length -= 2;\n      do {\n        if (++s.strstart <= max_insert) {\n          /** * INSERT_STRING(s, s.strstart, hash_head); ** */\n          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH$1 - 1]);\n          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];\n          s.head[s.ins_h] = s.strstart;\n          /***/\n        }\n      } while (--s.prev_length !== 0);\n      s.match_available = 0;\n      s.match_length = MIN_MATCH$1 - 1;\n      s.strstart++;\n      if (bflush) {\n        /** * FLUSH_BLOCK(s, 0); ** */\n        flush_block_only(s, false);\n        if (s.strm.avail_out === 0) {\n          return BS_NEED_MORE;\n        }\n        /***/\n      }\n    } else if (s.match_available) {\n      /* If there was no match at the previous position, output a\n       * single literal. If there was a match but the current match\n       * is longer, truncate the previous match to a single literal.\n       */\n      // Tracevv((stderr,\"%c\", s->window[s->strstart-1]));\n\n      /** * _tr_tally_lit(s, s.window[s.strstart-1], bflush); ** */\n      bflush = _tr_tally$1(s, 0, s.window[s.strstart - 1]);\n      if (bflush) {\n        /** * FLUSH_BLOCK_ONLY(s, 0) ** */\n        flush_block_only(s, false);\n        /***/\n      }\n      s.strstart++;\n      s.lookahead--;\n      if (s.strm.avail_out === 0) {\n        return BS_NEED_MORE;\n      }\n    } else {\n      /* There is no previous match to compare with, wait for\n       * the next step to decide.\n       */\n      s.match_available = 1;\n      s.strstart++;\n      s.lookahead--;\n    }\n  } // Assert (flush != Z_NO_FLUSH, \"no flush?\");\n\n  if (s.match_available) {\n    // Tracevv((stderr,\"%c\", s->window[s->strstart-1]));\n\n    /** * _tr_tally_lit(s, s.window[s.strstart-1], bflush); ** */\n    bflush = _tr_tally$1(s, 0, s.window[s.strstart - 1]);\n    s.match_available = 0;\n  }\n  s.insert = s.strstart < MIN_MATCH$1 - 1 ? s.strstart : MIN_MATCH$1 - 1;\n  if (flush === Z_FINISH) {\n    /** * FLUSH_BLOCK(s, 1); ** */\n    flush_block_only(s, true);\n    if (s.strm.avail_out === 0) {\n      return BS_FINISH_STARTED;\n    }\n    /***/\n\n    return BS_FINISH_DONE;\n  }\n  if (s.last_lit) {\n    /** * FLUSH_BLOCK(s, 0); ** */\n    flush_block_only(s, false);\n    if (s.strm.avail_out === 0) {\n      return BS_NEED_MORE;\n    }\n    /***/\n  }\n  return BS_BLOCK_DONE;\n};\n/* ===========================================================================\n * For Z_RLE, simply look for runs of bytes, generate matches only of distance\n * one.  Do not maintain a hash table.  (It will be regenerated if this run of\n * deflate switches away from Z_RLE.)\n */\n\nvar deflate_rle = function deflate_rle(s, flush) {\n  var bflush;\n  /* set if current block must be flushed */\n\n  var prev;\n  /* byte at distance one to match */\n\n  var scan;\n  var strend;\n  /* scan goes up to strend for length of run */\n\n  var _win = s.window;\n  for (;;) {\n    /* Make sure that we always have enough lookahead, except\n     * at the end of the input file. We need MAX_MATCH bytes\n     * for the longest run, plus one for the unrolled loop.\n     */\n    if (s.lookahead <= MAX_MATCH$1) {\n      fill_window(s);\n      if (s.lookahead <= MAX_MATCH$1 && flush === Z_NO_FLUSH) {\n        return BS_NEED_MORE;\n      }\n      if (s.lookahead === 0) {\n        break;\n      }\n      /* flush the current block */\n    }\n    /* See how many times the previous byte repeats */\n\n    s.match_length = 0;\n    if (s.lookahead >= MIN_MATCH$1 && s.strstart > 0) {\n      scan = s.strstart - 1;\n      prev = _win[scan];\n      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {\n        strend = s.strstart + MAX_MATCH$1;\n        do {\n          /* jshint noempty:false */\n        } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);\n        s.match_length = MAX_MATCH$1 - (strend - scan);\n        if (s.match_length > s.lookahead) {\n          s.match_length = s.lookahead;\n        }\n      } // Assert(scan <= s->window+(uInt)(s->window_size-1), \"wild scan\");\n    }\n    /* Emit match if have run of MIN_MATCH or longer, else emit literal */\n\n    if (s.match_length >= MIN_MATCH$1) {\n      // check_match(s, s.strstart, s.strstart - 1, s.match_length);\n\n      /** * _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ** */\n      bflush = _tr_tally$1(s, 1, s.match_length - MIN_MATCH$1);\n      s.lookahead -= s.match_length;\n      s.strstart += s.match_length;\n      s.match_length = 0;\n    } else {\n      /* No match, output a literal byte */\n      // Tracevv((stderr,\"%c\", s->window[s->strstart]));\n\n      /** * _tr_tally_lit(s, s.window[s.strstart], bflush); ** */\n      bflush = _tr_tally$1(s, 0, s.window[s.strstart]);\n      s.lookahead--;\n      s.strstart++;\n    }\n    if (bflush) {\n      /** * FLUSH_BLOCK(s, 0); ** */\n      flush_block_only(s, false);\n      if (s.strm.avail_out === 0) {\n        return BS_NEED_MORE;\n      }\n      /***/\n    }\n  }\n  s.insert = 0;\n  if (flush === Z_FINISH) {\n    /** * FLUSH_BLOCK(s, 1); ** */\n    flush_block_only(s, true);\n    if (s.strm.avail_out === 0) {\n      return BS_FINISH_STARTED;\n    }\n    /***/\n\n    return BS_FINISH_DONE;\n  }\n  if (s.last_lit) {\n    /** * FLUSH_BLOCK(s, 0); ** */\n    flush_block_only(s, false);\n    if (s.strm.avail_out === 0) {\n      return BS_NEED_MORE;\n    }\n    /***/\n  }\n  return BS_BLOCK_DONE;\n};\n/* ===========================================================================\n * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.\n * (It will be regenerated if this run of deflate switches away from Huffman.)\n */\n\nvar deflate_huff = function deflate_huff(s, flush) {\n  var bflush;\n  /* set if current block must be flushed */\n\n  for (;;) {\n    /* Make sure that we have a literal to write. */\n    if (s.lookahead === 0) {\n      fill_window(s);\n      if (s.lookahead === 0) {\n        if (flush === Z_NO_FLUSH) {\n          return BS_NEED_MORE;\n        }\n        break;\n        /* flush the current block */\n      }\n    }\n    /* Output a literal byte */\n\n    s.match_length = 0; // Tracevv((stderr,\"%c\", s->window[s->strstart]));\n\n    /** * _tr_tally_lit(s, s.window[s.strstart], bflush); ** */\n\n    bflush = _tr_tally$1(s, 0, s.window[s.strstart]);\n    s.lookahead--;\n    s.strstart++;\n    if (bflush) {\n      /** * FLUSH_BLOCK(s, 0); ** */\n      flush_block_only(s, false);\n      if (s.strm.avail_out === 0) {\n        return BS_NEED_MORE;\n      }\n      /***/\n    }\n  }\n  s.insert = 0;\n  if (flush === Z_FINISH) {\n    /** * FLUSH_BLOCK(s, 1); ** */\n    flush_block_only(s, true);\n    if (s.strm.avail_out === 0) {\n      return BS_FINISH_STARTED;\n    }\n    /***/\n\n    return BS_FINISH_DONE;\n  }\n  if (s.last_lit) {\n    /** * FLUSH_BLOCK(s, 0); ** */\n    flush_block_only(s, false);\n    if (s.strm.avail_out === 0) {\n      return BS_NEED_MORE;\n    }\n    /***/\n  }\n  return BS_BLOCK_DONE;\n};\n/* Values for max_lazy_match, good_match and max_chain_length, depending on\n * the desired pack level (0..9). The values given below have been tuned to\n * exclude worst case performance for pathological files. Better values may be\n * found for specific files.\n */\n\nfunction Config(good_length, max_lazy, nice_length, max_chain, func) {\n  this.good_length = good_length;\n  this.max_lazy = max_lazy;\n  this.nice_length = nice_length;\n  this.max_chain = max_chain;\n  this.func = func;\n}\nvar configuration_table = [/*      good lazy nice chain */\nnew Config(0, 0, 0, 0, deflate_stored), /* 0 store only */\nnew Config(4, 4, 8, 4, deflate_fast), /* 1 max speed, no lazy matches */\nnew Config(4, 5, 16, 8, deflate_fast), /* 2 */\nnew Config(4, 6, 32, 32, deflate_fast), /* 3 */\nnew Config(4, 4, 16, 16, deflate_slow), /* 4 lazy matches */\nnew Config(8, 16, 32, 32, deflate_slow), /* 5 */\nnew Config(8, 16, 128, 128, deflate_slow), /* 6 */\nnew Config(8, 32, 128, 256, deflate_slow), /* 7 */\nnew Config(32, 128, 258, 1024, deflate_slow), /* 8 */\nnew Config(32, 258, 258, 4096, deflate_slow)\n/* 9 max compression */];\n/* ===========================================================================\n * Initialize the \"longest match\" routines for a new zlib stream\n */\n\nvar lm_init = function lm_init(s) {\n  s.window_size = 2 * s.w_size;\n  /** * CLEAR_HASH(s); ** */\n\n  zero$1(s.head); // Fill with NIL (= 0);\n\n  /* Set the default configuration parameters:\n   */\n\n  s.max_lazy_match = configuration_table[s.level].max_lazy;\n  s.good_match = configuration_table[s.level].good_length;\n  s.nice_match = configuration_table[s.level].nice_length;\n  s.max_chain_length = configuration_table[s.level].max_chain;\n  s.strstart = 0;\n  s.block_start = 0;\n  s.lookahead = 0;\n  s.insert = 0;\n  s.match_length = s.prev_length = MIN_MATCH$1 - 1;\n  s.match_available = 0;\n  s.ins_h = 0;\n};\nfunction DeflateState() {\n  this.strm = null;\n  /* pointer back to this zlib stream */\n\n  this.status = 0;\n  /* as the name implies */\n\n  this.pending_buf = null;\n  /* output still pending */\n\n  this.pending_buf_size = 0;\n  /* size of pending_buf */\n\n  this.pending_out = 0;\n  /* next pending byte to output to the stream */\n\n  this.pending = 0;\n  /* nb of bytes in the pending buffer */\n\n  this.wrap = 0;\n  /* bit 0 true for zlib, bit 1 true for gzip */\n\n  this.gzhead = null;\n  /* gzip header information to write */\n\n  this.gzindex = 0;\n  /* where in extra, name, or comment */\n\n  this.method = Z_DEFLATED;\n  /* can only be DEFLATED */\n\n  this.last_flush = -1;\n  /* value of flush param for previous deflate call */\n\n  this.w_size = 0;\n  /* LZ77 window size (32K by default) */\n\n  this.w_bits = 0;\n  /* log2(w_size)  (8..16) */\n\n  this.w_mask = 0;\n  /* w_size - 1 */\n\n  this.window = null;\n  /* Sliding window. Input bytes are read into the second half of the window,\n   * and move to the first half later to keep a dictionary of at least wSize\n   * bytes. With this organization, matches are limited to a distance of\n   * wSize-MAX_MATCH bytes, but this ensures that IO is always\n   * performed with a length multiple of the block size.\n   */\n\n  this.window_size = 0;\n  /* Actual size of window: 2*wSize, except when the user input buffer\n   * is directly used as sliding window.\n   */\n\n  this.prev = null;\n  /* Link to older string with same hash index. To limit the size of this\n   * array to 64K, this link is maintained only for the last 32K strings.\n   * An index in this array is thus a window index modulo 32K.\n   */\n\n  this.head = null;\n  /* Heads of the hash chains or NIL. */\n\n  this.ins_h = 0;\n  /* hash index of string to be inserted */\n\n  this.hash_size = 0;\n  /* number of elements in hash table */\n\n  this.hash_bits = 0;\n  /* log2(hash_size) */\n\n  this.hash_mask = 0;\n  /* hash_size-1 */\n\n  this.hash_shift = 0;\n  /* Number of bits by which ins_h must be shifted at each input\n   * step. It must be such that after MIN_MATCH steps, the oldest\n   * byte no longer takes part in the hash key, that is:\n   *   hash_shift * MIN_MATCH >= hash_bits\n   */\n\n  this.block_start = 0;\n  /* Window position at the beginning of the current output block. Gets\n   * negative when the window is moved backwards.\n   */\n\n  this.match_length = 0;\n  /* length of best match */\n\n  this.prev_match = 0;\n  /* previous match */\n\n  this.match_available = 0;\n  /* set if previous match exists */\n\n  this.strstart = 0;\n  /* start of string to insert */\n\n  this.match_start = 0;\n  /* start of matching string */\n\n  this.lookahead = 0;\n  /* number of valid bytes ahead in window */\n\n  this.prev_length = 0;\n  /* Length of the best match at previous step. Matches not greater than this\n   * are discarded. This is used in the lazy match evaluation.\n   */\n\n  this.max_chain_length = 0;\n  /* To speed up deflation, hash chains are never searched beyond this\n   * length.  A higher limit improves compression ratio but degrades the\n   * speed.\n   */\n\n  this.max_lazy_match = 0;\n  /* Attempt to find a better match only when the current match is strictly\n   * smaller than this value. This mechanism is used only for compression\n   * levels >= 4.\n   */\n  // That's alias to max_lazy_match, don't use directly\n  // this.max_insert_length = 0;\n\n  /* Insert new strings in the hash table only if the match length is not\n   * greater than this length. This saves time but degrades compression.\n   * max_insert_length is used only for compression levels <= 3.\n   */\n\n  this.level = 0;\n  /* compression level (1..9) */\n\n  this.strategy = 0;\n  /* favor or force Huffman coding */\n\n  this.good_match = 0;\n  /* Use a faster search when the previous match is longer than this */\n\n  this.nice_match = 0;\n  /* Stop searching when current match exceeds this */\n\n  /* used by trees.c: */\n\n  /* Didn't use ct_data typedef below to suppress compiler warning */\n  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */\n  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */\n  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */\n  // Use flat array of DOUBLE size, with interleaved fata,\n  // because JS does not support effective\n\n  this.dyn_ltree = new Uint16Array(HEAP_SIZE$1 * 2);\n  this.dyn_dtree = new Uint16Array((2 * D_CODES$1 + 1) * 2);\n  this.bl_tree = new Uint16Array((2 * BL_CODES$1 + 1) * 2);\n  zero$1(this.dyn_ltree);\n  zero$1(this.dyn_dtree);\n  zero$1(this.bl_tree);\n  this.l_desc = null;\n  /* desc. for literal tree */\n\n  this.d_desc = null;\n  /* desc. for distance tree */\n\n  this.bl_desc = null;\n  /* desc. for bit length tree */\n  // ush bl_count[MAX_BITS+1];\n\n  this.bl_count = new Uint16Array(MAX_BITS$1 + 1);\n  /* number of codes at each bit length for an optimal tree */\n  // int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */\n\n  this.heap = new Uint16Array(2 * L_CODES$1 + 1);\n  /* heap used to build the Huffman trees */\n\n  zero$1(this.heap);\n  this.heap_len = 0;\n  /* number of elements in the heap */\n\n  this.heap_max = 0;\n  /* element of largest frequency */\n\n  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.\n   * The same heap array is used to build all trees.\n   */\n\n  this.depth = new Uint16Array(2 * L_CODES$1 + 1); // uch depth[2*L_CODES+1];\n\n  zero$1(this.depth);\n  /* Depth of each subtree used as tie breaker for trees of equal frequency\n   */\n\n  this.l_buf = 0;\n  /* buffer index for literals or lengths */\n\n  this.lit_bufsize = 0;\n  /* Size of match buffer for literals/lengths.  There are 4 reasons for\n   * limiting lit_bufsize to 64K:\n   *   - frequencies can be kept in 16 bit counters\n   *   - if compression is not successful for the first block, all input\n   *     data is still in the window so we can still emit a stored block even\n   *     when input comes from standard input.  (This can also be done for\n   *     all blocks if lit_bufsize is not greater than 32K.)\n   *   - if compression is not successful for a file smaller than 64K, we can\n   *     even emit a stored file instead of a stored block (saving 5 bytes).\n   *     This is applicable only for zip (not gzip or zlib).\n   *   - creating new Huffman trees less frequently may not provide fast\n   *     adaptation to changes in the input data statistics. (Take for\n   *     example a binary file with poorly compressible code followed by\n   *     a highly compressible string table.) Smaller buffer sizes give\n   *     fast adaptation but have of course the overhead of transmitting\n   *     trees more frequently.\n   *   - I can't count above 4\n   */\n\n  this.last_lit = 0;\n  /* running index in l_buf */\n\n  this.d_buf = 0;\n  /* Buffer index for distances. To simplify the code, d_buf and l_buf have\n   * the same number of elements. To use different lengths, an extra flag\n   * array would be necessary.\n   */\n\n  this.opt_len = 0;\n  /* bit length of current block with optimal trees */\n\n  this.static_len = 0;\n  /* bit length of current block with static trees */\n\n  this.matches = 0;\n  /* number of string matches in current block */\n\n  this.insert = 0;\n  /* bytes at end of window left to insert */\n\n  this.bi_buf = 0;\n  /* Output buffer. bits are inserted starting at the bottom (least\n   * significant bits).\n   */\n\n  this.bi_valid = 0;\n  /* Number of valid bits in bi_buf.  All bits above the last valid bit\n   * are always zero.\n   */\n  // Used for window memory init. We safely ignore it for JS. That makes\n  // sense only for pointers and memory check tools.\n  // this.high_water = 0;\n\n  /* High water mark offset in window for initialized bytes -- bytes above\n   * this are set to zero in order to avoid memory check warnings when\n   * longest match routines access bytes past the input.  This is then\n   * updated to the new high water mark.\n   */\n}\nvar deflateResetKeep = function deflateResetKeep(strm) {\n  if (!strm || !strm.state) {\n    return err(strm, Z_STREAM_ERROR);\n  }\n  strm.total_in = strm.total_out = 0;\n  strm.data_type = Z_UNKNOWN$1;\n  var s = strm.state;\n  s.pending = 0;\n  s.pending_out = 0;\n  if (s.wrap < 0) {\n    s.wrap = -s.wrap;\n    /* was made negative by deflate(..., Z_FINISH); */\n  }\n  s.status = s.wrap ? INIT_STATE : BUSY_STATE;\n  strm.adler = s.wrap === 2 ? 0 // crc32(0, Z_NULL, 0)\n  : 1; // adler32(0, Z_NULL, 0)\n\n  s.last_flush = Z_NO_FLUSH;\n  _tr_init$1(s);\n  return Z_OK;\n};\nvar deflateReset = function deflateReset(strm) {\n  var ret = deflateResetKeep(strm);\n  if (ret === Z_OK) {\n    lm_init(strm.state);\n  }\n  return ret;\n};\nvar deflateSetHeader = function deflateSetHeader(strm, head) {\n  if (!strm || !strm.state) {\n    return Z_STREAM_ERROR;\n  }\n  if (strm.state.wrap !== 2) {\n    return Z_STREAM_ERROR;\n  }\n  strm.state.gzhead = head;\n  return Z_OK;\n};\nvar deflateInit2 = function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {\n  if (!strm) {\n    // === Z_NULL\n    return Z_STREAM_ERROR;\n  }\n  var wrap = 1;\n  if (level === Z_DEFAULT_COMPRESSION) {\n    level = 6;\n  }\n  if (windowBits < 0) {\n    /* suppress zlib wrapper */\n    wrap = 0;\n    windowBits = -windowBits;\n  } else if (windowBits > 15) {\n    wrap = 2;\n    /* write gzip wrapper instead */\n\n    windowBits -= 16;\n  }\n  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED$1) {\n    return err(strm, Z_STREAM_ERROR);\n  }\n  if (windowBits === 8) {\n    windowBits = 9;\n  }\n  /* until 256-byte window bug fixed */\n\n  var s = new DeflateState();\n  strm.state = s;\n  s.strm = strm;\n  s.wrap = wrap;\n  s.gzhead = null;\n  s.w_bits = windowBits;\n  s.w_size = 1 << s.w_bits;\n  s.w_mask = s.w_size - 1;\n  s.hash_bits = memLevel + 7;\n  s.hash_size = 1 << s.hash_bits;\n  s.hash_mask = s.hash_size - 1;\n  s.hash_shift = ~~((s.hash_bits + MIN_MATCH$1 - 1) / MIN_MATCH$1);\n  s.window = new Uint8Array(s.w_size * 2);\n  s.head = new Uint16Array(s.hash_size);\n  s.prev = new Uint16Array(s.w_size); // Don't need mem init magic for JS.\n  // s.high_water = 0;  /* nothing written to s->window yet */\n\n  s.lit_bufsize = 1 << memLevel + 6;\n  /* 16K elements by default */\n\n  s.pending_buf_size = s.lit_bufsize * 4;\n  // overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);\n  // s->pending_buf = (uchf *) overlay;\n\n  // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)\n  s.pending_buf = new Uint8Array(s.pending_buf_size);\n  // s->d_buf = overlay + s->lit_bufsize/sizeof(ush);\n\n  s.d_buf = 1 * s.lit_bufsize; // s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;\n\n  s.l_buf = (1 + 2) * s.lit_bufsize;\n  s.level = level;\n  s.strategy = strategy;\n  s.method = method;\n  return deflateReset(strm);\n};\nvar deflateInit = function deflateInit(strm, level) {\n  return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);\n};\nvar deflate = function deflate(strm, flush) {\n  var beg;\n  var val; // for gzip header write only\n\n  if (!strm || !strm.state || flush > Z_BLOCK || flush < 0) {\n    return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;\n  }\n  var s = strm.state;\n  if (!strm.output || !strm.input && strm.avail_in !== 0 || s.status === FINISH_STATE && flush !== Z_FINISH) {\n    return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);\n  }\n  s.strm = strm;\n  /* just in case */\n\n  var old_flush = s.last_flush;\n  s.last_flush = flush;\n  /* Write the header */\n\n  if (s.status === INIT_STATE) {\n    if (s.wrap === 2) {\n      // GZIP header\n      strm.adler = 0; // crc32(0L, Z_NULL, 0);\n\n      put_byte(s, 31);\n      put_byte(s, 139);\n      put_byte(s, 8);\n      if (!s.gzhead) {\n        // s->gzhead == Z_NULL\n        put_byte(s, 0);\n        put_byte(s, 0);\n        put_byte(s, 0);\n        put_byte(s, 0);\n        put_byte(s, 0);\n        put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);\n        put_byte(s, OS_CODE);\n        s.status = BUSY_STATE;\n      } else {\n        put_byte(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16));\n        put_byte(s, s.gzhead.time & 0xff);\n        put_byte(s, s.gzhead.time >> 8 & 0xff);\n        put_byte(s, s.gzhead.time >> 16 & 0xff);\n        put_byte(s, s.gzhead.time >> 24 & 0xff);\n        put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);\n        put_byte(s, s.gzhead.os & 0xff);\n        if (s.gzhead.extra && s.gzhead.extra.length) {\n          put_byte(s, s.gzhead.extra.length & 0xff);\n          put_byte(s, s.gzhead.extra.length >> 8 & 0xff);\n        }\n        if (s.gzhead.hcrc) {\n          strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending, 0);\n        }\n        s.gzindex = 0;\n        s.status = EXTRA_STATE;\n      }\n    } // DEFLATE header\n    else {\n      var header = Z_DEFLATED + (s.w_bits - 8 << 4) << 8;\n      var level_flags = -1;\n      if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {\n        level_flags = 0;\n      } else if (s.level < 6) {\n        level_flags = 1;\n      } else if (s.level === 6) {\n        level_flags = 2;\n      } else {\n        level_flags = 3;\n      }\n      header |= level_flags << 6;\n      if (s.strstart !== 0) {\n        header |= PRESET_DICT;\n      }\n      header += 31 - header % 31;\n      s.status = BUSY_STATE;\n      putShortMSB(s, header);\n      /* Save the adler32 of the preset dictionary: */\n\n      if (s.strstart !== 0) {\n        putShortMSB(s, strm.adler >>> 16);\n        putShortMSB(s, strm.adler & 0xffff);\n      }\n      strm.adler = 1; // adler32(0L, Z_NULL, 0);\n    }\n  } // #ifdef GZIP\n\n  if (s.status === EXTRA_STATE) {\n    if (s.gzhead.extra\n    /* != Z_NULL */) {\n      beg = s.pending;\n      /* start of bytes to update crc */\n\n      while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {\n        if (s.pending === s.pending_buf_size) {\n          if (s.gzhead.hcrc && s.pending > beg) {\n            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);\n          }\n          flush_pending(strm);\n          beg = s.pending;\n          if (s.pending === s.pending_buf_size) {\n            break;\n          }\n        }\n        put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);\n        s.gzindex++;\n      }\n      if (s.gzhead.hcrc && s.pending > beg) {\n        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);\n      }\n      if (s.gzindex === s.gzhead.extra.length) {\n        s.gzindex = 0;\n        s.status = NAME_STATE;\n      }\n    } else {\n      s.status = NAME_STATE;\n    }\n  }\n  if (s.status === NAME_STATE) {\n    if (s.gzhead.name\n    /* != Z_NULL */) {\n      beg = s.pending;\n      /* start of bytes to update crc */\n      // int val;\n\n      do {\n        if (s.pending === s.pending_buf_size) {\n          if (s.gzhead.hcrc && s.pending > beg) {\n            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);\n          }\n          flush_pending(strm);\n          beg = s.pending;\n          if (s.pending === s.pending_buf_size) {\n            val = 1;\n            break;\n          }\n        } // JS specific: little magic to add zero terminator to end of string\n\n        if (s.gzindex < s.gzhead.name.length) {\n          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;\n        } else {\n          val = 0;\n        }\n        put_byte(s, val);\n      } while (val !== 0);\n      if (s.gzhead.hcrc && s.pending > beg) {\n        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);\n      }\n      if (val === 0) {\n        s.gzindex = 0;\n        s.status = COMMENT_STATE;\n      }\n    } else {\n      s.status = COMMENT_STATE;\n    }\n  }\n  if (s.status === COMMENT_STATE) {\n    if (s.gzhead.comment\n    /* != Z_NULL */) {\n      beg = s.pending;\n      /* start of bytes to update crc */\n      // int val;\n\n      do {\n        if (s.pending === s.pending_buf_size) {\n          if (s.gzhead.hcrc && s.pending > beg) {\n            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);\n          }\n          flush_pending(strm);\n          beg = s.pending;\n          if (s.pending === s.pending_buf_size) {\n            val = 1;\n            break;\n          }\n        } // JS specific: little magic to add zero terminator to end of string\n\n        if (s.gzindex < s.gzhead.comment.length) {\n          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;\n        } else {\n          val = 0;\n        }\n        put_byte(s, val);\n      } while (val !== 0);\n      if (s.gzhead.hcrc && s.pending > beg) {\n        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);\n      }\n      if (val === 0) {\n        s.status = HCRC_STATE;\n      }\n    } else {\n      s.status = HCRC_STATE;\n    }\n  }\n  if (s.status === HCRC_STATE) {\n    if (s.gzhead.hcrc) {\n      if (s.pending + 2 > s.pending_buf_size) {\n        flush_pending(strm);\n      }\n      if (s.pending + 2 <= s.pending_buf_size) {\n        put_byte(s, strm.adler & 0xff);\n        put_byte(s, strm.adler >> 8 & 0xff);\n        strm.adler = 0; // crc32(0L, Z_NULL, 0);\n\n        s.status = BUSY_STATE;\n      }\n    } else {\n      s.status = BUSY_STATE;\n    }\n  } // #endif\n\n  /* Flush as much pending output as possible */\n\n  if (s.pending !== 0) {\n    flush_pending(strm);\n    if (strm.avail_out === 0) {\n      /* Since avail_out is 0, deflate will be called again with\n       * more output space, but possibly with both pending and\n       * avail_in equal to zero. There won't be anything to do,\n       * but this is not an error situation so make sure we\n       * return OK instead of BUF_ERROR at next call of deflate:\n       */\n      s.last_flush = -1;\n      return Z_OK;\n    }\n    /* Make sure there is something to do and avoid duplicate consecutive\n     * flushes. For repeated and useless calls with Z_FINISH, we keep\n     * returning Z_STREAM_END instead of Z_BUF_ERROR.\n     */\n  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) {\n    return err(strm, Z_BUF_ERROR);\n  }\n  /* User must not provide more input after the first FINISH: */\n\n  if (s.status === FINISH_STATE && strm.avail_in !== 0) {\n    return err(strm, Z_BUF_ERROR);\n  }\n  /* Start a new block or continue the current one.\n   */\n\n  if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH && s.status !== FINISH_STATE) {\n    var bstate = s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);\n    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {\n      s.status = FINISH_STATE;\n    }\n    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {\n      if (strm.avail_out === 0) {\n        s.last_flush = -1;\n        /* avoid BUF_ERROR next call, see above */\n      }\n      return Z_OK;\n      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call\n       * of deflate should use the same flush parameter to make sure\n       * that the flush is complete. So we don't have to output an\n       * empty block here, this will be done at next call. This also\n       * ensures that for a very small output buffer, we emit at most\n       * one empty block.\n       */\n    }\n    if (bstate === BS_BLOCK_DONE) {\n      if (flush === Z_PARTIAL_FLUSH) {\n        _tr_align$1(s);\n      } else if (flush !== Z_BLOCK) {\n        /* FULL_FLUSH or SYNC_FLUSH */\n        _tr_stored_block$1(s, 0, 0, false);\n        /* For a full flush, this empty block will be recognized\n         * as a special marker by inflate_sync().\n         */\n\n        if (flush === Z_FULL_FLUSH) {\n          /** * CLEAR_HASH(s); ** */\n\n          /* forget history */\n          zero$1(s.head); // Fill with NIL (= 0);\n\n          if (s.lookahead === 0) {\n            s.strstart = 0;\n            s.block_start = 0;\n            s.insert = 0;\n          }\n        }\n      }\n      flush_pending(strm);\n      if (strm.avail_out === 0) {\n        s.last_flush = -1;\n        /* avoid BUF_ERROR at next call, see above */\n\n        return Z_OK;\n      }\n    }\n  } // Assert(strm->avail_out > 0, \"bug2\");\n  // if (strm.avail_out <= 0) { throw new Error(\"bug2\");}\n\n  if (flush !== Z_FINISH) {\n    return Z_OK;\n  }\n  if (s.wrap <= 0) {\n    return Z_STREAM_END;\n  }\n  /* Write the trailer */\n\n  if (s.wrap === 2) {\n    put_byte(s, strm.adler & 0xff);\n    put_byte(s, strm.adler >> 8 & 0xff);\n    put_byte(s, strm.adler >> 16 & 0xff);\n    put_byte(s, strm.adler >> 24 & 0xff);\n    put_byte(s, strm.total_in & 0xff);\n    put_byte(s, strm.total_in >> 8 & 0xff);\n    put_byte(s, strm.total_in >> 16 & 0xff);\n    put_byte(s, strm.total_in >> 24 & 0xff);\n  } else {\n    putShortMSB(s, strm.adler >>> 16);\n    putShortMSB(s, strm.adler & 0xffff);\n  }\n  flush_pending(strm);\n  /* If avail_out is zero, the application will call deflate again\n   * to flush the rest.\n   */\n\n  if (s.wrap > 0) {\n    s.wrap = -s.wrap;\n  }\n  /* write the trailer only once! */\n\n  return s.pending !== 0 ? Z_OK : Z_STREAM_END;\n};\nvar deflateEnd = function deflateEnd(strm) {\n  if (!strm || /* == Z_NULL */\n  !strm.state\n  /* == Z_NULL */) {\n    return Z_STREAM_ERROR;\n  }\n  var status = strm.state.status;\n  if (status !== INIT_STATE && status !== EXTRA_STATE && status !== NAME_STATE && status !== COMMENT_STATE && status !== HCRC_STATE && status !== BUSY_STATE && status !== FINISH_STATE) {\n    return err(strm, Z_STREAM_ERROR);\n  }\n  strm.state = null;\n  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;\n};\n/* =========================================================================\n * Initializes the compression dictionary from the given byte\n * sequence without producing any compressed output.\n */\n\nvar deflateSetDictionary = function deflateSetDictionary(strm, dictionary) {\n  var dictLength = dictionary.length;\n  if (!strm || /* == Z_NULL */\n  !strm.state\n  /* == Z_NULL */) {\n    return Z_STREAM_ERROR;\n  }\n  var s = strm.state;\n  var wrap = s.wrap;\n  if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) {\n    return Z_STREAM_ERROR;\n  }\n  /* when using zlib wrappers, compute Adler-32 for provided dictionary */\n\n  if (wrap === 1) {\n    /* adler32(strm->adler, dictionary, dictLength); */\n    strm.adler = adler32_1(strm.adler, dictionary, dictLength, 0);\n  }\n  s.wrap = 0;\n  /* avoid computing Adler-32 in read_buf */\n\n  /* if dictionary would fill window, just replace the history */\n\n  if (dictLength >= s.w_size) {\n    if (wrap === 0) {\n      /* already empty otherwise */\n\n      /** * CLEAR_HASH(s); ** */\n      zero$1(s.head); // Fill with NIL (= 0);\n\n      s.strstart = 0;\n      s.block_start = 0;\n      s.insert = 0;\n    }\n    /* use the tail */\n    // dictionary = dictionary.slice(dictLength - s.w_size);\n\n    var tmpDict = new Uint8Array(s.w_size);\n    tmpDict.set(dictionary.subarray(dictLength - s.w_size, dictLength), 0);\n    dictionary = tmpDict;\n    dictLength = s.w_size;\n  }\n  /* insert dictionary into window and hash */\n\n  var avail = strm.avail_in;\n  var next = strm.next_in;\n  var input = strm.input;\n  strm.avail_in = dictLength;\n  strm.next_in = 0;\n  strm.input = dictionary;\n  fill_window(s);\n  while (s.lookahead >= MIN_MATCH$1) {\n    var str = s.strstart;\n    var n = s.lookahead - (MIN_MATCH$1 - 1);\n    do {\n      /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */\n      s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH$1 - 1]);\n      s.prev[str & s.w_mask] = s.head[s.ins_h];\n      s.head[s.ins_h] = str;\n      str++;\n    } while (--n);\n    s.strstart = str;\n    s.lookahead = MIN_MATCH$1 - 1;\n    fill_window(s);\n  }\n  s.strstart += s.lookahead;\n  s.block_start = s.strstart;\n  s.insert = s.lookahead;\n  s.lookahead = 0;\n  s.match_length = s.prev_length = MIN_MATCH$1 - 1;\n  s.match_available = 0;\n  strm.next_in = next;\n  strm.input = input;\n  strm.avail_in = avail;\n  s.wrap = wrap;\n  return Z_OK;\n};\nvar deflateInit_1 = deflateInit;\nvar deflateInit2_1 = deflateInit2;\nvar deflateReset_1 = deflateReset;\nvar deflateResetKeep_1 = deflateResetKeep;\nvar deflateSetHeader_1 = deflateSetHeader;\nvar deflate_2 = deflate;\nvar deflateEnd_1 = deflateEnd;\nvar deflateSetDictionary_1 = deflateSetDictionary;\nvar deflateInfo = 'pako deflate (from Nodeca project)';\n/* Not implemented\n  module.exports.deflateBound = deflateBound;\n  module.exports.deflateCopy = deflateCopy;\n  module.exports.deflateParams = deflateParams;\n  module.exports.deflatePending = deflatePending;\n  module.exports.deflatePrime = deflatePrime;\n  module.exports.deflateTune = deflateTune;\n  */\n\nvar deflate_1 = {\n  deflateInit: deflateInit_1,\n  deflateInit2: deflateInit2_1,\n  deflateReset: deflateReset_1,\n  deflateResetKeep: deflateResetKeep_1,\n  deflateSetHeader: deflateSetHeader_1,\n  deflate: deflate_2,\n  deflateEnd: deflateEnd_1,\n  deflateSetDictionary: deflateSetDictionary_1,\n  deflateInfo: deflateInfo\n};\n\n// Join array of chunks to single array.\nfunction flattenChunks(chunks) {\n  // calculate data length\n  var len = 0;\n  for (var i = 0, l = chunks.length; i < l; i++) {\n    len += chunks[i].length;\n  } // join chunks\n\n  var result = new Uint8Array(len);\n  for (var _i = 0, pos = 0, _l = chunks.length; _i < _l; _i++) {\n    var chunk = chunks[_i];\n    result.set(chunk, pos);\n    pos += chunk.length;\n  }\n  return result;\n}\n\n// String encode/decode helpers\n//\n// - apply(Array) can fail on Android 2.2\n// - apply(Uint8Array) can fail on iOS 5.1 Safari\n//\n\n// Table with utf8 lengths (calculated by first byte of sequence)\n// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,\n// because max possible codepoint is 0x10ffff\n\nvar _utf8len = new Uint8Array(256);\nfor (var q = 0; q < 256; q++) {\n  _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;\n}\n_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start\n// convert string to array (typed, when possible)\n\n// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin\n//\n// This software is provided 'as-is', without any express or implied\n// warranty. In no event will the authors be held liable for any damages\n// arising from the use of this software.\n//\n// Permission is granted to anyone to use this software for any purpose,\n// including commercial applications, and to alter it and redistribute it\n// freely, subject to the following restrictions:\n//\n// 1. The origin of this software must not be misrepresented; you must not\n//   claim that you wrote the original software. If you use this software\n//   in a product, an acknowledgment in the product documentation would be\n//   appreciated but is not required.\n// 2. Altered source versions must be plainly marked as such, and must not be\n//   misrepresented as being the original software.\n// 3. This notice may not be removed or altered from any source distribution.\n\nfunction ZStream() {\n  /* next input byte */\n  this.input = null; // JS specific, because we have no pointers\n\n  this.next_in = 0;\n  /* number of bytes available at input */\n\n  this.avail_in = 0;\n  /* total number of input bytes read so far */\n\n  this.total_in = 0;\n  /* next output byte should be put there */\n\n  this.output = null; // JS specific, because we have no pointers\n\n  this.next_out = 0;\n  /* remaining free space at output */\n\n  this.avail_out = 0;\n  /* total number of bytes output so far */\n\n  this.total_out = 0;\n  /* last error message, NULL if no error */\n\n  this.msg = '';\n  /* Z_NULL */\n  /* not visible by applications */\n\n  this.state = null;\n  /* best guess about the data type: binary or text */\n\n  this.data_type = 2;\n  /* Z_UNKNOWN */\n  /* adler32 value of the uncompressed data */\n\n  this.adler = 0;\n}\nvar zstream = ZStream;\n\n// eslint-disable-next-line @typescript-eslint/unbound-method\nvar deflate_toString = Object.prototype.toString;\n/* Public constants ========================================================== */\n\n/* =========================================================================== */\n\nvar Z_NO_FLUSH$1 = constants.Z_NO_FLUSH;\nvar Z_SYNC_FLUSH = constants.Z_SYNC_FLUSH;\nvar Z_FULL_FLUSH$1 = constants.Z_FULL_FLUSH;\nvar Z_FINISH$1 = constants.Z_FINISH;\nvar Z_OK$1 = constants.Z_OK;\nvar Z_STREAM_END$1 = constants.Z_STREAM_END;\nvar Z_DEFAULT_COMPRESSION$1 = constants.Z_DEFAULT_COMPRESSION;\nvar Z_DEFAULT_STRATEGY$1 = constants.Z_DEFAULT_STRATEGY;\nvar Z_DEFLATED$1 = constants.Z_DEFLATED;\n/* =========================================================================== */\n\n/**\n * class Deflate\n *\n * Generic JS-style wrapper for zlib calls. If you don't need\n * streaming behaviour - use more simple functions: [[deflate]],\n * [[deflateRaw]] and [[gzip]].\n * */\n\n/* internal\n * Deflate.chunks -> Array\n *\n * Chunks of output data, if [[Deflate#onData]] not overridden.\n * */\n\n/**\n * Deflate.result -> Uint8Array\n *\n * Compressed result, generated by default [[Deflate#onData]]\n * and [[Deflate#onEnd]] handlers. Filled after you push last chunk\n * (call [[Deflate#push]] with `Z_FINISH` / `true` param).\n * */\n\n/**\n * Deflate.err -> Number\n *\n * Error code after deflate finished. 0 (Z_OK) on success.\n * You will not need it in real life, because deflate errors\n * are possible only on wrong options or bad `onData` / `onEnd`\n * custom handlers.\n * */\n\n/**\n * Deflate.msg -> String\n *\n * Error message, if [[Deflate.err]] != 0\n * */\n\n/**\n * new Deflate(options)\n * - options (Object): zlib deflate options.\n *\n * Creates new deflator instance with specified params. Throws exception\n * on bad params. Supported options:\n *\n * - `level`\n * - `windowBits`\n * - `memLevel`\n * - `strategy`\n * - `dictionary`\n *\n * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)\n * for more information on these.\n *\n * Additional options, for internal needs:\n *\n * * `chunkSize` - size of generated data chunks (16K by default)\n * * `raw` (Boolean) - do raw deflate\n * * `gzip` (Boolean) - create gzip wrapper\n * * `header` (Object) - custom header for gzip\n * ** `text` (Boolean) - true if compressed data believed to be text\n * ** `time` (Number) - modification time, unix timestamp\n * ** `os` (Number) - operation system code\n * ** `extra` (Array) - array of bytes with extra data (max 65536)\n * ** `name` (String) - file name (binary string)\n * ** `comment` (String) - comment (binary string)\n * ** `hcrc` (Boolean) - true if header crc should be added\n *\n * ##### Example:\n *\n * ```javascript\n * const pako = require('pako')\n *   , chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])\n *   , chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);\n *\n * const deflate = new pako.Deflate({ level: 3});\n *\n * deflate.push(chunk1, false);\n * deflate.push(chunk2, true);  // true -> last chunk\n *\n * if (deflate.err) { throw new Error(deflate.err); }\n *\n * console.log(deflate.result);\n * ```\n * */\n\nfunction Deflate() {\n  this.options = {\n    level: Z_DEFAULT_COMPRESSION$1,\n    method: Z_DEFLATED$1,\n    chunkSize: 16384,\n    windowBits: 15,\n    memLevel: 8,\n    strategy: Z_DEFAULT_STRATEGY$1\n  };\n  var opt = this.options;\n  if (opt.raw && opt.windowBits > 0) {\n    opt.windowBits = -opt.windowBits;\n  } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {\n    opt.windowBits += 16;\n  }\n  this.err = 0; // error code, if happens (0 = Z_OK)\n\n  this.msg = ''; // error message\n\n  this.ended = false; // used to avoid multiple onEnd() calls\n\n  this.chunks = []; // chunks of compressed data\n\n  this.strm = new zstream();\n  this.strm.avail_out = 0;\n  var status = deflate_1.deflateInit2(this.strm, opt.level, opt.method, opt.windowBits, opt.memLevel, opt.strategy);\n  if (status !== Z_OK$1) {\n    throw new Error(messages[status]);\n  }\n  if (opt.header) {\n    deflate_1.deflateSetHeader(this.strm, opt.header);\n  }\n  if (opt.dictionary) {\n    var dict; // Convert data if needed\n\n    if (deflate_toString.call(opt.dictionary) === '[object ArrayBuffer]') {\n      dict = new Uint8Array(opt.dictionary);\n    } else {\n      dict = opt.dictionary;\n    }\n    status = deflate_1.deflateSetDictionary(this.strm, dict);\n    if (status !== Z_OK$1) {\n      throw new Error(messages[status]);\n    }\n    this._dict_set = true;\n  }\n}\n/**\n * Deflate#push(data[, flush_mode]) -> Boolean\n * - data (Uint8Array|ArrayBuffer|String): input data. Strings will be\n * converted to utf8 byte sequence.\n * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.\n * See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.\n *\n * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with\n * new compressed chunks. Returns `true` on success. The last data block must\n * have `flush_mode` Z_FINISH (or `true`). That will flush internal pending\n * buffers and call [[Deflate#onEnd]].\n *\n * On fail call [[Deflate#onEnd]] with error code and return false.\n *\n * ##### Example\n *\n * ```javascript\n * push(chunk, false); // push one of data chunks\n * ...\n * push(chunk, true);  // push last chunk\n * ```\n * */\n\nDeflate.prototype.push = function (data, flush_mode) {\n  var strm = this.strm;\n  var chunkSize = this.options.chunkSize;\n  var status;\n  var _flush_mode;\n  if (this.ended) {\n    return false;\n  }\n  if (flush_mode === ~~flush_mode) {\n    _flush_mode = flush_mode;\n  } else {\n    _flush_mode = flush_mode === true ? Z_FINISH$1 : Z_NO_FLUSH$1;\n  } // Convert data if needed\n\n  if (deflate_toString.call(data) === '[object ArrayBuffer]') {\n    strm.input = new Uint8Array(data);\n  } else {\n    strm.input = data;\n  }\n  strm.next_in = 0;\n  strm.avail_in = strm.input.length;\n  for (;;) {\n    if (strm.avail_out === 0) {\n      strm.output = new Uint8Array(chunkSize);\n      strm.next_out = 0;\n      strm.avail_out = chunkSize;\n    } // Make sure avail_out > 6 to avoid repeating markers\n\n    if ((_flush_mode === Z_SYNC_FLUSH || _flush_mode === Z_FULL_FLUSH$1) && strm.avail_out <= 6) {\n      this.onData(strm.output.subarray(0, strm.next_out));\n      strm.avail_out = 0;\n      continue;\n    }\n    status = deflate_1.deflate(strm, _flush_mode); // Ended => flush and finish\n\n    if (status === Z_STREAM_END$1) {\n      if (strm.next_out > 0) {\n        this.onData(strm.output.subarray(0, strm.next_out));\n      }\n      status = deflate_1.deflateEnd(this.strm);\n      this.onEnd(status);\n      this.ended = true;\n      return status === Z_OK$1;\n    } // Flush if out buffer full\n\n    if (strm.avail_out === 0) {\n      this.onData(strm.output);\n      continue;\n    } // Flush if requested and has data\n\n    if (_flush_mode > 0 && strm.next_out > 0) {\n      this.onData(strm.output.subarray(0, strm.next_out));\n      strm.avail_out = 0;\n      continue;\n    }\n    if (strm.avail_in === 0) {\n      break;\n    }\n  }\n  return true;\n};\n/**\n * Deflate#onData(chunk) -> Void\n * - chunk (Uint8Array): output data.\n *\n * By default, stores data blocks in `chunks[]` property and glue\n * those in `onEnd`. Override this handler, if you need another behaviour.\n * */\n\nDeflate.prototype.onData = function (chunk) {\n  this.chunks.push(chunk);\n};\n/**\n * Deflate#onEnd(status) -> Void\n * - status (Number): deflate status. 0 (Z_OK) on success,\n * other if not.\n *\n * Called once after you tell deflate that the input stream is\n * complete (Z_FINISH). By default - join collected chunks,\n * free memory and fill `results` / `err` properties.\n * */\n\nDeflate.prototype.onEnd = function (status) {\n  // On success - join\n  if (status === Z_OK$1) {\n    this.result = flattenChunks(this.chunks);\n  }\n  this.chunks = [];\n  this.err = status;\n  this.msg = this.strm.msg;\n};\n\n// https://github.com/nodeca/pako/blob/26dff4fb3472c5532b3bd8856421146d35ab7592/lib/utils/strings.js#L26\nfunction string2buf(str) {\n  if (typeof TextEncoder === 'function' && TextEncoder.prototype.encode) {\n    return new TextEncoder().encode(str);\n  }\n  var buf;\n  var c;\n  var c2;\n  var m_pos;\n  var i;\n  var str_len = str.length;\n  var buf_len = 0;\n\n  // count binary size\n  for (m_pos = 0; m_pos < str_len; m_pos++) {\n    c = str.charCodeAt(m_pos);\n    if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {\n      c2 = str.charCodeAt(m_pos + 1);\n      if ((c2 & 0xfc00) === 0xdc00) {\n        c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);\n        m_pos++;\n      }\n    }\n    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;\n  }\n\n  // allocate buffer\n  buf = new Uint8Array(buf_len);\n\n  // convert\n  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {\n    c = str.charCodeAt(m_pos);\n    if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {\n      c2 = str.charCodeAt(m_pos + 1);\n      if ((c2 & 0xfc00) === 0xdc00) {\n        c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);\n        m_pos++;\n      }\n    }\n    if (c < 0x80) {\n      /* one byte */\n      buf[i++] = c;\n    } else if (c < 0x800) {\n      /* two bytes */\n      buf[i++] = 0xc0 | c >>> 6;\n      buf[i++] = 0x80 | c & 0x3f;\n    } else if (c < 0x10000) {\n      /* three bytes */\n      buf[i++] = 0xe0 | c >>> 12;\n      buf[i++] = 0x80 | c >>> 6 & 0x3f;\n      buf[i++] = 0x80 | c & 0x3f;\n    } else {\n      /* four bytes */\n      buf[i++] = 0xf0 | c >>> 18;\n      buf[i++] = 0x80 | c >>> 12 & 0x3f;\n      buf[i++] = 0x80 | c >>> 6 & 0x3f;\n      buf[i++] = 0x80 | c & 0x3f;\n    }\n  }\n  return buf;\n}\n;// CONCATENATED MODULE: ./src/boot/startWorker.js\n\n\nfunction startWorker(workerScope) {\n  if (workerScope === undefined) {\n    workerScope = self;\n  }\n  try {\n    var streams = new Map();\n    workerScope.addEventListener('message', function (event) {\n      try {\n        var response = handleAction(streams, event.data);\n        if (response) {\n          workerScope.postMessage(response);\n        }\n      } catch (error) {\n        sendError(workerScope, error, event.data && 'streamId' in event.data ? event.data.streamId : undefined);\n      }\n    });\n  } catch (error) {\n    sendError(workerScope, error);\n  }\n}\nfunction sendError(workerScope, error, streamId) {\n  try {\n    workerScope.postMessage({\n      type: 'errored',\n      error: error,\n      streamId: streamId\n    });\n  } catch (_) {\n    // DATA_CLONE_ERR, cf https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm\n    workerScope.postMessage({\n      type: 'errored',\n      error: String(error),\n      streamId: streamId\n    });\n  }\n}\nfunction handleAction(streams, message) {\n  switch (message.action) {\n    case 'init':\n      return {\n        type: 'initialized',\n        version: \"3.2.24\"\n      };\n    case 'write':\n      {\n        var deflate = streams.get(message.streamId);\n        if (!deflate) {\n          deflate = new Deflate();\n          streams.set(message.streamId, deflate);\n        }\n        var previousChunksLength = deflate.chunks.length;\n\n        // TextEncoder is not supported on old browser version like Edge 18, therefore we use string2buf\n        var binaryData = string2buf(message.data);\n        deflate.push(binaryData, constants.Z_SYNC_FLUSH);\n        return {\n          type: 'wrote',\n          id: message.id,\n          streamId: message.streamId,\n          result: concatBuffers(deflate.chunks.slice(previousChunksLength)),\n          trailer: makeTrailer(deflate),\n          additionalBytesCount: binaryData.length\n        };\n      }\n    case 'reset':\n      streams[\"delete\"](message.streamId);\n      break;\n  }\n}\n\n/**\n * Creates a buffer of bytes to append to the end of the Zlib stream to finish it. It is composed of\n * two parts:\n * * an empty deflate block as specified in https://www.rfc-editor.org/rfc/rfc1951.html#page-13 ,\n * which happens to be always 3, 0\n * * an adler32 checksum as specified in https://www.rfc-editor.org/rfc/rfc1950.html#page-4\n *\n * This is essentially what pako writes to the stream when invoking `deflate.push('',\n * constants.Z_FINISH)` operation after some data has been pushed with \"Z_SYNC_FLUSH\", but doing so\n * ends the stream and no more data can be pushed into it.\n *\n * Since we want to let the main thread end the stream synchronously at any point without needing to\n * send a message to the worker to flush it, we send back a trailer in each \"wrote\" response so the\n * main thread can just append it to the compressed data to end the stream.\n *\n * can merge streams together (see internal doc).\n */\nfunction makeTrailer(deflate) {\n  /* eslint-disable no-bitwise */\n  var adler = deflate.strm.adler;\n  return new Uint8Array([\n  // Empty deflate block\n  3, 0,\n  // Adler32 checksum\n  adler >>> 24 & 0xff, adler >>> 16 & 0xff, adler >>> 8 & 0xff, adler & 0xff]);\n  /* eslint-enable no-bitwise */\n}\n;// CONCATENATED MODULE: ./src/index.js\n/* eslint-disable local-rules/disallow-side-effects */\n\nstartWorker();\n"])));
}
/**
 * In order to be sure that the worker is correctly working, we need a round trip of
 * initialization messages, making the creation asynchronous.
 * These worker lifecycle states handle this case.
 */
var DeflateWorkerStatus = {
  Nil: 0,
  Loading: 1,
  Error: 2,
  Initialized: 3
};
var state = {
  status: DeflateWorkerStatus.Nil
};
function startDeflateWorker(configuration, source, onInitializationFailure, createDeflateWorkerImpl) {
  if (createDeflateWorkerImpl === undefined) {
    createDeflateWorkerImpl = createDeflateWorker;
  }
  if (state.status === DeflateWorkerStatus.Nil) {
    doStartDeflateWorker(configuration, source, createDeflateWorkerImpl);
  }
  switch (state.status) {
    case DeflateWorkerStatus.Loading:
      state.initializationFailureCallbacks.push(onInitializationFailure);
      return state.worker;
    case DeflateWorkerStatus.Initialized:
      return state.worker;
  }
}
function resetDeflateWorkerState() {
  if (state.status === DeflateWorkerStatus.Initialized || state.status === DeflateWorkerStatus.Loading) {
    state.stop();
  }
  state = {
    status: DeflateWorkerStatus.Nil
  };
}
function getDeflateWorkerStatus() {
  return state.status;
}

/**
 * Starts the deflate worker and handle messages and errors
 *
 * The spec allow browsers to handle worker errors differently:
 * - Chromium throws an exception
 * - Firefox fires an error event
 *
 * more details: https://bugzilla.mozilla.org/show_bug.cgi?id=1736865#c2
 */
function doStartDeflateWorker(configuration, source, createDeflateWorkerImpl) {
  if (createDeflateWorkerImpl === undefined) {
    createDeflateWorkerImpl = createDeflateWorker;
  }
  try {
    var worker = createDeflateWorkerImpl(configuration);
    var errorListener = addEventListener_addEventListener(worker, 'error', function (error) {
      onError(configuration, source, error);
    });
    var messageListener = addEventListener_addEventListener(worker, 'message', function (event) {
      var data = event.data;
      if (data.type === 'errored') {
        onError(data.error, data.streamId);
      } else if (data.type === 'initialized') {
        onInitialized(data.version);
      }
    });
    worker.postMessage({
      action: 'init'
    });
    timer_setTimeout(function () {
      return onTimeout(source);
    }, INITIALIZATION_TIME_OUT_DELAY);
    var stop = function stop() {
      errorListener.stop();
      messageListener.stop();
    };
    state = {
      status: DeflateWorkerStatus.Loading,
      worker: worker,
      stop: stop,
      initializationFailureCallbacks: []
    };
  } catch (error) {
    onError(configuration, source, error);
  }
}
function onTimeout(source) {
  if (state.status === DeflateWorkerStatus.Loading) {
    display_display.error(source + ' failed to start: a timeout occurred while initializing the Worker');
    state.initializationFailureCallbacks.forEach(function (callback) {
      callback();
    });
    state = {
      status: DeflateWorkerStatus.Error
    };
  }
}
function onInitialized(version) {
  if (state.status === DeflateWorkerStatus.Loading) {
    state = {
      status: DeflateWorkerStatus.Initialized,
      worker: state.worker,
      version: version,
      stop: state.stop
    };
  }
}
function onError(configuration, source, error, streamId) {
  if (state.status === DeflateWorkerStatus.Loading) {
    display_display.error(source + ' failed to start: an error occurred while creating the Worker:', error);
    if (error instanceof Event || error instanceof Error && isMessageCspRelated(error.message)) {
      var baseMessage;
      if (configuration.workerUrl) {
        baseMessage = 'Please make sure the Worker URL ' + configuration.workerUrl + ' is correct and CSP is correctly configured.';
      } else {
        baseMessage = 'Please make sure CSP is correctly configured.';
      }
      display_display.error(baseMessage);
    } else {
      (0,esm_namespaceObject.addTelemetryError)(error);
    }
    if (state.status === DeflateWorkerStatus.Loading) {
      state.initializationFailureCallbacks.forEach(function (callback) {
        callback();
      });
    }
    state = {
      status: DeflateWorkerStatus.Error
    };
  } else {
    (0,esm_namespaceObject.addTelemetryError)(error, {
      worker_version: state.status === DeflateWorkerStatus.Initialized && state.version,
      stream_id: streamId
    });
  }
}
function isMessageCspRelated(message) {
  return includes(message, 'Content Security Policy') ||
  // Related to `require-trusted-types-for` CSP: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for
  includes(message, "requires 'TrustedScriptURL'");
}
;// CONCATENATED MODULE: ./src/domain/deflate/index.js


;// CONCATENATED MODULE: ./src/transport/startRumBatch.js


function startRumBatch(configuration, lifeCycle, telemetryEventObservable, reportError, pageExitObservable, sessionExpireObservable, createEncoder) {
  var batch = startBatchWithReplica(configuration, {
    endpoint: configuration.rumEndpoint,
    encoder: createEncoder(DeflateEncoderStreamId.RUM)
  }, reportError, pageExitObservable, sessionExpireObservable);
  lifeCycle.subscribe(LifeCycleEventType.RUM_EVENT_COLLECTED, function (serverRumEvent) {
    if (serverRumEvent.type === enums_RumEventType.VIEW) {
      batch.upsert(serverRumEvent, serverRumEvent.view.id);
    } else {
      batch.add(serverRumEvent);
    }
  });
  // telemetryEventObservable.subscribe(function (event) {
  //   batch.add(event)
  // })
  return batch;
}
;// CONCATENATED MODULE: ./src/transport/startRumEventBridge.js

function startRumEventBridge(lifeCycle) {
  var bridge = getEventBridge();
  lifeCycle.subscribe(LifeCycleEventType.RUM_EVENT_COLLECTED, function (serverRumEvent) {
    var data = processedMessageByDataMap(serverRumEvent).rowData;
    bridge.send('rum', data);
  });
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/typeof.js
function typeof_typeof(o) {
  "@babel/helpers - typeof";

  return typeof_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, typeof_typeof(o);
}

;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != typeof_typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof_typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == typeof_typeof(i) ? i : i + "";
}

;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js

function defineProperty_defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

;// CONCATENATED MODULE: ./src/domain/assembly.js

function assembly_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function assembly_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? assembly_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : assembly_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

var SessionType = {
  SYNTHETICS: 'synthetics',
  USER: 'user'
};
var VIEW_MODIFIABLE_FIELD_PATHS = {
  'view.url': 'string',
  'view.referrer': 'string'
};
var USER_CUSTOMIZABLE_FIELD_PATHS = {
  context: 'object'
};
var ROOT_MODIFIABLE_FIELD_PATHS = {
  service: 'string',
  version: 'string'
};
var modifiableFieldPathsByEvent = {};
function startRumAssembly(configuration, lifeCycle, sessionManager, userSessionManager, viewContexts, urlContexts, actionContexts, displayContext, getCommonContext, reportError) {
  modifiableFieldPathsByEvent[enums_RumEventType.VIEW] = assembly_objectSpread(assembly_objectSpread({}, USER_CUSTOMIZABLE_FIELD_PATHS), VIEW_MODIFIABLE_FIELD_PATHS);
  modifiableFieldPathsByEvent[enums_RumEventType.ERROR] = tools_assign({
    'error.message': 'string',
    'error.stack': 'string',
    'error.resource.url': 'string'
  }, USER_CUSTOMIZABLE_FIELD_PATHS, VIEW_MODIFIABLE_FIELD_PATHS, ROOT_MODIFIABLE_FIELD_PATHS);
  modifiableFieldPathsByEvent[enums_RumEventType.RESOURCE] = tools_assign({
    'resource.url': 'string'
  }, USER_CUSTOMIZABLE_FIELD_PATHS, VIEW_MODIFIABLE_FIELD_PATHS, ROOT_MODIFIABLE_FIELD_PATHS);
  modifiableFieldPathsByEvent[enums_RumEventType.ACTION] = tools_assign({
    'action.target.name': 'string'
  }, USER_CUSTOMIZABLE_FIELD_PATHS, VIEW_MODIFIABLE_FIELD_PATHS, ROOT_MODIFIABLE_FIELD_PATHS);
  modifiableFieldPathsByEvent[enums_RumEventType.LONG_TASK] = tools_assign({}, USER_CUSTOMIZABLE_FIELD_PATHS, VIEW_MODIFIABLE_FIELD_PATHS);
  var eventRateLimiters = {};
  eventRateLimiters[enums_RumEventType.ERROR] = createEventRateLimiter(enums_RumEventType.ERROR, configuration.eventRateLimiterThreshold, reportError);
  eventRateLimiters[enums_RumEventType.ACTION] = createEventRateLimiter(enums_RumEventType.ACTION, configuration.eventRateLimiterThreshold, reportError);
  lifeCycle.subscribe(LifeCycleEventType.RAW_RUM_EVENT_COLLECTED, function (data) {
    var startTime = data.startTime;
    var rawRumEvent = data.rawRumEvent;
    var savedCommonContext = data.savedCommonContext;
    var customerContext = data.customerContext;
    var domainContext = data.domainContext;
    var viewContext = viewContexts.findView(startTime);
    var urlContext = urlContexts.findUrl(startTime);
    var session = sessionManager.findTrackedSession(startTime);
    if (session && session.isErrorSession && !session.sessionHasError) return;
    if (session && viewContext && urlContext) {
      // var actionId = actionContexts.findActionId(startTime)
      // var actionIds = actionContexts.findAllActionId(startTime)
      var commonContext = savedCommonContext || getCommonContext();
      var rumContext = {
        _gc: {
          sdkName: configuration.sdkName,
          sdkVersion: configuration.sdkVersion,
          drift: currentDrift(),
          configuration: {
            session_sample_rate: round(configuration.sessionSampleRate, 3),
            session_replay_sample_rate: round(configuration.sessionReplaySampleRate, 3),
            session_on_error_sample_rate: round(configuration.sessionOnErrorSampleRate, 3),
            session_replay_on_error_sample_rate: round(configuration.sessionReplayOnErrorSampleRate, 3)
          }
        },
        terminal: {
          type: 'web'
        },
        application: {
          id: configuration.applicationId
        },
        device: deviceInfo,
        env: configuration.env || '',
        service: viewContext.service || configuration.service || 'browser',
        version: viewContext.version || configuration.version || '',
        source: 'browser',
        date: tools_timeStampNow(),
        user: {
          id: userSessionManager.getId(),
          is_signin: 'F',
          is_login: false
        },
        session: {
          // must be computed on each event because synthetics instrumentation can be done after sdk execution
          // cf https://github.com/puppeteer/puppeteer/issues/3667
          type: getSessionType(),
          id: session.id
        },
        view: {
          id: viewContext.id,
          name: viewContext.name || urlContext.path,
          url: urlContext.url,
          referrer: urlContext.referrer,
          host: urlContext.host,
          path: urlContext.path,
          pathGroup: urlContext.pathGroup,
          urlQuery: urlContext.urlQuery
        },
        // action:
        //   needToAssembleWithAction(rawRumEvent) && actionId
        //     ? { id: actionId, ids: actionIds }
        //     : undefined,
        display: displayContext.get()
      };
      var rumEvent = tools_extend2Lev(rumContext, viewContext, rawRumEvent);
      var serverRumEvent = withSnakeCaseKeys(rumEvent);
      var context = tools_extend2Lev({}, commonContext.context, viewContext.context, customerContext);
      if (!isEmptyObject(context)) {
        serverRumEvent.context = context;
      }
      if (!('has_replay' in serverRumEvent.session)) {
        serverRumEvent.session.has_replay = commonContext.hasReplay;
      }
      if (session.errorSessionReplayAllowed) {
        serverRumEvent.session.has_replay = serverRumEvent.session.has_replay && session.sessionHasError;
      }
      if (serverRumEvent.type === 'view') {
        serverRumEvent.session.sampled_for_error_replay = session.errorSessionReplayAllowed;
        serverRumEvent.session.sampled_for_error_session = session.isErrorSession;
        serverRumEvent.session.error_timestamp_for_session = session.sessionErrorTimestamp;
      }
      if (!isEmptyObject(commonContext.user)) {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        serverRumEvent.user = tools_extend2Lev({
          // id: session.getAnonymousID(),
          is_signin: 'T',
          is_login: true
        }, commonContext.user);
      }
      if (shouldSend(serverRumEvent, configuration.beforeSend, domainContext, eventRateLimiters)) {
        if (isEmptyObject(serverRumEvent.context)) {
          delete serverRumEvent.context;
        }
        lifeCycle.notify(LifeCycleEventType.RUM_EVENT_COLLECTED, serverRumEvent);
      }
    }
  });
}
function shouldSend(event, beforeSend, domainContext, eventRateLimiters) {
  if (beforeSend) {
    var result = limitModification(event, modifiableFieldPathsByEvent[event.type], function (event) {
      return beforeSend(event, domainContext);
    });
    if (result === false && event.type !== enums_RumEventType.VIEW) {
      return false;
    }
    if (result === false) {
      display_display.warn("Can't dismiss view events using beforeSend!");
    }
  }
  var rateLimitReached = false;
  if (eventRateLimiters[event.type]) {
    rateLimitReached = eventRateLimiters[event.type].isLimitReached();
  }
  return !rateLimitReached;
}
function needToAssembleWithAction(event) {
  return [RumEventType.ERROR, RumEventType.RESOURCE, RumEventType.LONG_TASK].indexOf(event.type) !== -1;
}
function getSessionType() {
  return window._DATAFLUX_SYNTHETICS_BROWSER === undefined ? SessionType.USER : SessionType.SYNTHETICS;
}
;// CONCATENATED MODULE: ./src/domain/initViewportObservable.js

var viewportObservable;
function initViewportObservable() {
  if (!viewportObservable) {
    viewportObservable = createViewportObservable();
  }
  return viewportObservable;
}
function createViewportObservable() {
  return new observable_Observable(function (observable) {
    var _throttledUpdateDimension = throttle(function () {
      observable.notify(getViewportDimension());
    }, 200);
    var updateDimension = _throttledUpdateDimension.throttled;
    return addEventListener_addEventListener(window, DOM_EVENT.RESIZE, updateDimension, {
      capture: true,
      passive: true
    }).stop;
  });
}

// excludes the width and height of any rendered classic scrollbar that is fixed to the visual viewport
function getViewportDimension() {
  var visual = window.visualViewport;
  if (visual) {
    return {
      width: Number(visual.width * visual.scale),
      height: Number(visual.height * visual.scale)
    };
  }
  return {
    width: Number(window.innerWidth || 0),
    height: Number(window.innerHeight || 0)
  };
}
;// CONCATENATED MODULE: ./src/domain/contexts/displayContext.js

function startDisplayContext() {
  var viewport = getViewportDimension();
  var unsubscribeViewport = initViewportObservable().subscribe(function (viewportDimension) {
    viewport = viewportDimension;
  }).unsubscribe;
  return {
    get: function get() {
      return {
        viewport: viewport
      };
    },
    stop: unsubscribeViewport
  };
}
;// CONCATENATED MODULE: ./src/domain/contexts/internalContext.js
/**
 * Internal context keep returning v1 format
 * to not break compatibility with logs data format
 */
function startInternalContext(applicationId, sessionManager, viewContexts, actionContexts, urlContexts) {
  return {
    get: function get(startTime) {
      var viewContext = viewContexts.findView(startTime);
      var urlContext = urlContexts.findUrl(startTime);
      var session = sessionManager.findTrackedSession(startTime);
      if (session && viewContext && urlContext) {
        // var actionId = actionContexts.findActionId(startTime)
        // var actionIds = actionContexts.findAllActionId(startTime)
        return {
          application: {
            id: applicationId
          },
          session: {
            id: session.id
          },
          // userAction: actionId
          //   ? {
          //       id: actionId,
          //       ids: actionIds
          //     }
          //   : undefined,
          view: {
            id: viewContext.id,
            name: viewContext.name || urlContext.path,
            url: urlContext.url,
            referrer: urlContext.referrer,
            host: urlContext.host,
            path: urlContext.path,
            pathGroup: urlContext.pathGroup,
            urlQuery: urlContext.urlQuery
          }
        };
      }
    }
  };
}
;// CONCATENATED MODULE: ./src/domain/contexts/urlContexts.js


/**
 * We want to attach to an event:
 * - the url corresponding to its start
 * - the referrer corresponding to the previous view url (or document referrer for initial view)
 */

var URL_CONTEXT_TIME_OUT_DELAY = SESSION_TIME_OUT_DELAY;
function startUrlContexts(lifeCycle, locationChangeObservable, location) {
  var urlContextHistory = createValueHistory({
    expireDelay: URL_CONTEXT_TIME_OUT_DELAY
  });
  var previousViewUrl;
  lifeCycle.subscribe(LifeCycleEventType.BEFORE_VIEW_CREATED, function (data) {
    var viewUrl = location.href;
    urlContextHistory.add(buildUrlContext({
      url: viewUrl,
      location: location,
      referrer: !previousViewUrl ? document.referrer : previousViewUrl
    }), data.startClocks.relative);
    previousViewUrl = viewUrl;
  });
  lifeCycle.subscribe(LifeCycleEventType.AFTER_VIEW_ENDED, function (data) {
    urlContextHistory.closeActive(data.endClocks.relative);
  });
  var locationChangeSubscription = locationChangeObservable.subscribe(function (data) {
    var current = urlContextHistory.find();
    if (current) {
      var changeTime = relativeNow();
      urlContextHistory.closeActive(changeTime);
      urlContextHistory.add(buildUrlContext({
        url: data.newLocation.href,
        location: data.newLocation,
        referrer: current.referrer
      }), changeTime);
    }
  });
  function buildUrlContext(data) {
    var path = data.location.pathname;
    var hash = data.location.hash;
    if (hash && !isHashAnAnchor(hash)) {
      path = '/' + getPathFromHash(hash);
    }
    return {
      url: data.url,
      referrer: data.referrer,
      host: data.location.host,
      path: path,
      pathGroup: replaceNumberCharByPath(path),
      urlQuery: getQueryParamsFromUrl(data.location.href)
    };
  }
  return {
    findUrl: function findUrl(startTime) {
      return urlContextHistory.find(startTime);
    },
    stop: function stop() {
      locationChangeSubscription.unsubscribe();
      urlContextHistory.stop();
    }
  };
}
;// CONCATENATED MODULE: ./src/domain/contexts/viewContexts.js

var VIEW_CONTEXT_TIME_OUT_DELAY = SESSION_TIME_OUT_DELAY;
function startViewContexts(lifeCycle) {
  var viewContextHistory = createValueHistory({
    expireDelay: VIEW_CONTEXT_TIME_OUT_DELAY
  });
  lifeCycle.subscribe(LifeCycleEventType.BEFORE_VIEW_CREATED, function (view) {
    viewContextHistory.add(buildViewContext(view), view.startClocks.relative);
  });
  lifeCycle.subscribe(LifeCycleEventType.AFTER_VIEW_ENDED, function (data) {
    viewContextHistory.closeActive(data.endClocks.relative);
  });
  lifeCycle.subscribe(LifeCycleEventType.BEFORE_VIEW_UPDATED, function (viewUpdate) {
    var currentView = viewContextHistory.find(viewUpdate.startClocks.relative);
    if (currentView && viewUpdate.name) {
      currentView.name = viewUpdate.name;
    }
    if (currentView && viewUpdate.context) {
      currentView.context = viewUpdate.context;
    }
  });
  lifeCycle.subscribe(LifeCycleEventType.SESSION_RENEWED, function () {
    viewContextHistory.reset();
  });
  function buildViewContext(view) {
    return {
      service: view.service,
      version: view.version,
      context: view.context,
      id: view.id,
      name: view.name,
      startClocks: view.startClocks
    };
  }
  return {
    findView: function findView(startTime) {
      return viewContextHistory.find(startTime);
    },
    stop: function stop() {
      viewContextHistory.stop();
    }
  };
}
;// CONCATENATED MODULE: ./src/domain/contexts/pageStateHistory.js


// Arbitrary value to cap number of element for memory consumption in the browser
var MAX_PAGE_STATE_ENTRIES = 4000;
// Arbitrary value to cap number of element for backend & to save bandwidth
var MAX_PAGE_STATE_ENTRIES_SELECTABLE = 500;
var PAGE_STATE_CONTEXT_TIME_OUT_DELAY = SESSION_TIME_OUT_DELAY;
var PageState = {
  ACTIVE: 'active',
  PASSIVE: 'passive',
  HIDDEN: 'hidden',
  FROZEN: 'frozen',
  TERMINATED: 'terminated'
};
function startPageStateHistory(maxPageStateEntriesSelectable) {
  if (maxPageStateEntriesSelectable === undefined) {
    maxPageStateEntriesSelectable = MAX_PAGE_STATE_ENTRIES_SELECTABLE;
  }
  var pageStateEntryHistory = createValueHistory({
    expireDelay: PAGE_STATE_CONTEXT_TIME_OUT_DELAY,
    maxEntries: MAX_PAGE_STATE_ENTRIES
  });
  var currentPageState;
  addPageState(getPageState(), relativeNow());
  var _addEventListeners = addEventListeners(window, [DOM_EVENT.PAGE_SHOW, DOM_EVENT.FOCUS, DOM_EVENT.BLUR, DOM_EVENT.VISIBILITY_CHANGE, DOM_EVENT.RESUME, DOM_EVENT.FREEZE, DOM_EVENT.PAGE_HIDE], function (event) {
    // Only get events fired by the browser to avoid false currentPageState changes done with custom events
    addPageState(computePageState(event), event.timeStamp);
  }, {
    capture: true
  });
  var stopEventListeners = _addEventListeners.stop;
  function addPageState(nextPageState, startTime) {
    if (startTime === undefined) {
      startTime = relativeNow();
    }
    if (nextPageState === currentPageState) {
      return;
    }
    currentPageState = nextPageState;
    pageStateEntryHistory.closeActive(startTime);
    pageStateEntryHistory.add({
      state: currentPageState,
      startTime: startTime
    }, startTime);
  }
  var pageStateHistory = {
    findAll: function findAll(eventStartTime, duration) {
      var pageStateEntries = pageStateEntryHistory.findAll(eventStartTime, duration);
      if (pageStateEntries.length === 0) {
        return;
      }
      var pageStateServerEntries = [];
      // limit the number of entries to return
      var limit = Math.max(0, pageStateEntries.length - maxPageStateEntriesSelectable);

      // loop page state entries backward to return the selected ones in desc order
      for (var index = pageStateEntries.length - 1; index >= limit; index--) {
        var pageState = pageStateEntries[index];
        // compute the start time relative to the event start time (ex: to be relative to the view start time)
        var relativeStartTime = tools_elapsed(eventStartTime, pageState.startTime);
        pageStateServerEntries.push({
          state: pageState.state,
          start: toServerDuration(relativeStartTime)
        });
      }
      return pageStateServerEntries;
    },
    wasInPageStateAt: function wasInPageStateAt(state, startTime) {
      return pageStateHistory.wasInPageStateDuringPeriod(state, startTime, 0);
    },
    wasInPageStateDuringPeriod: function wasInPageStateDuringPeriod(state, startTime, duration) {
      return pageStateEntryHistory.findAll(startTime, duration).some(function (pageState) {
        return pageState.state === state;
      });
    },
    addPageState: addPageState,
    stop: function stop() {
      stopEventListeners();
      pageStateEntryHistory.stop();
    }
  };
  return pageStateHistory;
}
function computePageState(event) {
  if (event.type === DOM_EVENT.FREEZE) {
    return PageState.FROZEN;
  } else if (event.type === DOM_EVENT.PAGE_HIDE) {
    return event.persisted ? PageState.FROZEN : PageState.TERMINATED;
  }
  return getPageState();
}
function getPageState() {
  if (document.visibilityState === 'hidden') {
    return PageState.HIDDEN;
  }
  if (document.hasFocus()) {
    return PageState.ACTIVE;
  }
  return PageState.PASSIVE;
}
;// CONCATENATED MODULE: ./src/domain/rumEventsCollection/error/trackConsoleError.js

function trackConsoleError(errorObservable) {
  var subscription = initConsoleObservable([ConsoleApiName.error]).subscribe(function (consoleLog) {
    errorObservable.notify(consoleLog.error);
  });
  return {
    stop: function stop() {
      subscription.unsubscribe();
    }
  };
}
;// CONCATENATED MODULE: ./src/domain/rumEventsCollection/error/trackReportError.js

function trackReportError(configuration, errorObservable) {
  var subscription = initReportObservable(configuration, [(RawReportType.cspViolation, RawReportType.intervention)]).subscribe(function (reportError) {
    errorObservable.notify({
      startClocks: tools_clocksNow(),
      message: reportError.message,
      stack: reportError.stack,
      type: reportError.subtype,
      source: errorTools_ErrorSource.REPORT,
      handling: enums_ErrorHandling.UNHANDLED
    });
  });
  return {
    stop: function stop() {
      subscription.unsubscribe();
    }
  };
}
;// CONCATENATED MODULE: ./src/domain/rumEventsCollection/error/errorCollection.js




function startErrorCollection(lifeCycle, configuration, sessionManager, pageStateHistory) {
  var errorObservable = new observable_Observable();
  trackConsoleError(errorObservable);
  trackRuntimeError(errorObservable);
  trackReportError(configuration, errorObservable);
  var session = sessionManager.findTrackedSession();
  var hasError = session.isErrorSession && session.sessionHasError;
  if (session.isErrorSession) {
    lifeCycle.subscribe(LifeCycleEventType.SESSION_RENEWED, function () {
      hasError = false;
    });
  }
  errorObservable.subscribe(function (error) {
    if (session.isErrorSession && !hasError) {
      sessionManager.setErrorForSession();
      hasError = true;
    }
    lifeCycle.notify(LifeCycleEventType.RAW_ERROR_COLLECTED, {
      error: error
    });
  });
  return doStartErrorCollection(lifeCycle, pageStateHistory);
}
function doStartErrorCollection(lifeCycle, pageStateHistory) {
  lifeCycle.subscribe(LifeCycleEventType.RAW_ERROR_COLLECTED, function (error) {
    lifeCycle.notify(LifeCycleEventType.RAW_RUM_EVENT_COLLECTED, tools_assign({
      customerContext: error.customerContext,
      savedCommonContext: error.savedCommonContext
    }, processError(error.error, pageStateHistory)));
  });
  return {
    addError: function addError(providedError, savedCommonContext) {
      var error = providedError.error;
      var stackTrace = error instanceof Error ? computeStackTrace(error) : undefined;
      var rawError = computeRawError({
        stackTrace: stackTrace,
        originalError: error,
        handlingStack: providedError.handlingStack,
        startClocks: providedError.startClocks,
        nonErrorPrefix: NonErrorPrefix.PROVIDED,
        source: errorTools_ErrorSource.CUSTOM,
        handling: enums_ErrorHandling.HANDLED
      });
      lifeCycle.notify(LifeCycleEventType.RAW_ERROR_COLLECTED, {
        customerContext: providedError.context,
        savedCommonContext: savedCommonContext,
        error: rawError
      });
    }
  };
}
function processError(error, pageStateHistory) {
  var rawRumEvent = {
    date: error.startClocks.timeStamp,
    error: {
      id: UUID(),
      message: error.message,
      source: error.source,
      stack: error.stack,
      handling_stack: error.handlingStack,
      type: error.type,
      handling: error.handling,
      causes: error.causes,
      source_type: 'browser'
    },
    type: enums_RumEventType.ERROR,
    view: {
      in_foreground: pageStateHistory.wasInPageStateAt(PageState.ACTIVE, error.startClocks.relative)
    }
  };
  return {
    rawRumEvent: rawRumEvent,
    startTime: error.startClocks.relative,
    domainContext: {
      error: error.originalError
    }
  };
}
;// CONCATENATED MODULE: ./src/domain/rumEventsCollection/resource/resourceUtils.js

var FAKE_INITIAL_DOCUMENT = 'initial_document';
var RESOURCE_TYPES = [[ResourceType.DOCUMENT, function (initiatorType) {
  return FAKE_INITIAL_DOCUMENT === initiatorType;
}], [ResourceType.XHR, function (initiatorType) {
  return 'xmlhttprequest' === initiatorType;
}], [ResourceType.FETCH, function (initiatorType) {
  return 'fetch' === initiatorType;
}], [ResourceType.BEACON, function (initiatorType) {
  return 'beacon' === initiatorType;
}], [ResourceType.CSS, function (_, path) {
  return path.match(/\.css$/i) !== null;
}], [ResourceType.JS, function (_, path) {
  return path.match(/\.js$/i) !== null;
}], [ResourceType.IMAGE, function (initiatorType, path) {
  return includes(['image', 'img', 'icon'], initiatorType) || path.match(/\.(gif|jpg|jpeg|tiff|png|svg|ico)$/i) !== null;
}], [ResourceType.FONT, function (_, path) {
  return path.match(/\.(woff|eot|woff2|ttf)$/i) !== null;
}], [ResourceType.MEDIA, function (initiatorType, path) {
  return includes(['audio', 'video'], initiatorType) || path.match(/\.(mp3|mp4)$/i) !== null;
}]];
function computeResourceEntryType(entry) {
  var url = entry.name;
  if (!isValidUrl(url)) {
    return ResourceType.OTHER;
  }
  var path = getPathName(url);
  var type = ResourceType.OTHER;
  tools_each(RESOURCE_TYPES, function (res) {
    var _type = res[0],
      isType = res[1];
    if (isType(entry.initiatorType, path)) {
      type = _type;
      return false;
    }
  });
  return type;
}
function areInOrder() {
  var numbers = toArray(arguments);
  for (var i = 1; i < numbers.length; i += 1) {
    if (numbers[i - 1] > numbers[i]) {
      return false;
    }
  }
  return true;
}
/**
 * Handles the 'deliveryType' property to distinguish between supported values ('cache', 'navigational-prefetch'),
 * undefined (unsupported in some browsers), and other cases ('other' for unknown or unrecognized values).
 * see: https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/deliveryType
 */
function computeResourceEntryDeliveryType(entry) {
  return entry.deliveryType === '' ? 'other' : entry.deliveryType;
}
/**
 * The 'nextHopProtocol' is an empty string for cross-origin resources without CORS headers,
 * meaning the protocol is unknown, and we shouldn't report it.
 * https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/nextHopProtocol#cross-origin_resources
 */
function computeResourceEntryProtocol(entry) {
  return entry.nextHopProtocol === '' ? undefined : entry.nextHopProtocol;
}
function isResourceEntryRequestType(entry) {
  return entry.initiatorType === 'xmlhttprequest' || entry.initiatorType === 'fetch';
}
var resourceUtils_HAS_MULTI_BYTES_CHARACTERS = /[^\u0000-\u007F]/;
function getStrSize(candidate) {
  if (!resourceUtils_HAS_MULTI_BYTES_CHARACTERS.test(candidate)) {
    return candidate.length;
  }
  if (window.TextEncoder !== undefined) {
    return new TextEncoder().encode(candidate).length;
  }
  return new Blob([candidate]).size;
}
function isResourceUrlLimit(name, limitSize) {
  return getStrSize(name) > limitSize;
}
function computeResourceEntryDuration(entry) {
  // Safari duration is always 0 on timings blocked by cross origin policies.
  if (entry.duration === 0 && entry.startTime < entry.responseEnd) {
    return msToNs(entry.responseEnd - entry.startTime);
  }
  return msToNs(entry.duration);
}
function is304(entry) {
  if (entry.encodedBodySize > 0 && entry.transferSize > 0 && entry.transferSize < entry.encodedBodySize) {
    return true;
  }

  // unknown
  return null;
}
function isCacheHit(entry) {
  // if we transferred bytes, it must not be a cache hit
  // (will return false for 304 Not Modified)
  if (entry.transferSize > 0) return false;

  // if the body size is non-zero, it must mean this is a
  // ResourceTiming2 browser, this was same-origin or TAO,
  // and transferSize was 0, so it was in the cache
  if (entry.decodedBodySize > 0) return true;

  // fall back to duration checking (non-RT2 or cross-origin)
  return entry.duration < 30;
}
//  interface PerformanceResourceDetails {
//   redirect?: PerformanceResourceDetailsElement
//   dns?: PerformanceResourceDetailsElement
//   connect?: PerformanceResourceDetailsElement
//   ssl?: PerformanceResourceDetailsElement
//   firstByte: PerformanceResourceDetailsElement
//   download: PerformanceResourceDetailsElement
//   fmp:
// }
// page_fmp	float		首屏时间(用于衡量用户什么时候看到页面的主要内容)，跟FCP的时长非常接近，这里我们就用FCP的时间作为首屏时间	firstPaintContentEnd - firstPaintContentStart
// page_fpt	float		首次渲染时间，即白屏时间(从请求开始到浏览器开始解析第一批HTML文档字节的时间差。)	responseEnd - fetchStart
// page_tti	float		首次可交互时间(浏览器完成所有HTML解析并且完成DOM构建，此时浏览器开始加载资源。)	domInteractive - fetchStart
// page_firstbyte	float		首包时间	responseStart - domainLookupStart
// page_dom_ready	float		DOM Ready时间(如果页面有同步执行的JS，则同步JS执行时间=ready-tti。)	domContentLoadEventEnd - fetchStart
// page_load	float		页面完全加载时间(load=首次渲染时间+DOM解析耗时+同步JS执行+资源加载耗时。)	loadEventStart - fetchStart
// page_dns	float		dns解析时间	domainLookupEnd - domainLookupStart
// page_tcp	float		tcp连接时间	connectEnd - connectStart
// page_ssl	float		ssl安全连接时间(仅适用于https)	connectEnd - secureConnectionStart
// page_ttfb	float		请求响应耗时	responseStart - requestStart
// page_trans	float		内容传输时间	responseEnd - responseStart
// page_dom	float		DOM解析耗时	domInteractive - responseEnd
// page_resource_load_time	float		资源加载时间	loadEventStart - domContentLoadedEventEnd

//  navigationStart：当前浏览器窗口的前一个网页关闭，发生unload事件时的Unix毫秒时间戳。如果没有前一个网页，则等于fetchStart属性。

// ·   unloadEventStart：如果前一个网页与当前网页属于同一个域名，则返回前一个网页的unload事件发生时的Unix毫秒时间戳。如果没有前一个网页，或者之前的网页跳转不是在同一个域名内，则返回值为0。

// ·   unloadEventEnd：如果前一个网页与当前网页属于同一个域名，则返回前一个网页unload事件的回调函数结束时的Unix毫秒时间戳。如果没有前一个网页，或者之前的网页跳转不是在同一个域名内，则返回值为0。

// ·   redirectStart：返回第一个HTTP跳转开始时的Unix毫秒时间戳。如果没有跳转，或者不是同一个域名内部的跳转，则返回值为0。

// ·   redirectEnd：返回最后一个HTTP跳转结束时（即跳转回应的最后一个字节接受完成时）的Unix毫秒时间戳。如果没有跳转，或者不是同一个域名内部的跳转，则返回值为0。

// ·   fetchStart：返回浏览器准备使用HTTP请求读取文档时的Unix毫秒时间戳。该事件在网页查询本地缓存之前发生。

// ·   domainLookupStart：返回域名查询开始时的Unix毫秒时间戳。如果使用持久连接，或者信息是从本地缓存获取的，则返回值等同于fetchStart属性的值。

// ·   domainLookupEnd：返回域名查询结束时的Unix毫秒时间戳。如果使用持久连接，或者信息是从本地缓存获取的，则返回值等同于fetchStart属性的值。

// ·   connectStart：返回HTTP请求开始向服务器发送时的Unix毫秒时间戳。如果使用持久连接（persistent connection），则返回值等同于fetchStart属性的值。

// ·   connectEnd：返回浏览器与服务器之间的连接建立时的Unix毫秒时间戳。如果建立的是持久连接，则返回值等同于fetchStart属性的值。连接建立指的是所有握手和认证过程全部结束。

// ·   secureConnectionStart：返回浏览器与服务器开始安全链接的握手时的Unix毫秒时间戳。如果当前网页不要求安全连接，则返回0。

// ·   requestStart：返回浏览器向服务器发出HTTP请求时（或开始读取本地缓存时）的Unix毫秒时间戳。

// ·   responseStart：返回浏览器从服务器收到（或从本地缓存读取）第一个字节时的Unix毫秒时间戳。

// ·   responseEnd：返回浏览器从服务器收到（或从本地缓存读取）最后一个字节时（如果在此之前HTTP连接已经关闭，则返回关闭时）的Unix毫秒时间戳。

// ·   domLoading：返回当前网页DOM结构开始解析时（即Document.readyState属性变为“loading”、相应的readystatechange事件触发时）的Unix毫秒时间戳。

// ·   domInteractive：返回当前网页DOM结构结束解析、开始加载内嵌资源时（即Document.readyState属性变为“interactive”、相应的readystatechange事件触发时）的Unix毫秒时间戳。

// ·   domContentLoadedEventStart：返回当前网页DOMContentLoaded事件发生时（即DOM结构解析完毕、所有脚本开始运行时）的Unix毫秒时间戳。

// ·   domContentLoadedEventEnd：返回当前网页所有需要执行的脚本执行完成时的Unix毫秒时间戳。

// ·   domComplete：返回当前网页DOM结构生成时（即Document.readyState属性变为“complete”，以及相应的readystatechange事件发生时）的Unix毫秒时间戳。

// ·   loadEventStart：返回当前网页load事件的回调函数开始时的Unix毫秒时间戳。如果该事件还没有发生，返回0。

// ·   loadEventEnd：返回当前网页load事件的回调函数运行结束时的Unix毫秒时间戳。如果该事件还没有发生，返回0
function computePerformanceResourceDetails(entry) {
  if (!hasValidResourceEntryTimings(entry)) {
    return undefined;
  }
  var startTime = entry.startTime,
    fetchStart = entry.fetchStart,
    redirectStart = entry.redirectStart,
    redirectEnd = entry.redirectEnd,
    domainLookupStart = entry.domainLookupStart,
    domainLookupEnd = entry.domainLookupEnd,
    connectStart = entry.connectStart,
    secureConnectionStart = entry.secureConnectionStart,
    connectEnd = entry.connectEnd,
    requestStart = entry.requestStart,
    responseStart = entry.responseStart,
    responseEnd = entry.responseEnd;
  var details = {
    firstbyte: msToNs(responseStart - requestStart),
    trans: msToNs(responseEnd - responseStart),
    downloadTime: formatTiming(startTime, responseStart, responseEnd),
    firstByteTime: formatTiming(startTime, requestStart, responseStart)
  };
  if (responseStart > 0 && responseStart <= preferredNow()) {
    details.ttfb = msToNs(responseStart - requestStart);
  }
  // Make sure a connection occurred
  if (connectEnd !== fetchStart) {
    details.tcp = msToNs(connectEnd - connectStart);
    details.connectTime = formatTiming(startTime, connectStart, connectEnd);
    // Make sure a secure connection occurred
    if (areInOrder(connectStart, secureConnectionStart, connectEnd)) {
      details.ssl = msToNs(connectEnd - secureConnectionStart);
      details.sslTime = formatTiming(startTime, secureConnectionStart, connectEnd);
    }
  }

  // Make sure a domain lookup occurred
  if (domainLookupEnd !== fetchStart) {
    details.dns = msToNs(domainLookupEnd - domainLookupStart);
    details.dnsTime = formatTiming(startTime, domainLookupStart, domainLookupEnd);
  }
  if (hasRedirection(entry)) {
    details.redirect = msToNs(redirectEnd - redirectStart);
    details.redirectTime = formatTiming(startTime, redirectStart, redirectEnd);
  }
  // renderBlockstatus
  if (entry.renderBlockingStatus) {
    details.renderBlockingStatus = entry.renderBlockingStatus;
  }
  return details;
}
function hasValidResourceEntryDuration(entry) {
  return entry.duration >= 0;
}
function hasValidResourceEntryTimings(entry) {
  var areCommonTimingsInOrder = areInOrder(entry.startTime, entry.fetchStart, entry.domainLookupStart, entry.domainLookupEnd, entry.connectStart, entry.connectEnd, entry.requestStart, entry.responseStart, entry.responseEnd);
  var areRedirectionTimingsInOrder = hasRedirection(entry) ? areInOrder(entry.startTime, entry.redirectStart, entry.redirectEnd, entry.fetchStart) : true;
  return areCommonTimingsInOrder && areRedirectionTimingsInOrder;
}
function hasRedirection(entry) {
  return entry.redirectEnd > entry.startTime;
}
function formatTiming(origin, start, end) {
  return {
    duration: msToNs(end - start),
    start: msToNs(start - origin)
  };
}
function computeResourceEntrySize(entry) {
  // Make sure a request actually occurred
  if (entry.startTime < entry.responseStart) {
    return {
      size: entry.decodedBodySize,
      encodedBodySize: entry.encodedBodySize,
      decodedBodySize: entry.decodedBodySize,
      transferSize: entry.transferSize
    };
    // return {
    //   size: entry.decodedBodySize,
    //   encodeSize:
    //     Number.MAX_SAFE_INTEGER < entry.encodedBodySize
    //       ? 0
    //       : entry.encodedBodySize // max safe interger
    // }
  }
  return {
    size: undefined,
    encodedBodySize: undefined,
    decodedBodySize: undefined,
    transferSize: undefined
  };
}
function isAllowedRequestUrl(configuration, url) {
  return url && !isIntakeRequest(url, configuration);
}
var DATA_URL_REGEX = /data:(.+)?(;base64)?,/g;
var MAX_ATTRIBUTE_VALUE_CHAR_LENGTH = 24000;
function isLongDataUrl(url) {
  if (url.length <= MAX_ATTRIBUTE_VALUE_CHAR_LENGTH) {
    return false;
  } else if (url.substring(0, 5) === 'data:') {
    // Avoid String.match RangeError: Maximum call stack size exceeded
    url = url.substring(0, MAX_ATTRIBUTE_VALUE_CHAR_LENGTH);
    return true;
  }
  return false;
}
function sanitizeDataUrl(url) {
  return url.match(DATA_URL_REGEX)[0] + '[...]';
}
;// CONCATENATED MODULE: ./src/domain/firstInputPolyfill.js

/**
 * first-input timing entry polyfill based on
 * https://github.com/GoogleChrome/web-vitals/blob/master/src/lib/polyfills/firstInputPolyfill.ts
 */
function retrieveFirstInputTiming(configuration, callback) {
  var startTimeStamp = dateNow();
  var timingSent = false;
  var _addEventListeners = addEventListeners(window, [DOM_EVENT.CLICK, DOM_EVENT.MOUSE_DOWN, DOM_EVENT.KEY_DOWN, DOM_EVENT.TOUCH_START, DOM_EVENT.POINTER_DOWN], function (evt) {
    // Only count cancelable events, which should trigger behavior important to the user.
    if (!evt.cancelable) {
      return;
    }

    // This timing will be used to compute the "first Input delay", which is the delta between
    // when the system received the event (e.g. evt.timeStamp) and when it could run the callback
    // (e.g. performance.now()).
    var timing = {
      entryType: 'first-input',
      processingStart: relativeNow(),
      processingEnd: relativeNow(),
      startTime: evt.timeStamp,
      duration: 0,
      // arbitrary value to avoid nullable duration and simplify INP logic
      name: '',
      cancelable: false,
      target: null,
      toJSON: function toJSON() {
        return {};
      }
    };
    if (evt.type === DOM_EVENT.POINTER_DOWN) {
      sendTimingIfPointerIsNotCancelled(timing);
    } else {
      sendTiming(timing);
    }
  }, {
    passive: true,
    capture: true
  });
  var removeEventListeners = _addEventListeners.stop;
  return {
    stop: removeEventListeners
  };

  /**
   * Pointer events are a special case, because they can trigger main or compositor thread behavior.
   * We differentiate these cases based on whether or not we see a pointercancel event, which are
   * fired when we scroll. If we're scrolling we don't need to report input delay since FID excludes
   * scrolling and pinch/zooming.
   */
  function sendTimingIfPointerIsNotCancelled(timing) {
    addEventListeners(window, [DOM_EVENT.POINTER_UP, DOM_EVENT.POINTER_CANCEL], function (event) {
      if (event.type === DOM_EVENT.POINTER_UP) {
        sendTiming(timing);
      }
    }, {
      once: true
    });
  }
  function sendTiming(timing) {
    if (!timingSent) {
      timingSent = true;
      removeEventListeners();
      // In some cases the recorded delay is clearly wrong, e.g. it's negative or it's larger than
      // the time between now and when the page was loaded.
      // - https://github.com/GoogleChromeLabs/first-input-delay/issues/4
      // - https://github.com/GoogleChromeLabs/first-input-delay/issues/6
      // - https://github.com/GoogleChromeLabs/first-input-delay/issues/7
      var delay = timing.processingStart - timing.startTime;
      if (delay >= 0 && delay < dateNow() - startTimeStamp) {
        callback(timing);
      }
    }
  }
}
;// CONCATENATED MODULE: ./src/domain/performanceObservable.js



// We want to use a real enum (i.e. not a const enum) here, to be able to check whether an arbitrary
// string is an expected performance entry
// eslint-disable-next-line no-restricted-syntax
var RumPerformanceEntryType = {
  EVENT: 'event',
  FIRST_INPUT: 'first-input',
  LARGEST_CONTENTFUL_PAINT: 'largest-contentful-paint',
  LAYOUT_SHIFT: 'layout-shift',
  LONG_TASK: 'longtask',
  LONG_ANIMATION_FRAME: 'long-animation-frame',
  NAVIGATION: 'navigation',
  PAINT: 'paint',
  RESOURCE: 'resource',
  VISIBILITY_STATE: 'visibility-state'
};
function createPerformanceObservable(configuration, options) {
  return new observable_Observable(function (observable) {
    if (!window.PerformanceObserver) {
      return;
    }
    var handlePerformanceEntries = function handlePerformanceEntries(entries) {
      var rumPerformanceEntries = filterRumPerformanceEntries(configuration, entries);
      if (rumPerformanceEntries.length > 0) {
        observable.notify(rumPerformanceEntries);
      }
    };
    var timeoutId;
    var isObserverInitializing = true;
    var observer = new PerformanceObserver(monitor(function (entries) {
      // In Safari the performance observer callback is synchronous.
      // Because the buffered performance entry list can be quite large we delay the computation to prevent the SDK from blocking the main thread on init
      if (isObserverInitializing) {
        timeoutId = timer_setTimeout(function () {
          handlePerformanceEntries(entries.getEntries());
        });
      } else {
        handlePerformanceEntries(entries.getEntries());
      }
    }));
    try {
      observer.observe(options);
    } catch (_unused) {
      // Some old browser versions (<= chrome 74 ) don't support the PerformanceObserver type and buffered options
      // In these cases, fallback to getEntriesByType and PerformanceObserver with entryTypes
      // TODO: remove this fallback in the next major version
      var fallbackSupportedEntryTypes = [RumPerformanceEntryType.RESOURCE, RumPerformanceEntryType.NAVIGATION, RumPerformanceEntryType.LONG_TASK, RumPerformanceEntryType.PAINT];
      if (includes(fallbackSupportedEntryTypes, options.type)) {
        if (options.buffered) {
          timeoutId = timer_setTimeout(function () {
            handlePerformanceEntries(performance.getEntriesByType(options.type));
          });
        }
        try {
          observer.observe({
            entryTypes: [options.type]
          });
        } catch (_unused2) {
          // Old versions of Safari are throwing "entryTypes contained only unsupported types"
          // errors when observing only unsupported entry types.
          //
          // We could use `supportPerformanceTimingEvent` to make sure we don't invoke
          // `observer.observe` with an unsupported entry type, but Safari 11 and 12 don't support
          // `Performance.supportedEntryTypes`, so doing so would lose support for these versions
          // even if they do support the entry type.
          return;
        }
      }
    }
    isObserverInitializing = false;
    manageResourceTimingBufferFull(configuration);
    var stopFirstInputTiming;
    if (!supportPerformanceTimingEvent(RumPerformanceEntryType.FIRST_INPUT) && options.type === RumPerformanceEntryType.FIRST_INPUT) {
      var _retrieveFirstInputTiming = retrieveFirstInputTiming(configuration, function (timing) {
        handlePerformanceEntries([timing]);
      });
      stopFirstInputTiming = _retrieveFirstInputTiming.stop;
    }
    return function () {
      observer.disconnect();
      if (stopFirstInputTiming) {
        stopFirstInputTiming();
      }
      timer_clearTimeout(timeoutId);
    };
  });
}
var resourceTimingBufferFullListener;
function manageResourceTimingBufferFull(configuration) {
  if (!resourceTimingBufferFullListener && supportPerformanceObject() && 'addEventListener' in performance) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1559377
    resourceTimingBufferFullListener = addEventListener_addEventListener(performance, 'resourcetimingbufferfull', function () {
      performance.clearResourceTimings();
    });
  }
  return function () {
    resourceTimingBufferFullListener && resourceTimingBufferFullListener.stop();
  };
}
function supportPerformanceObject() {
  return window.performance !== undefined && 'getEntries' in performance;
}
function supportPerformanceTimingEvent(entryType) {
  return window.PerformanceObserver && PerformanceObserver.supportedEntryTypes !== undefined && PerformanceObserver.supportedEntryTypes.includes(entryType);
}
function filterRumPerformanceEntries(configuration, entries) {
  return entries.filter(function (entry) {
    return !isForbiddenResource(configuration, entry);
  });
}
function isForbiddenResource(configuration, entry) {
  return entry.entryType === RumPerformanceEntryType.RESOURCE && (!isAllowedRequestUrl(configuration, entry.name) || !hasValidResourceEntryDuration(entry));
}
;// CONCATENATED MODULE: ./src/domain/rumEventsCollection/view/trackFirstContentfulPaint.js


var TIMING_MAXIMUM_DELAY = 10 * ONE_MINUTE;
function trackFirstContentfulPaint(configuration, firstHidden, callback) {
  var performanceSubscription = createPerformanceObservable(configuration, {
    type: RumPerformanceEntryType.PAINT,
    buffered: true
  }).subscribe(function (entries) {
    var fcpEntry = find(entries, function (entry) {
      return entry.entryType === RumPerformanceEntryType.PAINT && entry.name === 'first-contentful-paint' && entry.startTime < firstHidden.getTimeStamp() && entry.startTime < TIMING_MAXIMUM_DELAY;
    });
    if (fcpEntry) {
      callback(fcpEntry.startTime);
    }
  });
  return {
    stop: performanceSubscription.unsubscribe
  };
}
;// CONCATENATED MODULE: ./src/domain/rumEventsCollection/actions/__constants.js
var DEFAULT_PROGRAMMATIC_ACTION_NAME_ATTRIBUTE = 'data-guance-action-name';

/**
 * Stable attributes are attributes that are commonly used to identify parts of a UI (ex:
 * component). Those attribute values should not be generated randomly (hardcoded most of the time)
 * and stay the same across deploys. They are not necessarily unique across the document.
 */
var STABLE_ATTRIBUTES = [DEFAULT_PROGRAMMATIC_ACTION_NAME_ATTRIBUTE,
// Common test attributes (list provided by google recorder)
'data-testid', 'data-test', 'data-qa', 'data-cy', 'data-test-id', 'data-qa-id', 'data-testing',
// FullStory decorator attributes:
'data-component', 'data-element', 'data-source-file'];
;// CONCATENATED MODULE: ./src/domain/rumEventsCollection/actions/getSelectorsFromElement.js



// Selectors to use if they target a single element on the whole document. Those selectors are
// considered as "stable" and uniquely identify an element regardless of the page state. If we find
// one, we should consider the selector "complete" and stop iterating over ancestors.
var GLOBALLY_UNIQUE_SELECTOR_GETTERS = [getStableAttributeSelector, getIDSelector];

// Selectors to use if they target a single element among an element descendants. Those selectors
// are more brittle than "globally unique" selectors and should be combined with ancestor selectors
// to improve specificity.
var UNIQUE_AMONG_CHILDREN_SELECTOR_GETTERS = [getStableAttributeSelector, getClassSelector, getTagNameSelector];
function getSelectorFromElement(targetElement, actionNameAttribute) {
  if (!isConnected(targetElement)) {
    // We cannot compute a selector for a detached element, as we don't have access to all of its
    // parents, and we cannot determine if it's unique in the document.
    return;
  }
  var targetElementSelector;
  var currentElement = targetElement;
  while (currentElement && currentElement.nodeName !== 'HTML') {
    var globallyUniqueSelector = findSelector(currentElement, GLOBALLY_UNIQUE_SELECTOR_GETTERS, isSelectorUniqueGlobally, actionNameAttribute, targetElementSelector);
    if (globallyUniqueSelector) {
      return globallyUniqueSelector;
    }
    var uniqueSelectorAmongChildren = findSelector(currentElement, UNIQUE_AMONG_CHILDREN_SELECTOR_GETTERS, isSelectorUniqueAmongSiblings, actionNameAttribute, targetElementSelector);
    targetElementSelector = uniqueSelectorAmongChildren || combineSelector(getPositionSelector(currentElement), targetElementSelector);
    currentElement = currentElement.parentElement;
  }
  //   while (element && element.nodeName !== 'HTML') {
  //     var globallyUniqueSelector = findSelector(
  //       element,
  //       GLOBALLY_UNIQUE_SELECTOR_GETTERS,
  //       isSelectorUniqueGlobally,
  //       actionNameAttribute,
  //       targetElementSelector
  //     )
  //     if (globallyUniqueSelector) {
  //       return globallyUniqueSelector
  //     }

  //     var uniqueSelectorAmongChildren = findSelector(
  //       element,
  //       UNIQUE_AMONG_CHILDREN_SELECTOR_GETTERS,
  //       isSelectorUniqueAmongSiblings,
  //       actionNameAttribute,
  //       targetElementSelector
  //     )
  //     targetElementSelector =
  //       uniqueSelectorAmongChildren ||
  //       combineSelector(getPositionSelector(element), targetElementSelector)

  //     element = element.parentElement
  //   }

  return targetElementSelector;
}
function isGeneratedValue(value) {
  // To compute the "URL path group", the backend replaces every URL path parts as a question mark
  // if it thinks the part is an identifier. The condition it uses is to checks whether a digit is
  // present.
  //
  // Here, we use the same strategy: if a the value contains a digit, we consider it generated. This
  // strategy might be a bit naive and fail in some cases, but there are many fallbacks to generate
  // CSS selectors so it should be fine most of the time. We might want to allow customers to
  // provide their own `isGeneratedValue` at some point.
  return /[0-9]/.test(value);
}
function getIDSelector(element) {
  if (element.id && !isGeneratedValue(element.id)) {
    return '#' + cssEscape(element.id);
  }
}
function getClassSelector(element) {
  if (element.tagName === 'BODY') {
    return;
  }
  if (element.classList.length > 0) {
    for (var i = 0; i < element.classList.length; i += 1) {
      var className = element.classList[i];
      if (isGeneratedValue(className)) {
        continue;
      }
      return cssEscape(element.tagName) + '.' + cssEscape(className);
    }
  }
}
function getTagNameSelector(element) {
  return cssEscape(element.tagName);
}
function getStableAttributeSelector(element, actionNameAttribute) {
  if (actionNameAttribute) {
    var selector = getAttributeSelector(actionNameAttribute);
    if (selector) {
      return selector;
    }
  }
  for (var i = 0; i < STABLE_ATTRIBUTES.length; i++) {
    var attributeName = STABLE_ATTRIBUTES[i];
    var selector = getAttributeSelector(attributeName);
    if (selector) {
      return selector;
    }
  }
  function getAttributeSelector(attributeName) {
    if (element.hasAttribute(attributeName)) {
      return cssEscape(element.tagName) + '[' + attributeName + '="' + cssEscape(element.getAttribute(attributeName)) + '"]';
    }
  }
}
function getPositionSelector(element) {
  var sibling = element.parentElement && element.parentElement.firstElementChild;
  var elementIndex = 1;
  while (sibling && sibling !== element) {
    if (sibling.tagName === element.tagName) {
      elementIndex += 1;
    }
    sibling = sibling.nextElementSibling;
  }
  var tagName = cssEscape(element.tagName);
  // 伪元素需要做特殊处理，没有nth-of-type选择器
  if (/^::/.test(tagName)) {
    return tagName;
  }
  return tagName + ':nth-of-type(' + elementIndex + ')';
}
function findSelector(element, selectorGetters, predicate, actionNameAttribute, childSelector) {
  for (var i = 0; i < selectorGetters.length; i++) {
    var selectorGetter = selectorGetters[i];
    var elementSelector = selectorGetter(element, actionNameAttribute);
    if (!elementSelector) {
      continue;
    }
    if (predicate(element, elementSelector, childSelector)) {
      return combineSelector(elementSelector, childSelector);
    }
  }
}
function isSelectorUniqueGlobally(element, elementSelector, childSelector) {
  return element.ownerDocument.querySelectorAll(combineSelector(elementSelector, childSelector)).length === 1;
}
/**
 * Check whether the selector is unique among the element siblings. In other words, it returns true
 * if "ELEMENT_PARENT > SELECTOR" returns a single element.
 *
 * The result will be less accurate on browsers that don't support :scope (i. e. IE): it will check
 * for any element matching the selector contained in the parent (in other words,
 * "ELEMENT_PARENT SELECTOR" returns a single element), regardless of whether the selector is a
 * direct descendent of the element parent. This should not impact results too much: if it
 * inaccurately returns false, we'll just fall back to another strategy.
 */
function isSelectorUniqueAmongSiblings(currentElement, currentElementSelector, childSelector) {
  var isSiblingMatching;
  if (childSelector === undefined) {
    // If the child selector is undefined (meaning `currentElement` is the target element, not one
    // of its ancestor), we need to use `matches` to check if the sibling is matching the selector,
    // as `querySelector` only returns a descendant of the element.
    isSiblingMatching = function isSiblingMatching(sibling) {
      return sibling.matches(currentElementSelector);
    };
  } else {
    var scopedSelector = supportScopeSelector() ? combineSelector("".concat(currentElementSelector, ":scope"), childSelector) : combineSelector(currentElementSelector, childSelector);
    isSiblingMatching = function isSiblingMatching(sibling) {
      return sibling.querySelector(scopedSelector) !== null;
    };
  }
  var parent = currentElement.parentElement;
  var sibling = parent.firstElementChild;
  while (sibling) {
    if (sibling !== currentElement && isSiblingMatching(sibling)) {
      return false;
    }
    sibling = sibling.nextElementSibling;
  }
  return true;
}
function combineSelector(parent, child) {
  return child ? parent + '>' + child : parent;
}
var supportScopeSelectorCache;
function supportScopeSelector() {
  if (supportScopeSelectorCache === undefined) {
    try {
      document.querySelector(':scope');
      supportScopeSelectorCache = true;
    } catch (_unused) {
      supportScopeSelectorCache = false;
    }
  }
  return supportScopeSelectorCache;
}

/**
 * Polyfill-utility for the `isConnected` property not supported in IE11
 */
function isConnected(element) {
  if ('isConnected' in element
  // cast is to make sure `element` is not inferred as `never` after the check
  ) {
    return element.isConnected;
  }
  return element.ownerDocument.documentElement.contains(element);
}
;// CONCATENATED MODULE: ./src/domain/rumEventsCollection/view/trackFirstInput.js



/**
 * Track the first input occurring during the initial View to return:
 * - First Input Delay
 * - First Input Time
 * Callback is called at most one time.
 * Documentation: https://web.dev/fid/
 * Reference implementation: https://github.com/GoogleChrome/web-vitals/blob/master/src/getFID.ts
 */
function trackFirstInput(configuration, firstHidden, callback) {
  var performanceFirstInputSubscription = createPerformanceObservable(configuration, {
    type: RumPerformanceEntryType.FIRST_INPUT,
    buffered: true
  }).subscribe(function (entries) {
    var firstInputEntry = find(entries, function (entry) {
      return entry.entryType === RumPerformanceEntryType.FIRST_INPUT && entry.startTime < firstHidden.getTimeStamp();
    });
    if (firstInputEntry) {
      var firstInputDelay = tools_elapsed(firstInputEntry.startTime, firstInputEntry.processingStart);
      var firstInputTargetSelector;
      if (firstInputEntry.target && isElementNode(firstInputEntry.target)) {
        firstInputTargetSelector = getSelectorFromElement(firstInputEntry.target, configuration.actionNameAttribute);
      }
      callback({
        // Ensure firstInputDelay to be positive, see
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1185815
        delay: firstInputDelay >= 0 ? firstInputDelay : 0,
        time: firstInputEntry.startTime,
        targetSelector: firstInputTargetSelector
      });
    }
  });
  return {
    stop: function stop() {
      performanceFirstInputSubscription.unsubscribe();
    }
  };
}
;// CONCATENATED MODULE: ./src/domain/performanceUtils.js


function getNavigationEntry() {
  if (supportPerformanceTimingEvent(RumPerformanceEntryType.NAVIGATION)) {
    var navigationEntry = performance.getEntriesByType(RumPerformanceEntryType.NAVIGATION)[0];
    if (navigationEntry) {
      return navigationEntry;
    }
  }
  var timings = computeTimingsFromDeprecatedPerformanceTiming();
  var entry = tools_assign({
    entryType: RumPerformanceEntryType.NAVIGATION,
    initiatorType: 'navigation',
    name: window.location.href,
    startTime: 0,
    duration: timings.responseEnd,
    decodedBodySize: 0,
    encodedBodySize: 0,
    transferSize: 0,
    toJSON: function toJSON() {
      return tools_assign({}, entry, {
        toJSON: undefined
      });
    }
  }, timings);
  return entry;
}
function computeTimingsFromDeprecatedPerformanceTiming() {
  var result = {};
  var timing = performance.timing;
  for (var key in timing) {
    if (isNumber(timing[key])) {
      var numberKey = key;
      var timingElement = timing[numberKey];
      result[numberKey] = timingElement === 0 ? 0 : getRelativeTime(timingElement);
    }
  }
  return result;
}
;// CONCATENATED MODULE: ./src/domain/rumEventsCollection/view/trackNavigationTimings.js


function trackNavigationTimings(configuration, callback, getNavigationEntryImpl) {
  if (getNavigationEntryImpl === undefined) {
    getNavigationEntryImpl = getNavigationEntry;
  }
  return waitAfterLoadEvent(function () {
    var entry = getNavigationEntryImpl();
    if (!isIncompleteNavigation(entry)) {
      callback(processNavigationEntry(entry));
    }
  });
}
function processNavigationEntry(entry) {
  return {
    fetchStart: entry.fetchStart,
    responseEnd: entry.responseEnd,
    domComplete: entry.domComplete,
    domContentLoaded: entry.domContentLoadedEventEnd,
    domInteractive: entry.domInteractive,
    loadEvent: entry.loadEventEnd,
    loadEventEnd: entry.loadEventEnd,
    loadEventStart: entry.loadEventStart,
    domContentLoadedEventEnd: entry.domContentLoadedEventEnd,
    domContentLoadedEventStart: entry.domContentLoadedEventStart,
    // In some cases the value reported is negative or is larger
    // than the current page time. Ignore these cases:
    // https://github.com/GoogleChrome/web-vitals/issues/137
    // https://github.com/GoogleChrome/web-vitals/issues/162
    firstByte: entry.responseStart >= 0 && entry.responseStart <= relativeNow() ? entry.responseStart : undefined
  };
}
function isIncompleteNavigation(entry) {
  return entry.loadEventEnd <= 0;
}
function waitAfterLoadEvent(callback) {
  var timeoutId;
  var _runOnReadyState = runOnReadyState('complete', function () {
    // Invoke the callback a bit after the actual load event, so the "loadEventEnd" timing is accurate
    timeoutId = timer_setTimeout(function () {
      callback();
    });
  });
  return {
    stop: function stop() {
      _runOnReadyState.stop();
      timer_clearTimeout(timeoutId);
    }
  };
}
;// CONCATENATED MODULE: ./src/domain/rumEventsCollection/view/trackLargestContentfulPaint.js



/**
 * Track the largest contentful paint (LCP) occurring during the initial View.  This can yield
 * multiple values, only the most recent one should be used.
 * Documentation: https://web.dev/lcp/
 * Reference implementation: https://github.com/GoogleChrome/web-vitals/blob/master/src/getLCP.ts
 */
// It happens in some cases like sleep mode or some browser implementations
var LCP_MAXIMUM_DELAY = 10 * ONE_MINUTE;
function trackLargestContentfulPaint(configuration, firstHidden, eventTarget, callback) {
  // Ignore entries that come after the first user interaction.  According to the documentation, the
  // browser should not send largest-contentful-paint entries after a user interact with the page,
  // but the web-vitals reference implementation uses this as a safeguard.
  var firstInteractionTimestamp = Infinity;
  var _addEventListeners = addEventListeners(eventTarget, [DOM_EVENT.POINTER_DOWN, DOM_EVENT.KEY_DOWN], function (event) {
    firstInteractionTimestamp = event.timeStamp;
  }, {
    capture: true,
    once: true
  });
  var stopEventListener = _addEventListeners.stop;
  var biggestLcpSize = 0;
  var performanceLcpSubscription = createPerformanceObservable(configuration, {
    type: RumPerformanceEntryType.LARGEST_CONTENTFUL_PAINT,
    buffered: true
  }).subscribe(function (entries) {
    var lcpEntry = findLast(entries, function (entry) {
      return entry.entryType === RumPerformanceEntryType.LARGEST_CONTENTFUL_PAINT && entry.startTime < firstInteractionTimestamp && entry.startTime < firstHidden.getTimeStamp() && entry.startTime < LCP_MAXIMUM_DELAY &&
      // Ensure to get the LCP entry with the biggest size, see
      // https://bugs.chromium.org/p/chromium/issues/detail?id=1516655
      entry.size > biggestLcpSize;
    });
    if (lcpEntry) {
      var lcpTargetSelector;
      if (lcpEntry.element) {
        lcpTargetSelector = getSelectorFromElement(lcpEntry.element, configuration.actionNameAttribute);
      }
      callback({
        value: lcpEntry.startTime,
        targetSelector: lcpTargetSelector
      });
      biggestLcpSize = lcpEntry.size;
    }
  });
  return {
    stop: function stop() {
      stopEventListener();
      performanceLcpSubscription.unsubscribe();
    }
  };
}
;// CONCATENATED MODULE: ./src/domain/rumEventsCollection/view/trackFirstHidden.js


function trackFirstHidden(eventTarget) {
  if (typeof eventTarget === 'undefined') {
    eventTarget = window;
  }
  if (document.visibilityState === 'hidden') {
    return {
      getTimeStamp: function getTimeStamp() {
        return 0;
      },
      stop: tools_noop
    };
  }
  if (supportPerformanceTimingEvent(RumPerformanceEntryType.VISIBILITY_STATE)) {
    var firstHiddenEntry = performance.getEntriesByType(RumPerformanceEntryType.VISIBILITY_STATE).find(function (entry) {
      return entry.name === 'hidden';
    });
    if (firstHiddenEntry) {
      return {
        getTimeStamp: function getTimeStamp() {
          return firstHiddenEntry.startTime;
        },
        stop: tools_noop
      };
    }
  }
  var timeStamp = Infinity;
  var _addEventListeners = addEventListeners(eventTarget, [DOM_EVENT.PAGE_HIDE, DOM_EVENT.VISIBILITY_CHANGE], function (event) {
      if (event.type === DOM_EVENT.PAGE_HIDE || document.visibilityState === 'hidden') {
        timeStamp = event.timeStamp;
        _stop();
      }
    }, {
      capture: true
    }),
    _stop = _addEventListeners.stop;
  return {
    getTimeStamp: function getTimeStamp() {
      return timeStamp;
    },
    stop: function stop() {
      _stop();
    }
  };
}
;// CONCATENATED MODULE: ./src/domain/rumEventsCollection/view/trackInitialViewTimings.js






var KEEP_TRACKING_TIMINGS_AFTER_VIEW_DELAY = 5 * ONE_MINUTE;
function trackInitialViewMetrics(configuration, setLoadEvent, scheduleViewUpdate) {
  var initialViewMetrics = {};
  var _trackNavigationTimings = trackNavigationTimings(configuration, function (navigationTimings) {
    setLoadEvent(navigationTimings.loadEvent);
    initialViewMetrics.navigationTimings = navigationTimings;
    scheduleViewUpdate();
  });
  var firstHidden = trackFirstHidden();
  var stopNavigationTracking = _trackNavigationTimings.stop;
  var _trackFirstContentfulPaint = trackFirstContentfulPaint(configuration, firstHidden, function (firstContentfulPaint) {
    initialViewMetrics.firstContentfulPaint = firstContentfulPaint;
    scheduleViewUpdate();
  });
  var stopFCPTracking = _trackFirstContentfulPaint.stop;
  var _trackLargestContentfulPaint = trackLargestContentfulPaint(configuration, firstHidden, window, function (largestContentfulPaint) {
    initialViewMetrics.largestContentfulPaint = largestContentfulPaint;
    scheduleViewUpdate();
  });
  var stopLCPTracking = _trackLargestContentfulPaint.stop;
  var _trackFirstInput = trackFirstInput(configuration, firstHidden, function (firstInput) {
    initialViewMetrics.firstInput = firstInput;
    scheduleViewUpdate();
  });
  var stopFIDTracking = _trackFirstInput.stop;
  function stop() {
    stopNavigationTracking();
    stopFCPTracking();
    stopLCPTracking();
    stopFIDTracking();
    firstHidden.stop();
  }
  return {
    stop: stop,
    initialViewMetrics: initialViewMetrics
  };
}
;// CONCATENATED MODULE: ./src/domain/rumEventsCollection/view/trackViews.js


// import { trackCommonViewMetrics } from './trackCommonViewMetrics'
// import { trackViewEventCounts } from './trackViewEventCounts'
var THROTTLE_VIEW_UPDATE_PERIOD = 3000;
var SESSION_KEEP_ALIVE_INTERVAL = 5 * ONE_MINUTE;
var KEEP_TRACKING_AFTER_VIEW_DELAY = 5 * ONE_MINUTE;
function trackViews(location, lifeCycle, domMutationObservable, configuration, locationChangeObservable, areViewsTrackedAutomatically, initialViewOptions) {
  var activeViews = new Set();
  function startNewView(loadingType, startClocks, viewOptions) {
    var newlyCreatedView = newView(lifeCycle, 'domMutationObservable', configuration, location, loadingType, startClocks, viewOptions);
    activeViews.add(newlyCreatedView);
    newlyCreatedView.stopObservable.subscribe(function () {
      activeViews["delete"](newlyCreatedView);
    });
    return newlyCreatedView;
  }
  var currentView = startNewView(ViewLoadingType.INITIAL_LOAD, clocksOrigin(), initialViewOptions);
  startViewLifeCycle();
  var locationChangeSubscription;
  if (areViewsTrackedAutomatically) {
    locationChangeSubscription = renewViewOnLocationChange(locationChangeObservable);
  }
  function startViewLifeCycle() {
    lifeCycle.subscribe(LifeCycleEventType.SESSION_RENEWED, function () {
      currentView = startNewView(ViewLoadingType.ROUTE_CHANGE, undefined, {
        name: currentView.name,
        service: currentView.service,
        version: currentView.version,
        context: currentView.contextManager.getContext()
      });
    });
    lifeCycle.subscribe(LifeCycleEventType.SESSION_EXPIRED, function () {
      currentView.end({
        sessionIsActive: false
      });
    });
    // // End the current view on page unload
    // lifeCycle.subscribe(
    //   LifeCycleEventType.PAGE_EXITED,
    //   function (pageExitEvent) {
    //     if (pageExitEvent.reason === PageExitReason.UNLOADING) {
    //       currentView.end()
    //     }
    //   }
    // )
  }
  function renewViewOnLocationChange(locationChangeObservable) {
    return locationChangeObservable.subscribe(function (params) {
      var oldLocation = params.oldLocation;
      var newLocation = params.newLocation;
      if (areDifferentLocation(oldLocation, newLocation)) {
        currentView.end();
        currentView = startNewView(ViewLoadingType.ROUTE_CHANGE);
        return;
      }
    });
  }
  return {
    addTiming: function addTiming(name, time) {
      if (typeof time === 'undefined') {
        time = tools_timeStampNow();
      }
      currentView.addTiming(name, time);
    },
    startView: function startView(options, startClocks) {
      currentView.end({
        endClocks: startClocks
      });
      currentView = startNewView(ViewLoadingType.ROUTE_CHANGE, startClocks, options);
    },
    setViewContext: function setViewContext(context) {
      currentView.contextManager.setContext(context);
    },
    setViewContextProperty: function setViewContextProperty(key, value) {
      currentView.contextManager.setContextProperty(key, value);
    },
    setViewName: function setViewName(name) {
      currentView.setViewName(name);
    },
    getViewContext: function getViewContext() {
      return currentView.contextManager.getContext();
    },
    stop: function stop() {
      if (locationChangeSubscription) {
        locationChangeSubscription.unsubscribe();
      }
      currentView.end();
      activeViews.forEach(function (view) {
        view.stop();
      });
    }
  };
}
function newView(lifeCycle, domMutationObservable, configuration, initialLocation, loadingType, startClocks, viewOptions) {
  // Setup initial values
  if (startClocks === undefined) {
    startClocks = tools_clocksNow();
  }
  var id = UUID();
  var stopObservable = new observable_Observable();
  var customTimings = {};
  var documentVersion = 0;
  var endClocks;
  var location = tools_shallowClone(initialLocation);
  var contextManager = createContextManager();
  var sessionIsActive = true;
  var name;
  var service;
  var version;
  var context;
  if (viewOptions) {
    name = viewOptions.name;
    service = viewOptions.service;
    version = viewOptions.version;
    context = viewOptions.context;
  }
  if (context) {
    contextManager.setContext(context);
  }
  var viewCreatedEvent = {
    id: id,
    name: name,
    startClocks: startClocks,
    service: service,
    version: version
  };
  lifeCycle.notify(LifeCycleEventType.BEFORE_VIEW_CREATED, viewCreatedEvent);
  lifeCycle.notify(LifeCycleEventType.VIEW_CREATED, viewCreatedEvent);

  // Update the view every time the measures are changing
  var _scheduleViewUpdate = throttle(triggerViewUpdate, THROTTLE_VIEW_UPDATE_PERIOD, {
    leading: false
  });
  var throttled = _scheduleViewUpdate.throttled;
  var cancelScheduleViewUpdate = _scheduleViewUpdate.cancel;

  // var _trackCommonViewMetrics = trackCommonViewMetrics(
  //   lifeCycle,
  //   domMutationObservable,
  //   configuration,
  //   scheduleViewUpdate,
  //   loadingType,
  //   startClocks
  // )
  // var setLoadEvent = _trackCommonViewMetrics.setLoadEvent
  // var stopCommonViewMetricsTracking = _trackCommonViewMetrics.stop
  // var getCommonViewMetrics = _trackCommonViewMetrics.getCommonViewMetrics
  // var stopINPTracking = _trackCommonViewMetrics.stopINPTracking
  // var setViewEnd = _trackCommonViewMetrics.setViewEnd
  var _trackInitialViewTimings = loadingType === ViewLoadingType.INITIAL_LOAD ? trackInitialViewMetrics(configuration, function () {}, scheduleViewUpdate) : {
    stop: tools_noop,
    initialViewMetrics: {}
  };
  var stopInitialViewMetricsTracking = _trackInitialViewTimings.stop;
  var initialViewMetrics = _trackInitialViewTimings.initialViewMetrics;
  // var _trackViewEventCounts = trackViewEventCounts(
  //   lifeCycle,
  //   id,
  //   scheduleViewUpdate
  // )
  // var stopEventCountsTracking = _trackViewEventCounts.stop
  // var eventCounts = _trackViewEventCounts.eventCounts

  // Session keep alive
  var keepAliveIntervalId = timer_setInterval(triggerViewUpdate, SESSION_KEEP_ALIVE_INTERVAL);
  var pageMayExitSubscription = lifeCycle.subscribe(LifeCycleEventType.PAGE_EXITED, function (pageMayExitEvent) {
    if (pageMayExitEvent.reason === PageExitReason.UNLOADING) {
      triggerViewUpdate();
    }
  });
  triggerViewUpdate();
  // View context update should always be throttled
  contextManager.changeObservable.subscribe(scheduleViewUpdate);
  function triggerBeforeViewUpdate() {
    lifeCycle.notify(LifeCycleEventType.BEFORE_VIEW_UPDATED, {
      id: id,
      name: name,
      context: contextManager.getContext(),
      startClocks: startClocks
    });
  }
  function scheduleViewUpdate() {
    triggerBeforeViewUpdate();
    throttled();
  }
  function triggerViewUpdate() {
    cancelScheduleViewUpdate();
    triggerBeforeViewUpdate();
    documentVersion += 1;
    var currentEnd = endClocks === undefined ? tools_timeStampNow() : endClocks.timeStamp;
    lifeCycle.notify(LifeCycleEventType.VIEW_UPDATED, {
      customTimings: customTimings,
      documentVersion: documentVersion,
      id: id,
      name: name,
      service: service,
      version: version,
      context: contextManager.getContext(),
      loadingType: loadingType,
      location: location,
      startClocks: startClocks,
      commonViewMetrics: {},
      initialViewMetrics: initialViewMetrics,
      duration: tools_elapsed(startClocks.timeStamp, currentEnd),
      isActive: endClocks === undefined,
      sessionIsActive: sessionIsActive,
      eventCounts: {}
    });
  }
  var result = {
    name: name,
    service: service,
    version: version,
    contextManager: contextManager,
    stopObservable: stopObservable,
    end: function end(options) {
      if (endClocks) {
        // view already ended
        return;
      }
      endClocks = tools_isNullUndefinedDefaultValue(options && options.endClocks, tools_clocksNow());
      sessionIsActive = tools_isNullUndefinedDefaultValue(options && options.sessionIsActive, true);
      lifeCycle.notify(LifeCycleEventType.VIEW_ENDED, {
        endClocks: endClocks
      });
      lifeCycle.notify(LifeCycleEventType.AFTER_VIEW_ENDED, {
        endClocks: endClocks
      });
      timer_clearInterval(keepAliveIntervalId);
      // setViewEnd(endClocks.relative)
      // stopCommonViewMetricsTracking()
      pageMayExitSubscription.unsubscribe();
      triggerViewUpdate();
      timer_setTimeout(function () {
        result.stop();
      }, KEEP_TRACKING_AFTER_VIEW_DELAY);
    },
    stop: function stop() {
      stopInitialViewMetricsTracking();
      // stopEventCountsTracking()
      // stopINPTracking()
      stopObservable.notify();
    },
    addTiming: function addTiming(name, time) {
      if (endClocks) {
        return;
      }
      var relativeTime = looksLikeRelativeTime(time) ? time : tools_elapsed(startClocks.timeStamp, time);
      customTimings[sanitizeTiming(name)] = relativeTime;
      scheduleViewUpdate();
    },
    setViewName: function setViewName(updatedName) {
      name = updatedName;
      triggerViewUpdate();
    }
  };
  return result;
}

/**
 * Timing name is used as facet path that must contain only letters, digits, or the characters - _ . @ $
 */
function sanitizeTiming(name) {
  var sanitized = name.replace(/[^a-zA-Z0-9-_.@$]/g, '_');
  if (sanitized !== name) {
    console.warn('Invalid timing name: ' + name + ', sanitized to: ' + sanitized);
  }
  return sanitized;
}
function areDifferentLocation(currentLocation, otherLocation) {
  return currentLocation.pathname !== otherLocation.pathname || !isHashAnAnchor(otherLocation.hash) && getPathFromHash(otherLocation.hash) !== getPathFromHash(currentLocation.hash);
}
;// CONCATENATED MODULE: ./src/domain/rumEventsCollection/view/viewCollection.js


function startViewCollection(lifeCycle, configuration, location, domMutationObservable, locationChangeObservable, pageStateHistory, recorderApi, initialViewOptions) {
  lifeCycle.subscribe(LifeCycleEventType.VIEW_UPDATED, function (view) {
    lifeCycle.notify(LifeCycleEventType.RAW_RUM_EVENT_COLLECTED, processViewUpdate(view, configuration, recorderApi, pageStateHistory));
  });
  return trackViews(location, lifeCycle, 'domMutationObservable', configuration, locationChangeObservable, !configuration.trackViewsManually, initialViewOptions);
}
function computePerformanceViewDetails(navigationTimings) {
  if (!navigationTimings) {
    return undefined;
  }
  var fetchStart = navigationTimings.fetchStart,
    responseEnd = navigationTimings.responseEnd,
    domInteractive = navigationTimings.domInteractive,
    domContentLoaded = navigationTimings.domContentLoaded,
    domComplete = navigationTimings.domComplete,
    loadEventEnd = navigationTimings.loadEventEnd,
    loadEventStart = navigationTimings.loadEventStart,
    domContentLoadedEventEnd = navigationTimings.domContentLoadedEventEnd;
  var details = {};
  if (isNumber(responseEnd) && isNumber(fetchStart) && responseEnd !== fetchStart && responseEnd > fetchStart) {
    details.fpt = toServerDuration(responseEnd - fetchStart);
    var apdexLevel = parseInt((responseEnd - fetchStart) / 1000); // 秒数取整
    details.apdexLevel = apdexLevel > 9 ? 9 : apdexLevel;
  }
  if (isNumber(domInteractive) && isNumber(fetchStart) && domInteractive !== fetchStart && domInteractive > fetchStart) {
    details.tti = toServerDuration(domInteractive - fetchStart);
  }
  if (isNumber(domContentLoaded) && isNumber(fetchStart) && domContentLoaded !== fetchStart && domContentLoaded > fetchStart) {
    details.dom_ready = toServerDuration(domContentLoaded - fetchStart);
  }
  // Make sure a connection occurred
  if (isNumber(loadEventEnd) && isNumber(fetchStart) && loadEventEnd !== fetchStart && loadEventEnd > fetchStart) {
    details.load = toServerDuration(loadEventEnd - fetchStart);
  }
  if (isNumber(loadEventStart) && isNumber(domContentLoadedEventEnd) && loadEventStart !== domContentLoadedEventEnd && loadEventStart > domContentLoadedEventEnd) {
    details.resource_load_time = toServerDuration(loadEventStart - domContentLoadedEventEnd);
  }
  if (isNumber(domComplete) && isNumber(domInteractive) && domComplete !== domInteractive && domComplete > domInteractive) {
    details.dom = toServerDuration(domComplete - domInteractive);
  }
  return details;
}
function processViewUpdate(view, configuration, recorderApi, pageStateHistory) {
  // var replayStats = recorderApi.getReplayStats(view.id)
  var pageStates = pageStateHistory.findAll(view.startClocks.relative, view.duration);
  var viewEvent = {
    _gc: {
      document_version: view.documentVersion,
      replay_stats: new Map(),
      // replayStats,
      page_states: pageStates
    },
    date: view.startClocks.timeStamp,
    type: enums_RumEventType.VIEW,
    view: {
      action: {
        count: view.eventCounts.actionCount
      },
      frustration: {
        count: view.eventCounts.frustrationCount
      },
      cumulative_layout_shift: findByPath(view.commonViewMetrics, 'cumulativeLayoutShift.value'),
      cumulative_layout_shift_time: findByPath(view.commonViewMetrics, 'cumulativeLayoutShift.time'),
      cumulative_layout_shift_target_selector: findByPath(view.commonViewMetrics, 'cumulativeLayoutShift.targetSelector'),
      first_byte: toServerDuration(findByPath(view.initialViewMetrics, 'navigationTimings.firstByte')),
      dom_complete: toServerDuration(findByPath(view.initialViewMetrics, 'navigationTimings.domComplete')),
      dom_content_loaded: toServerDuration(findByPath(view.initialViewMetrics, 'navigationTimings.domContentLoaded')),
      dom_interactive: toServerDuration(findByPath(view.initialViewMetrics, 'navigationTimings.domInteractive')),
      error: {
        count: view.eventCounts.errorCount
      },
      first_contentful_paint: toServerDuration(findByPath(view.initialViewMetrics, 'firstContentfulPaint')),
      first_input_delay: toServerDuration(findByPath(view.initialViewMetrics, 'firstInput.delay')),
      first_input_time: toServerDuration(findByPath(view.initialViewMetrics, 'firstInput.time')),
      first_input_target_selector: findByPath(view.initialViewMetrics, 'firstInput.targetSelector'),
      interaction_to_next_paint: toServerDuration(findByPath(view.commonViewMetrics, 'interactionToNextPaint.value')),
      interaction_to_next_paint_target_selector: findByPath(view.commonViewMetrics, 'interactionToNextPaint.targetSelector'),
      is_active: view.isActive,
      name: view.name,
      largest_contentful_paint: toServerDuration(findByPath(view.initialViewMetrics, 'largestContentfulPaint.value')),
      largest_contentful_paint_element_selector: findByPath(view.initialViewMetrics, 'largestContentfulPaint.targetSelector'),
      load_event: toServerDuration(findByPath(view.initialViewMetrics, 'navigationTimings.loadEvent')),
      loading_time: discardNegativeDuration(toServerDuration(view.commonViewMetrics.loadingTime)),
      loading_type: view.loadingType,
      long_task: {
        count: view.eventCounts.longTaskCount
      },
      resource: {
        count: view.eventCounts.resourceCount
      },
      time_spent: toServerDuration(view.duration)
    },
    display: view.commonViewMetrics.scroll ? {
      scroll: {
        max_depth: view.commonViewMetrics.scroll.maxDepth,
        max_depth_scroll_top: view.commonViewMetrics.scroll.maxDepthScrollTop,
        max_scroll_height: view.commonViewMetrics.scroll.maxScrollHeight,
        max_scroll_height_time: toServerDuration(view.commonViewMetrics.scroll.maxScrollHeightTime)
      }
    } : undefined,
    session: {
      has_replay: false,
      // replayStats ? true : undefined,
      is_active: view.sessionIsActive ? undefined : false
    },
    privacy: {
      replay_level: configuration.defaultPrivacyLevel
    }
  };
  if (!isEmptyObject(view.customTimings)) {
    viewEvent.view.custom_timings = mapValues(view.customTimings, toServerDuration);
  }
  viewEvent = tools_extend2Lev(viewEvent, {
    view: computePerformanceViewDetails(view.initialViewMetrics.navigationTimings)
  });
  return {
    rawRumEvent: viewEvent,
    startTime: view.startClocks.relative,
    domainContext: {
      location: view.location
    }
  };
}
;// CONCATENATED MODULE: ./src/domain/rumEventsCollection/resource/matchRequestResourceEntry.js


var alreadyMatchedEntries = new polyfills_WeakSet();
/**
 * Look for corresponding timing in resource timing buffer
 *
 * Observations:
 * - Timing (start, end) are nested inside the request (start, end)
 * - Browsers generate a timing entry for OPTIONS request
 *
 * Strategy:
 * - from valid nested entries
 * - if a single timing match, return the timing
 * - if two following timings match (OPTIONS request), return the timing for the actual request
 * - otherwise we can't decide, return undefined
 */
function matchRequestResourceEntry(request) {
  if (!performance || !('getEntriesByName' in performance)) {
    return;
  }
  var sameNameEntries = performance.getEntriesByName(request.url, 'resource');
  if (!sameNameEntries.length || !('toJSON' in sameNameEntries[0])) {
    return;
  }
  var candidates = filter(sameNameEntries, function (entry) {
    return !alreadyMatchedEntries.has(entry);
  });
  candidates = filter(candidates, function (entry) {
    return hasValidResourceEntryDuration(entry) && hasValidResourceEntryTimings(entry);
  });
  candidates = filter(candidates, function (entry) {
    return isBetween(entry, request.startClocks.relative, endTime({
      startTime: request.startClocks.relative,
      duration: request.duration
    }));
  });
  var lastEntry = undefined;
  if (candidates.length > 1) {
    // 取值和 request startTime 间隔更接近的
    var startTimeDuration = Number.MAX_SAFE_INTEGER;
    candidates.forEach(function (entry) {
      var _startTimeDuration = Math.abs(entry.startTime - request.startClocks.relative);
      if (_startTimeDuration < startTimeDuration) {
        startTimeDuration = _startTimeDuration;
        lastEntry = entry;
      }
    });
  } else if (candidates.length === 1) {
    lastEntry = candidates[0];
  }
  if (lastEntry) {
    alreadyMatchedEntries.add(lastEntry);
    return lastEntry.toJSON();
  }
  return;
}
function endTime(timing) {
  return addDuration(timing.startTime, timing.duration);
}
function isBetween(timing, start, end) {
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  var errorMargin = 1;
  return timing.startTime >= start - errorMargin && endTime(timing) <= addDuration(end, errorMargin);
}
;// CONCATENATED MODULE: ./src/domain/rumEventsCollection/resource/retrieveInitialDocumentResourceTiming.js




function retrieveInitialDocumentResourceTiming(configuration, callback) {
  runOnReadyState('interactive', function () {
    var entry = tools_assign(getNavigationEntry().toJSON(), {
      entryType: RumPerformanceEntryType.RESOURCE,
      initiatorType: FAKE_INITIAL_DOCUMENT,
      toJSON: function toJSON() {
        return tools_assign({}, entry, {
          toJSON: undefined
        });
      }
    });
    callback(entry);
  });
}
;// CONCATENATED MODULE: ./src/domain/rumEventsCollection/resource/resourceCollection.js






function startResourceCollection(lifeCycle, configuration, pageStateHistory, taskQueue, retrieveInitialDocumentResourceTimingImpl) {
  if (taskQueue === undefined) {
    taskQueue = createTaskQueue();
  }
  if (typeof retrieveInitialDocumentResourceTimingImpl === 'undefined') {
    retrieveInitialDocumentResourceTimingImpl = retrieveInitialDocumentResourceTiming;
  }
  lifeCycle.subscribe(LifeCycleEventType.REQUEST_COMPLETED, function (request) {
    handleResource(function () {
      return processRequest(request, pageStateHistory);
    });
  });
  var performanceResourceSubscription = createPerformanceObservable(configuration, {
    type: RumPerformanceEntryType.RESOURCE,
    buffered: true
  }).subscribe(function (entries) {
    var loop = function loop(entry) {
      if (!isResourceEntryRequestType(entry) && !isResourceUrlLimit(entry.name, configuration.resourceUrlLimit)) {
        handleResource(function () {
          return processResourceEntry(entry, configuration);
        });
      }
    };
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
      var entry = entries_1[_i];
      loop(entry);
    }
  });
  retrieveInitialDocumentResourceTimingImpl(configuration, function (timing) {
    handleResource(function () {
      return processResourceEntry(timing, configuration);
    });
  });
  function handleResource(computeRawEvent) {
    taskQueue.push(function () {
      var rawEvent = computeRawEvent();
      if (rawEvent) {
        lifeCycle.notify(LifeCycleEventType.RAW_RUM_EVENT_COLLECTED, rawEvent);
      }
    });
  }
  return {
    stop: function stop() {
      performanceResourceSubscription.unsubscribe();
    }
  };
}
function processRequest(request, pageStateHistory) {
  var matchingTiming = matchRequestResourceEntry(request);
  var startClocks = matchingTiming ? relativeToClocks(matchingTiming.startTime) : request.startClocks;
  var tracingInfo = computeRequestTracingInfo(request);
  var type = request.type === RequestType.XHR ? ResourceType.XHR : ResourceType.FETCH;
  var correspondingTimingOverrides = matchingTiming ? computeResourceEntryMetrics(matchingTiming) : undefined;
  var duration = computeRequestDuration(pageStateHistory, startClocks, request.duration);
  var urlObj = urlParse(request.url).getParse();
  var resourceEvent = tools_extend2Lev({
    date: startClocks.timeStamp,
    resource: {
      id: UUID(),
      type: type,
      duration: duration,
      method: request.method,
      status: request.status,
      statusGroup: getStatusGroup(request.status),
      url: isLongDataUrl(request.url) ? sanitizeDataUrl(request.url) : request.url,
      urlHost: urlObj.Host,
      urlPath: urlObj.Path,
      urlPathGroup: replaceNumberCharByPath(urlObj.Path),
      urlQuery: getQueryParamsFromUrl(request.url),
      deliveryType: matchingTiming && computeResourceEntryDeliveryType(matchingTiming),
      protocol: matchingTiming && computeResourceEntryProtocol(matchingTiming)
    },
    type: enums_RumEventType.RESOURCE
  }, tracingInfo, correspondingTimingOverrides);
  return {
    startTime: startClocks.relative,
    rawRumEvent: resourceEvent,
    domainContext: {
      performanceEntry: matchingTiming,
      xhr: request.xhr,
      response: request.response,
      requestInput: request.input,
      requestInit: request.init,
      error: request.error,
      isAborted: request.isAborted,
      handlingStack: request.handlingStack
    }
  };
}
function processResourceEntry(entry, configuration) {
  var startClocks = relativeToClocks(entry.startTime);
  var tracingInfo = computeResourceEntryTracingInfo(entry);
  var type = computeResourceEntryType(entry);
  var entryMetrics = computeResourceEntryMetrics(entry);
  var urlObj = urlParse(entry.name).getParse();
  var resourceEvent = tools_extend2Lev({
    date: startClocks.timeStamp,
    resource: {
      id: UUID(),
      type: type,
      url: entry.name,
      urlHost: urlObj.Host,
      urlPath: urlObj.Path,
      urlPathGroup: replaceNumberCharByPath(urlObj.Path),
      urlQuery: getQueryParamsFromUrl(entry.name),
      method: 'GET',
      status: discardZeroStatus(entry.responseStatus),
      statusGroup: getStatusGroup(entry.responseStatus),
      deliveryType: computeResourceEntryDeliveryType(entry),
      protocol: computeResourceEntryProtocol(entry)
    },
    type: enums_RumEventType.RESOURCE
  }, tracingInfo, entryMetrics);
  return {
    startTime: startClocks.relative,
    rawRumEvent: resourceEvent,
    domainContext: {
      performanceEntry: entry
    }
  };
}
function computeResourceEntryMetrics(entry) {
  return {
    resource: tools_extend2Lev({}, {
      duration: computeResourceEntryDuration(entry)
    }, computeResourceEntrySize(entry), computePerformanceResourceDetails(entry))
  };
}
function computeRequestTracingInfo(request) {
  var hasBeenTraced = request.traceSampled && request.traceId && request.spanId;
  if (!hasBeenTraced) {
    return undefined;
  }
  return {
    _gc: {
      spanId: request.spanId,
      traceId: request.traceId
    },
    resource: {
      id: UUID()
    }
  };
}
function computeRequestDuration(pageStateHistory, startClocks, duration) {
  return !pageStateHistory.wasInPageStateDuringPeriod(PageState.FROZEN, startClocks.relative, duration) ? toServerDuration(duration) : undefined;
}
function computeResourceEntryTracingInfo(entry) {
  return entry.traceId ? {
    _gc: {
      traceId: entry.traceId
    }
  } : undefined;
}
/**
 * The status is 0 for cross-origin resources without CORS headers, so the status is meaningless, and we shouldn't report it
 * https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/responseStatus#cross-origin_response_status_codes
 */
function discardZeroStatus(statusCode) {
  return statusCode === 0 ? undefined : statusCode;
}
;// CONCATENATED MODULE: ./src/boot/rum.js



// import { createDOMMutationObservable } from '../domain/domMutationObservable.js'

// import { startLongTaskCollection } from '../domain/rumEventsCollection/longTask/longTaskCollection'
// import { startLongAnimationFrameCollection } from '../domain/rumEventsCollection/longTask/longAnimationFrameCollection'
// import { RumPerformanceEntryType } from '../domain/performanceObservable'
// import { startActionCollection } from '../domain/rumEventsCollection/actions/actionCollection'










// import { startRequestCollection } from '../domain/requestCollection'

function startRum(configuration, recorderApi, customerDataTrackerManager, getCommonContext, initialViewOptions, createEncoder) {
  var cleanupTasks = [];
  var lifeCycle = new LifeCycle();
  // var telemetry = startRumTelemetry(configuration)

  var reportError = function reportError(error) {
    lifeCycle.notify(LifeCycleEventType.RAW_ERROR_COLLECTED, {
      error: error
    });
  };
  var pageExitObservable = createPageExitObservable();
  pageExitObservable.subscribe(function (event) {
    lifeCycle.notify(LifeCycleEventType.PAGE_EXITED, event);
  });
  cleanupTasks.push(function () {
    pageExitSubscription.unsubscribe();
  });
  var session = !canUseEventBridge() ? startRumSessionManager(configuration, lifeCycle) : startRumSessionManagerStub();
  if (!canUseEventBridge()) {
    var batch = startRumBatch(configuration, lifeCycle, 'telemetry.observable', reportError, pageExitObservable, session.expireObservable, createEncoder);
    cleanupTasks.push(function () {
      batch.stop();
    });
  } else {
    startRumEventBridge(lifeCycle);
  }
  var userSession = startCacheUsrCache(configuration);
  // var domMutationObservable = createDOMMutationObservable()
  var locationChangeObservable = createLocationChangeObservable(location);
  var pageStateHistory = startPageStateHistory();
  var _startRumEventCollection = startRumEventCollection(lifeCycle, configuration, location, session, userSession, pageStateHistory, locationChangeObservable, 'domMutationObservable', getCommonContext, reportError);
  var viewContexts = _startRumEventCollection.viewContexts;
  var urlContexts = _startRumEventCollection.urlContexts;
  // var actionContexts = _startRumEventCollection.actionContexts
  var stopRumEventCollection = _startRumEventCollection.stop;
  var addAction = _startRumEventCollection.addAction;
  cleanupTasks.push(stopRumEventCollection);
  // drainPreStartTelemetry()

  // telemetry.setContextProvider(function () {
  //   return {
  //     application: {
  //       id: configuration.applicationId
  //     },
  //     session: {
  //       id: session.findTrackedSession() && session.findTrackedSession().id
  //     },
  //     view: {
  //       id: viewContexts.findView() && viewContexts.findView().id
  //     },
  //     action: {
  //       id: actionContexts.findActionId(),
  //       ids: actionContexts.findAllActionId()
  //     }
  //   }
  // })
  var _startViewCollection = startViewCollection(lifeCycle, configuration, location, 'domMutationObservable', locationChangeObservable, pageStateHistory, recorderApi, initialViewOptions),
    addTiming = _startViewCollection.addTiming,
    startView = _startViewCollection.startView,
    setViewName = _startViewCollection.setViewName,
    setViewContext = _startViewCollection.setViewContext,
    setViewContextProperty = _startViewCollection.setViewContextProperty,
    getViewContext = _startViewCollection.getViewContext,
    stopViewCollection = _startViewCollection.stop;
  cleanupTasks.push(stopViewCollection);
  var _startResourceCollection = startResourceCollection(lifeCycle, configuration, pageStateHistory);
  cleanupTasks.push(_startResourceCollection.stop);
  // if (
  //   PerformanceObserver.supportedEntryTypes &&
  //   PerformanceObserver.supportedEntryTypes.includes(
  //     RumPerformanceEntryType.LONG_ANIMATION_FRAME
  //   )
  // ) {
  //   var longAnimationFrameCollection = startLongAnimationFrameCollection(
  //     lifeCycle,
  //     configuration
  //   )
  //   cleanupTasks.push(longAnimationFrameCollection.stop)
  // } else {
  //   startLongTaskCollection(lifeCycle, configuration)
  // }

  var _startErrorCollection = startErrorCollection(lifeCycle, configuration, session, pageStateHistory);
  var addError = _startErrorCollection.addError;
  // startRequestCollection(lifeCycle, configuration, session)

  var internalContext = startInternalContext(configuration.applicationId, session, viewContexts, 'actionContexts', urlContexts);
  return {
    addAction: addAction,
    addError: addError,
    addTiming: addTiming,
    configuration: configuration,
    startView: startView,
    setViewContext: setViewContext,
    setViewContextProperty: setViewContextProperty,
    getViewContext: getViewContext,
    setViewName: setViewName,
    lifeCycle: lifeCycle,
    viewContexts: viewContexts,
    session: session,
    stopSession: function stopSession() {
      session.expire();
    },
    getInternalContext: internalContext.get,
    stop: function stop() {
      cleanupTasks.forEach(function (task) {
        task();
      });
    }
  };
}
// function startRumTelemetry(configuration) {
//   const telemetry = startTelemetry(TelemetryService.RUM, configuration)
//   //   if (canUseEventBridge()) {
//   //     const bridge = getEventBridge()
//   //     telemetry.observable.subscribe((event) =>
//   //       bridge.send('internal_telemetry', event)
//   //     )
//   //   }
//   return telemetry
// }

function startRumEventCollection(lifeCycle, configuration, location, sessionManager, userSessionManager, pageStateHistory, locationChangeObservable, domMutationObservable, getCommonContext, reportError) {
  var viewContexts = startViewContexts(lifeCycle);
  var urlContexts = startUrlContexts(lifeCycle, locationChangeObservable, location);

  // var _startActionCollection = startActionCollection(
  //   lifeCycle,
  //   domMutationObservable,
  //   configuration,
  //   pageStateHistory
  // )
  // var actionContexts = _startActionCollection.actionContexts
  // var addAction = _startActionCollection.addAction

  var displayContext = startDisplayContext();
  startRumAssembly(configuration, lifeCycle, sessionManager, userSessionManager, viewContexts, urlContexts, 'actionContexts', displayContext, getCommonContext, reportError);
  return {
    viewContexts: viewContexts,
    urlContexts: urlContexts,
    pageStateHistory: pageStateHistory,
    addAction: function addAction() {},
    // addAction,
    actionContexts: 'actionContexts',
    stop: function stop() {
      displayContext.stop();
      pageStateHistory.stop();
      urlContexts.stop();
      viewContexts.stop();
    }
  };
}
;// CONCATENATED MODULE: ./src/domain/contexts/commonContext.js
function buildCommonContext(globalContextManager, userContextManager, recorderApi) {
  return {
    context: globalContextManager.getContext(),
    user: userContextManager.getContext(),
    hasReplay: false // recorderApi.isRecording() ? true : undefined
  };
}
;// CONCATENATED MODULE: ./src/boot/buildEnv.js
var buildEnv = {
  sdkVersion: "3.2.24",
  sdkName: 'df_web_rum_sdk'
};
;// CONCATENATED MODULE: ./src/domain/configuration.js


// import { isTracingOption } from '../domain/tracing/tracer'

function validateAndBuildRumConfiguration(initConfiguration) {
  if (!initConfiguration.applicationId) {
    display_display.error('Application ID is not configured, no RUM data will be collected.');
    return;
  }
  var requireParamsValidate = validatePostRequestRequireParamsConfiguration(initConfiguration);
  if (!requireParamsValidate) return;
  if (initConfiguration.sessionOnErrorSampleRate !== undefined && !isPercentage(initConfiguration.sessionOnErrorSampleRate)) {
    display_display.error('Error Session  Sample Rate should be a number between 0 and 100');
    return;
  }
  if (initConfiguration.sessionReplaySampleRate !== undefined && !isPercentage(initConfiguration.sessionReplaySampleRate)) {
    display_display.error('Session Replay Sample Rate should be a number between 0 and 100');
    return;
  }
  if (initConfiguration.sessionReplayOnErrorSampleRate !== undefined && !isPercentage(initConfiguration.sessionReplayOnErrorSampleRate)) {
    display_display.error('Error Session Replay Sample Rate should be a number between 0 and 100');
    return;
  }
  // var allowedTracingUrls = validateAndBuildTracingOptions(initConfiguration)
  // if (!allowedTracingUrls) {
  //   return
  // }
  //   if (initConfiguration.allowedTracingOrigins !== undefined) {
  //     if (!isArray(initConfiguration.allowedTracingOrigins)) {
  //       display.error('Allowed Tracing Origins should be an array')
  //       return
  //     }
  //   }
  //   if (initConfiguration.allowedDDTracingOrigins !== undefined) {
  //     if (!isArray(initConfiguration.allowedDDTracingOrigins)) {
  //       display.error('Allowed Tracing Origins should be an array')
  //       return
  //     }
  //   }
  // if (
  //   initConfiguration.tracingSampleRate !== undefined &&
  //   !isPercentage(initConfiguration.tracingSampleRate)
  // ) {
  //   display.error('Tracing Sample Rate should be a number between 0 and 100')
  //   return
  // }
  if (initConfiguration.excludedActivityUrls !== undefined && !tools_isArray(initConfiguration.excludedActivityUrls)) {
    display_display.error('Excluded Activity Urls should be an array');
    return;
  }
  var baseConfiguration = validateAndBuildConfiguration(initConfiguration);
  if (!baseConfiguration) {
    return;
  }
  var trackUserInteractions = !!tools_isNullUndefinedDefaultValue(initConfiguration.trackUserInteractions, initConfiguration.trackInteractions);
  return tools_assign({
    applicationId: initConfiguration.applicationId,
    actionNameAttribute: initConfiguration.actionNameAttribute,
    sessionReplaySampleRate: tools_isNullUndefinedDefaultValue(initConfiguration.sessionReplaySampleRate, 100),
    sessionOnErrorSampleRate: tools_isNullUndefinedDefaultValue(initConfiguration.sessionOnErrorSampleRate, 0),
    sessionReplayOnErrorSampleRate: tools_isNullUndefinedDefaultValue(initConfiguration.sessionReplayOnErrorSampleRate, 0),
    tracingSampleRate: tools_isNullUndefinedDefaultValue(initConfiguration.tracingSampleRate, 100),
    allowedTracingUrls: [],
    // allowedTracingUrls,
    injectTraceHeader: initConfiguration.injectTraceHeader && catchUserErrors_catchUserErrors(initConfiguration.injectTraceHeader, 'injectTraceHeader threw an error:'),
    generateTraceId: initConfiguration.generateTraceId && catchUserErrors_catchUserErrors(initConfiguration.generateTraceId, 'generateTraceId threw an error:'),
    excludedActivityUrls: tools_isNullUndefinedDefaultValue(initConfiguration.excludedActivityUrls, []),
    workerUrl: initConfiguration.workerUrl,
    compressIntakeRequests: !!initConfiguration.compressIntakeRequests,
    trackUserInteractions: trackUserInteractions,
    enableLongAnimationFrame: !!initConfiguration.enableLongAnimationFrame,
    trackViewsManually: !!initConfiguration.trackViewsManually,
    traceType: tools_isNullUndefinedDefaultValue(initConfiguration.traceType, enums_TraceType.DDTRACE),
    traceId128Bit: !!initConfiguration.traceId128Bit,
    defaultPrivacyLevel: objectHasValue(DefaultPrivacyLevel, initConfiguration.defaultPrivacyLevel) ? initConfiguration.defaultPrivacyLevel : DefaultPrivacyLevel.MASK_USER_INPUT,
    shouldMaskNode: initConfiguration.shouldMaskNode && catchUserErrors_catchUserErrors(initConfiguration.shouldMaskNode, 'shouldMaskNode threw an error:')
  }, baseConfiguration, buildEnv);
}
/**
 * Handles allowedTracingUrls and processes legacy allowedTracingOrigins
 */
function validateAndBuildTracingOptions(initConfiguration) {
  // Advise about parameters precedence.
  if (initConfiguration.allowedTracingUrls !== undefined && initConfiguration.allowedTracingOrigins !== undefined) {
    display.warn('Both allowedTracingUrls and allowedTracingOrigins (deprecated) have been defined. The parameter allowedTracingUrls will override allowedTracingOrigins.');
  }
  // Handle allowedTracingUrls first
  if (initConfiguration.allowedTracingUrls !== undefined) {
    if (!isArray(initConfiguration.allowedTracingUrls)) {
      display.error('Allowed Tracing URLs should be an array');
      return;
    }
    // if (initConfiguration.allowedTracingUrls.length !== 0 && initConfiguration.service === undefined) {
    //   display.error('Service needs to be configured when tracing is enabled')
    //   return
    // }
    // Convert from (MatchOption | TracingOption) to TracingOption, remove unknown properties
    var tracingOptions = [];
    each(initConfiguration.allowedTracingUrls, function (option) {
      if (isMatchOption(option)) {
        tracingOptions.push({
          match: option,
          traceType: isNullUndefinedDefaultValue(initConfiguration.traceType, TraceType.DDTRACE)
        });
      } else if (isTracingOption(option)) {
        tracingOptions.push(option);
      } else {
        display.warn('Allowed Tracing Urls parameters should be a string, RegExp, function, or an object. Ignoring parameter', option);
      }
    });
    return tracingOptions;
  }

  // Handle conversion of allowedTracingOrigins to allowedTracingUrls
  if (initConfiguration.allowedTracingOrigins !== undefined) {
    if (!isArray(initConfiguration.allowedTracingOrigins)) {
      display.error('Allowed Tracing Origins should be an array');
      return;
    }
    var tracingOptions = [];
    each(initConfiguration.allowedTracingOrigins, function (legacyMatchOption) {
      var tracingOption = convertLegacyMatchOptionToTracingOption(legacyMatchOption, isNullUndefinedDefaultValue(initConfiguration.traceType, TraceType.DDTRACE));
      if (tracingOption) {
        tracingOptions.push(tracingOption);
      }
    });
    return tracingOptions;
  }
  // Handle conversion of allowedDDTracingOrigins to allowedTracingUrls
  if (initConfiguration.allowedDDTracingOrigins !== undefined) {
    if (!isArray(initConfiguration.allowedDDTracingOrigins)) {
      display.error('Allowed Tracing Origins should be an array');
      return;
    }
    var tracingOptions = [];
    each(initConfiguration.allowedDDTracingOrigins, function (legacyMatchOption) {
      var tracingOption = convertLegacyMatchOptionToTracingOption(legacyMatchOption, isNullUndefinedDefaultValue(initConfiguration.traceType, TraceType.DDTRACE));
      if (tracingOption) {
        tracingOptions.push(tracingOption);
      }
    });
    return tracingOptions;
  }
  return [];
}

/**
 * Converts parameters from the deprecated allowedTracingOrigins
 * to allowedTracingUrls. Handles the change from origin to full URLs.
 */
function convertLegacyMatchOptionToTracingOption(item, traceType) {
  var match;
  if (typeof item === 'string') {
    match = item;
  } else if (item instanceof RegExp) {
    match = function match(url) {
      return item.test(getOrigin(url));
    };
  } else if (typeof item === 'function') {
    match = function match(url) {
      return item(getOrigin(url));
    };
  }
  if (match === undefined) {
    display.warn('Allowed Tracing Origins parameters should be a string, RegExp or function. Ignoring parameter', item);
    return undefined;
  }
  return {
    match: match,
    traceType: traceType
  };
}
;// CONCATENATED MODULE: ./src/boot/perStartRum.js


function createPreStartStrategy(rumPublicApiOptions, getCommonContext, doStartRum) {
  var ignoreInitIfSyntheticsWillInjectRum = rumPublicApiOptions.ignoreInitIfSyntheticsWillInjectRum;
  var startDeflateWorker = rumPublicApiOptions.startDeflateWorker;
  var bufferApiCalls = boundedBuffer_createBoundedBuffer();
  var firstStartViewCall;
  var deflateWorker;
  var cachedInitConfiguration;
  var cachedConfiguration;
  function tryStartRum() {
    if (!cachedInitConfiguration || !cachedConfiguration) {
      return;
    }
    var initialViewOptions;
    if (cachedConfiguration.trackViewsManually) {
      if (!firstStartViewCall) {
        return;
      }
      // An initial view is always created when starting RUM.
      // When tracking views automatically, any startView call before RUM start creates an extra
      // view.
      // When tracking views manually, we use the ViewOptions from the first startView call as the
      // initial view options, and we remove the actual startView call so we don't create an extra
      // view.
      bufferApiCalls.remove(firstStartViewCall.callback);
      initialViewOptions = firstStartViewCall.options;
    }
    var startRumResult = doStartRum(cachedConfiguration, deflateWorker, initialViewOptions);
    bufferApiCalls.drain(startRumResult);
  }
  function doInit(initConfiguration) {
    var eventBridgeAvailable = canUseEventBridge();
    if (eventBridgeAvailable) {
      initConfiguration = overrideInitConfigurationForBridge(initConfiguration);
    }

    // Update the exposed initConfiguration to reflect the bridge and remote configuration overrides
    cachedInitConfiguration = initConfiguration;
    // addTelemetryConfiguration(deepClone(initConfiguration))
    if (cachedConfiguration) {
      displayAlreadyInitializedError('DATAFLUX_RUM', initConfiguration);
      return;
    }
    var configuration = validateAndBuildRumConfiguration(initConfiguration);
    if (!configuration) {
      return;
    }
    if (!eventBridgeAvailable && !configuration.sessionStoreStrategyType) {
      display_display.warn('No storage available for session. We will not send any data.');
      return;
    }
    if (configuration.compressIntakeRequests && !configuration.sendContentTypeByJson && !eventBridgeAvailable && startDeflateWorker) {
      deflateWorker = startDeflateWorker(configuration, 'RUM',
      // Worker initialization can fail asynchronously, especially in Firefox where even CSP
      // issues are reported asynchronously. For now, the SDK will continue its execution even if
      // data won't be sent to Datadog. We could improve this behavior in the future.
      tools_noop);
      if (!deflateWorker) {
        // `startDeflateWorker` should have logged an error message explaining the issue
        return;
      }
    }
    cachedConfiguration = configuration;
    // Instrumuent fetch to track network requests
    // This is needed in case the consent is not granted and some cutsomer
    // library (Apollo Client) is storing uninstrumented fetch to be used later
    // The subscrption is needed so that the instrumentation process is completed
    initFetchObservable().subscribe(tools_noop);
    tryStartRum();
  }
  return {
    init: function init(initConfiguration) {
      if (!initConfiguration) {
        display_display.error('Missing configuration');
        return;
      }
      // Set the experimental feature flags as early as possible, so we can use them in most places

      // Expose the initial configuration regardless of initialization success.
      cachedInitConfiguration = initConfiguration;

      // If we are in a Synthetics test configured to automatically inject a RUM instance, we want
      // to completely discard the customer application RUM instance by ignoring their init() call.
      // But, we should not ignore the init() call from the Synthetics-injected RUM instance, so the
      // internal `ignoreInitIfSyntheticsWillInjectRum` option is here to bypass this condition.
      if (ignoreInitIfSyntheticsWillInjectRum && willSyntheticsInjectRum()) {
        return;
      }
      if (initConfiguration.remoteConfiguration) {
        fetchAndApplyRemoteConfiguration(initConfiguration, doInit);
      } else {
        doInit(initConfiguration);
      }
    },
    getInitConfiguration: function getInitConfiguration() {
      return cachedInitConfiguration;
    },
    getInternalContext: tools_noop,
    stopSession: tools_noop,
    addTiming: function addTiming(name, time) {
      if (time === undefined) {
        time = tools_timeStampNow();
      }
      bufferApiCalls.add(function (startRumResult) {
        startRumResult.addTiming(name, time);
      });
    },
    startView: function startView(options, startClocks) {
      if (startClocks === undefined) {
        startClocks = tools_clocksNow();
      }
      var callback = function callback(startRumResult) {
        startRumResult.startView(options, startClocks);
      };
      bufferApiCalls.add(callback);
      if (!firstStartViewCall) {
        firstStartViewCall = {
          options: options,
          callback: callback
        };
        tryStartRum();
      }
    },
    setViewName: function setViewName(name) {
      bufferApiCalls.add(function (startRumResult) {
        return startRumResult.setViewName(name);
      });
    },
    setViewContext: function setViewContext(context) {
      bufferApiCalls.add(function (startRumResult) {
        return startRumResult.setViewContext(context);
      });
    },
    setViewContextProperty: function setViewContextProperty(key, value) {
      bufferApiCalls.add(function (startRumResult) {
        return startRumResult.setViewContextProperty(key, value);
      });
    },
    getViewContext: function getViewContext() {},
    addAction: function addAction(action, commonContext) {
      if (commonContext === undefined) {
        commonContext = getCommonContext();
      }
      bufferApiCalls.add(function (startRumResult) {
        startRumResult.addAction(action, commonContext);
      });
    },
    addError: function addError(providedError, commonContext) {
      if (commonContext === undefined) {
        commonContext = getCommonContext();
      }
      bufferApiCalls.add(function (startRumResult) {
        startRumResult.addError(providedError, commonContext);
      });
    }
  };
}
function overrideInitConfigurationForBridge(initConfiguration) {
  var _initConfiguration$de, _getEventBridge;
  return tools_assign({}, initConfiguration, {
    applicationId: '00000000-aaaa-0000-aaaa-000000000000',
    clientToken: 'empty',
    sessionSampleRate: 100,
    defaultPrivacyLevel: (_initConfiguration$de = initConfiguration.defaultPrivacyLevel) !== null && _initConfiguration$de !== void 0 ? _initConfiguration$de : (_getEventBridge = getEventBridge()) === null || _getEventBridge === void 0 ? void 0 : _getEventBridge.getPrivacyLevel()
  });
}
;// CONCATENATED MODULE: ./src/boot/rumPublicApi.js




var RUM_STORAGE_KEY = 'rum';
function makeRumPublicApi(startRumImpl, recorderApi, options) {
  if (options === undefined) {
    options = {};
  }
  var customerDataTrackerManager = createCustomerDataTrackerManager(CustomerDataCompressionStatus.Unknown);
  var globalContextManager = createContextManager('global', {
    customerDataTracker: customerDataTrackerManager.getOrCreateTracker(CustomerDataType.GlobalContext)
  });
  var userContextManager = createContextManager('user', {
    customerDataTracker: customerDataTrackerManager.getOrCreateTracker(CustomerDataType.User),
    propertiesConfig: {
      id: {
        type: 'string'
      },
      name: {
        type: 'string'
      },
      email: {
        type: 'string'
      }
    }
  });
  function getCommonContext() {
    return buildCommonContext(globalContextManager, userContextManager, recorderApi);
  }
  var strategy = createPreStartStrategy(options, getCommonContext, function (configuration, deflateWorker, initialViewOptions) {
    if (configuration.storeContextsToLocal) {
      storeContextManager(configuration, globalContextManager, RUM_STORAGE_KEY, CustomerDataType.GlobalContext);
      storeContextManager(configuration, userContextManager, RUM_STORAGE_KEY, CustomerDataType.User);
    }
    customerDataTrackerManager.setCompressionStatus(deflateWorker ? CustomerDataCompressionStatus.Enabled : CustomerDataCompressionStatus.Disabled);
    var startRumResult = startRumImpl(configuration, recorderApi, customerDataTrackerManager, getCommonContext, initialViewOptions, deflateWorker && options.createDeflateEncoder ? function (streamId) {
      return options.createDeflateEncoder(deflateWorker, streamId);
    } : createIdentityEncoder);
    // recorderApi.onRumStart(
    //   startRumResult.lifeCycle,
    //   configuration,
    //   startRumResult.session,
    //   startRumResult.viewContexts,
    //   deflateWorker
    // )

    strategy = createPostStartStrategy(strategy, startRumResult);
    return startRumResult;
  });
  var startView = monitor(function (options) {
    var sanitizedOptions = typeof_typeof(options) === 'object' ? options : {
      name: options
    };
    strategy.startView(sanitizedOptions);
    if (sanitizedOptions.context) {
      customerDataTrackerManager.getOrCreateTracker(CustomerDataType.View).updateCustomerData(sanitizedOptions.context);
    }
    (0,esm_namespaceObject.addTelemetryUsage)({
      feature: 'start-view'
    });
  });
  var rumPublicApi = makePublicApi({
    init: monitor(function (initConfiguration) {
      strategy.init(initConfiguration);
    }),
    setViewName: monitor(function (name) {
      strategy.setViewName(name);
      (0,esm_namespaceObject.addTelemetryUsage)({
        feature: 'set-view-name'
      });
    }),
    setViewContext: monitor(function (context) {
      strategy.setViewContext(context);
      (0,esm_namespaceObject.addTelemetryUsage)({
        feature: 'set-view-context'
      });
    }),
    setViewContextProperty: monitor(function (key, value) {
      strategy.setViewContextProperty(key, value);
      (0,esm_namespaceObject.addTelemetryUsage)({
        feature: 'set-view-context-property'
      });
    }),
    getViewContext: monitor(function () {
      (0,esm_namespaceObject.addTelemetryUsage)({
        feature: 'set-view-context-property'
      });
      return strategy.getViewContext();
    }),
    // /** @deprecated: use setGlobalContextProperty instead */
    // addRumGlobalContext: monitor(function (key, value) {
    //   globalContextManager.setContextProperty(key, value)
    //   addTelemetryUsage({ feature: 'set-global-context' })
    // }),
    setGlobalContextProperty: monitor(function (key, value) {
      globalContextManager.setContextProperty(key, value);
      (0,esm_namespaceObject.addTelemetryUsage)({
        feature: 'set-global-context'
      });
    }),
    // /** @deprecated: use removeGlobalContextProperty instead */
    // removeRumGlobalContext: monitor(function (key) {
    //   return globalContextManager.removeContextProperty(key)
    // }),
    removeGlobalContextProperty: monitor(function (key) {
      return globalContextManager.removeContextProperty(key);
    }),
    // /** @deprecated: use getGlobalContext instead */
    // getRumGlobalContext: monitor(function () {
    //   return globalContextManager.getContext()
    // }),
    getGlobalContext: monitor(function () {
      return globalContextManager.getContext();
    }),
    // /** @deprecated: use setGlobalContext instead */
    // setRumGlobalContext: monitor(function (context) {
    //   globalContextManager.setContext(context)
    //   addTelemetryUsage({ feature: 'set-global-context' })
    // }),
    setGlobalContext: monitor(function (context) {
      globalContextManager.setContext(context);
      (0,esm_namespaceObject.addTelemetryUsage)({
        feature: 'set-global-context'
      });
    }),
    clearGlobalContext: monitor(function () {
      return globalContextManager.clearContext();
    }),
    getInitConfiguration: monitor(function () {
      return deepClone(strategy.initConfiguration);
    }),
    getInternalContext: monitor(function (startTime) {
      return strategy.getInternalContext(startTime);
    }),
    addDebugSession: monitor(function (id) {}),
    clearDebugSession: monitor(function () {}),
    getDebugSession: monitor(function () {}),
    addAction: monitor(function (name, context) {
      var handlingStack = createHandlingStack();
      callMonitored(function () {
        strategy.addAction({
          name: sanitize(name),
          context: sanitize(context),
          startClocks: tools_clocksNow(),
          type: ActionType.CUSTOM,
          handlingStack: handlingStack
        });
        (0,esm_namespaceObject.addTelemetryUsage)({
          feature: 'add-action'
        });
      });
    }),
    addError: monitor(function (error, context) {
      var handlingStack = createHandlingStack();
      callMonitored(function () {
        strategy.addError({
          error: error,
          // Do not sanitize error here, it is needed unserialized by computeRawError()
          handlingStack: handlingStack,
          context: sanitize(context),
          startClocks: tools_clocksNow()
        });
        (0,esm_namespaceObject.addTelemetryUsage)({
          feature: 'add-error'
        });
      });
    }),
    addTiming: monitor(function (name, time) {
      strategy.addTiming(sanitize(name), time);
    }),
    setUser: monitor(function (newUser) {
      if (checkUser(newUser)) {
        userContextManager.setContext(sanitizeUser(newUser));
      }
      (0,esm_namespaceObject.addTelemetryUsage)({
        feature: 'set-user'
      });
    }),
    getUser: monitor(function () {
      return userContextManager.getContext();
    }),
    setUserProperty: monitor(function (key, property) {
      var newUser = {};
      newUser[key] = property;
      var sanitizedProperty = sanitizeUser(newUser)[key];
      userContextManager.setContextProperty(key, sanitizedProperty);
      (0,esm_namespaceObject.addTelemetryUsage)({
        feature: 'set-user'
      });
    }),
    removeUserProperty: monitor(function (key) {
      return userContextManager.removeContextProperty(key);
    }),
    // /** @deprecated: renamed to clearUser */
    // removeUser: monitor(function () {
    //   return userContextManager.clearContext()
    // }),
    clearUser: monitor(function () {
      return userContextManager.clearContext();
    }),
    startView: startView,
    stopSession: monitor(function () {
      strategy.stopSession();
      (0,esm_namespaceObject.addTelemetryUsage)({
        feature: 'stop-session'
      });
    })
    // startSessionReplayRecording: monitor(function (options) {
    //   recorderApi.start(options)
    //   addTelemetryUsage({
    //     feature: 'start-session-replay-recording',
    //     force: options && options.force
    //   })
    // }),
    // stopSessionReplayRecording: monitor(recorderApi.stop)
  });
  return rumPublicApi;
}
function createPostStartStrategy(preStartStrategy, startRumResult) {
  return tools_assign({
    init: function init(initConfiguration) {
      displayAlreadyInitializedError('DATAFLUX_RUM', initConfiguration);
    },
    initConfiguration: preStartStrategy.getInitConfiguration()
  }, startRumResult);
}
;// CONCATENATED MODULE: ./src/boot/rum.entry.js
// import { defineGlobal, getGlobalObject } from '@cloudcare/browser-core'


// import { startRecording } from './startRecording'
// import { makeRecorderApi } from './recorderApi'

// var recorderApi = makeRecorderApi(startRecording)
var datafluxRum = makeRumPublicApi(startRum, 'recorderApi', {
  startDeflateWorker: startDeflateWorker,
  createDeflateEncoder: createDeflateEncoder
});

// defineGlobal(getGlobalObject(), 'DATAFLUX_RUM', datafluxRum)
;// CONCATENATED MODULE: ./src/index.js


var __webpack_exports__datafluxRum = __webpack_exports__.E;
export { __webpack_exports__datafluxRum as datafluxRum };
