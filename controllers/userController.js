
const db = require('../models')

const User = db.user

// 1. create User
const addUser= async (req,res)=>{
    let info = {
        user_name : req.body.user_name,
        user_password : req.body.user_password,
        user_gender : req.body.user_gender,
        user_email : req.body.user_email,
        user_phone : req.body.user_phone,
        user_city : req.body.user_city,
        user_pincode : req.body.user_pincode,
        user_country : req.body.user_country,
    }

    const Users = await User.create(info)
    res.status(200).send(Users)

}

// 2. get all user
const getAllUsers = async (req,res) =>{
    let Users = await User.findAll()
    res.status(200).send(Users)
}

// 3. get single user by id
const getOneUser = async (req,res) =>{
    let id = req.params.id;
    let oneUser = await User.findOne({where :{id:id} })
    res.status(200).send(oneUser);
}

// 4. update user by id
const updateUser = async (req,res)=>{
    let id = req.params.id
    let updateOneUser = await User.update(req.body, {where :{id:id}} )
    res.status(200).send(updateOneUser);
}

// 5. delete user by id
const deleteUser = async (req,res) =>{
    let id = req.params.id
    let deleteOneUser = await User.destroy( { where: {id:id}} )
    res.status(200).send("User Deleted.")
}



module.exports = {
    addUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
}