import {getProducts, getAProduct, addAProduct, editProduct, deleteProduct} from '../database.js'

export default {
    getAllProducts: async(req, res)=>{
        let theProducts = await getProducts()
        res.send(theProducts)
    },
    getAProduct: async (req, res)=>{
        let productID = req.params.id 
        let theProduct = await getAProduct(productID)
        res.send(theProduct)
    },
    addAProduct: async (req, res)=>{
        let {prodName, quantity, price, category, prodDesc, imgUrl} = req.body
        let theNewProduct = await addAProduct(prodName, quantity, price, category, prodDesc, imgUrl)
        console.log('The addProduct fx is working now')
        res.send(theNewProduct)
    },
    editAProduct: async (req, res) => {
        let productID = req.params.id
        let {prodName, quantity, price, category, prodDesc, imgUrl} = req.body
        let theEditedProduct = await editProduct(productID, prodName, quantity, price, category, prodDesc, imgUrl)
        res.send(theEditedProduct)
    },
    deleteAProduct: async (req, res) => {
        let id = req.params.id
        let deleteNow = await deleteProduct(id)
        res.send(deleteNow)
    }
}
