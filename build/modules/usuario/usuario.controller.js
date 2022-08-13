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
const rol_model_1 = __importDefault(require("../rol/rol.model"));
const response = {};
//GET
function get(_, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const usuarios = yield usuario_model_1.default.findAll();
        response.status = 1;
        response.message = "Mostrando usuarios";
        response.data = usuarios;
        return res.status(200).send(response);
    });
}
exports.get = get;
//GET: ID
function getById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const usuario = yield usuario_model_1.default.findByPk(id, { include: rol_model_1.default });
        if (!usuario) {
            response.status = 0;
            response.message = "Usuario no encontrado.";
            response.data = usuario;
            return res.status(404).send(response);
        }
        else {
            response.status = 1;
            response.message = "Usuario encontrado.";
            response.data = usuario;
            return res.status(200).send(response);
        }
    });
}
exports.getById = getById;
function post(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const usuario = yield usuario_model_1.default.create(Object.assign({}, req.body));
            response.status = 1;
            response.message = "Usuario creado.";
            response.data = usuario;
            return res.status(200).send(response);
        }
        catch (error) {
            response.status = 0;
            response.message = "Ocurrió un error.";
            response.data = error;
            return res.status(500).send(response);
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
            response.status = 1;
            response.message = "Usuario modificado.";
            response.data = updatedUsuario;
            return res.status(200).send(response);
        }
        catch (error) {
            response.status = 0;
            response.message = "Ocurrió un error.";
            response.data = error;
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
            response.status = 0;
            response.message = "Usuario no encontrado.";
            response.data = usuario;
            return res.status(404).send(response);
        }
        else {
            yield usuario_model_1.default.destroy({ where: { id } });
            response.status = 1;
            response.message = "Usuario eliminado.";
            response.data = usuario;
            return res.status(200).send(response);
        }
    });
}
exports.del = del;
