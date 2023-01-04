const mongoose = require("mongoose");
const User = new mongoose.Schema({
  firstName: { type: String, require: [true, "Require firstName"] },
  lastName: { type: String, require: [true, "Require lastName"] },
  email: { type: String, require: [true, "Email is missing"] },
  gender: {type : String,require:[true,"gender is missing"]},
  password: { type: String, require: [true, "require password"] },
  dateOfBirth: { type: String, require: [true, "require dateOfBirth"] },
});
const UserModel = mongoose.model("user", User);

module.exports = {
  UserModel,
};
