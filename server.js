const express = require('express')
const { get } = require('https')
var app = express()
const cors = require("cors");
 
app.use(cors());
app.get("/",function(req,res){
    res.send("start server")

})
app.get("/getdata",function(req,res){
    res.json({name:"Ahmad",age:"20",feild:"computer engineer"})

})
app.get("/getprise",function(req,res){
    res.json({prise1:"10",prise1:"20",prise3:"40",prise4:"50"})

})

















var server =app.listen(1000,function()

{
    var host =server.address().address
    var port =server.address().port
})
