
module.exports = (Sequelize, DataTypes ) =>{

    const alias = 'User';

    const model = {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true,
        },
        name: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        document: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        },
        phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        },
        email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
        },
        address: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        city: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        country: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    };

    const config = {
        tablename: "user",
        timestamps:true,
        underscored:false
    };
    const User = Sequelize.define(alias, model, config);

    // Define the OneToOne relationship with the "Data" model
    User.associate = (models) =>{
        User.hasOne(models.Data, { foreignKey: 'userId', onDelete: 'CASCADE' });
        User.hasMany(models.livetracking, { foreignKey: 'userId', onDelete: 'CASCADE' });

    };

    return User;
};