const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
  uname:{
    type:String
  },
  email:{
    type:String
  },
  pass:{
    type:String
  }
})

module.exports = new mongoose.model("newAPI",userschema)