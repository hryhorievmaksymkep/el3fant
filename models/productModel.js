const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  img: String,
  rate: String,
  name: String,
  price: Number,
  discount: Number,
  new: Boolean,
  categories: [String],
  size: String
});

module.exports = mongoose.model('Product', productSchema);