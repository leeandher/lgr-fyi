const mongoose = require("mongoose");
const shortUniqueId = require("short-unique-id");
const validUrl = require("valid-url");
const UrlShortener = mongoose.model("UrlShortener");

exports.validate = (req, res, next) => {
  //Check if the user forgot to add 'http://'
  const userLink = req.body.originalUrl;
  for (const link of [userLink, `http://${userLink}`]) {
    if (validUrl.isWebUri(link) && link.match(/\.\w{2,}$/im)) {
      req.body.originalUrl = link;
      return next();
    }
  }
  next({ message: "Invalid URL" });
};

exports.createRedirect = async (req, res, next) => {
  //Check whether or not this link has already been made
  let link;
  const existingLink = await UrlShortener.findOne(req.body);
  if (!existingLink) {
    req.body.urlToken = new shortUniqueId().randomUUID(5);
    link = await new UrlShortener(req.body).save();
  }
  //Send the link's shortUrl to the frontend
  const returnLink = link || existingLink;
  res.json({ link: returnLink.shortUrl, count: returnLink.clickCount });
};

exports.sendRedirect = async (req, res) => {
  const urlToken = req.params.token;
  const returnLink = await UrlShortener.findOne({ urlToken });
  if (!returnLink) res.status(404).send("Sorry about that!");
  // res.redirect(returnLink.originalUrl);

  res.json({ link: returnLink.originalUrl, count: returnLink.clickCount });
};

exports.performRedirect = async (req, res) => {
  const urlToken = req.params.token;
  const link = await UrlShortener.findOne({ urlToken });
  if (link) res.redirect(link.originalUrl);
  res.status(404).send("Sorry! We couldn't find a link!");
};
