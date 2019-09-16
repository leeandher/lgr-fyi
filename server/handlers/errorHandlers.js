const os = require('os')

// Handle async/await try/catch exceptions
exports.catchErrors = fn => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next)
  }
}

exports.healthCheck = (req, res) => {
  return res.json({
    arch: os.arch(),
    cpus: os.cpus(),
    env: process.env.NODE_ENV,
    hostname: os.hostname(),
    platform: os.platform(),
    time: Date.now(),
    type: os.type(),
    version: process.version,
  })
}
