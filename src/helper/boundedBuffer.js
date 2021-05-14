import { each } from './tools'
var BoundedBuffer = function () {
  this.buffer = []
}
BoundedBuffer.prototype = {
  add: function (item) {
    var length = this.buffer.push(item)
    if (length > this.limit) {
      this.buffer.splice(0, 1)
    }
  },

  drain: function (fn) {
    each(this.buffer, function (item) {
      fn(item)
    })
    this.buffer.length = 0
  }
}
export default BoundedBuffer
