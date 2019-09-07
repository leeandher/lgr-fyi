//Modules
const mongoose = require('mongoose')
// const shortUniqueId = require('short-unique-id')
// const validUrl = require('valid-url')

//Models
const Link = mongoose.model('Link')

//Also check if the user forgot to add 'http://'
exports.validateUrl = (req, res, next) => {
  const {origin} = req.body
  return res.status(200).send(`BOOTYYYYY, ur origin is ${origin}`)
  next()
  res.status(400).send('❌ Invalid URL! ❌')
}

// //Ensure they don't shorten a shortened link
// exports.preventNesting = (req, res, next) => {
//   const userLink = req.body.originalUrl
//   const siteRegEx = /lgr\.fyi\/\w{5}/i
//   if (!siteRegEx.test(userLink)) return next()
//   res.status(400).send('❌ Nice try! You can\'t shorten your short links!❌')
// }

// //Create the short link!
// exports.createShortLink = async (req, res, next) => {
//   //Check whether or not this link has already been made
//   let link
//   const existingLink = await ShortenedUrl.findOne(req.body)
//   if (!existingLink) {
//     req.body.urlToken = new shortUniqueId().randomUUID(5)
//     link = await new ShortenedUrl(req.body).save()
//   }
//   //Send the link's shortUrl to the frontend
//   const returnLink = link || existingLink
//   res.json({ link: returnLink.shortUrl, count: returnLink.clickCount })
// }
