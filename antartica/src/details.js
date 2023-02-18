import React from "react";
import './corosel.css'
import { openCart } from "./productdetails";







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
    var item=card.querySelector(".detailh3").innerHTML
    var ul=document.querySelector(".cartul")
    var li=document.createElement("li")
    li.classList.add("cartitem")
    li.innerText=item
    ul.appendChild(li)
}
const Details1=({openD,closeD})=>{
    
    if(!openD) return null
    
    return(
        <div className="detailtab">
        <i class="fa-solid fa-xmark" onClick={()=>closeD(false)}></i>
        <h1 className="detailh3">Samsung galaxy s23 Ultra</h1>
        <img className="detailimg" src='https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-s23/buy/720X720_1.jpg'/>
        <div className="line3">
        <h3 className="detailprice">Rs.56000/-</h3>
        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
        <button className="insideButton1" onClick={openCart}>view cart</button>
        </div>
        <div className="divdisc">
        <h3 className="detaildesc">Chipset: Snapdragon 8 Gen 2 Mobile Platform for Galaxy (Octa-core)</h3>
        <h3 className="detaildesc">GPU:	Adreno 740</h3>
        <h3 className="detaildesc">RAM (type): 8GB/12GB (LPDDR5)</h3>
        <h3 className="detaildesc">Battery capacity:   5,000 mAh</h3>
        </div>
        </div>
    )
}


export default Details1