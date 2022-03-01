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
 export function OpenTelemetryTracer(configuration) {
  const rootSpanId = randomTraceId();
  if (configuration.traceId128Bit) {
    // 128bit生成traceid
    this._traceId = randomTraceId() + rootSpanId
  } else {
    this._traceId = rootSpanId
  }
  this._spanId = rootSpanId()
}
OpenTelemetryTracer.prototype = {
 isTracingSupported: function() {
   return true
 },
 getSpanId:function() {
   return this._spanId
 },
 getTraceId: function() {
   return this._traceId
 },
 
 makeTracingHeaders: function() {
   return {
     'x-b3-traceid': this.getTraceId(),
     'x-b3-spanid': this.getSpanId(),
    //  ''x-b3-parentspanid': '',
     'x-b3-sampled': '1',
    //  'x-b3-flags': '0'
   }
 }
}