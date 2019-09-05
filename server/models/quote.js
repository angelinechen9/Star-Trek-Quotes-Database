const mongoose = require("mongoose");
const quoteSchema = mongoose.Schema({
  quote: {
    type: String,
    required: true
  },
  character: {
    type: String
  },
  tvseriesormovie: {
    type: String
  }
})
const Quote = mongoose.model("Quote", quoteSchema);
module.exports = {Quote}
