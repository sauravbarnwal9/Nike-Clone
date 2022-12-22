const { Router } = require("express");
const userController = require("../controller/user.controller");
const { UserExist } = require("../validator/existUser");
require('dotenv').config()
const UserRoute = Router();
UserRoute.post("/signup",UserExist, userController.signup);
UserRoute.post("/login", userController.login);



module.exports = {
  UserRoute,
};