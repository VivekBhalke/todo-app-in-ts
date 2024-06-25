import express , {Request , Response , NextFunction} from "express";
import User from "../../models/User";
import Todos from "../../models/Todo";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "dotenv";

export default async function getAllTodos(req :Request , res : Response ){
    const user_id = req.headers.user_id;
    if(!user_id)
    {
        return res.json({message : "do not have the user_id"});
    }
    const todos = await Todos.find({authorId : user_id});
    return res.json({todos});
}

