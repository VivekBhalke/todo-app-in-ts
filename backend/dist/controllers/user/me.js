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
function me(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!req.headers.user_id) {
            return res.json({ message: "no token verified" });
        }
        const user = yield User_1.default.findById(req.headers.user_id);
        if (!user) {
            return res.json({ message: "no such user" });
        }
        const object = {
            email: user.email,
            name: user.name,
            id: user._id
        };
        return res.json({ object: object });
    });
}
exports.default = me;
