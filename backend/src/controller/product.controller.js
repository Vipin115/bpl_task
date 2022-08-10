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

        
        return res.send(salesData)
        
        
    
    } catch (err) {
       return res.send(err.message)
    }
})
router.get("/todaysrevenue", async (req, res)=>{

    
    try {
        var start = new Date();
        start.setHours(0,0,0,0)
        var end = new Date();
        end.setHours(23,59,59,999)

         const salesData = await productData.find({
           createdAt:{$gte:start, $lt:end}
         });

         let totalamount = salesData.map((item)=>item.amount).reduce((acc,curr)=>acc+curr)
         console.log(totalamount)

         return res.status(200).send((totalamount).toString())
    
    } catch (err) {
       return res.status(500).send(err.message)
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