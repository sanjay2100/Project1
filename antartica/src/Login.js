import React, { useState } from "react";



const Login =({openL,closeL})=>{

    if(!openL) return null
    
   return (
            
            <form action="/login" method="post">
            <div className="LoginForm" >
                <i class="fa-sharp fa-solid fa-circle-xmark" onClick={()=>closeL(false)}></i>
                <h3 className="headingL">LOGIN</h3>
            <input className="textbox" name="LoginId" type="text"  placeholder="Enter your Login Id"/>
            <input className="textbox" name="pwd" type="password"  placeholder="Enter your Password"/>
            <button className="subButton">Submit</button>
            
            
             </div>
             </form>)
    
}
const Signup =({openS,closeS})=>{

const[loginId,setloginId]=useState("")
const[Pwd,setPwd]=useState("")



async function registerUser(e){
    e.preventDefault()
    
   const response= await fetch('http://localhost:3001/api/register',{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify({
        loginId,
        Pwd,
    })
})


  const data=await response.json() 
  console.log(data)

}
    if(!openS) return null
    
   return (
            
            <form onSubmit={registerUser}>
            <div className="LoginForm" >
                <i class="fa-sharp fa-solid fa-circle-xmark" onClick={()=>closeS(false)}></i>
                <h3 className="headingL">Siginup</h3>
            
            <input className="textbox" name={loginId} type="text" onChange={(e)=>setloginId(e.target.value)} placeholder="Enter your Login Id"/>
            <input className="textbox" name={Pwd} type="password" onChange={(e)=>setPwd(e.target.value)} placeholder="Enter your Password"/>
            <button type="submit" className="subButton">Create Account</button>
            
            
             </div>
             </form>)
    
}


export  {Login,Signup}