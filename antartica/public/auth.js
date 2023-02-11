const express=require("express");
const mongoose=require('mongoose')
const app=express();
const parse=express.urlencoded({extended:true})
const url="mongodb://0.0.0.0:27017/antarticUser"
mongoose.connect(url,function(err){
    if(!err){
        console.log("connected to db")
    }
    else{
        console.log(err)
    }})

const newScheme=new mongoose.Schema({
    username:String,
    password:String
})

const newModel=new mongoose.model("users",newScheme)

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.listen(3001,function(err){
    if(!err){
        console.log("connected through port 3001")
    }
    else{
        console.log(err)
    }
})