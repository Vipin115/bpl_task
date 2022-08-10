const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
       
        name: { type: String, required: true },
        quantity: { type: String, required: true },
        amount: {type: String,required: true },
    },
    {
        versionKey: false,
        timeStamps:true
    }
)

const productData = mongoose.model("product", productSchema);

module.exports = productData;