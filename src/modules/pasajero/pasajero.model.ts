import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db/sequelize.connector';
import Usuario from '../usuario/usuario.model';

class Pasajero extends Model { }

Pasajero.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
    },
    idUsuarioConductor: {
        type: DataTypes.BIGINT.UNSIGNED
    },
    idUsuarioPasajero: {
        type: DataTypes.BIGINT.UNSIGNED
    }
}, {
    sequelize: sequelize,
    tableName: 'pasajero',
    modelName: 'Pasajero',
    timestamps: false
});

export default Pasajero;