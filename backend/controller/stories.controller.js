const {  StoryModel } = require('../models/story.model');

const storiesRouter = require('express').Router();


exports.getStories=async (req, res) => {
    try{
        let stories = await StoryModel.find();
        res.status(201).send({msg: stories})
    }catch{
        res.status(404).send({msg: [], error: "something went wrong"})
    }
}

exports.addStories=async(req,res)=>{
    try {
        let newData=new StoryModel(req.body);
newData.save()
res.status(201).send({'msg':"added successfully!"})
    } catch (error) {
        res.status(404).send({msg: [], error: 'something went wrong'})

    }
}
