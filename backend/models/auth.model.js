const mongoose = require("mongoose");
const User = new mongoose.Schema({
  name: { type: String, require: [true, "Require name"] },
  email: { type: String, require: [true, "Email is missing"] },
  phone: {type : String,require:[true,"Number is missing"]},
  password: { type: String, require: [true, "require password"] },
});
const UserModel = mongoose.model("user", User);

module.exports = {
  UserModel,
};
