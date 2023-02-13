const mongoose=require("mongoose")


const User=new mongoose.Schema(
    {
        LoginId:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
    },
    {collation:'user-data'}

)

const model=new mongoose.model('user-data',User)


module.exports=User