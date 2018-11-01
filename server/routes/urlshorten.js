const urlController = require("../controllers/urlController");

module.exports = app => {
  //Get API for redirecting to Original URL
  app.get("/api/link/:token");
};
