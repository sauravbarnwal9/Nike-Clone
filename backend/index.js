const express=require('express')
const { connection } = require('./config/db')
const { UserModel } = require('./models/product.model')
const { productRouter } = require('./routes/product.route')
const { storyRouter } = require('./routes/stories.route')
const { UserRoute } = require('./routes/user.route')
require('dotenv').config()
const PORT=process.env.PORT || 8080
const app=express()


app.use(express.json())
app.use("/",UserRoute)
app.use("/",storyRouter)
app.use("/",productRouter)
app.get("/",(async(req,res)=>
{
    res.send("<h1>Welcome to Saurav's World <h1/>")
}))
app.listen(PORT,async()=>{
    try {
        await connection
        console.log("database connected")
    } catch (error) {
        console.log(error)
    }
})