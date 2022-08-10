import { createPool, Pool } from 'mysql';
import {
    MY_SQL_DB_CONNECTION_LIMIT, MY_SQL_DB_DATABASE,
    MY_SQL_DB_HOST, MY_SQL_DB_PASSWORD, MY_SQL_DB_PORT, MY_SQL_DB_USER
} from '../config/db.config';

let pool: Pool;

export const init = () => {
    try {
        pool = createPool({
            connectionLimit: MY_SQL_DB_CONNECTION_LIMIT,
            host: MY_SQL_DB_HOST,
            port: MY_SQL_DB_PORT,
            user: MY_SQL_DB_USER,
            password: MY_SQL_DB_PASSWORD,
            database: MY_SQL_DB_DATABASE
        });

        console.debug("MySQL Adapter Pool generated successfully");
    } catch (error: any) {
        console.error("[mysql.connector][init][Error]: ", error);
        throw new Error('Failed to initialize pool');
    }
}

export const execute = <T>(query: string, params: string[] | Object): Promise<T> => {
    try {
        if (!pool) throw new Error('Pool was not created. Ensure pool is created when running the app.');

        return new Promise<T>((resolve, reject) => {
            pool.query(query, params, (error, results) => {
                if (error) reject(error);
                else resolve(results);
            });
        });

    } catch (error) {
        console.error('[mysql.connector][execute][Error]: ', error);
        throw new Error('failed to execute MySQL query');
    }
}