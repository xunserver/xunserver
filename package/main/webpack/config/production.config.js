const { merge: webpackMerge } = require('webpack-merge')
const { DIST_PATH } = require('../constant')

const base = require('./common')

module.exports = webpackMerge(base, {
  mode: 'production',
  output: {
    path: DIST_PATH,
    filename: '[name].[chunkhash:8].js',
    chunkFilename: 'chunk/[name].[contenthash:8].js',
    clean: true,
  },
})
