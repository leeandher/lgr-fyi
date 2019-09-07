const mongoose = require('mongoose')

const Link = mongoose.model('Link')

// exports.sendShortLink = async (req, res) => {
//   const urlToken = req.params.token
//   const returnLink = await ShortenedUrl.findOne({ urlToken })
//   if (!returnLink) res.status(404).send('Sorry about that!')

//   res.json({ link: returnLink.originalUrl, count: returnLink.clickCount })
// };

// exports.performRedirect = async (req, res, next) => {
//   const suffix = req.params.suffix
//   const link = await ShortenedUrl.findOneAndUpdate(
//     { urlToken },
//     { $inc: { clickCount: 1 } },
//     { new: true }
//   )

//   //Log the redirect
//   console.log(
//     `Redirected a user via token "${urlToken}", this link has been used ${
//       link.clickCount > 1 ? `${link.clickCount} times!` : 'for the first time!'
//     }`
//   )

//   //If no link is found, skip ahead.
//   if (!link) return next()

//   //Otherwise, redirect!
//   res.redirect(link.originalUrl)
// }
