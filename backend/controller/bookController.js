import { bookModel } from "../model/bookModel.js";

export const bookController = async (req,res)=>{
  try { 
    const books = await bookModel.find();
    res.status(200).json(books);
  }
    catch (error) {
      console.log("your error is :" , error)
      res.status(500).json(error)
    }
  
};



