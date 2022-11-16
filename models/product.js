const mongoose = require("mongoose") 
const productSchema = mongoose.Schema({ 
    product_name: String, 
    product_use: String, 
    product_cost: Number 
}) 
 
module.exports = mongoose.model("product", 
productSchema) 