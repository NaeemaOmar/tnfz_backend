import bcrypt from 'bcrypt'
import {deleteUser, editUser, addAUser, getAUser, getUsers, checkUser} from '../model/database.js'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'

export default {
    getAllUsers: async(req, res)=>{
        let theUsers = await getUsers()
        res.send(theUsers)
    },
    getAUser: async (req, res)=>{
        let UserID = req.params.id 
        let theUser = await getAUser(UserID)
        res.send(theUser)
    },
    checkAUser: async (req, res)=>{
        let {username, txtPassword} = req.body 
        let checkUserExistence = await checkUser(username)
        if (checkUserExistence.length > 0){
            console.log("returned array has at least 1 items")
            let [confirmedUser] = checkUserExistence
            let storedHashPassword = confirmedUser.hashedPassword
            let comparedPasswords = bcrypt.compare(txtPassword, storedHashPassword, (err, result)=>{
                if (err){
                    console.log(err)
                } else{
                    if (result){
                        // const token = jwt.sign({username: username}, process.env.SECRET_KEY, {expiresIn: '1h'})
                        console.log(`The passwords DO match. The username has been assigned the following token which will expire at 10am: ${token}`)
                    } else {
                        console.log("The passwords do NOT match")
                    }
                }
            })
            //userAuth middleware = 1) create token, 2) check/verify token, 3) verify correct username and password
            res.send(comparedPasswords)
            // res.send(confirmedUser.hashedPassword)
        } else {
            console.log("returned array does not have any items")
            res.send(`the following username does not exist: ${username}`)
        }
    },
    addAUser: async (req, res)=>{
        console.log('The addUser fx is working now')
        let {username, txtPassword} = req.body
        await addAUser(username, txtPassword)
        const token = jwt.sign({username: username}, process.env.SECRET_KEY, {expiresIn: '1h'})
        console.log(`the following user "${username}" has been created, had its password hashed and was assigned the following token that expires at 11am : ${token}`)
        try{
            res.cookie('jwt', token, {httpOnly: true})
            res.json({token})
            // The line above returns the token in json form
            res.send('The token was sent as a cookie')
        }catch(error){
            console.log(`This error was experienced: ${error}`)
        }
    },
    editAUser: async (req, res) => {
        let UserID = req.params.id
        let {username, hashedPassword, txtPassword} = req.body
        let theEditedUser = await editUser(UserID, username, hashedPassword, txtPassword)
        res.send(theEditedUser)
    },
    deleteAUser: async (req, res) => {
        let id = req.params.id
        let deletedUser = await getAUser(id)
        let deleteTheUser = await deleteUser(id)
        res.send(deletedUser)
    }
}
