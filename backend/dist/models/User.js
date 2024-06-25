"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Define the User interface (optional, but recommended for type safety)
// _id: string;
//     name: string;
//     email: string;
//     password: string;
//     opt: number;
//     optExpiry: Date
// Define the User schema
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    opt: {
        type: Number,
    },
    optExpiry: {
        type: Date,
    }
});
// Create the User model
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
