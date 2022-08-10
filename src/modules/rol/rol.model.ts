import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db/sequelize.connector';
import Usuario from '../usuario/usuario.model';

class Rol extends Model { }

Rol.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.ENUM('conductor', 'admin')
    }
}, {
    sequelize: sequelize,
    tableName: 'rol',
    modelName: 'Rol',
    timestamps: false
});

Usuario.belongsTo(Rol, { foreignKey: 'idRol' });

export default Rol;