const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
const User=require("./user.models")
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://0.0.0.0:27017/Antartica-user")
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello")
})

app.post('/api/login',async(req,res)=>{
    console.log(req.body)
    
       const user= await User.findOne({
            LoginId:req.body.LoginId,
            password:req.body.password,
        })
        if(user){
            return res.json({status:'ok', user:true})
        }
        else{
            return res.json({status:'err',user:false})
        }
     })


app.post('/api/register',async(req,res)=>{
    console.log(req.body)
    try {
        await User.create({
            LoginId:req.body.LoginId,
            password:req.body.password,
        })
        res.json({status:'ok'})

    } catch (error) {
        res.json({status:'error'})

    }
})

app.listen(3001,console.log("connected through port 3001"))