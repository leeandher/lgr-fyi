const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const api = require('./api')

const app = express()

// Attach form data to req.body
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

// Setup CORS
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))

// Serve the Vue App
app.use('/', express.static(path.join(__dirname, '../client/dist')))

// Implement the API
app.use('/', api)

module.exports = app
