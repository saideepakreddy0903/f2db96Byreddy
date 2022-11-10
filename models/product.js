const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    product1:String,
    product2:Number,
    product3:String
})

module.exports = mongoose.model("product",productSchema)