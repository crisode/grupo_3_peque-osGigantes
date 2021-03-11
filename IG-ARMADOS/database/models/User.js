module.exports = (sequelize, dataTypes) => {

    const alias = "Usuarios"; //defino el alias del modelo

    const cols = {
        id : {
            type : dataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        name : {
            type : dataTypes.STRING(45),                                          
            allowNull : false
        },
        last_name : {
            type : dataTypes.STRING(45),                                          
            allowNull : false
        },
        email : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        password : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        avatar : {
            type : dataTypes.STRING(45),
            allowNull : true
        },
        rol_id : {
            type : dataTypes.INTEGER,
            allowNull : true
        }
    }; // defino las propiedades de los datos de la tabla

    const config = {
        tableName : "users",
        timestamps : true,
        underscored: true
    };

    const User = sequelize.define(alias, cols, config); // utilizo el metodo define de sequelize para definir las 3 constantes creadas

    User.associate = (models) => {
        User.belongsTo(models.Rol, {
            as : "rol",
            foreignKey : "rol_id"
        })
    };

    return User;
};