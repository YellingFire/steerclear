const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  revAuthor: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  review: { type: String, required: true },
  rating: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  cityOfOperation: { type: String, required: true },
  typeContractor: { type: String, required: true }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;