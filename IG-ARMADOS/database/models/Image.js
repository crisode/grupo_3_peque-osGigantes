module.exports = (sequelize, dataTypes) => {


    const alias = "Imagen";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            prymaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        }

    };

    const config = {
        tableName: "Images",  /* Nombre de la tabla */
        timestamps: true,     /* Marca de tiempo */
        underscored: true     /* como esta escrito */

    };
    Image.associate = (models) => {
        Image.belonsTo(models.Producto, {
            as : "producto",
            foreignKey : "image_id"
        })
    };











    const Image = sequelize.define(alias, cols, config)
    return Image
}