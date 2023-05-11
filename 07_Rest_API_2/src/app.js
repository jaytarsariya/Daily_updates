const mongoose = require("mongoose")
const express = require("express")
const app = express()



const port = 8000
const url ="mongodb://127.0.0.1:27017/ChintanSir"

mongoose.connect(url).then(()=>{
  console.log("db connected");
})

app.use(express.json())
const router = require("../router/userrouter")
app.use("/",router)



app.listen(port, ()=>{
  console.log(`server running on port no ${port}`);
})