const OSS = require('ali-oss')
const fs = require('fs')
const path = require('path')
const packageJSON = require('../package.json')

let sdkVersion = packageJSON.version
const client = new OSS({
  region: 'oss-cn-hangzhou',
  accessKeyId: 'LTAI4G4gbes6qQggKs8rntiW',
  accessKeySecret: 'SIQ8eXXJPb6uf02YpC7JdJHh3GwJm8',
  bucket: 'zhuyun-static-files-production'
})
const rumjs = fs.readFileSync(
  path.join(__dirname, '../', 'bundle/dataflux-rum.js')
)
// 获取大版本信息
const versionMajor = `v${sdkVersion.split('.')[0]}`

const objectName = `browser-sdk/${versionMajor}/dataflux-rum.js`
console.log(objectName, 'objectNameobjectNameobjectName')
client
  .put(objectName, rumjs, {
    mime: 'application/javascript'
  })
  .then((result) => {
    // flushCdn()
  })

const flushCdn = () => {
  const co = require('co')
  const SDK = require('ali-cdn-sdk')

  const CONFIG = {
    accessKeyId: 'LTAI4G4gbes6qQggKs8rntiW',
    appSecret: 'SIQ8eXXJPb6uf02YpC7JdJHh3GwJm8',
    endpoint: 'https://static.dataflux.cn',
    apiVersion: '2018-05-10'
  }

  co(function* () {
    const sdk = new SDK(CONFIG)
    const res = yield sdk.RefreshObjectCaches({
      ObjectPath: 'https://static.dataflux.cn/js-sdk/dataflux-rum.js'
    })
    console.log(res, 'res')
  })
}
