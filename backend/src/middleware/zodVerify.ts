import z from "zod";
import express , {Request , Response , NextFunction} from "express";
const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
  });
async function  zodVerify(req:Request ,res:Response , next:NextFunction){
    const user_details = {email : req.body.email , password : req.body.password};
    if(!user_details)
        {
            return res.json({message : "please provide email and passoword"});
        }
    try {

        const result = await schema.parse(user_details);
        console.log("zod verified");
        // return res.json({message : "zod verified"})
        next();

    } catch (error) {
        console.log("zod error");
        res.json({message : "please provide corrrect email and passsword"});
    }
}

export default zodVerify