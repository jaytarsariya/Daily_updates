const express = require("express")
const app = express()
require("dotenv").config()
const mongoose= require("mongoose")
const path = require("path")
const hbs = require("hbs")
const bodyparser = require("body-parser")

const port = process.env.PORT || 5000
const db_url ="mongodb://127.0.0.1:27017/ChintanSir"


mongoose.connect(db_url).then(()=>{
  console.log("db connected");
})

const public = path.join(__dirname,"../public")
const viewpath = path.join(__dirname,"../templates/views")
const partialPath = path.join(__dirname,"../templates/partials")

app.set("view engine","hbs")
app.set("views",viewpath)
app.use(express.static(public))
hbs.registerPartials(partialPath)
// app.use(bodyParser.urlencoded({ extended: false })) // ??????????????????

app.use(express.json())
app.use("/",require("../router/router"))




app.listen(port, ()=>{
  console.log(`server running on port no${port}`);
})