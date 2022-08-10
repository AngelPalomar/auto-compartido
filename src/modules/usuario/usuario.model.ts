import { DataTypes, Model } from 'sequelize';
import sequelize from '../../utils/sequelize.connector';

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


export default Usuario;

