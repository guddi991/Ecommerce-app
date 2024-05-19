

const userController = require('../controllers/userController')
const routerUser = require('express').Router()

routerUser.post('/addUser',userController.addUser)

routerUser.get('/allUser',userController.getAllUsers)

routerUser.get('/:id',userController.getOneUser)

routerUser.put('/:id',userController.updateUser)

routerUser.delete('/:id',userController.deleteUser)

module.exports = routerUser