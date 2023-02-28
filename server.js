const http=require('http');
const express=require('express')
const mongoose=require('mongoose')


const app=express();
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://0.0.0.0:27017/antarticaDB')

app.use(express.urlencoded({extended:true}))

const Schema=new mongoose.Schema({
    UserID:String,
    Password:String,
})

const Model=mongoose.model('register',Schema)




app.get('/register',function (req,res) {
    Model.find(function(err,result){
        res.send(result)
    })
})

app.post('/register',function(req,res){
    
    
    const data= new Model({
        UserID:req.body.loginId, 
        Password:req.body.Pwd,
    });

    data.save(function(err){
        if(!err){
            res.send("Data added sucessfully")
        }
        else{
            res.send(err)
        }
    })
        
})
    







app.listen(3001,console.log('connected through port 3001'))
