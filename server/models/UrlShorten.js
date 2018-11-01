const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const urlShortenSchema = new mongoose.Schema({
  originalUrl: { type: String },
  shortUrl: { type: String },
  urlToken: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("UrlShorten", urlShortenSchema);
