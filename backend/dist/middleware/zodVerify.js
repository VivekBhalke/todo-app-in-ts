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
const zod_1 = __importDefault(require("zod"));
const schema = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(8)
});
function zodVerify(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user_details = { email: req.body.email, password: req.body.password };
        if (!user_details) {
            return res.json({ message: "please provide email and passoword" });
        }
        try {
            const result = yield schema.parse(user_details);
            console.log("zod verified");
            // return res.json({message : "zod verified"})
            next();
        }
        catch (error) {
            console.log("zod error");
            res.json({ message: "please provide corrrect email and passsword" });
        }
    });
}
exports.default = zodVerify;
