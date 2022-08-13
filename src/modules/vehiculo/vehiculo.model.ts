import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db/sequelize.connector';

class Vehiculo extends Model { }

Vehiculo.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    numeroPlaca: {
        type: DataTypes.STRING,
        unique: true
    },
    modelo: {
        type: DataTypes.STRING
    },
    color: {
        type: DataTypes.STRING
    },
    tipo: {
        type: DataTypes.ENUM('automovil', 'motocicleta')
    },
    idUsuario: {
        type: DataTypes.BIGINT.UNSIGNED,
        unique: true
    }
}, {
    sequelize: sequelize,
    tableName: 'vehiculo',
    modelName: 'Vehiculo',
    timestamps: false
});

export default Vehiculo;