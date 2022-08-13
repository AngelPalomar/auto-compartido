import express from 'express';
import sequelize from './db/sequelize.connector';
import UsuarioRoutes from './modules/usuario/usuario.routes';
import VehiculoRoutes from './modules/vehiculo/vehiculo.routes';
import RutaRoutes from './modules/ruta/ruta.routes';
import PuntoRoutes from './modules/punto/punto.routes';

const app = express();
const PORT = 3977;

//Connection MySQL
try {
    sequelize.authenticate();
    sequelize.sync({ force: false });
    console.debug("Sequelize MySQL Connection has been established successfully.");

    //JSON config
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    //Routes
    app.use(`/api`, UsuarioRoutes);
    app.use(`/api`, VehiculoRoutes);
    app.use(`/api`, RutaRoutes);
    app.use(`/api`, PuntoRoutes);

    app.listen(PORT, () => {
        console.log(`Auto Compartido REST API Listening at http://localhost:${PORT}`);
    })

} catch (error) {
    console.error("Unable to connect to the database: ", error);
}