import express , {Request , Response , NextFunction} from "express";

import Todos from "../../models/Todo";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "dotenv";

export default async function addTodo(req :Request , res : Response ){
    const user_id = req.headers.user_id;
    const {title , description} = req.body;
    if(!title || !description)
    {
        return res.json({message : "there is no title and description"});

    }
    try {
        const object = {
            title , description ,
            authorId : user_id,
            done : false
        }
        const todo = new Todos(object);
        await todo.save();
        return res.json({done : "done , todo saved "});
    } catch (error) {
        console.log(error);
        return res.json({message : "there was an error"});
    }
    
}

