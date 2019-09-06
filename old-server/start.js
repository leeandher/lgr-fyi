const mongoose = require('mongoose')

//Import the environment setup
require('dotenv').config({ path: './settings-dev.env' })

//Connect to the Database with the following settings
mongoose.connect(process.env.DATABASE, {
  keepAlive: true,
  reconnectTries: 404,
  useNewUrlParser: true,
})
mongoose.Promise = global.Promise // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', err => {
  console.error(`Error on DB Connection → ${err.message}`)
})

//Import the models
require('./models/ShortenedUrl')

//Start the app!
const app = require('./app')
const server = app.listen(process.env.PORT || 7777, () => {
  console.log(`Express running → PORT ${server.address().port}`)
})
