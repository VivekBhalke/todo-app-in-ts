"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const url = process.env.URL;
function connectDB() {
    mongoose_1.default.connect(url).then((response) => {
        console.log("Connected to MongoDB");
    });
}
exports.default = connectDB;
