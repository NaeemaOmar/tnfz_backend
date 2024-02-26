import {deleteUser, editUser, addAUser, getAUser, getUsers} from '../model/database.js'

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
    addAUser: async (req, res)=>{
        console.log('The addUser fx is working now')
        let {username, hashedPassword, txtPassword} = req.body
        await addAUser(username, hashedPassword, txtPassword)
        res.send(await getUsers())
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
