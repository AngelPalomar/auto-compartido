import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db/sequelize.connector';

class Punto extends Model { }

Punto.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    idRuta: {
        type: DataTypes.BIGINT.UNSIGNED
    },
    lugar: {
        type: DataTypes.STRING
    },
    costo: {
        type: DataTypes.DECIMAL
    }
}, {
    sequelize: sequelize,
    tableName: 'punto',
    modelName: 'Punto',
    timestamps: false,
});

export default Punto;