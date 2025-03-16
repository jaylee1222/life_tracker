"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server/server.ts
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001;
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
