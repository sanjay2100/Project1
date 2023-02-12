const express=require('express')
const app=express()
const cors=require('cors')


app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello")
})

app.post('/api/register',(req,res)=>{
    console.log(req.body)
    res.json({status:'ok'})
})



app.listen(3001,console.log("connected through port 3001"))