"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const index_1 = __importDefault(require("./userRoutes/index"));
const index_2 = __importDefault(require("./todoRoutes/index"));
router.use("/user", index_1.default);
router.use("/todo", index_2.default);
exports.default = router;
