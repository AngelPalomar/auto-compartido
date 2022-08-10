"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
const sequelize = new sequelize_1.Sequelize(db_config_1.MY_SQL_DB_DATABASE, db_config_1.MY_SQL_DB_USER, db_config_1.MY_SQL_DB_PASSWORD, {
    host: db_config_1.MY_SQL_DB_HOST,
    port: db_config_1.MY_SQL_DB_PORT,
    dialect: 'mysql'
});
exports.default = sequelize;
