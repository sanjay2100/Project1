const express= require('express')
const mongoose=require('mongoose')


const app=express()
app.use(express.urlencoded({extended:true}))
mongoose.set('strictQuery', true);



mongoose.connect('mongodb://0.0.0.0:27017/antarticaDb',function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('connected to DB');
    }
})

const UserSchema=new mongoose.Schema({
    loginid:String,
    password:String
})


const User=new mongoose.model('Userdata',UserSchema)

app.get('/signup',function(req,res){
    res.send('hello')
})


app.post('/signup',function(req,res){

    var lid=req.body.loginId
    var Pwd=req.body.Pwd
    console.log(lid);

})





app.listen(3001,console.log("connected through port 3001"))