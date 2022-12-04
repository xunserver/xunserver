const HtmlWebpackPlugin = require('html-webpack-plugin')

exports.getHtmlPlugin = (name, options = {}) => {
  const plugin = new HtmlWebpackPlugin({
    template: './src/index.ejs',
    filename: `${name}/index.html`,
    chunks: [name],
    inject: true,
    title: process.env.APP_TITLE,
    base: `${process.env.APP_BASE}/`,
    publicPath: '../',

    ...options,
  })

  return plugin
}
