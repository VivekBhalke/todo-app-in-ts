import express , {Request , Response , NextFunction} from "express";

import Todos from "../../models/Todo";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "dotenv";

export default async function updateTodo(req :Request , res : Response ){
    const user_id = req.headers.user_id;
    const todo_id = req.headers.todo_id;
    const {title , description , done} = req.body;
    if(!title || !description || !done)
    {
        return res.json({message : "there is no title and description AND DONE"});

    }
    try {
        const object = {
            title , description ,
            authorId : user_id,
            done : done
        }
        const todo = await Todos.findByIdAndUpdate(todo_id,object);
        return res.json({done : "done , todo updated "});
    } catch (error) {
        console.log(error);
        return res.json({message : "there was an error"});
    }
    
}

