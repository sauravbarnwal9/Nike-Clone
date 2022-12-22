const { StoriesModel } = require('../models/product.model');

const storiesRouter = require('express').Router();


exports.getStories=async (req, res) => {
    try{
        let stories = await StoriesModel.find();
        res.send({msg: stories})
    }catch{
        res.send({msg: [], error: "something went wrong"})
    }
}

exports.addStories=async(req,res)=>{
    try {
        let newData=new ProductModel(req.body);
newData.save()
    } catch (error) {
        res.status(404).send({msg: [], error: 'something went wrong'})

    }
}
