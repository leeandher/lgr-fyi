//Import mongoose and use ES6 promises
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//Define the urlShortener schema
const urlShortenerSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    trim: true,
    unique: true,
    required: "Please provide a URL to shorten!"
  },
  urlToken: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

//Create the virtual field for the 'shortUrl'
urlShortenerSchema.virtual("shortUrl").get(function() {
  return `${process.env.BASE_URL}/${this.urlToken}`;
});

//Index the 'originalUrl' field
urlShortenerSchema.index({ originalUrl: "text" });

//Export the model
module.exports = mongoose.model("UrlShortener", urlShortenerSchema);
