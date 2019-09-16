// Handle async/await try/catch exceptions
exports.catchErrors = fn => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next)
  }
}
