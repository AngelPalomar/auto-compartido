"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_connector_1 = __importDefault(require("../../utils/sequelize.connector"));
class Usuario extends sequelize_1.Model {
}
Usuario.init({
    id: {
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    nombres: {
        type: sequelize_1.DataTypes.STRING
    },
    apellidos: {
        type: sequelize_1.DataTypes.STRING
    },
    correo: {
        type: sequelize_1.DataTypes.STRING,
        unique: true
    },
    contrasena: {
        type: sequelize_1.DataTypes.STRING
    },
    matricula: {
        type: sequelize_1.DataTypes.STRING,
        unique: true
    },
    fotoLicencia: {
        type: sequelize_1.DataTypes.STRING
    },
    asegurado: {
        type: sequelize_1.DataTypes.TINYINT
    },
    fotoPerfil: {
        type: sequelize_1.DataTypes.STRING
    },
    activo: {
        type: sequelize_1.DataTypes.TINYINT
    },
    idRol: {
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED
    }
}, {
    sequelize: sequelize_connector_1.default,
    tableName: 'usuario',
    modelName: 'Usuario',
    timestamps: false
});
exports.default = Usuario;
