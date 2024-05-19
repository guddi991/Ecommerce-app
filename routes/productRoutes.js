

const productController = require('../controllers/productController')
const router = require('express').Router()

router.post('/addProduct',productController.addProduct)

router.get('/allProduct',productController.getallProducts)

router.get('/:id',productController.getOneProduct)

router.put('/:id',productController.updateProduct)

router.delete('/:id',productController.deleteProduct)

router.get('/:id',productController.getPublishedProduct)

module.exports = router

