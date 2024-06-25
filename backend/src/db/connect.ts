import mongoose from "mongoose";
import env from "dotenv";
env.config();

const url : string = process.env.URL as string;


export default function connectDB(){
    mongoose.connect(url).then((response : typeof import("mongoose"))=>{
        console.log("Connected to MongoDB");
    })
}