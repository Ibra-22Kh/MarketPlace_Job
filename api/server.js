import express from "express";
import mongoose, { set } from "mongoose";
import dotenv from "dotenv"

const app = express();
dotenv.config();


mongoose.set('strictQuery',true);

try{
    await mongoose.connect(process.env.MONGODB);
    console.log("connected to mongoDB")
}catch(error){
    console.log(error);
}

app.listen(8800,()=>{
    console.log("Backend server is running");
})

