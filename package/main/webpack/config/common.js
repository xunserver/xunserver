const { VueLoaderPlugin } = require('vue-loader')
const { DefinePlugin } = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { getCssloader } = require('../scripts/loader/css.loader')
const { getSassloader } = require('../scripts/loader/sass.loader')
const { resolveFromRoot, resolve } = require('../utils')
const getAlias = require('../scripts/alias')
const { genDefinePluginEnv } = require('../scripts/env')
const { DIST_PATH } = require('../constant')
const { getHtmlPlugin } = require('../scripts/html-plugin')

module.exports = {
  target: 'web',
  context: resolveFromRoot(),
  entry: {
    home: './src/pages/home/index.ts',
    detail: './src/pages/detail/index.ts',
  },
  output: {
    publicPath: './',
    clean: true,
  },
  resolve: {
    alias: {
      ...getAlias(),
    },
    extensions: ['.vue', '.ts', '.js', '.json'],
    // modules: [resolveFromRoot('node_modules'), resolveFromRoot('../../node_modules')],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      // {
      //   test: /\.tsx?$/,
      //   use: [
      //     {
      //       loader: 'esbuild-loader',
      //       options: {
      //         target: 'es2015',
      //         loader: 'tsx',
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.css$/,
        use: [...getCssloader()],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [...getCssloader(), ...getSassloader()],
      },
    ],
  },
  plugins: [
    new DefinePlugin(
      genDefinePluginEnv({
        NODE_ENV: process.env.NODE_ENV,
      })
    ),
    getHtmlPlugin('home'),
    getHtmlPlugin('detail'),
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: resolveFromRoot('src/public'),
          to: resolve(DIST_PATH, 'public'),
        },
      ],
    }),
    new MiniCssExtractPlugin(),
  ],
}
