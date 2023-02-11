import React from "react";



const Login =({openL,closeL})=>{
    if(!openL) return null
    
   return (
            
            <form action="/login" method="post">
            <div className="LoginForm" >
                <i class="fa-sharp fa-solid fa-circle-xmark" onClick={()=>closeL(false)}></i>
                <h3 className="headingL">LOGIN</h3>
            
            <input className="textbox" name="login id" type="text" placeholder="Enter your Login Id"/>
            <input className="textbox" name="password" type="password" placeholder="Enter your password"/>
            <button className="subButton">Submit</button>
            
            
             </div>
             </form>)
    
}
const Signup =({openS,closeS})=>{
    if(!openS) return null
    
   return (
            
            <form action="/login" method="post">
            <div className="LoginForm" >
                <i class="fa-sharp fa-solid fa-circle-xmark" onClick={()=>closeS(false)}></i>
                <h3 className="headingL">Siginup</h3>
            
            <input className="textbox" name="login id" type="email" placeholder="Enter your Email Id" required/>
            <input className="textbox" name="password" type="password" placeholder="Enter password" maxlength="8" required/>
            
            <input className="textbox" name="phonenumber" type="num" placeholder="enter phone number" maxLength="10" />
            
            <button className="subButton">Submit</button>
            
            
            
             </div>
             </form>)
    
}


export  {Login,Signup}