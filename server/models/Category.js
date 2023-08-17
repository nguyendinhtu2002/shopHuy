const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    }
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;