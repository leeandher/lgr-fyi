const mongoose = require('mongoose')

// Import the environment setup
const path = `./settings.${
  process.env.NODE_ENV === 'development' ? 'dev' : 'prod'
}.env`
require('dotenv').config({ path })

// Configure mongoose
mongoose.connect(process.env.DATABASE_URI, {
  reconnectTries: 300,
  reconnectInterval: 1000,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
mongoose.Promise = global.Promise
mongoose.connection.on('error', err =>
  console.error(`Error on DB Connection → ${err.message}`),
)

// Import the models
require('./models/Link')

// Start the app!
const app = require('./app')
const server = app.listen(process.env.PORT || 7777, () => {
  console.log(`Express running → PORT ${server.address().port}`)
})
