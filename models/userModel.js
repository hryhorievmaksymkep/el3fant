const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Вкажіть нікнейм"],
  },
  password:{
    type: String,
    required: [true, "Вкажіть пароль"],
  },
  email:{
    type: String,
    required: [true, "Вкажіть пошту"],
    unique: true,
    lowercase: true,
  },
  wishlist: [Object],
  cart: [Object],
});

module.exports = mongoose.model('User', userSchema);