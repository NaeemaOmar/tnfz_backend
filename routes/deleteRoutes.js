import express from 'express'
import {getProducts, getAProduct, addAProduct, editProduct, deleteProduct} from '../database.js'
import controller from '../controller/products.js'

const router = express.Router();

router
    .route('/product/:id')
        .delete(controller.deleteAProduct)

router.delete('/delete/product/:id', async (req, res) => {
    let id = req.params.id
    let deleteNow = await deleteProduct(id)
    res.send(deleteNow)
})

export default router