const mongoose = require("mongoose");
const UrlShorten = mongoose.model("UrlShorten");

//TODO:
//create errorhandling
//create-react-app
//setup views!
exports.redirect = async (req, res) => {
  const urlToken = req.params.token;
  const link = await UrlShorten.findOne({ urlToken });
  if (link) {
    res.redirect(link.originalUrl);
  } else {
    res.redirect("/error");
  }
};
