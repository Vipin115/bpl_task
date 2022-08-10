const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
       
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        amount: {type: Number,required: true },
    },
    {
        versionKey: false,
        timestamps:true
    }
)

const productData = mongoose.model("product", productSchema);

module.exports = productData;