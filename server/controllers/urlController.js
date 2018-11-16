const mongoose = require("mongoose");
const shortUniqueId = require("short-unique-id");
const validUrl = require("valid-url");
const ShortenedUrl = mongoose.model("ShortenedUrl");

//Also check if the user forgot to add 'http://'
exports.validateUrl = (req, res, next) => {
  const userLink = req.body.originalUrl;
  for (const link of [userLink, `http://${userLink}`]) {
    if (validUrl.isWebUri(link) && link.includes(".")) {
      req.body.originalUrl = link;
      return next();
    }
  }
  res.status(400).send("❌ Invalid URL! ❌");
};

//Ensure they don't shorten a shortened link
exports.preventNesting = (req, res, next) => {
  const userLink = req.body.originalUrl;
  const siteRegEx = /lgr\.fyi\/\w{5}/i;
  if (!siteRegEx.test(userLink)) return next();
  res.status(400).send("❌ Nice try! You can't shorten your short links!❌");
};

exports.createRedirect = async (req, res, next) => {
  //Check whether or not this link has already been made
  let link;
  const existingLink = await ShortenedUrl.findOne(req.body);
  if (!existingLink) {
    req.body.urlToken = new shortUniqueId().randomUUID(5);
    link = await new ShortenedUrl(req.body).save();
  }
  //Send the link's shortUrl to the frontend
  const returnLink = link || existingLink;
  res.json({ link: returnLink.shortUrl, count: returnLink.clickCount });
};

exports.sendRedirect = async (req, res) => {
  const urlToken = req.params.token;
  const returnLink = await ShortenedUrl.findOne({ urlToken });
  if (!returnLink) res.status(404).send("Sorry about that!");

  res.redirect(returnLink.originalUrl);
  //G5EAX --> my site
  // res.json({ link: returnLink.originalUrl, count: returnLink.clickCount });
};

exports.performRedirect = async (req, res, next) => {
  const urlToken = req.params.token;
  console.log(urlToken);
  const link = await ShortenedUrl.findOne({ urlToken });
  if (link) res.redirect(link.originalUrl);
  // next("");
  // res.status(404).send("Sorry! We couldn't find a link!");
  next();
};
