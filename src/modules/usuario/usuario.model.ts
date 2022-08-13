import { DataTypes, Model } from 'sequelize';
import sequelize from '../../db/sequelize.connector';
import Ruta from '../ruta/ruta.model';
import Vehiculo from '../vehiculo/vehiculo.model';

class Usuario extends Model { }

Usuario.init({
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    nombres: {
        type: DataTypes.STRING
    },
    apellidos: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING,
        unique: true
    },
    contrasena: {
        type: DataTypes.STRING
    },
    matricula: {
        type: DataTypes.STRING,
        unique: true
    },
    fotoLicencia: {
        type: DataTypes.STRING
    },
    asegurado: {
        type: DataTypes.TINYINT
    },
    fotoPerfil: {
        type: DataTypes.STRING
    },
    activo: {
        type: DataTypes.TINYINT
    },
    idRol: {
        type: DataTypes.BIGINT.UNSIGNED
    }
}, {
    sequelize: sequelize,
    tableName: 'usuario',
    modelName: 'Usuario',
    timestamps: false
});

Usuario.hasOne(Vehiculo, { foreignKey: 'idUsuario' });
Vehiculo.belongsTo(Usuario, { foreignKey: 'idUsuario' });

Usuario.hasMany(Ruta, { foreignKey: 'idUsuario' });
Ruta.belongsToMany(Usuario, { through: 'ruta' });

export default Usuario;

