const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  img: String,
  title: String,
  fullText: String,
  author: String,
  date: String,
});

module.exports = mongoose.model('Blog', blogSchema);