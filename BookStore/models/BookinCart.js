import { Schema, model } from 'mongoose';

// Create Schema
const BookinCartSchema = new Schema({
  img: {
    type: String
  },
  price: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Book = model('Book_in_Cart', BookinCartSchema);

export default Book;
