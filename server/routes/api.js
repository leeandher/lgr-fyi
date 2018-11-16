const express = require("express");
const path = require("path");

const router = express.Router();

// const { catchErrors } = require("../handlers/errorHandlers");

const urlController = require("../controllers/urlController");

router.post(
  "/",
  urlController.validateUrl,
  urlController.preventNesting,
  urlController.createRedirect
);

module.exports = router;
