// === Generate a random 64-bit number in fixed-length hex format
function randomTraceId() {
  const digits = '0123456789abcdef';
  let n = '';
  for (let i = 0; i < 16; i += 1) {
    const rand = Math.floor(Math.random() * 16);
    n += digits[rand];
  }
  return n;
}

/**
 * 
 * @param {*} configuration  配置信息
 */
 export function JaegerTracer(configuration) {
  const rootSpanId = randomTraceId();
  if (configuration.traceId128Bit) {
    // 128bit生成traceid
    this._traceId = randomTraceId() + rootSpanId
  } else {
    this._traceId = rootSpanId
  }
  this._spanId = rootSpanId
}
JaegerTracer.prototype = {
 isTracingSupported: function() {
   return true
 },
 getSpanId:function() {
   return this._spanId
 },
 getTraceId: function() {
   return this._traceId
 },
 getUberTraceId: function() {
  //{trace-id}:{span-id}:{parent-span-id}:{flags}
  return this._traceId + ':' + this._spanId + ':' + '0' + ':' + '1'
 },
 makeTracingHeaders: function() {
   return {
    //  'uber-trace-id': this.getUberTraceId(),
     'X-B3-TraceId': this.getTraceId(),
     'X-B3-SpanId': this.getSpanId(),
    //  'X-B3-ParentSpanId': '',
     'X-B3-Sampled': '1',
    //  'X-B3-Flags': '0'
   }
   
 }
}