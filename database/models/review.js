const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  review: String,
  date: { type: Date, default: Date.now },
  cityOfOperation: { type: String, required: true },
  typeContractor: { type: String, required: false }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;