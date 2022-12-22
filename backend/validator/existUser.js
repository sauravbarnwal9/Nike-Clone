const { UserModel } = require("../models/auth.model")


const UserExist=async(req,res,next)=>{
try {
        
    const email=req.body.email
const user=await UserModel.findOne({email:email})

if(user){
    res.status(404).send({"msg":"User Exist. Please Login"})
}
else{
    next()
}

    
} catch (error) {
    res.send(error)
}
}
module.exports={
    UserExist
}