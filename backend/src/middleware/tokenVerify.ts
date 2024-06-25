import express , {Request , Response , NextFunction} from "express";

import jwt from "jsonwebtoken";
import env from "dotenv";
env.config();

const Secret = process.env.SECERT as string;

export default async function tokenVerify(req : Request , res:Response, next : NextFunction){
    try{
        const token = req.headers.token as string;
        if(token)
        {
            
            const user_id = jwt.verify(token , Secret) as jwt.JwtPayload;
            req.headers.user_id = user_id.id;
            console.log(req.headers.user_id);
            console.log("verified");
            next();
        }
        else{
            return res.json({message : "no token"});
        }    
    }
    catch(err){
        return res.json({message : "invalid token"});
    }
}