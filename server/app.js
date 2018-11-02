const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/index");
const path = require("path");

//Create our Express app
const app = express();

//Setup the templating
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//Attach form data to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Use our specified routes
app.use("/", routes);

module.exports = app;
