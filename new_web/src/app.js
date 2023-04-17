const express = require("express");
const mongoose=require("mongoose")
const app = express();
const path =require("path")

const port = 5001
const hbs=require("hbs")
//routes file path for connecting 
const routes= require('../routs/main')

// database connection

const db_url=  "mongodb://127.0.0.1:27017/Website"
mongoose.connect(db_url).then(()=>{
  console.log("db connected");
}).catch((err)=>{
  console.log(err);
})



app.use('/static',express.static("public"))
app.use("/",routes)



const viewpath =path.join(__dirname,"../tempate/views")



//hbs template engine..
app.set('view engine',"hbs")
app.set("views",viewpath)




app.listen(port,()=>{
  console.log(`server running on port no ${port}...`);
})