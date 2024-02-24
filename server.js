const express = require('express')
const { get } = require('https')
var app = express()
const cors = require("cors");

const {MongoClient}=require('mongodb')
var connection="mongodb+srv://ahmadziad758:fLKCwTerxcBNdGAc@cluster0.vwd87ks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client= new MongoClient(connection)

const mydb= client.db('users') 

const collection= mydb.collection('users') 




 


 
app.use(cors());
app.use(express.json())
app.get("/",function(req,res){
    res.send("start server")

})
app.get("/getData",function(req,res){
    res.json({name:"Ahmad",age:"20",feild:"computer engineer"})

})
app.get("/getprices",function(req,res){
    res.json({prices1:"10",prices1:"20",prices3:"40",prices4:"50"})

})
app.get("/users",async(req,res)=>{
    //find  =>{}=>all
    const users= await collection.find({}).toArray() 
    res.send(users)
})

app.get("/users/:username",async(req,res)=>{
    //find  =>{}=>all
    const users= await collection.findOne({'username':req.params.username}) 
    res.send(users)})

var server =app.listen(3000,function()

{
    var host =server.address().address
    var port =server.address().port
})


















var server =app.listen(1000,function()

{
    var host =server.address().address
    var port =server.address().port
})
