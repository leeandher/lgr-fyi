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
  clickCount: { type: Number, default: 0 }
});

//Create the virtual field for the 'shortUrl'
urlShortenerSchema.virtual("shortUrl").get(function() {
  return `${process.env.BASE_URL}/${this.urlToken}`;
});

//Index the 'originalUrl' field
urlShortenerSchema.index({ originalUrl: "text" });

//Define the hooks
function addToCount(next) {
  console.log(this.originalUrl);
  next();
}

urlShortenerSchema.pre("findOne", function(next) {
  console.log(this.originalUrl);
});

//Export the model
module.exports = mongoose.model("UrlShortener", urlShortenerSchema);
