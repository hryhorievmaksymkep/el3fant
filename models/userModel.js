const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: Number,
  email: String,
  wishlist: [String],
  cart: [String],
});

module.exports = mongoose.model('User', userSchema);