const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    authors: [{ type: String, required: true }],
    isbn: { type: String, required: true, unique: true },
    genre: { type: String, required: true },
    publisher: { type: String, required: true },
    publicationDate: { type: Date, required: true },
    edition: String,
    language: { type: String, required: true },
    pageCount: Number,
    format: String,
    dimensions: String,
    weight: Number,
    description: String,
    coverImage: String,
    rating: Number,
    reviews: [{ body: String, date: Date, reviewer: String }],
    awards: [String],
    additionalNotes: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
