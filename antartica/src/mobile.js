import React from "react";
import Details1 from './details';
import { useState } from "react";
import './corosel.css';
import './App.css';
import { Cart, Nav } from "./productdetails";



const Mobile=()=>{
    
    const [Detail,setDetail]=useState(false)
    
    if(Detail==='true'){
        document.querySelector(".App").style.overflow="hidden";
    }
        
        return ( 
            <div>
            <Details1 openD={Detail} closeD={setDetail}/> 
            <Cart/> 
            <h3 className="heading">Mobile</h3>
            <ul>
            <div className="subcat">
            <li><div className="card">
                    <img className="subImg" src="https://images.samsung.com/in/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-colors-phantom-black-back-s.jpg"/>
                    <h3 className="itemName">Samsung galaxy s23 ultra</h3>
                    <div className="button">
                        <button className="insideButton"  onClick={()=>setDetail(true)} >View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                    </div ></li>
    
                <li><div className="card">
                    <img className="subImg" src="https://www.citypng.com/public/uploads/small/11662640711wteapyjghacaqyrtiv0erdr5socmg4le10gkhlw6wpdifvpwf1yjaeterdnpvhnydpzq6rahwtjo5hb1ybest3bsduaaaf3fkvor.png"/>
                    <h3 className="itemName">iPhone 14 Pro</h3>
                    <div className="button">
                        <button className="insideButton">View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                    <img className="subImg" src="https://static.toiimg.com/thumb/resizemode-4,msid-81713028,imgsize-500,width-800/81713028.jpg"/>
                    <h3 className="itemName">Onepluse 11 pro</h3>
                    <div className="button">
                        <button className="insideButton">View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                    <img className="subImg" src="https://oasis.opstatics.com/content/dam/oasis/page/2021/ebba/spec/Charcoal-Ink.png"/>
                    <h3 className="itemName">Onepluse norde CE</h3>
                    <div className="button">
                        <button className="insideButton">View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                    <img className="subImg" src="https://media.croma.com/image/upload/v1662421833/Croma%20Assets/Communication/Mobiles/Images/225813_bzsg1o.png"/>
                    <h3 className="itemName">Realme note 9 pro max</h3>
                    <div className="button">
                        <button className="insideButton">View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                    <img className="subImg" src="https://m.media-amazon.com/images/I/71EyTcGszpL._SX679_.jpg"/>
                    <h3 className="itemName">Google pixel 6 pro</h3>
                    <div className="button">
                        <button className="insideButton">View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                    <img className="subImg" src="https://cdn1.smartprix.com/rx-i2yXcPvGH-w420-h420/motorola-moto-x40.jpg"/>
                    <h3 className="itemName">Motarola g72</h3>
                    <div className="button">
                        <button className="insideButton">View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                    <img className="subImg" src="https://cdn.shopify.com/s/files/1/1684/4603/products/Nothing-Phone-1_Black_600x.png?v=1657996891"/>
                    <h3 className="itemName">Nothing Phone 1</h3>
                    <div className="button">
                        <button className="insideButton">View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                    <img className="subImg" src="https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:360"/>
                    <h3 className="itemName">Nokia 3310</h3>
                    <div className="button">
                        <button className="insideButton">View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                    <img className="subImg" src="https://www.assuredzone.com/it/wp-content/uploads/sites/8/2022/05/Sony-Xperia-1-IV.jpg"/>
                    <h3 className="itemName">Sony xeperia 1 IV</h3>
                    <div className="button">
                        <button className="insideButton">View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                    <img className="subImg" src="data:image/jpeg;base64,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"/>
                    <h3 className="itemName">iPhone 13</h3>
                    <div className="button">
                        <button className="insideButton">View Details</button>
                        <button className="insideButton1"onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                    <img className="subImg" src="https://m.media-amazon.com/images/I/8116d+CC3yL._SL1500_.jpg"/>
                    <h3 className="itemName">Google pixel 6</h3>
                    <div className="button">
                        <button className="insideButton">View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                    <img className="subImg" src="https://i.gadgets360cdn.com/products/large/poco-x4-pro-5g-549x800-1648452165.jpg"/>
                    <h3 className="itemName">Poco 4x pro</h3>
                    <div className="button">
                        <button className="insideButton">View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                    <img className="subImg" src="https://m.media-amazon.com/images/I/81yL2dXKTHL._SX679_.jpg"/>
                    <h3 className="itemName">Samsung M53</h3>
                    <div className="button">
                        <button className="insideButton">View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                    <img className="subImg" src="https://images.livemint.com/img/2022/08/17/600x338/flip_4_1660148234065_1660731304721_1660731304721.png"/>
                    <h3 className="itemName">Samsung z flip</h3>
                    <div className="button">
                        <button className="insideButton">View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                    <img className="subImg" src="https://m.media-amazon.com/images/I/81zLNgcvlaL._SX679_.jpg"/>
                    <h3 className="itemName">Redme note 11</h3>
                    <div className="button">
                        <button className="insideButton">View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
            </div></ul>
            </div>
            
        )
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
    export default Mobile