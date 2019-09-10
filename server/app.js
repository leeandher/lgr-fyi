const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const api = require('./api/v2')

const app = express()

//Attach form data to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Adds cookies to req.cookies
app.use(cookieParser())

// Create sessions
app.use(
  session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  }),
)

// Implement the API!
app.use('/', api)

//
// If that above routes didnt work, we 404 them and forward to error handler
// app.use(errorHandlers.notFound)

// Otherwise this was a really bad error we didn't expect! Shoot eh
// if (app.get("env") === "development") {
//   /* Development Error Handler - Prints stack trace */
//   app.use(errorHandlers.developmentErrors);
// }

// // production error handler
// app.use(errorHandlers.productionErrors);

module.exports = app
