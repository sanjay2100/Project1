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
        var price=card.querySelector(".detailprice").innerHTML
        var ul=document.querySelector(".cartul")
        var div=document.createElement("div")
        div.classList.add("cartinner")
        var liname=document.createElement("li")
        var liprice=document.createElement("li")
        liname.classList.add("cartitem")
        liprice.classList.add("cartitem")
        liname.innerText=item
        liprice.innerText=price
        div.appendChild(liname)
        div.appendChild(liprice)
        ul.appendChild(div)
}
const Details1=({open1,close1})=>{
    
    if(!open1) return null
    
    return(
        <div className="detailtab">
        <i class="fa-solid fa-xmark" onClick={()=>close1(false)}></i>
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

const Details2=({open2,close2})=>{
    
    if(!open2) return null
    
    return(
        <div className="detailtab">
        <i class="fa-solid fa-xmark" onClick={()=>close2(false)}></i>
        <h1 className="detailh3">iPhone 14 pro max</h1>
        <img className="detailimg" src='https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-colors.png'/>
        <div className="line3">
        <h3 className="detailprice">Rs.120000/-</h3>
        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
        <button className="insideButton1" onClick={openCart}>view cart</button>
        </div>
        <div className="divdisc">
        <h3 className="detaildesc">Chipset: A16 Bionic chip</h3>
        <h3 className="detaildesc">Storage: 128GB/256GB/512GB/1TB</h3>
        </div>
        </div>
    )
}

const Details3=({open3,close3})=>{
    
    if(!open3) return null
    
    return(
        <div className="detailtab">
        <i class="fa-solid fa-xmark" onClick={()=>close3(false)}></i>
        <h1 className="detailh3">Oneplus 11 pro</h1>
        <img className="detailimg" src='https://cdn-files.kimovil.com/default/0008/22/thumb_721501_default_big.jpg'/>
        <div className="line3">
        <h3 className="detailprice">Rs.50999/-</h3>
        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
        <button className="insideButton1" onClick={openCart}>view cart</button>
        </div>
        <div className="divdisc">
        <h3 className="detaildesc">Chipset: Snapdragon 8 Gen 2</h3>
        <h3 className="detaildesc">Memory:	256GB</h3>
        <h3 className="detaildesc">RAM:12GB</h3>
        <h3 className="detaildesc">Battery capacity:   5,000 mAh</h3>
        </div>
        </div>
    )
}

const Details4=({open4,close4})=>{
    
    if(!open4) return null
    
    return(
        <div className="detailtab">
        <i class="fa-solid fa-xmark" onClick={()=>close4(false)}></i>
        <h1 className="detailh3">Oneplus nord CE</h1>
        <img className="detailimg" src='https://digishi.net/131102-large_default/oneplus-nord-ce-5g-8-128g-mobile.jpg'/>
        <div className="line3">
        <h3 className="detailprice">Rs.23000/-</h3>
        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
        <button className="insideButton1" onClick={openCart}>view cart</button>
        </div>
        <div className="divdisc">
        <h3 className="detaildesc">Chipset: Snapdragon 750G 5G (8 nm)</h3>
        <h3 className="detaildesc">Memory:	128GB/256GB</h3>
        <h3 className="detaildesc">RAM:6GB/8GB</h3>
        <h3 className="detaildesc">Battery capacity:   4500 mAh</h3>
        </div>
        </div>
    )
}

const Details5=({open5,close5})=>{
    
    if(!open5) return null
    
    return(
        <div className="detailtab">
        <i class="fa-solid fa-xmark" onClick={()=>close5(false)}></i>
        <h1 className="detailh3">Realme note 9 pro max</h1>
        <img className="detailimg" src='https://images.hindustantimes.com/tech/rf/image_size_960x540/HT/p2/2020/03/14/Pictures/_c5bd36a0-65db-11ea-b9c4-de60b7b69f97.jpg'/>
        <div className="line3">
        <h3 className="detailprice">Rs.23000/-</h3>
        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
        <button className="insideButton1" onClick={openCart}>view cart</button>
        </div>
        <div className="divdisc">
        <h3 className="detaildesc">Chipset: Snapdragon 720G (8 nm)</h3>
        <h3 className="detaildesc">Memory:	64GB/128GB</h3>
        <h3 className="detaildesc">RAM:6GB/8GB</h3>
        <h3 className="detaildesc">Battery capacity:   5020 mAh</h3>
        </div>
        </div>
    )
}

const Details6=({open6,close6})=>{
    
    if(!open6) return null
    
    return(
        <div className="detailtab">
        <i class="fa-solid fa-xmark" onClick={()=>close6(false)}></i>
        <h1 className="detailh3">Google pixel 6 pro</h1>
        <img className="detailimg" src='https://media.wired.com/photos/61788d1eda7d5361f91da9e2/master/w_2560%2Cc_limit/Sec_Pixel-6-Pro-Group-Image-SOURCE-Google.jpg'/>
        <div className="line3">
        <h3 className="detailprice">Rs.51999/-</h3>
        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
        <button className="insideButton1" onClick={openCart}>view cart</button>
        </div>
        <div className="divdisc">
        <h3 className="detaildesc">Chipset: Google Tensor</h3>
        <h3 className="detaildesc">Memory:	128GB/256GB</h3>
        <h3 className="detaildesc">RAM:8GB/12GB</h3>
        <h3 className="detaildesc">Battery capacity:   5003 mAh</h3>
        </div>
        </div>
    )
}

const Details7=({open7,close7})=>{
    
    if(!open7) return null
    
    return(
        <div className="detailtab">
        <i class="fa-solid fa-xmark" onClick={()=>close7(false)}></i>
        <h1 className="detailh3">Motarola g72</h1>
        <img className="detailimg" src='https://appuals.com/wp-content/uploads/2022/09/IMG_20220930_232947-scaled.jpg'/>
        <div className="line3">
        <h3 className="detailprice">Rs.15000/-</h3>
        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
        <button className="insideButton1" onClick={openCart}>view cart</button>
        </div>
        <div className="divdisc">
        <h3 className="detaildesc">Chipset: Octa-core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)</h3>
        <h3 className="detaildesc">Memory:	128GB</h3>
        <h3 className="detaildesc">RAM:6GB/8GB</h3>
        <h3 className="detaildesc">Battery capacity:   5000 mAh</h3>
        </div>
        </div>
    )
}

const Details8=({open8,close8})=>{
    
    if(!open8) return null
    
    return(
        <div className="detailtab">
        <i class="fa-solid fa-xmark" onClick={()=>close8(false)}></i>
        <h1 className="detailh3">Nothing Phone 1</h1>
        <img className="detailimg" src='https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Nothing-Phone-1-1.jpg'/>
        <div className="line3">
        <h3 className="detailprice">Rs.25000/-</h3>
        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
        <button className="insideButton1" onClick={openCart}>view cart</button>
        </div>
        <div className="divdisc">
        <h3 className="detaildesc">Chipset: Snapdragon 778G+</h3>
        <h3 className="detaildesc">Memory:	128GB/256</h3>
        <h3 className="detaildesc">RAM:8GB/12GB</h3>
        <h3 className="detaildesc">Battery capacity:   5000 mAh</h3>
        </div>
        </div>
    )
}

const Details9=({open9,close9})=>{
    
    if(!open9) return null
    
    return(
        <div className="detailtab">
        <i class="fa-solid fa-xmark" onClick={()=>close9(false)}></i>
        <h1 className="detailh3">Nokia 3310</h1>
        <img className="detailimg" src='https://5.imimg.com/data5/HT/WN/MY-11165860/nokia-3310-refurbished-mobile-500x500.jpg'/>
        <div className="line3">
        <h3 className="detailprice">Rs.2500/-</h3>
        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
        <button className="insideButton1" onClick={openCart}>view cart</button>
        </div>
        <div className="divdisc">
        <h3 className="detaildesc">Battery capacity:   900 mAh</h3>
        </div>
        </div>
    )
}

const Details10=({open10,close10})=>{
    
    if(!open10) return null
    
    return(
        <div className="detailtab">
        <i class="fa-solid fa-xmark" onClick={()=>close10(false)}></i>
        <h1 className="detailh3">Sony Xeperia 1 IV</h1>
        <img className="detailimg" src='https://img2.cgtrader.com/items/3808544/b4c8430bbf/large/sony-xperia-1-iv-full-color-3d-model-max-obj-3ds-fbx-c4d-lwo.jpg'/>
        <div className="line3">
        <h3 className="detailprice">Rs.95000/-</h3>
        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
        <button className="insideButton1" onClick={openCart}>view cart</button>
        </div>
        <div className="divdisc">
        <h3 className="detaildesc">Chipset: Snapdragon 8 gen 1</h3>
        <h3 className="detaildesc">Memory:	256GB/512GB</h3>
        <h3 className="detaildesc">RAM:12GB</h3>
        <h3 className="detaildesc">Battery capacity:   5000 mAh</h3>
        </div>
        </div>
    )
}

const Details11=({open11,close11})=>{
    
    if(!open11) return null
    
    return(
        <div className="detailtab">
        <i class="fa-solid fa-xmark" onClick={()=>close11(false)}></i>
        <h1 className="detailh3">iPhone 13</h1>
        <img className="detailimg" src='https://itronics.in/wp-content/uploads/2021/09/iphone-13-select-2021.jpeg'/>
        <div className="line3">
        <h3 className="detailprice">Rs.60000/-</h3>
        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
        <button className="insideButton1" onClick={openCart}>view cart</button>
        </div>
        <div className="divdisc">
        <h3 className="detaildesc">Chipset: A15 Bionic chip</h3>
        <h3 className="detaildesc">Memory:	128GB/256GB/512GB</h3>
        </div>
        </div>
    )
}

const Details12=({open12,close12})=>{
    
    if(!open12) return null
    
    return(
        <div className="detailtab">
        <i class="fa-solid fa-xmark" onClick={()=>close12(false)}></i>
        <h1 className="detailh3">Google Pixel 6</h1>
        <img className="detailimg" src='https://media.wired.com/photos/616e0b46436c4f5f5e47d166/125:94/w_1925,h_1447,c_limit/Gear-Google-Pixel-6-top.jpg'/>
        <div className="line3">
        <h3 className="detailprice">Rs.42000/-</h3>
        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
        <button className="insideButton1" onClick={openCart}>view cart</button>
        </div>
        <div className="divdisc">
        <h3 className="detaildesc">Chipset: Snapdragon 8 gen 1</h3>
        <h3 className="detaildesc">Memory:	128GB/256GB</h3>
        <h3 className="detaildesc">RAM:8GB</h3>
        <h3 className="detaildesc">Battery capacity:   4614 mAh</h3>
        </div>
        </div>
    )
}

const Details13=({open13,close13})=>{
    
    if(!open13) return null
    
    return(
        <div className="detailtab">
        <i class="fa-solid fa-xmark" onClick={()=>close13(false)}></i>
        <h1 className="detailh3">POCO X4 PRO</h1>
        <img className="detailimg" src='https://www.gizmochina.com/wp-content/uploads/2022/02/POCO-X4-Pro-5G-Featured-A.jpeg'/>
        <div className="line3">
        <h3 className="detailprice">Rs.17000/-</h3>
        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
        <button className="insideButton1" onClick={openCart}>view cart</button>
        </div>
        <div className="divdisc">
        <h3 className="detaildesc">Chipset: Snapdragon 695 5G</h3>
        <h3 className="detaildesc">Memory:	64GB/128GB</h3>
        <h3 className="detaildesc">RAM:6GB/8GB</h3>
        <h3 className="detaildesc">Battery capacity:   5000 mAh</h3>
        </div>
        </div>
    )
}

const Details14=({open14,close14})=>{
    
    if(!open14) return null
    
    return(
        <div className="detailtab">
        <i class="fa-solid fa-xmark" onClick={()=>close14(false)}></i>
        <h1 className="detailh3">Samsung M53</h1>
        <img className="detailimg" src='https://fdn2.mobgsm.com/vv/pics/samsung/samsung-galaxy-m53-5g-2.jpg'/>
        <div className="line3">
        <h3 className="detailprice">Rs.21000/-</h3>
        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
        <button className="insideButton1" onClick={openCart}>view cart</button>
        </div>
        <div className="divdisc">
        <h3 className="detaildesc">Chipset: Mediatek MT6877 Dimensity 900 (6 nm)</h3>
        <h3 className="detaildesc">Memory:	128GB/256GB</h3>
        <h3 className="detaildesc">RAM:6GB/8GB</h3>
        <h3 className="detaildesc">Battery capacity:   5000 mAh</h3>
        </div>
        </div>
    )
}

const Details15=({open15,close15})=>{
    
    if(!open15) return null
    
    return(
        <div className="detailtab">
        <i class="fa-solid fa-xmark" onClick={()=>close15(false)}></i>
        <h1 className="detailh3">Samsung z Flip</h1>
        <img className="detailimg" src='https://images.samsung.com/au/smartphones/galaxy-z-flip3-5g/buy/zflip3_carousel_colorcombokv_mo.jpg'/>
        <div className="line3">
        <h3 className="detailprice">Rs.85000/-</h3>
        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
        <button className="insideButton1" onClick={openCart}>view cart</button>
        </div>
        <div className="divdisc">
        <h3 className="detaildesc">Chipset: Snapdragon 855+ (7 nm)</h3>
        <h3 className="detaildesc">Memory:256GB</h3>
        <h3 className="detaildesc">RAM:8GB</h3>
        <h3 className="detaildesc">Battery capacity:   3300 mAh</h3>
        </div>
        </div>
    )
}

const Details16=({open16,close16})=>{
    
    if(!open16) return null
    
    return(
        <div className="detailtab">
        <i class="fa-solid fa-xmark" onClick={()=>close16(false)}></i>
        <h1 className="detailh3">Redme Note 11</h1>
        <img className="detailimg" src='https://fdn.gsmarena.com/imgroot/reviews/22/xiaomi-redmi-note-11/inline/-1200/gsmarena_002.jpg'/>
        <div className="line3">
        <h3 className="detailprice">Rs.18000/-</h3>
        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
        <button className="insideButton1" onClick={openCart}>view cart</button>
        </div>
        <div className="divdisc">
        <h3 className="detaildesc">Chipset: Snapdragon 680 4G (6 nm)</h3>
        <h3 className="detaildesc">Memory:64GB/128GB</h3>
        <h3 className="detaildesc">RAM:4GB/6GB</h3>
        <h3 className="detaildesc">Battery capacity:   3300 mAh</h3>
        </div>
        </div>
    )
}


export {Details1,Details2,Details3,Details4,Details5,Details6,Details7,Details8,Details9,Details10,Details11,Details12,
        Details13,Details14,Details15,Details16}