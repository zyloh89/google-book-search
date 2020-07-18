const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googleBookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  image: { type: String, trim: true }
  link: { type: String, trim: true }
});

const Book = mongoose.model("Book", googleBookSchema);

module.exports = Book;
