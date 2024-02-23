import mysql from 'mysql2' 
import {config} from 'dotenv'

config();


const pool = mysql.createPool({
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    user: process.env.USER
}).promise()

let getProducts = async ()=>{
    let [productsArray] = await pool.query(`
    SELECT * FROM tnfz_products
    `)
    // console.log(productsArray)
    return productsArray
}
// console.log(await getProducts());


let getAProduct = async (id)=>{
    let [product] = await pool.query(`
    SELECT * from tnfz_products WHERE prodID = ?
    `, [id])
    return product
}
// console.log(await getAProduct(2));

let addAProduct = async (prodName, quantity, price, category, prodDesc, imgUrl) =>{
    let insertProd = await pool.query(`
    INSERT INTO tnfz_products (prodName, quantity, price, category, prodDesc, imgUrl) VALUES (?, ?, ?, ?, ?, ?)
    `, [prodName, quantity, price, category, prodDesc, imgUrl]) 
    let [newProd] = await pool.query(`
    SELECT * FROM tnfz_products WHERE prodName = ?
    `, [prodName])
    return newProd
}
// console.log(await addAProduct("Phone 2", 2, "28.75", "HuaWei phone", "This is a phone with good quality for its pricepoint", "This is the url"))

// NOTE TO JODIE: 
//      1) This fx needs the product name to be unique else it will return
//         >1 item
//      2) All the fields in the "add product" modal need a "required"      
//         attribute since the columns in the database all have a "NOT NULL" constraint

// PROBLEM: This fx is not dynamic and requires ALL values to be present. This is necessary since the website will look untidy/uneven if there are some elements missing.

let editProduct = async (id, prodName, quantity, price, category, prodDesc, imgUrl) => {
    if(prodName){
        let editName = await pool.query(`
        UPDATE tnfz_products SET prodName = ? WHERE prodID = ?
        `, [prodName, id])
    } else {
        console.log("There is no product name to update")
    }
    // The code below is the ternary operator version of the conditional satatment above.
    let editQuantity = quantity ? await pool.query(`UPDATE tnfz_products SET quantity = ? WHERE prodID = ?`, [quantity, id]) : console.log("There is no quantity to be updated")

    let editPrice = price ? await pool.query(`UPDATE tnfz_products SET price = ? WHERE prodID = ?`, [price, id]) : console.log("There is no price to be updated")

    let editCategory = category ? await pool.query(`UPDATE tnfz_products SET category = ? WHERE prodID = ?`, [category, id]) : console.log("There is no category to be updated")

    let editProdDesc = prodDesc ? await pool.query(`UPDATE tnfz_products SET prodDesc = ? WHERE prodID = ?`, [prodDesc, id]) : console.log("There is no prodDesc to be updated")

    let editUrl = imgUrl ? await pool.query(`UPDATE tnfz_products SET imgUrl = ? WHERE prodID = ?`, [imgUrl, id]) : console.log("There is no imgUrl to be updated")

    let showProduct = await getAProduct(id)
    return showProduct
}

// Test 1: does the 'true' condition work
// await editProduct(10, "Testing editProduct() fx", 12, 15.32, "test editProduct() fx", "Let's say this is a url when it's actually a prodDesc", "This actually is a url")

// Test 2: does the 'false' condition work
// await editProduct(10, null, null, null, null, null)

// NOTE TO SELF: The conditional statements of the editProduct() fx work when true and when values are empty/null. The ternary operator work at true and false as well

// NOTE TO JODIE: This function needs a required at the id since it won't work w/out the product id. It also needs to be streamlined so that it takes as little line of code as possible

let deleteProduct = async (id) => {
    let deletedProduct = await getAProduct(id)
    let deleteTheProduct = await pool.query(`
    DELETE FROM tnfz_products WHERE prodID = ?
    `, [id])
    return deletedProduct
}

// console.log(await deleteProduct(13))

export {getProducts, getAProduct, addAProduct, editProduct, deleteProduct}