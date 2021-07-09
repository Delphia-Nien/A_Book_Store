import { Schema, model } from 'mongoose';

// Create Schema
const BookSchema = new Schema({
  bookname: {
    type: String,
    required: true
  },
  price: {
      type: Number
  },
  Image: {
      type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const BookModel = model('book', BookSchema);

export default BookModel;
