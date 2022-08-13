import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db/sequelize.connector';
import Punto from '../punto/punto.model';

class Ruta extends Model { }

Ruta.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    inicio: {
        type: DataTypes.STRING
    },
    destino: {
        type: DataTypes.STRING
    },
    horaSalida: {
        type: DataTypes.TIME
    },
    lugaresDisponibles: {
        type: DataTypes.INTEGER
    },
    estado: {
        type: DataTypes.ENUM('preparacion', 'curso', 'terminada')
    },
    activo: {
        type: DataTypes.TINYINT
    },
    idUsuario: {
        type: DataTypes.BIGINT.UNSIGNED
    },
}, {
    sequelize: sequelize,
    tableName: 'ruta',
    modelName: 'Ruta',
    timestamps: false
});

Ruta.hasMany(Punto, { foreignKey: 'idRuta' });
Punto.belongsTo(Ruta, { foreignKey: 'idRuta' });

export default Ruta;