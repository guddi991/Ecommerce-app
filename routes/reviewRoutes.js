
const reviewController = require('../controllers/reviewContoller')
const routerReview = require('express').Router()

routerReview.post('/addReview',reviewController.addReview)

routerReview.get('/allReviews',reviewController.getAllReview)

routerReview.get('/:id',reviewController.getOneReview)

routerReview.put('/:id',reviewController.updateReview)

routerReview.delete('/:id',reviewController.deleteReview)

module.exports = routerReview