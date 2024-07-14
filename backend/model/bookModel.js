import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title:String,
  author:String,
  price:Number,
  category:String,
  image:String
});


export const bookModel = mongoose.model("bookModel" , bookSchema);
