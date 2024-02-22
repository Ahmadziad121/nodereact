const express = require('express')
const { get } = require('https')
var app = express()
const cors = require("cor");
 
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
var server =app.listen(2000,function()

{
    var host =server.address().address
    var port =server.address().port
})


















var server =app.listen(1000,function()

{
    var host =server.address().address
    var port =server.address().port
})
