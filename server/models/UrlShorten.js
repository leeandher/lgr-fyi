const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const urlShortenSchema = new mongoose.Schema({
  originalUrl: { type: String },
  urlToken: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

urlShortenSchema.virtual("shortUrl").get(function() {
  return `localhost:1111/${this.urlToken}`;
});

module.exports = mongoose.model("UrlShorten", urlShortenSchema);
