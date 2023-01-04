const mongoose =require('mongoose')
const storiesSchema = new mongoose.Schema({
    title: {type:String,require},
    text: {type:String,require},
    img: {type:String,require},
    url: {type:String,require},
    like: String,
    time: {type:String,require},
    by: {type:String,require},
  
});

const StoryModel = mongoose.model('story', storiesSchema);

module.exports={
    StoryModel
}