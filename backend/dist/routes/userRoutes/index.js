"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const login_1 = __importDefault(require("../../controllers/user/login"));
const signup_1 = __importDefault(require("../../controllers/user/signup"));
const zodVerify_1 = __importDefault(require("../../middleware/zodVerify"));
const tokenVerify_1 = __importDefault(require("../../middleware/tokenVerify"));
const me_1 = __importDefault(require("../../controllers/user/me"));
router.post("/login", zodVerify_1.default, login_1.default);
router.post("/signup", zodVerify_1.default, signup_1.default);
router.get("/me", tokenVerify_1.default, me_1.default);
exports.default = router;
