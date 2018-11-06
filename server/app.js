const express = require("express");
const bodyParser = require("body-parser");
const errorHandlers = require("./handlers/errorHandlers");

const routes = require("./routes/index");

//Create our Express app
const app = express();

//Attach form data to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Use our specified routes
app.use("/", routes);

app.use(errorHandlers.handleIt);

module.exports = app;
