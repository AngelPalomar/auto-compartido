import { Sequelize } from 'sequelize'
import {
    MY_SQL_DB_DATABASE, MY_SQL_DB_HOST, MY_SQL_DB_PASSWORD, MY_SQL_DB_PORT,
    MY_SQL_DB_USER
} from '../config/db.config';

const sequelize = new Sequelize(MY_SQL_DB_DATABASE, MY_SQL_DB_USER, MY_SQL_DB_PASSWORD, {
    host: MY_SQL_DB_HOST,
    port: MY_SQL_DB_PORT,
    dialect: 'mysql'
});

export default sequelize;