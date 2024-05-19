
const { sequelize } = require("sequelize")

module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define("User",{
        user_name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        user_password: {
            type: DataTypes.STRING
        },
        user_gender: {
            type: DataTypes.STRING
        },
        user_email: {
            type: DataTypes.STRING
        },
        user_phone: {
            type: DataTypes.INTEGER
        },
        user_city: {
            type: DataTypes.STRING
        },
        user_pincode: {
            type: DataTypes.INTEGER
        },
        user_country: {
            type: DataTypes.STRING
        }
    })

    return User
}