// Handle async/await try/catch exceptions
exports.catchErrors = fn => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next)
  }
}

// Pass it on the the client-app
exports.notFound = (req, res, next) => {
  res.redirect(`${process.env.CLIENT_URL}/404`)
}
