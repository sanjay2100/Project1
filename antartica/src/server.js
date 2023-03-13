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
                res.send("data added")
            }
        else{
            res.send("user already exist")
        }
        
    });
})

app.listen(3001,console.log("connected through port 3001"))