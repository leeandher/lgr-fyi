const express = require("express");

const router = express.Router();

// const { catchErrors } = require("../handlers/errorHandlers");

const urlController = require("../controllers/urlController");

router.post(
  "/",
  urlController.validateUrl,
  urlController.preventNesting,
  urlController.createShortLink
);

module.exports = router;
