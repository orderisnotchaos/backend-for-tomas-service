module.exports = (sequelize, dataTypes) =>{


    const alias = "Data";

    const model = {
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        userId:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        name:{
            type:dataTypes.STRING,
            allowNull: false
        },
        address:{
            type:dataTypes.STRING,
            allowNull:false
        },
        street:{
            type:dataTypes.STRING,
            allowNull:false
        },
        postalCode:{
            type:dataTypes.STRING,
            allowNull:false
        },
        city:{
            type:dataTypes.STRING,
            allowNull:false
        },
        country:{
            type:dataTypes.STRING,
            allowNull:false
        },
        phone:{
            type:dataTypes.STRING,
            allowNull:false
        },
        ucoQuantity:{
            type:dataTypes.BOOLEAN,
            allowNull:false
        },
        ucoDestinatary:{
            type:dataTypes.STRING,
            allowNull:false
        },
        date:{
            type:dataTypes.STRING,
            allowNull:false
        },
        digitalSignature:{
            type:dataTypes.STRING,
            allowNull:false
        }
    };

    const config = {
        underscored:false,
        timestamps: false,
        tableName: "data"   
    };

    const Data = sequelize.define(alias, model, config);

    return Data;
}