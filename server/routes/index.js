const express = require("express");
const router = express.Router();

const { catchErrors } = require("../handlers/errorHandlers");
const urlController = require("../controllers/urlController");

router.post("/api", urlController.validate, urlController.createRedirect);
router.get("/api/:token", urlController.sendRedirect);

module.exports = router;
