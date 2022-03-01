import {
  objectEntries,
  each,
  extend,
  isArray,
  TraceType,
  getOrigin
} from '@cloudcare/browser-core'
import { DDtraceTracer} from './ddtraceTracer'
import { SkyWalkingTracer} from './skywalkingTracer'
import { JaegerTracer} from './jaegerTracer'
import { ZipKinTracer} from './zipkinTracer'
import { OpenTelemetryTracer} from './opentelemetryTracer'
export function clearTracingIfCancelled(context) {
  if (context.status === 0) {
    context.traceId = undefined
    context.spanId = undefined
  }
}

export function startTracer(configuration) {
  return {
    clearTracingIfCancelled: clearTracingIfCancelled,
    traceFetch: function (context) {
      return injectHeadersIfTracingAllowed(
        configuration,
        context,
        function (tracingHeaders) {
          context.init = extend({}, context.init)
          var headers = []
          if (context.init.headers instanceof Headers) {
            each(context.init.headers, function (value, key) {
              headers.push([key, value])
            })
          } else if (isArray(context.init.headers)) {
            each(context.init.headers, function (header) {
              headers.push(header)
            })
          } else if (context.init.headers) {
            each(context.init.headers, function (value, key) {
              headers.push([key, value])
            })
          }
          context.init.headers = headers.concat(objectEntries(tracingHeaders))
        }
      )
    },
    traceXhr: function (context, xhr) {
      return injectHeadersIfTracingAllowed(
        configuration,
        context,
        function (tracingHeaders) {
          each(tracingHeaders, function (value, name) {
            xhr.setRequestHeader(name, value)
          })
        }
      )
    }
  }
}
function isAllowedUrl(configuration, requestUrl) {
  var requestOrigin = getOrigin(requestUrl)
  var flag = false
  each(configuration.allowedTracingOrigins, function (allowedOrigin) {
    if (
      requestOrigin === allowedOrigin ||
      (allowedOrigin instanceof RegExp && allowedOrigin.test(requestOrigin))
    ) {
      flag = true
      return false
    }
  })
  return flag
}

export function injectHeadersIfTracingAllowed(configuration, context, inject) {
  if (!isAllowedUrl(configuration, context.url) || !configuration.apmToolType) {
    return
  }
  var tracer;
  switch(configuration.apmToolType) {
    case TraceType.ddtrace: 
      tracer = new DDtraceTracer();
      break;
    case TraceType.skywalking:
      tracer = new SkyWalkingTracer(configuration, context.url);
      break;
    case TraceType.zipkin:
      tracer = new ZipKinTracer(configuration);
      break;
    case TraceType.jaeger:
      tracer = new JaegerTracer(configuration);
      break;
    case TraceType.opentelemetry:
      tracer = new OpenTelemetryTracer(configuration);
      break;
    default:
      break;
  }
  if (!tracer || !tracer.isTracingSupported()) {
    return
  }

  context.traceId = tracer.getTraceId()
  context.spanId = tracer.getSpanId()
  inject(tracer.makeTracingHeaders())
}
