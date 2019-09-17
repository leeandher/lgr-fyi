const mongoose = require('mongoose')
const ShortUniqueId = require('short-unique-id')
const err = require('../errorMessages')

const Link = mongoose.model('Link')

const isLinkRegex = /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/
const isSiteRegex = /lgr\.fyi\/.{5}/i

// Validate the types received
exports.validateForm = (req, res, next) => {
  const { origin, suffix } = req.body
  if (typeof origin !== 'string') {
    return res.status(400).json(err.invalidOriginType)
  }
  if (suffix && typeof suffix !== 'string') {
    return res.status(400).json(err.invalidSuffixType)
  }
  return next()
}

// Make sure the link is valid
exports.validateLink = (req, res, next) => {
  const { origin } = req.body
  if (!origin) return res.status(400).json(err.noOrigin)
  if (isLinkRegex.test(origin)) return next()
  res.status(400).json(err.noLinkMatch)
}

// Ensure they don't shorten a shortened link
exports.preventNesting = (req, res, next) => {
  const { origin } = req.body
  if (!isSiteRegex.test(origin)) return next()
  res.status(400).json(err.siteMatch)
}

// Ensure custom suffix doesn't clash
exports.verifySuffix = async (req, res, next) => {
  const { suffix } = req.body
  if (!suffix) return next()
  const existingSuffix = await Link.findOne({ suffix })
  if (existingSuffix) return res.status(400).json(err.suffixTaken)
  return next()
}

// If there is an existing link, return that instead
exports.returnExistingLink = async (req, res, next) => {
  const { origin, suffix } = req.body
  if (suffix) return next()
  const existingLink = await Link.findOne({ origin })
  return existingLink ? res.json(existingLink) : next()
}

// If not, create a link to return
exports.createShortLink = async (req, res) => {
  const { origin } = req.body
  const uid = new ShortUniqueId()
  const suffix = req.body.suffix || uid.randomUUID(5)
  const link = await new Link({ origin, suffix }).save()
  return res.json(link)
}

// Get data for the history
exports.getData = async (req, res) => {
  const { suffixes } = req.body
  const linksPromises = suffixes.map(suffix => Link.findOne({ suffix }))
  const links = await Promise.all(linksPromises)
  return res.json(links)
}
