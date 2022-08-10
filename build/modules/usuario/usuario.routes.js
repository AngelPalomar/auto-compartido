"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_controller_1 = require("./usuario.controller");
const api = express_1.default.Router();
api.get('/usuarios', usuario_controller_1.get);
api.get('/usuarios/:id', usuario_controller_1.getById);
api.post('/usuarios', usuario_controller_1.post);
api.put('/usuarios/:id', usuario_controller_1.put);
api.delete('/usuarios/:id', usuario_controller_1.del);
exports.default = api;
