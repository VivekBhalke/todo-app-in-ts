import express , {Router , Request , Response} from "express";
import tokenVerify from "../../middleware/tokenVerify";
import User from "../../models/User";
import Todos from "../../models/Todo";
import getAllTodos from "../../controllers/todos/getAllTodos";
import addTodo from "../../controllers/todos/addTodo";
import updateTodo from "../../controllers/todos/updateTodo";
const router : Router = express.Router();

router.get("/getAllTodos" , tokenVerify , getAllTodos)

router.post("/addTodo" , tokenVerify , addTodo);

router.put("/updateTodo" , tokenVerify , updateTodo);
export default router;