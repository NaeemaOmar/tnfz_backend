import express from 'express'
import {config} from 'dotenv'
import cors from 'cors'
import {getProducts, getAProduct, addAProduct, editProduct, deleteProduct} from './database.js'

config();

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT;

// the html methods start here
app.get('/get/products', async(req, res)=>{
    let theProducts = await getProducts()
    res.send(theProducts)
})

app.get('/get/product/:id', async (req, res)=>{
    let productID = req.params.id 
    let theProduct = await getAProduct(productID)
    res.send(theProduct)
})

app.post('/add/product', async (req, res)=>{
    let {prodName, quantity, price, category, prodDesc, imgUrl} = req.body
    let theNewProduct = await addAProduct(prodName, quantity, price, category, prodDesc, imgUrl)
    res.send(theNewProduct)
})

app.patch('/edit/:id', async (req, res) => {
    let productID = req.params.id
    let {prodName, quantity, price, category, prodDesc, imgUrl} = req.body
    let theEditedProduct = await editProduct(productID, prodName, quantity, price, category, prodDesc, imgUrl)
    res.send(theEditedProduct)
})

app.delete('/delete/product/:id', async (req, res) => {
    let id = req.params.id
    let deleteNow = await deleteProduct(id)
    res.send(deleteNow)
})


// the html methods end here

app.listen(PORT, ()=>{
    console.log(`The backend is running on http://localhost:${PORT}`)
})