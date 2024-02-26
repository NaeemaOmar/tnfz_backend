import {getProducts, getAProduct, addAProduct, editProduct, deleteProduct} from '../model/database.js'

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
        console.log('The addProduct fx is working now')
        let {prodName, quantity, price, category, prodDesc, imgUrl} = req.body
        // let theNewProduct = await addAProduct(prodName, quantity, price, category, prodDesc, imgUrl)
        await addAProduct(prodName, quantity, price, category, prodDesc, imgUrl)
        res.send(await getProducts())
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
