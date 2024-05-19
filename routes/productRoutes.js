

const productController = require('../controllers/productController')
const routerProduct = require('express').Router()

routerProduct.post('/addProduct',productController.addProduct)

routerProduct.get('/allProduct',productController.getallProducts)

routerProduct.get('/:id',productController.getOneProduct)

routerProduct.put('/:id',productController.updateProduct)

routerProduct.delete('/:id',productController.deleteProduct)

routerProduct.get('/:id',productController.getPublishedProduct)

module.exports = routerProduct

