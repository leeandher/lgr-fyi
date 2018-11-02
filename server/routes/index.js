const express = require("express");
const router = express.Router();

const urlController = require("../controllers/urlController");

// const { catchErrors } = require("../handlers/errorHandlers");
router.get("/", urlController.homePage);
router.get("/error", urlController.error);

router.post(
  "/",
  urlController.validate,
  urlController.createRedirect,
  urlController.homePage
);
router.get("/:token", urlController.performRedirect);

module.exports = router;
