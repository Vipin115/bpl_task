const express = require("express");
const productData = require("../model/product.model");

const router = express.Router();

router.post("", async (req, res)=>{
    try {
        const salesData = await productData.create({
            name: req.body.name,
            quantity: req.body.quantity,
            amount: req.body.amount,
            
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


router.get("/mostsell", async (req, res)=>{

    
    try {
        const salesData = await productData.find().sort({quantity:-1}).limit(5).lean().exec();

        //const mostsellData=salesData.sort((a,b)=>b.quantity-a.quantity)

        // for(let i=0; i<5; i++){
        // }
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