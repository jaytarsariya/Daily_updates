const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userschema = new mongoose.Schema({
  uname:{
    type:String
  },

  email:{
    type:String
  },

  pass:{
    type:String
  },

  joindate:{
    type: Date,
    default:Date.now()
  },

  img:{
    type:String
  }
})

userschema.pre("save",async function(){
  try {
    this.pass = await bcrypt.hash(this.pass,10)

  } catch (error) {
    console.log(error);
  }
})



module.exports = new mongoose.model("webcrud", userschema)