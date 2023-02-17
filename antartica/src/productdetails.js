import React from "react";
import{useState} from "react";
import Click from './App'
import changeState from './App'
import Details1 from './details';
import './App.css';
import './corosel.css'

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
                <i class="fa-solid fa-bars" onClick={openSidebar}></i>
                

                <ul className="navlist">
                    <li className="naveItem">Whats New</li>
                    <li className="naveItem">join us</li>
                    <li className="naveItem">About us</li>
                    <li className="naveItem" onClick={openCart}><i class="fa-solid fa-cart-shopping"/></li>
                </ul>
            </div>
        )
    }

//sidebar
    
const openSidebar=()=>{
    document.querySelector(".bar").style.display="flex"
    
}


const closeSidebar=()=>{
    document.querySelector(".bar").style.display="none"
}

     const openCart=()=>{
        return (
          document.querySelector(".cartDiv").style.display="flex"
          
          )
      }
      
      const closeCart=()=>{
    
        document.querySelector(".cartDiv").style.display="none"
         
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