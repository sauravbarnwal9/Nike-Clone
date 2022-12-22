const express=require('express')
const { connection } = require('./config/db')
require('dotenv').config()
const PORT=process.env.PORT || 8080
const app=express()


app.get("/",((req,res)=>
{
    res.send("<h1>Welcome to Saurav's World <h1/>")
}))
app.listen(PORT,async()=>{
    try {
        await connection
        console.log("database connected")
    } catch (error) {
        console.log("something is missing")
    }
})