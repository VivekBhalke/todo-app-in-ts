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
const User_1 = __importDefault(require("../../models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function loginController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!req.body.email || !req.body.password) {
            return res.json({ message: "please provide email and password" });
        }
        const user_details = req.body;
        console.log(user_details.email);
        const email = user_details.email;
        try {
            const user = yield User_1.default.findOne({ email: email });
            if (!user) {
                return res.json({ message: "improver email" });
            }
            else {
                console.log(user._id);
                console.log(typeof user._id);
                const userPassword = user.password;
                bcrypt_1.default.compare(user_details.password, userPassword, (err, same) => {
                    if (same) {
                        const id = user._id;
                        const payload = {
                            id: id
                        };
                        const Secret = process.env.SECERT;
                        try {
                            const token = jsonwebtoken_1.default.sign(payload, Secret);
                            return res.json({ message: "User created successfully", token: token });
                        }
                        catch (error) {
                            console.log(error);
                            return res.json({ message: "Error making the token" });
                        }
                    }
                    else {
                        return res.json({ message: "password is incorrect" });
                    }
                });
            }
        }
        catch (error) {
        }
        // res.json({message : "this is login controller"})
    });
}
exports.default = loginController;
