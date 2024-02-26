import express from 'express'
const router = express.Router()
import userController from '../controller/users.js'
router 
    .route('/')
        .get(userController.getAllUsers)
        .post(userController.addAUser)
        

export default router