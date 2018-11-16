const express = require("express");
const path = require("path");

const router = express.Router();

// const { catchErrors } = require("../handlers/errorHandlers");

const urlController = require("../controllers/urlController");

router.post("/", urlController.validateUrl, urlController.createRedirect);
router.get("/:token", urlController.sendRedirect);

module.exports = router;
