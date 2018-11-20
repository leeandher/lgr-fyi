//Import mongoose and use ES6 promises
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//Define the ShortenedUrl schema
const shortenedUrlSchema = new mongoose.Schema({
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
shortenedUrlSchema.virtual("shortUrl").get(function() {
  return `${process.env.BASE_URL}/${this.urlToken}`;
});

//Index the 'originalUrl' field
shortenedUrlSchema.index({ originalUrl: "text" });

// shortenedUrlSchema.post("findOne", function(link) {
//   link.clickCount++;
//   link.save();
// });

//Export the model
module.exports = mongoose.model("ShortenedUrl", shortenedUrlSchema);
