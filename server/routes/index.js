const express = require("express");
const path = require("path");

const router = express.Router();

const { catchErrors } = require("../handlers/errorHandlers");

const urlController = require("../controllers/urlController");

router.post("/api", urlController.validate, urlController.createRedirect);
router.get("/api/:token", urlController.sendRedirect);
router.get("/:token", urlController.performRedirect);
router.get("/", (req, res) => {
  //Check if the user forgot to add 'http://'
  res.sendFile(path.join(__dirname + "../../../client/build/index.html"));
});

module.exports = router;
