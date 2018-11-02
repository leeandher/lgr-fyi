const mongoose = require("mongoose");

//Import the environment setup
require("dotenv").config({ path: "./settings.env" });

//Connect to the Database with the following settings
mongoose.connect(
  process.env.DATABASE,
  {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true
  }
);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on("error", err => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

//Import the models
require("./models/UrlShorten");

//Start the app!
const app = require("./app");
app.set("port", process.env.PORT || 7777);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
