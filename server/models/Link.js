const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// Define the Link schema
const linkSchema = new mongoose.Schema({
  origin: {
    type: String,
    trim: true,
    required: true
  },
  clicks: {
    type: Number,
    min: 0,
    default: 0,
    required: true
  },
  suffix: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    required: true
  }
});

// Create the virtual 'shortLink' field
linkSchema.virtual("shortLink").get(function() {
  return `${process.env.CLIENT_URL}/${this.suffix}`;
});

// Define the indexes
linkSchema.index({ origin: "text" });

// Export the model
module.exports = mongoose.model("Link", linkSchema);
