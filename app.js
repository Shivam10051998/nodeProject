const express = require('express')
require('./config')
const shivam =require('./shivam')

var app = express()
app.use(express.json())
app.post("/action", async (req, res) => {
  let data=new shivam(req.body)
  let result= await data.save()
   res.send(result)
})

app.get("/list",async(req,res)=>{
  let data =await  shivam.find();
  console.log(data)
  res.send(data)
})

app.delete("/delete/:_id",async(req,res)=>{
  let data =await  shivam.deleteOne(req.params);
  console.log(req.params)
  res.send(data)
})

app.put("/update/:_id",async(req,res)=>{
  let data =await  shivam.updateOne(req.params,{$set:req.body});
  console.log(req.params)
  res.send(data)
})

app.listen(5000)