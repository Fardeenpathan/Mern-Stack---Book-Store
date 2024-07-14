import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { router } from './route/bookRoute.js';
const app = express();
dotenv.config();
import cors from 'cors';

app.use(cors());

app.get("/",(req,res)=>{
  res.send("<h1>This is Testing code</h1>")
})

mongoose.connect(process.env.URI).then(()=>{
  console.log("connection successfull")
}).catch((error) => {
  console.log("Error is:", error)
}) 


//define route

app.use("/book", router);


// For server connection
app.listen(process.env.PORT , ()=>{
  console.log(`your server is http://localhost:${process.env.PORT}`)
})