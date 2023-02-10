import React from "react";



const Login =({open,close})=>{
    if(!open) return null
    
   return (
            
            <form action="/login" method="post">
            <div className="LoginForm" >
                <i class="fa-sharp fa-solid fa-circle-xmark" onClick={()=>close(false)}></i>
                <h3 className="headingL">LOGIN</h3>
            
            <input className="textbox" name="login id" type="text" placeholder="Enter your Login Id"/>
            <input className="textbox" name="password" type="password" placeholder="Enter your Login Id"/>
            <button className="subButton">Submit</button>
            
            
             </div>
             </form>)
    
}


export default Login