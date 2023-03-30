const express = require("express");
const app = express();
const path  = require("path")


app.get("/",(req,resp)=>{
resp.send("Welcome to my page")
// const path = path.join(__dirname,"./html")
})
app.get("/about",(req,resp)=>{
  resp.send("Hello frome the about sides")
})
app.listen(9000,()=>{
  console.log('server created');
})



