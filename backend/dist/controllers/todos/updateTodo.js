"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Todo_1 = __importDefault(require("../../models/Todo"));
function updateTodo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user_id = req.headers.user_id;
        const todo_id = req.headers.todo_id;
        const { title, description, done } = req.body;
        if (!title || !description || !done) {
            return res.json({ message: "there is no title and description AND DONE" });
        }
        try {
            const object = {
                title, description,
                authorId: user_id,
                done: done
            };
            const todo = yield Todo_1.default.findByIdAndUpdate(todo_id, object);
            return res.json({ done: "done , todo updated " });
        }
        catch (error) {
            console.log(error);
            return res.json({ message: "there was an error" });
        }
    });
}
exports.default = updateTodo;
