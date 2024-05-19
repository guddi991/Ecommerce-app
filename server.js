
const dotenv = require('dotenv')
dotenv.config();

const express = require('express')
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 5000
var corOptions = {
    origin: 'http://localhost:5000'
}


// middleware
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// routers
const routerProduct = require('./routes/productRoutes')
const routerUser = require('./routes/userRoutes') 

app.use('/api/products',routerProduct)
app.use('/api/user',routerUser)


// testing api
app.get('/',(req,res)=>{
    res.json({ message : 'hi from testing api' })
})


// server
app.listen(PORT,()=>{
    console.log("server started at PORT "+PORT)
})

