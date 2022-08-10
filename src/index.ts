import express from 'express';
import mysql from './utils/mysql.connector';
import UsuarioRoutes from './modules/usuario/usuario.routes';

const app = express();
const PORT = 3977;

//Connection MySQL
try {
    mysql.authenticate();
    mysql.sync();
    console.debug("MySQL Connection has been established successfully.");

    //JSON config
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    //Routes
    app.use(`/api`, UsuarioRoutes);

    app.listen(PORT, () => {
        console.log(`Auto Compartido REST API Listening at http://localhost:${PORT}`);
    })

} catch (error) {
    console.error("Unable to connect to the database: ", error);
}