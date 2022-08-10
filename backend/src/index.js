
const express = require("express");

//require("dotenv").config()

const connect = require("./configs/db");


const productController = require("./controller/product.controller");
const port = process.env.PORT || 3500




const app = express();

app.use(express.json())


app.use("/products", productController);
app.use("", productController);


app.listen(port, async (req, res) => {
    try {
        await connect()
    } catch (e) {
        console.error(e.message)
    }
    console.log("listening on port 3500")
})

