const mongoose = require('mongoose')

const Link = mongoose.model('Link')

// exports.sendShortLink = async (req, res) => {
//   const urlToken = req.params.token
//   const returnLink = await ShortenedUrl.findOne({ urlToken })
//   if (!returnLink) res.status(404).send('Sorry about that!')

//   res.json({ link: returnLink.originalUrl, count: returnLink.clickCount })
// }

exports.sendHome = async (req, res, next) => {
  return res.redirect(process.env.CLIENT_URL)
}

exports.increaseClicks = async (req, res, next) => {
  const { suffix } = req.params
  const link = await Link.findOneAndUpdate({ suffix }, { $inc: { clicks: 1 } })
  if (!link) return res.json({ todo: '404 page' })
  req.link = link
  return next()
}

exports.performRedirect = async (req, res, next) => {
  const { link } = req
  console.log(`Redirecting via '${link.suffix}', done ${link.clicks} time(s)`)
  if (link.origin.startsWith('http')) return res.redirect(link.origin)
  return res.redirect(`https://${link.origin}`)
}
