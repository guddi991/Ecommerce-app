
const db = require('../models')
const Review = db.reviews

// 1. add review

const addReview = async (req,res) =>{
    let info = {
        rating : req.body.rating,
        description : req.body.description
    }
    
    let reviews = await Review.create(info)
    res.status(200).send(reviews)
}

// 2. get all review

const getAllReview = async (req,res) =>{
    let allReview = await Review.findAll()
    res.status(200).send(allReview)
}

// 3. get one review by id

const getOneReview = async(req,res) =>{
    let id = req.params.id
    let oneReview = await Review.findOne({ where: {id:id} })
    res.status(200).send(oneReview)
}

// 4. update review by id

const updateReview = async (req,res) => {
    let id = req.params.id
    let updateReview = await Review.update(req.body, { where:{ id:id}} )
    res.status(200).send(updateReview)
}

// 5. delete review by id

const deleteReview = async (req,res) =>{
    let id = req.params.id
    let deleteOneReview = await Review.destroy({ where :{id:id}})
    res.status(200).send('product deleted')
}

module.exports = {
    addReview,
    getAllReview,
    getOneReview,
    updateReview,
    deleteReview,

}