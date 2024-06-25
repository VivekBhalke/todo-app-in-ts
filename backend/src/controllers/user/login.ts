import express , {Request , Response , NextFunction} from "express";
import User from "../../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "dotenv";
type User = {
    email : string;
    password : string;
}
export default async function loginController(req  : Request , res:Response ){
    if(!req.body.email || !req.body.password)
    {
        return res.json({message : "please provide email and password"})
    }

    const user_details : User = req.body;
    console.log(user_details.email);
    const email = user_details.email;
    try {
        const user = await User.findOne({email : email});
        
        if(!user){
            return res.json({message : "improver email"})
            
        }
        else{
            console.log(user._id);
            console.log(typeof user._id);
            const userPassword = user.password as string;
            bcrypt.compare(user_details.password , userPassword , (err : Error | undefined , same)=>{
                if(same){
                        const id = user._id as string;
                        const payload = {
                            id : id
                        }
                        const Secret = process.env.SECERT as string;
                        try {
                            const token = jwt.sign(payload , Secret);
                            return res.json({message : "User created successfully" , token : token});
                        } catch (error) {
                            console.log(error);
                            
                            return res.json({message : "Error making the token"})
                        }
                    
                }
                else{
                    return res.json({message : "password is incorrect"})
                }

            });
            
        }
    } catch (error) {
        
    }
    // res.json({message : "this is login controller"})
}