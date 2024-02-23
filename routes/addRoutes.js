import express from 'express'
import {getProducts, getAProduct, addAProduct, editProduct, deleteProduct} from '../database.js'

const router = express.Router();

router
    .route('/product')
        .post(addAProduct)

export default router