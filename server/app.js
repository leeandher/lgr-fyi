const express = require("express");
// const session = require("express-session");
const bodyParser = require("body-parser");
const errorHandlers = require("./handlers/errorHandlers");
const path = require("path");

const urlController = require("./controllers/urlController");
const apiRoutes = require("./routes/api");

//Create our Express app
const app = express();

//Attach form data to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sessions allow us to store data on visitors from request to request
// This keeps users logged in and allows us to send flash messages
// app.use(
//   session({
//     secret: process.env.SECRET,
//     key: process.env.KEY,
//     resave: false,
//     saveUninitialized: false,
//     store: new MongoStore({ mongooseConnection: mongoose.connection })
//   })
// );

//Allow for notification flashes
// app.use(flash());

//Use our specified routes
app.use("/api", apiRoutes);
app.use("/:token", urlController.performRedirect);
app.use(express.static(path.join(__dirname, "/../client/build")));

// app.use(errorHandlers.handleIt);

module.exports = app;
