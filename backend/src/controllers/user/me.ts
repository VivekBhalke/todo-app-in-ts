import express , {Request , Response , NextFunction} from "express";
import User from "../../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "dotenv";

export default async function me(req : Request , res : Response ){
    if(!req.headers.user_id){
        return res.json({message : "no token verified"});

    }
    const user = await User.findById(req.headers.user_id);
    if(!user){
        return res.json({message : "no such user"});
    }
    const object = {
        email : user.email,
        name : user.name,
        id : user._id
    }
    return res.json({object : object});
}