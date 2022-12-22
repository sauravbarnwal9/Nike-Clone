const mongoose=require('mongoose')
require('dotenv').config()
mongoose.set("strictQuery", false);

const connection=mongoose.connect(process.env.MongoUrl)

module.exports={
    connection
}