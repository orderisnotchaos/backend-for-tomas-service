module.exports = (sequelize, dataTypes) =>{


    const alias = "livetracking";

    const model = {
        id:{
            type:dataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        userId:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        origin:{
            type:dataTypes.STRING,
            allowNull:false,
        },
        destination:{
            type:dataTypes.STRING,
            allowNull:false,
        },
        product:{
            type:dataTypes.STRING,
            allowNull:false
        },
        estimatedArrival:{
            type:dataTypes.DATE ,
            allowNull:false
        },
    };

    config = {
        tableName : "livetracking",
        timestamps: true,
        underscored:false
    }

    let LiveTracking = sequelize.define(alias,model,config);

    return LiveTracking;
}