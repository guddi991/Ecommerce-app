
const dotenv = require('dotenv');
dotenv.config();

const { Sequelize, DataTypes } = require('sequelize');
console.log(process.env.DB_NAME)
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,{
        host: process.env.HOST,
        dialect: process.env.dialect,
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        dialectOptions: {
            connectTimeout: 60000 // Increase connection timeout to 60 seconds
        }
    }
)

// 
const connectDB = async ()=>{
    try{
        await sequelize.authenticate()
        .then((req)=>{
            console.log("DB connected...")
        })
        .catch((err)=>{
            console.log("Unable to connect, Error : "+err)
        });
    }
    catch(error){
        console.error(error)
    }
}
connectDB()

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.products = require('./productModel.js')(sequelize, DataTypes)
db.reviews = require('./reviewModel.js')(sequelize,DataTypes)
db.user = require('./userModel.js')(sequelize,DataTypes)



db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})

module.exports = db