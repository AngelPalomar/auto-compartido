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
exports.del = exports.put = exports.post = exports.getById = exports.get = void 0;
const usuario_model_1 = __importDefault(require("./usuario.model"));
//TODO: Basic response
function get(_, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const usuarios = yield usuario_model_1.default.findAll();
        return res.status(200).send(usuarios);
    });
}
exports.get = get;
function getById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const usuario = yield usuario_model_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).send(usuario);
        }
        else {
            return res.status(200).send(usuario);
        }
    });
}
exports.getById = getById;
function post(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const usuario = yield usuario_model_1.default.create(Object.assign({}, req.body));
            return res.status(200).send(usuario);
        }
        catch (error) {
            return res.status(500).send(error);
        }
    });
}
exports.post = post;
function put(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            yield usuario_model_1.default.update(Object.assign({}, req.body), { where: { id } });
            const updatedUsuario = yield usuario_model_1.default.findByPk(id);
            return res.status(200).send(updatedUsuario);
        }
        catch (error) {
            return res.status(500).send(error);
        }
    });
}
exports.put = put;
function del(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const usuario = yield usuario_model_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404);
        }
        else {
            yield usuario_model_1.default.destroy({ where: { id } });
            return res.status(200).send(usuario);
        }
    });
}
exports.del = del;
