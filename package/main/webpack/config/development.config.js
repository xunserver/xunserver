const { merge: webpackMerge } = require('webpack-merge')

const { resolveFromRoot } = require('../utils')
const { getPort } = require('../scripts/dev-server')
const base = require('./common')

module.exports = webpackMerge(base, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    client: {
      progress: true,
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    port: getPort(process.env.APP_PORT),
    open: process.env.APP_BASE,
    hot: true,
    historyApiFallback: true,
    proxy: require(`${resolveFromRoot('proxy/index.js')}`),
    devMiddleware: {
      // writeToDisk: false,
      publicPath: `/`,
    },
  },
  output: {
    path: resolveFromRoot('dist'),
    filename: '[name].js',
    chunkFilename: 'chunk/[name].chunk.js',
  },
})
