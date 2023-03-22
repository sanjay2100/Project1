import React, { useState } from "react";
import './App.css'


const Login =({openL,closeL,async})=>{

    
    if(!openL) return null
    
   return (
            <form action='/signin' method="POST">
            <div className="LoginForm" >
                <i class="fa-sharp fa-solid fa-circle-xmark" onClick={()=>closeL(false)}></i>
                <h3 className="headingL">LOGIN</h3>
            <input className="textbox" type="text"  placeholder="Enter your Login Id"/>
            <input className="textbox"  type="password"  placeholder="Enter your Password"/>
            <button className="subButton">Submit</button>
            
            
             </div>
             </form>)
    
}










const Signup =({openS,closeS})=>{

    const [UserID,setUserID]=useState("")
    const[Pwd,setPwd]=useState("")
    const[err,seterr]=useState("")
 const Register=(e)=>{
    e.preventDefault()
    fetch ('http://localhost:3001/register',{
    method:'POST',
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify({
        UserID,
        Pwd
    })
    })

    .then((response)=>{
        const data=response.json()
        console.log(data)
    })
   
 }


    if(!openS) return null
    
   return (
            
            <form onSubmit={Register}>
            <div className="LoginForm" >
                <i class="fa-sharp fa-solid fa-circle-xmark" onClick={()=>closeS(false)}></i>
                <h3 className="headingL">Siginup</h3>           
            <input className="textbox" type="text" onChange={(e)=>setUserID(e.target.value)}  placeholder="Enter your Login Id"/>
            
            <input className="textbox" type="password"  onChange={(e)=>setPwd(e.target.value)} placeholder="Enter your Password"/>
            <button type="submit" className="subButton">Create Account</button>
            
            
             </div>
             </form>)
    
}


export  {Login,Signup}