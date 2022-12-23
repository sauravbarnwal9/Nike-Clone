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

const storiesSchema = new mongoose.Schema({
    title: {type:String,require},
    text: {type:String,require},
    img: {type:String,require},
    url: {type:String,require},
    like: String,
    time: {type:String,require},
    by: {type:String,require},
    btn: {type:String,require},
});

const ProductModel = mongoose.model('shoes', productSchema);
const StoriesModel = mongoose.model('story', storiesSchema);

module.exports={ProductModel,StoriesModel}