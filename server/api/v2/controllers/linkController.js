const mongoose = require('mongoose')

const Link = mongoose.model('Link')


const isLinkRegex = /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/g
const isSiteRegex = /lgr\.fyi\/.{5}/gi

//Also check if the user forgot to add 'http://'
exports.validateUrl = (req, res, next) => {
  const { origin } = req.body 
 
  if(!origin) return  res.status(400).send({ message: 'That isn\'t a valid link, try adding \'https://\' or \'www.\' to the beginning of your link' })
  if (isLinkRegex.test(origin)) return next()
  res.status(400).send({ message: 'That isn\'t a valid link, try adding \'https://\' or \'www.\' to the beginning of your link' })
}

// //Ensure they don't shorten a shortened link
exports.preventNesting = (req, res, next) => {
  const { origin } = req.body
  const siteRegEx = /lgr\.fyi\/.{5}/i
  if (!siteRegEx.test(userLink)) return res.json({ 'next': 'next' })
  res.status(400).send('❌ Nice try! You can\'t shorten your short links!❌')
}

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
