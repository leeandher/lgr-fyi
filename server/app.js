const express = require("express");
// const session = require("express-session");
const bodyParser = require("body-parser");
const errorHandlers = require("./handlers/errorHandlers");
const path = require("path");
const flash = require("connect-flash");

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

// Allow for notification flashes
app.use(flash());

//Use our specified routes
app.use("/api", apiRoutes);
app.use("/:token", urlController.performRedirect);
app.use(express.static(path.join(__dirname, "./../client/build")));

// // If that above routes didnt work, we 404 them and forward to error handler
// app.use(errorHandlers.notFound);

// // One of our error handlers will see if these errors are just validation errors
// app.use(errorHandlers.flashValidationErrors);

// // Otherwise this was a really bad error we didn't expect! Shoot eh
// if (app.get("env") === "development") {
//   /* Development Error Handler - Prints stack trace */
//   app.use(errorHandlers.developmentErrors);
// }

// // production error handler
// app.use(errorHandlers.productionErrors);

module.exports = app;
