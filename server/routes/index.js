const express = require("express");
const router = express.Router();

const { catchErrors } = require("../handlers/errorHandlers");
const urlController = require("../controllers/urlController");

// const { catchErrors } = require("../handlers/errorHandlers");
// router.get("/", urlController.homePage);
// router.get("/error", urlController.error);

// router.post(
//   "/",
//   urlController.validate,
//   urlController.createRedirect,
//   urlController.homePage
// );

router.get("/api", (req, res) => {
  res.send({ text: "This is coming from Express!" });
});

router.post("/api", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

router.get("/:token", urlController.performRedirect);
router.get("/api/:token", urlController.sendRedirect);

// router.get("/:token", urlController.performRedirect);

module.exports = router;
