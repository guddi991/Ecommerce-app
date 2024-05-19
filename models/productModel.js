const { sequelize } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const Product = sequelize.define("product",{
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING
        },
    })

    return Product
}
