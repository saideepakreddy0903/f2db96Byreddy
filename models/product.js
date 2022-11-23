const mongoose = require("mongoose") 
const productchema = mongoose.Schema({ 
    product_name: String, 
    product_use: String, 
    product_cost: Number 
}) 
 
module.exports = mongoose.model("product", 
productchema) 