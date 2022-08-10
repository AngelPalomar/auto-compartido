"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sequelize_connector_1 = __importDefault(require("./utils/sequelize.connector"));
const usuario_routes_1 = __importDefault(require("./modules/usuario/usuario.routes"));
const app = (0, express_1.default)();
const PORT = 3977;
//Connection MySQL
try {
    sequelize_connector_1.default.authenticate();
    sequelize_connector_1.default.sync();
    console.debug("Sequelize MySQL Connection has been established successfully.");
    //JSON config
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use(express_1.default.json());
    //Routes
    app.use(`/api`, usuario_routes_1.default);
    app.listen(PORT, () => {
        console.log(`Auto Compartido REST API Listening at http://localhost:${PORT}`);
    });
}
catch (error) {
    console.error("Unable to connect to the database: ", error);
}
