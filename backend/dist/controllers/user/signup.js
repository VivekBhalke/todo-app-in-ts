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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function signupController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const result = yield User_1.default.find({});
            let presentEmail = false;
            let presentPassword = false;
            result.forEach((element) => {
                if (element.email == email) {
                    presentEmail = true;
                }
                else if (element.password == password) {
                    presentPassword = true;
                }
            });
            if (presentEmail) {
                return res.json({ message: "User already exits" });
            }
            if (presentPassword) {
                return res.json({ message: "Password Already exists" });
            }
            let saltRounds = process.env.saltRounds;
            console.log("saltROunds", saltRounds);
            let salt_Rounds = parseInt(saltRounds);
            console.log(typeof salt_Rounds);
            // return res.json({message : "reached here"})
            bcrypt_1.default.hash(password, salt_Rounds, (err, hash) => __awaiter(this, void 0, void 0, function* () {
                if (err) {
                    return res.json({ message: "errror generating the hashed password", error: err });
                }
                else if (!err) {
                    const hashedPassword = hash;
                    if (hashedPassword) {
                        const array = email.split('@');
                        let user = new User_1.default({
                            email: email,
                            password: hashedPassword,
                            name: array[0]
                        });
                        yield user.save();
                        const Secret = process.env.SECERT;
                        const id = user._id;
                        const payload = {
                            id: id
                        };
                        try {
                            const token = jsonwebtoken_1.default.sign(payload, Secret);
                            return res.json({ message: "User created successfully", token: token });
                        }
                        catch (error) {
                            console.log(error);
                            return res.json({ message: "Error making the token" });
                        }
                        // res.json({message : user._id});
                    }
                }
            }));
            // Save user to the database
        }
        catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    });
}
exports.default = signupController;
