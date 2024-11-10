const dbConnect=require('./mongodb.cjs')
const express=require('express');
const {response} = require('express');
const app=express();
app.use(express.json())

//get API
app.get('/',async(req,res)=>{
    let result=await dbConnect();
    result=await result.find().toArray();
    res.send(result);
})

//post API
app.post('/',async(req,res)=>{
    let result=await dbConnect();
    result=result.insertOne(req.body);
    res.send('Data Inserted successfully')
})

//Put API
app.put('/:name',async(req,res)=>{
    let result=await dbConnect();
    result=await result.updateOne({name:req.params.name},{$set:req.body});
    res.send("Data Updated Sucessfully")
})

//Delete API
app.delete('/:name',async(req,res)=>{
    let result=await dbConnect();
    result=await result.deleteOne({name:req.params.name});
    res.send("Data Deleted Sucessfully")
})
app.listen(7000);