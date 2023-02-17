import React from "react";
import './App.css';
import{useState} from "react";
import {Category,Deal} from './components';
import{BrowserRouter, Routes, Route,Link} from "react-router-dom";
import {Login,Signup} from './Login';
import {Cart} from "./productdetails";
import Corosel from './corosel';
import { Electronics } from "./category";
const Home=()=>{
    

  const[modelL,setModelL]=useState(false)
  const[modelS,setModelS]=useState(false)
  

 const [link,setLink]=useState("https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964_960_720.png")

 
return(
    <div>  
    <Login openL={modelL} closeL={setModelL}/>
    <Signup openS={modelS} closeS={setModelS}/>
     <div className="header" id='head'>
      <h2>Antarctica</h2>
      <div className='Loginbutton'>
      <button className="buttonL" onClick={()=>setModelL(true)}>Login</button>
      <button className="buttonS"onClick={()=>setModelS(true)}>Signup</button>
      </div>
      <img className='image' src={link}/>
     </div>
     

     <div id='body' className='body'>
     <Cart/>

        <div className='FASHION'>
            <img className='fashion' src='https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907_Full-Bleed-Image.jpg.large.jpg'/>
            <img className='fashion' src='https://www.techspot.com/articles-info/2295/images/2021-07-20-image-2.jpg'/>
            <h2 className='trend'>Explore latest Technology</h2>
        </div>
        <Category/>
        
        <Corosel/>
        </div>
        </div>

    )
}

export default Home