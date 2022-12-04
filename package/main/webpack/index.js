const { loadEnvByMode } = require('./scripts/env')

module.exports = (env, arg) => {
  loadEnvByMode(arg.mode)
  return require(`./config/${process.env.NODE_ENV}.config.js`)
}
