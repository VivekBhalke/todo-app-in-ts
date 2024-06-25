"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const connect_1 = __importDefault(require("./db/connect"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json()); // Parse JSON requests
(0, connect_1.default)();
const index_1 = __importDefault(require("./routes/index"));
app.get('/', (req, res) => {
    res.json({ message: "hi there" });
});
app.use("/api/v1", index_1.default);
app.listen(3000, () => console.log('Server listening on port 3000'));
