exports.getSassloader = () => {
  return [
    {
      loader: 'resolve-url-loader',
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        additionalData: `@import '@/style/base/_index';`, // 每个入口scss文件添加变量
      },
    },
  ]
}
