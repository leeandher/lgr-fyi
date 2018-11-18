//Modules
const mongoose = require("mongoose");

//Models
const ShortenedUrl = mongoose.model("ShortenedUrl");

exports.sendShortLink = async (req, res) => {
  const urlToken = req.params.token;
  const returnLink = await ShortenedUrl.findOne({ urlToken });
  if (!returnLink) res.status(404).send("Sorry about that!");

  res.json({ link: returnLink.originalUrl, count: returnLink.clickCount });
};

exports.performRedirect = async (req, res, next) => {
  const urlToken = req.params.token;
  const link = await ShortenedUrl.findOne({ urlToken });
  if (link) res.redirect(link.originalUrl);
  next();
};
