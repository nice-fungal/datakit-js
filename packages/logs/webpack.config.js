const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

const mode = process.env.NODE_ENV
const getBaseConfig = (env) => {
  let webConfig = {
    entry: path.resolve(__dirname, 'src/index.js')
  }
  if (env !== 'development') {
    webConfig = Object.assign(webConfig, {
      optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true
              }
            }
          })
        ]
      }
    })
  }
  return webConfig
}

module.exports = (env, args) => ({
  mode: args.mode,
  devtool: args.mode === 'development' ? 'inline-source-map' : false,
  ...getBaseConfig(args.mode),
  output: {
    filename: 'dataflux-logs.js',
    path:
      args.mode === 'development'
        ? path.resolve(__dirname, 'demo')
        : path.resolve(__dirname, 'bundle')
  }
})
