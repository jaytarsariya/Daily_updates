const router = require("express").Router()
const schema = require("../models/schema")

//******************** Add Method *********************************
router.post("/add", async (req,resp)=>
{
  try {

     const data = await schema(req.body)
     const insertdata = await data.save()
     resp.send(insertdata)

  } catch (error) {
    resp.send(error)
  }
})


//******************** view Data *********************************
router.get("/showdata", async(req,resp)=>{
  try {
      const data = await schema.find()
       resp.send(data) 
  } catch (error) {
    resp.send(error)
  }
})

//******************** Upadte data *********************************
router.put("/update/:id", async (req,resp)=>{
  try {
    const updateData = await schema.findByIdAndUpdate(req.params.id,req.body)
    resp.send(updateData)
  } catch (error) {
    resp.send(error)
  }
})

//******************** Delete data  *********************************
router.delete("/delete/:id", async (req,resp)=>{
  try {
    const deletedata = await schema.findByIdAndDelete(req.params.id)
    resp.send(deletedata)
  } catch (error) {
    resp.send(error)
  }
})





module.exports= router