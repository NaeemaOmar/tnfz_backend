import express from 'express'
import {config} from 'dotenv'
import cors from 'cors'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser'


config();

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use(express.static('Views'))

app.use('/products', productRoutes)
app.use('/users', userRoutes)

// app.get('/users', async(req, res)=>{
//     let theUsers = await getUsers()
//     res.send(theUsers)
// })


const PORT = process.env.MYSQL_ADDON_PORT;

// the http methods are w/in this comment

// app.get('/get/products', async(req, res)=>{
//     let theProducts = await getProducts()
//     res.send(theProducts)
// })

// app.get('/get/product/:id', async (req, res)=>{
//     let productID = req.params.id 
//     let theProduct = await getAProduct(productID)
//     res.send(theProduct)
// })

// app.post('/add/product', async (req, res)=>{
//     let {prodName, quantity, price, category, prodDesc, imgUrl} = req.body
//     let theNewProduct = await addAProduct(prodName, quantity, price, category, prodDesc, imgUrl)
//     res.send(theNewProduct)
// })

// app.patch('/edit/:id', async (req, res) => {
//     let productID = req.params.id
//     let {prodName, quantity, price, category, prodDesc, imgUrl} = req.body
//     let theEditedProduct = await editProduct(productID, prodName, quantity, price, category, prodDesc, imgUrl)
//     res.send(theEditedProduct)
// })

// app.delete('/delete/product/:id', async (req, res) => {
//     let id = req.params.id
//     let deleteNow = await deleteProduct(id)
//     res.send(deleteNow)
// })

// the http methods end here


app.listen(PORT, ()=>{
    console.log(`The backend is running on http://localhost:${PORT}`)
})