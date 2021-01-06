import express from 'express'
import app from '../app.js'
import Product from '../models/productSchema.js'

const router = express.Router()

router
.get("/", (req, res) => {
    Product.find({}, (err, products) => {
        if (err) {
            console.log(`Error: ${error}`)
        }
        else {
            res.json(products)
        }
    })

})
.post("/", (req, res) => {
    const name = req.body.name
    const description = req.body.description
    const price = req.body.price
    const new_product = new Product({
        name: name,
        description: description,
        price: price
    }).save((err) => {
        if (!err) {
            res.json(new_product)
        }
        else {
            res.send(err)
        }
    })



})
export default router