
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
const router = require('./routes/productRoutes')
app.use('/api/products',router)


// testing api
app.get('/',(req,res)=>{
    res.json({ message : 'hi from testing api' })
})


// server
app.listen(PORT,()=>{
    console.log("server started at PORT "+PORT)
})

