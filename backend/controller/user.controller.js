

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/auth.model");
const {SignUpValidator,loginValidator}=require("../validator/validator")
require('dotenv').config()

const SECRET_CODE=process.env.SECRET_CODE || "secret"

exports.signup = (req, res) => {
  const data = req.body;
  //  console.log(data)
  let password = data.password;
  let email = data.email;



    try {

    bcrypt.hash(password, 6).then(function (hash) {
        data.password = hash;
        
        const user = new UserModel(data);
         user.save();
      
        res.status(200).send({ "signup": "successfully" });
      })
    } catch (error) {
      res
      .status(404)
      .send({ message: "something is missing" }); 
    }
    }






exports.login = async (req, res) => {
  let data = req.body;
  
    try {
    const { email, password } = data;
    let user = await UserModel.findOne({email: email });
    let hash = user.password;

    bcrypt.compare(password, hash, function (err, result) {
    
      if (result) {
        const token = jwt.sign({ email: email }, SECRET_CODE);
        res.status(200).send({ "login": "successfully", "token": token,'user':{'firstName':user.firstName} });
      } 
      else{
        res.status(304).send({message:"Password is Invalid"})
      }
     
      });
    } catch (error) {
      res
      .status(404)
      
      .send({ message: "something is missing" });
    }
    
    

};