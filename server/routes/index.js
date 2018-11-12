const express = require("express");
const router = express.Router();

const { catchErrors } = require("../handlers/errorHandlers");
const urlController = require("../controllers/urlController");

router.post("/api", urlController.validate, urlController.createRedirect);
router.get("/:token", urlController.performRedirect);

module.exports = router;
