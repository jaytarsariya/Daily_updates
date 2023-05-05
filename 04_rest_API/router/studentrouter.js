const express = require("express")
const router = express.Router();

const users =require("../models/schema")

// get API
router.get("/students",async (req,resp)=>{
  try {
     const data = await users.find();
     resp.send(data)
  } catch (error) {
    console.log(error);
  }
})

router.post("/student", async (req,resp)=>{

  try {
       const std = new users(req.body)  // first of all insert data on postman then write code of router then get a results.
      const insertData = await std.save()
      resp.send(insertData);
  } catch (error) {
      resp.send(error)
  }
})

 router.put("/student/:id", async (req,resp)=>{
  try {
     const updatedata = await users.findByIdAndUpdate(req.params.id,req.body)
     resp.send(updatedata)
     console.log(updatedata);
  } catch (error) {
    resp.send(error)
  }
 })

   router.delete("/students/:id", async(req,resp)=>{
   
     try {
      const deletestud = await users.findByIdAndDelete(req.params.id)
      resp.send(deletestud)
     } catch (error) {
      resp.send(error)
     }
   })

module.exports=router;