module.exports = (sequelize, DataTypes) => {
    const Commande = sequelize.define("commandes", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        personne:{
            type:DataTypes.STRING,
            allowNull: false
        },
        adresse: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tel: {
            type: DataTypes.STRING,
            allowNull: false
        },
        etat: {
            /**
             * EAP : en attente de payement
             * EC : commande prise en charge
             * LV : livrée
             */
            type: DataTypes.ENUM,
            values:["EAP", "CPC", "LV"],
            allowNull: false
        },
        trajets: {
            type: DataTypes.STRING,
            allowNull:true
        },
        commentaire:{
            type: DataTypes.STRING,
            allowNull:true
        },
        couverts:{
            type: DataTypes.BOOLEAN,
            allowNull:false
        }
    });
    return Commande
}
