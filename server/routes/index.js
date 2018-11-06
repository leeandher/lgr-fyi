const express = require("express");
const router = express.Router();

const { catchErrors } = require("../handlers/errorHandlers");
const urlController = require("../controllers/urlController");

router.post("/api", urlController.validate, urlController.createRedirect);

// router.get("/api", (req, res) => {
//   res.send({ text: "This is coming from Express!" });
// });

// router.get("/:token", urlController.performRedirect);
// router.get("/api/:token", urlController.sendRedirect);

module.exports = router;
