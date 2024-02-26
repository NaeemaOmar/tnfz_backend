import express from 'express'
import {getProducts, getAProduct, addAProduct, editProduct, deleteProduct} from '../database.js'
import controller from '../controller/products.js'


const router = express.Router();


router.patch('/edit/:id', async (req, res) => {
    let productID = req.params.id
    let {prodName, quantity, price, category, prodDesc, imgUrl} = req.body
    let theEditedProduct = await editProduct(productID, prodName, quantity, price, category, prodDesc, imgUrl)
    res.send(theEditedProduct)
})

export default router