const { sequelize } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const Review = sequelize.define("review",{
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type:DataTypes.STRING
        }
    })

    return Review
}
