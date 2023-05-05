const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 8000;
const url = 'mongodb://127.0.0.1:27017/ChintanSir';
// const schema = require("../models/schema")


mongoose.connect(url).then(() => {
  console.log('hello db is connected');
});

app.use(express.json())


app.use("/",require("../router/studentrouter.js"))

// const users = require('../models/schema');
// const inserData = async ()=>{
//   const data1 = new users({uname:"jay tarsariya",email:"jay123@gmail.com",password:"123"})
//   const data2 = new users({uname:"sanket malaviya",email:"sanket321@gmail.com",password:"1234"})
//   const data3 = new users({uname:"dhruvin katariya",email:"dhruvin234@gmail.com",password:"2233"})
//   const result = await users.insertMany([data1,data2,data3])
//   console.log(result);
// }
// inserData();



app.listen(port, () => {
  console.log('server running on port no' + port);
});

