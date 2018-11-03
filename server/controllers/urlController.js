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
  let link;
  const existingLink = await UrlShortener.findOne(req.body);
  if (!existingLink) {
    req.body.urlToken = new shortUniqueId().randomUUID(5);
    link = await new UrlShortener(req.body).save();
  }
  res.locals.newLink = link || existingLink;
  next();
};

exports.performRedirect = async (req, res, next) => {
  const urlToken = req.params.token;
  const link = await UrlShortener.findOne({ urlToken });
  if (link) res.redirect(link.originalUrl);
  res.status(404).send("Sorry! We coudln't find a link!");
};

exports.homePage = (req, res) => {
  const newLink = res.locals ? res.locals.newLink : {};
  res.render("homepage", { title: "Welcome!", newLink });
};

exports.error = (req, res) => {
  res.send("error has occured");
};
