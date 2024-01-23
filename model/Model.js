const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: {type:String,required:true},
  password: String,
  role:{type:String,default:'user'}
},{timestamps:true});
module.exports = mongoose.model("Users", userSchema); //create collection named users and contains the userschema
