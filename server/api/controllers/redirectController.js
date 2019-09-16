const mongoose = require('mongoose')

const Link = mongoose.model('Link')

exports.sendHome = async (req, res, next) => {
  return res.redirect(process.env.CLIENT_URL)
}

// Increase clicks on the redirect link
exports.increaseClicks = async (req, res, next) => {
  const { suffix } = req.params
  const link = await Link.findOneAndUpdate({ suffix }, { $inc: { clicks: 1 } })
  if (!link) {
    return res.redirect(`${process.env.CLIENT_URL}/404?suffix=${suffix}`)
  }
  req.link = link
  return next()
}

exports.performRedirect = async (req, res, next) => {
  const { link } = req
  console.log(`Redirecting via '${link.suffix}', done ${link.clicks} time(s)`)
  const outgoingRedirect = link.origin.startsWith('http')
    ? link.origin
    : `http://${link.origin}`
  return res.redirect(outgoingRedirect)
}
