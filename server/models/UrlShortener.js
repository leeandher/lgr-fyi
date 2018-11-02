const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const urlShortenerSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    trim: true,
    required: "Please provide a URL to shorten!"
  },
  urlToken: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

urlShortenerSchema.virtual("shortUrl").get(function() {
  return `${process.env.BASE_URL}/${this.urlToken}`;
});

module.exports = mongoose.model("UrlShortener", urlShortenerSchema);
