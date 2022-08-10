"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = exports.init = void 0;
const mysql_1 = require("mysql");
const db_config_1 = require("../config/db.config");
let pool;
const init = () => {
    try {
        pool = (0, mysql_1.createPool)({
            connectionLimit: db_config_1.MY_SQL_DB_CONNECTION_LIMIT,
            host: db_config_1.MY_SQL_DB_HOST,
            port: db_config_1.MY_SQL_DB_PORT,
            user: db_config_1.MY_SQL_DB_USER,
            password: db_config_1.MY_SQL_DB_PASSWORD,
            database: db_config_1.MY_SQL_DB_DATABASE
        });
        console.debug("MySQL Adapter Pool generated successfully");
    }
    catch (error) {
        console.error("[mysql.connector][init][Error]: ", error);
        throw new Error('Failed to initialize pool');
    }
};
exports.init = init;
const execute = (query, params) => {
    try {
        if (!pool)
            throw new Error('Pool was not created. Ensure pool is created when running the app.');
        return new Promise((resolve, reject) => {
            pool.query(query, params, (error, results) => {
                if (error)
                    reject(error);
                else
                    resolve(results);
            });
        });
    }
    catch (error) {
        console.error('[mysql.connector][execute][Error]: ', error);
        throw new Error('failed to execute MySQL query');
    }
};
exports.execute = execute;
