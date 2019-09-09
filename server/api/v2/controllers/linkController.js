const mongoose = require('mongoose')
const ShortUniqueId = require('short-unique-id')

const Link = mongoose.model('Link')

const isLinkRegex = /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/g
const isSiteRegex = /lgr\.fyi\/.{5}/gi

// Make sure the link is valid
exports.validateLink = (req, res, next) => {
  const { origin } = req.body 
  if (!origin) return  res.status(400).send({ message: 'That isn\'t a valid link, try adding \'https://\' or \'www.\' to the beginning of your link' })
  if (isLinkRegex.test(origin)) return next()
  res.status(400).send({ message: 'That isn\'t a valid link - try adding \'https://\' or \'www.\' to the beginning of your link' })
}

// Ensure they don't shorten a shortened link
exports.preventNesting = (req, res, next) => {
  const { origin } = req.body
  if (!isSiteRegex.test(origin)) return next()
  res.status(400).send({ message: 'That isn\'t a valid link - you can\'t shorten links from this site' })
}

// If there is an existing link, return that instead
exports.returnExistingLink = async(req, res, next) => {
  const { origin } = req.body
  const existingLink = await Link.findOne({ origin })
  return existingLink ? res.json(existingLink): next()
}

// If not, create a link to return
exports.createShortLink = async (req, res) => {
  const { origin } = req.body
  const uid = new ShortUniqueId()
  const suffix = uid.randomUUID(5)
  const link = await new Link({ origin, suffix }).save()
  return res.json(link)
}
