module.exports = (sequelize, DataTypes) => {
    const Produit = sequelize.define("produits", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        type:{
            type: DataTypes.ENUM('Repas', 'Service'),
            allowNull: false
        },
        prix: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        ingredients:{
            type:DataTypes.STRING,
            allowNull:true
        },
        vegan:{
            type:DataTypes.BOOLEAN,
            allowNull:true
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false
        }

    }, {timestamps:false});
    return Produit
}