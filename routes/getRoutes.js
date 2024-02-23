import express from 'express'
import {getProducts, getAProduct, addAProduct, editProduct, deleteProduct} from '../database.js'
import controller from '../controller/products.js'

const router = express.Router();

router 
    .route('/products')
        .get(controller.getAllProducts)

router 
    .route('/product/:id')
        .get(controller.getAProduct)

export default router