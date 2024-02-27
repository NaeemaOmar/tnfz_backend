import express from 'express'
import userController from '../controller/users.js'

const router = express.Router()

router 
    .route('/')
        .get(userController.getAllUsers)
        .post(userController.addAUser)
        
router 
    .route('/:id')
        .get(userController.getAUser)
        .patch(userController.editAUser)
        .delete(userController.deleteAUser)
router 
    .route('/check')
        .post(userController.checkAUser)
export default router