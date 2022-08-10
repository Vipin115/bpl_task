const express = require("express");
const productData = require("../model/product.model");

const router = express.Router();

router.post("", async (req, res)=>{
    try {
        const salesData = await productData.create({
            name: req.body.title,
            quantity: req.body.price,
            amount: req.body.description,
            
        });
    return res.send(salesData)
    } catch (err) {
       return res.send(err.message)
    }
})

router.get("", async (req, res)=>{

    
    try {
        const salesData = await productData.find().lean().exec();
    return res.send(salesData)
    } catch (err) {
       return res.send(err.message)
    }
})

router.get("/:_id", async (req, res)=>{

   
    try {
        const salesData = await productData.findById(req.params._id).lean().exec();

        
    return res.send(salesData)
    } catch (err) {
       return res.send(err.message)
    }
})

module.exports = router