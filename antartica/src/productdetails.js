import React from "react";
import{useState} from "react";
import Click from './App'
import changeState from './App'
import Details1 from './details';
import './App.css';
import './corosel.css'
import { Link } from "react-router-dom";
import { Closecat } from "./components";


//cart design
const Cart=()=>{

    return (<div className="cartDiv">
            <i onClick={closeCart}>x</i>
            <h3 className="cartname">cart</h3>
            <ul className="cartul"></ul>
            <a herf="Purchase.js"><button>Make Purchase</button></a>
        </div>)
     }

//nav bar
     const Nav=()=>{
        
        return(
            <div className="nav">
                
                <i class="fa-solid fa-bars" onClick={OpenSidebar}></i>
                

                <ul className="navlist">
                    <li className="naveItem">Whats New</li>
                    <li className="naveItem">join us</li>
                    <li className="naveItem">About us</li>
                    <li className="naveItem" onClick={openCart}><i class="fa-solid fa-cart-shopping"/></li>
                    <Link to='/'><li className="naveItem"><i class="fa-solid fa-house"/></li></Link>
                </ul>
            </div>
        )
    }

//sidebar


const OpenSidebar=()=>{
   
   
    return document.querySelector(".bar").style.display="flex"
        
    
}
export const CloseSidebar=()=>{
   
   
    return (
        document.querySelector(".bar").style.display="none",
        document.querySelector(".barlicat").style.display="none"
    )
        
    
}

export const closeSidebar=()=>{
    return document.querySelector(".bar").style.display="none"
}
const openCart=()=>{
        return (
          document.querySelector(".cartDiv").style.display="flex"
          
          )
      }
      
       const closeCart=()=>{
    
        return document.querySelector(".cartDiv").style.display="none"
         
    }



    

const Buttons=document.querySelectorAll(".insideButton1")
for(var i=0;i<Buttons.length;i++)
{       
            Buttons[i].addEventListener('click',addtoCart)
            break;

}
    
function addtoCart(event) {
    console.clear()
    var button=event.target
    var card=button.parentElement.parentElement
    var item=card.querySelector(".itemName").innerHTML
    var ul=document.querySelector(".cartul")
    var li=document.createElement("li")
    li.classList.add("cartitem")
    li.innerText=item
    ul.appendChild(li)
}

export {Cart,openCart,Nav,addtoCart}