"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tokenVerify_1 = __importDefault(require("../../middleware/tokenVerify"));
const getAllTodos_1 = __importDefault(require("../../controllers/todos/getAllTodos"));
const addTodo_1 = __importDefault(require("../../controllers/todos/addTodo"));
const updateTodo_1 = __importDefault(require("../../controllers/todos/updateTodo"));
const router = express_1.default.Router();
router.get("/getAllTodos", tokenVerify_1.default, getAllTodos_1.default);
router.post("/addTodo", tokenVerify_1.default, addTodo_1.default);
router.put("/updateTodo", tokenVerify_1.default, updateTodo_1.default);
exports.default = router;
