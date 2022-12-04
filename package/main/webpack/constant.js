// 定义webpack配置中一些固定的常量
const { resolveFromRoot } = require('./utils')

/**
 * env文件目录位置
 */
const ENV_DIR_PATH = resolveFromRoot('env')
/**
 * 默认需要注入到definePlugin中的环境变量前缀
 */
const DEFAULT_APP_PREFIX = 'APP_'
const DIST_PATH = resolveFromRoot('dist')

module.exports = {
  ENV_DIR_PATH,
  DEFAULT_APP_PREFIX,
  DIST_PATH,
}
