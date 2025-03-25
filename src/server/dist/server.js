"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server/server.ts
const express_1 = __importDefault(require("express"));
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    database: 'test.db',
    dialect: 'sqlite',
    storage: '../../database.sqlite',
    logging: console.log
});
const app = (0, express_1.default)();
const port = 3001;
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});
sequelize.authenticate().then(() => {
    console.log('Connection to database has been established successfully.');
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});
