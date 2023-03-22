const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bodyParser = require('body-parser')


const app=express()

app.use(express.json())

mongoose.set('strictQuery',true)
mongoose.connect("mongodb://0.0.0.0:27017/antarticaDB")

app.use(cors());

app.use(express.urlencoded({extended:true}))


app.get("/",function(req,res){
    res.send("hello")
})





const Schema= new mongoose.Schema({
    _id:String,
    Password:String,
})
const Model=mongoose.model("register",Schema)

app.post("/register",function(req,res){
    var ID=req.body.UserID
    var PWD=req.body.Pwd

    const data=new Model({
        _id:ID,
        Password:PWD
        
    })

    data.save((error)=>{
        if(!error)
            {
                res.json("data added")
            }
        else{
            res.json("user already exist")
        }
        
    });
})

const addSchema=new mongoose.Schema({
    Category:String,
    Name:String,
    Url:String,
    Price:Number
})

const addModel=mongoose.model("addItem",addSchema)

app.post("/addItem",function(req,res){
    const item=new addModel({
        Category:req.body.Category,
        Name:req.body.Name,
        Url:req.body.url,
        Price:req.body.Price,
    })

    item.save((err)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send("Item Added Sucessfully")
        }
    })
})

app.get("/mobile", function (req,res){
    addModel.find((err,data)=>{
        if(err){
            res.json(err)
        }
        else{res.json(data)}
    })
    
})

const Careerschema=new mongoose.Schema({
    JobName:String,
    Desc:String
})

const Career=mongoose.model("Career",Careerschema)

app.post("/Career", function (req,res){
    var JobTitle=req.body.jobTitle
    var JobDesc=req.body.jobDesc
    var data=new Career({
        JobName:JobTitle,
        Desc:JobDesc
    })
    data.save((err)=>{
        if(!err){
            res.json("Added New Job")
        }
    })
})

app.get("/Joblist",function(req,res){
    Career.find((err,data)=>{
        if(err){
            res,json(err)
        }
        else{
            res.json(data)
        }
    })
})

app.listen(3001,console.log("connected through port 3001"))