const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    type: {type:String,require},
    title: {type:String,require},
    text: {type:String,require},   
    description: {type:String,require},
    rating: {type:Number,require},
    images: {type:String,require},
    price: {type:Number,require},
    color: {type:String,require},
    shadow: {type:String,require},
    details: [String]
});



const ProductModel = mongoose.model('shoes', productSchema);

module.exports={ProductModel}