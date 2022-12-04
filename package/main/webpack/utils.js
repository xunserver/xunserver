// webpack出现的工具函数
const { resolve, join } = require('path')
const fs = require('fs-extra')

/**
 * 从根目录开始的路径解析
 * @param  {...string} paths 路径
 * @returns 绝对路径
 */
const resolveFromRoot = (...paths) => resolve(__dirname, '../', ...paths)
const getPackageInfo = (packagePath = resolveFromRoot('package.json')) =>
  require(packagePath)
const getNameFromPackage = () => getPackageInfo().name
const isExistFile = fs.pathExistsSync

module.exports = {
  resolve,
  join,
  resolveFromRoot,
  getPackageInfo,
  getNameFromPackage,
  isExistFile,
}
