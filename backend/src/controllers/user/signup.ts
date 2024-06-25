import express , {Request , Response } from "express";
import User from "../../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "dotenv";

env.config();
export default async function signupController(req  : Request , res:Response){
    try {
        const email = req.body.email;
        const password = req.body.password;

        const result = await User.find({});
        let presentEmail = false;
        let presentPassword = false;
        result.forEach((element)=>{
            if(element.email == email)
                {
                    presentEmail = true;
                }
            else if(element.password == password)
                {
                    presentPassword = true;

                }
        });

        if(presentEmail)
        {
            return res.json({message : "User already exits"});
        }
        if(presentPassword)
        {
            return res.json({message : "Password Already exists"})
        }

        let saltRounds = process.env.saltRounds as string;
        console.log("saltROunds" , saltRounds);
        let salt_Rounds : number = parseInt(saltRounds);
        console.log(typeof salt_Rounds);
        // return res.json({message : "reached here"})
        bcrypt.hash(password,salt_Rounds,async(err,hash)=>{
            if(err){
                return res.json({message :"errror generating the hashed password" , error : err});
            }
            else if(!err){
                const hashedPassword = hash;
                if(hashedPassword)
                    {
                        const array : string[] = email.split('@');
                        
                        let user = new User({
                            email : email ,
                            password : hashedPassword,
                            name : array[0]
                        });
            
                        await user.save();
                        
                        const Secret = process.env.SECERT as string;
                        const id = user._id as string;
                        const payload = {
                            id : id
                        }
                        try {
                            const token = jwt.sign(payload , Secret);
                            return res.json({message : "User created successfully" , token : token});
                        } catch (error) {
                            console.log(error);
                            
                            return res.json({message : "Error making the token"})
                        }
                        

                        // res.json({message : user._id});
                       
                    }
            }
        })

      
        
        // Save user to the database
        
        
    } catch (err:any) {
        console.error(err.message);
        res.status(500).send('Server error');
    }

}


