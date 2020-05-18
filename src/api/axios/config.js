const env = process.env.NODE_ENV
let baseUrl = env == 'production' ? '' : '/api'

module.exports = {
  baseUrl
}