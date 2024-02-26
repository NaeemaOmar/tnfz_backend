import express from 'express'
import controller from '../controller/products.js'

const router = express.Router();

router 
    .route('/')
        .get(controller.getAllProducts)
        .post(controller.addAProduct)

router 
    .route('/:id')
        .get(controller.getAProduct)
        .patch(controller.editAProduct)
        .delete(controller.deleteAProduct)
        

export default router