const mongoose = require("mongoose");
const shortid = require("shortid");
const UrlShorten = mongoose.model("UrlShorten");

//TODO:
//create errorhandling
//create-react-app
//setup views!
exports.performRedirect = async (req, res) => {
  const urlToken = req.params.token;
  console.log(urlToken);
  const link = await UrlShorten.findOne({ urlToken });
  console.log("this is the link", link);
  if (link) {
    res.redirect(link.originalUrl);
  } else {
    res.redirect("/error");
  }
};

exports.createRedirect = async (req, res, next) => {
  // console.log(req.body);
  req.body.urlToken = shortid.generate();
  const dbEntry = await new UrlShorten(req.body).save();
  console.log("this is the db", dbEntry);
  res.locals.db = dbEntry;
  next();
};

exports.homePage = (req, res) => {
  const test = res.locals ? res.locals.db : {};
  console.log(res.locals.db);
  res.render("homepage", { title: "Welcome!", test });
};
exports.error = (req, res) => {
  res.send("error has occured");
};
