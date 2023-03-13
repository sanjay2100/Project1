import React from "react";
import {Details1,Details2,Details3,Details4,Details5,Details6,Details7,Details8,Details9,Details10,Details11,Details12,Details13,Details14,Details15,Details16} from './details';
import { useState } from "react";
import './mobile.css'
import './App.css';
import { Cart, Nav } from "./productdetails";



const Mobile=()=>{
    
    const [Detail1,setDetail1]=useState(false)
    const [Detail2,setDetail2]=useState(false)
    const [Detail3,setDetail3]=useState(false)
    const [Detail4,setDetail4]=useState(false)
    const [Detail5,setDetail5]=useState(false)
    const [Detail6,setDetail6]=useState(false)
    const [Detail7,setDetail7]=useState(false)
    const [Detail8,setDetail8]=useState(false)
    const [Detail9,setDetail9]=useState(false)
    const [Detail10,setDetail10]=useState(false)
    const [Detail11,setDetail11]=useState(false)
    const [Detail12,setDetail12]=useState(false)
    const [Detail13,setDetail13]=useState(false)
    const [Detail14,setDetail14]=useState(false)
    const [Detail15,setDetail15]=useState(false)
    const [Detail16,setDetail16]=useState(false)

    
    if(Detail1==='true'){
        document.querySelector(".App").style.overflow="hidden";
    }
        
        return ( 
            <div className="Mobile">    
            <Details1 open1={Detail1} close1={setDetail1}/>
            <Details2 open2={Detail2} close2={setDetail2}/>
            <Details3 open3={Detail3} close3={setDetail3}/> 
            <Details4 open4={Detail4} close4={setDetail4}/>
            <Details5 open5={Detail5} close5={setDetail5}/>
            <Details6 open6={Detail6} close6={setDetail6}/>
            <Details7 open7={Detail7} close7={setDetail7}/>
            <Details8 open8={Detail8} close8={setDetail8}/>
            <Details9 open9={Detail9} close9={setDetail9}/>
            <Details10 open10={Detail10} close10={setDetail10}/>
            <Details11 open11={Detail11} close11={setDetail11}/>
            <Details12 open12={Detail12} close12={setDetail12}/>
            <Details13 open13={Detail13} close13={setDetail13}/>
            <Details14 open14={Detail14} close14={setDetail14}/>
            <Details15 open15={Detail15} close15={setDetail15}/>
            <Details16 open16={Detail16} close16={setDetail16}/>
            <Cart/> 
            <h3 className="heading">Mobile</h3>
            <ul>
            <div className="subcat">
            <li><div className="card">
                    <div className="namecontainer">
                        <img className="subImg" src="https://img.global.news.samsung.com/ca/wp-content/uploads/2023/02/Samsung-Galaxy-S23-Image_1.png"/>
                        <h3 className="itemName">Samsung galaxy s23 ultra</h3>
                        <h3 className="detailprice">Rs.56000/-</h3>
                    </div>
                    <div className="button">
                        <button className="insideButton"  onClick={()=>setDetail1(true)} >View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                    </div ></li>
    
                <li><div className="card">
                <div className="namecontainer">
                    <img className="subImg" src="https://www.apple.com/v/iphone-14-pro/d/images/meta/iphone-14-pro_overview__3dn6st99cpea_og.png"/>
                    <h3 className="itemName">iPhone 14 Pro</h3>
                    <h3 className="detailprice">Rs.120000/-</h3>
                    </div>
                    <div className="button">
                        <button className="insideButton" onClick={()=>setDetail2(true)}>View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                <div className="namecontainer">

                    <img className="subImg" src="https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2023/01/Untitled-design-2023-01-03T125428.398-1.jpg"/>
                    <h3 className="itemName">Onepluse 11 pro</h3>
                    <h3 className="detailprice">Rs.50999/-</h3>
                    </div>
                    <div className="button">
                        <button className="insideButton" onClick={()=>setDetail3(true)}>View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                <div className="namecontainer">

                    <img className="subImg" src="https://www.businessinsider.in/photo/83403406/oneplus-nord-ce-5g-tv-u1s-launched-in-india-price-specification-and-availability.jpg?imgsize=74097"/>
                    <h3 className="itemName">Onepluse norde CE</h3>
                    <h3 className="detailprice">Rs.23000/-</h3>
                    </div>
                    <div className="button">
                        <button className="insideButton"onClick={()=>setDetail4(true)}>View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                <div className="namecontainer">

                    <img className="subImg" src="https://english.cdn.zeenews.com/sites/default/files/2022/02/16/1015121-untitled-design-2022-02-16t163634.027.jpg"/>
                    <h3 className="itemName">Realme note 9 pro max</h3>
                    <h3 className="detailprice">Rs.23000/-</h3>
                    </div>
                    <div className="button">
                        <button className="insideButton" onClick={()=>setDetail5(true)}>View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                <div className="namecontainer">

                    <img className="subImg" src="https://media.wired.com/photos/616e0b46436c4f5f5e47d166/191:100/w_2012,h_1053,c_limit/Gear-Google-Pixel-6-top.jpg"/>
                    <h3 className="itemName">Google pixel 6 pro</h3>
                    <h3 className="detailprice">Rs.51999/-</h3>
                    </div>
                    <div className="button">
                        <button className="insideButton" onClick={()=>setDetail6(true)}>View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                <div className="namecontainer">

                    <img className="subImg" src="https://mobiledrop.in/wp-content/uploads/2022/10/Motorola-G72-Image-01.jpg"/>
                    <h3 className="itemName">Motarola g72</h3>
                    <h3 className="detailprice">Rs.15000/-</h3>
                    </div>
                    <div className="button">
                        <button className="insideButton" onClick={()=>setDetail7(true)}>View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                <div className="namecontainer">

                    <img className="subImg" src="https://cdn.shopify.com/s/files/1/0586/3270/0077/files/phone-1-02-02_2160x.jpg?v=1660813927"/>
                    <h3 className="itemName">Nothing Phone 1</h3>
                    <h3 className="detailprice">Rs.25000/-</h3>
                    </div>
                    <div className="button">
                        <button className="insideButton" onClick={()=>setDetail8(true)}>View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                <div className="namecontainer">

                    <img className="subImg" src="https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:360"/>
                    <h3 className="itemName">Nokia 3310</h3>
                    <h3 className="detailprice">Rs.2500/-</h3>
                    </div>
                    <div className="button">
                        <button className="insideButton" onClick={()=>setDetail9(true)}>View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                <div className="namecontainer">

                    <img className="subImg" src="https://soyacincau.com/wp-content/uploads/2022/05/220511-sony-xperia-1-iv-2.jpg"/>
                    <h3 className="itemName">Sony xeperia 1 IV</h3>
                    <h3 className="detailprice">Rs.95000/-</h3>
                    </div>
                    <div className="button">
                        <button className="insideButton" onClick={()=>setDetail10(true)}>View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                <div className="namecontainer">

                    <img className="subImg" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-model-unselect-gallery-1-202207?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1654893619853"/>
                    <h3 className="itemName">iPhone 13</h3>
                    <h3 className="detailprice">Rs.60000/-</h3>
                    </div>
                    <div className="button">
                        <button className="insideButton" onClick={()=>setDetail11(true)}>View Details</button>
                        <button className="insideButton1"onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                <div className="namecontainer">

                    <img className="subImg" src="https://media.wired.com/photos/61788d1eda7d5361f91da9e2/master/w_2560%2Cc_limit/Sec_Pixel-6-Pro-Group-Image-SOURCE-Google.jpg"/>
                    <h3 className="itemName">Google pixel 6</h3>
                    <h3 className="detailprice">Rs.42000/-</h3>
                    </div>
                    <div className="button">
                        <button className="insideButton" onClick={()=>setDetail12(true)}>View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                <div className="namecontainer">

                    <img className="subImg" src="https://insidetelecom.com/wp-content/uploads/2022/08/Poco-X4-Pro-5G.jpg"/>
                    <h3 className="itemName">Poco 4x pro</h3>
                    <h3 className="detailprice">Rs.17000/-</h3>
                    </div>
                    <div className="button">
                        <button className="insideButton" onClick={()=>setDetail13(true)}>View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                <div className="namecontainer">

                    <img className="subImg" src="https://english.cdn.zeenews.com/sites/default/files/2022/04/22/1034455-untitled-design-50.jpg"/>
                    <h3 className="itemName">Samsung M53</h3>
                    <h3 className="detailprice">Rs.21000/-</h3>
                    </div>
                    <div className="button">
                        <button className="insideButton" onClick={()=>setDetail14(true)}>View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                <div className="namecontainer">

                    <img className="subImg" src="https://images.livemint.com/img/2022/08/17/600x338/flip_4_1660148234065_1660731304721_1660731304721.png"/>
                    <h3 className="itemName">Samsung z flip</h3>
                    <h3 className="detailprice">Rs.85000/-</h3>
                    </div>
                    <div className="button">
                        <button className="insideButton" onClick={()=>setDetail15(true)}>View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
                <li><div className="card">
                <div className="namecontainer">

                    <img className="subImg" src="https://m.media-amazon.com/images/I/81zLNgcvlaL._SX679_.jpg"/>
                    <h3 className="itemName">Redme note 11</h3>
                    <h3 className="detailprice">Rs.18000/-</h3>
                    </div>
                    <div className="button">
                        <button className="insideButton" onClick={()=>setDetail16(true)}>View Details</button>
                        <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                    </div>
                </div></li>
            </div></ul>
            </div>
            
        )
    }

//computers

    const Computer=()=>{
    
        const [Detailb1,setDetailb1]=useState(false)
        const [Detailb2,setDetailb2]=useState(false)
        const [Detailb3,setDetailb3]=useState(false)
        const [Detailb4,setDetailb4]=useState(false)
        const [Detailb5,setDetailb5]=useState(false)
        const [Detailb6,setDetailb6]=useState(false)
        const [Detailb7,setDetailb7]=useState(false)
        const [Detailb8,setDetailb8]=useState(false)
        const [Detailb9,setDetailb9]=useState(false)
        const [Detailb10,setDetailb10]=useState(false)
        const [Detailb11,setDetailb11]=useState(false)
        const [Detailb12,setDetailb12]=useState(false)
        const [Detailb13,setDetailb13]=useState(false)
        const [Detailb14,setDetailb14]=useState(false)
        const [Detailb15,setDetailb15]=useState(false)
        const [Detailb16,setDetailb16]=useState(false)
    
        
        if(Detailb1==='true'){
            document.querySelector(".App").style.overflow="hidden";
        }
            
            return ( 
                <div className="Mobile">    
                <Details1 open1={Detailb1} close1={setDetailb1}/>
                <Details2 open2={Detailb2} close2={setDetailb2}/>
                <Details3 open3={Detailb3} close3={setDetailb3}/> 
                <Details4 open4={Detailb4} close4={setDetailb4}/>
                <Details5 open5={Detailb5} close5={setDetailb5}/>
                <Details6 open6={Detailb6} close6={setDetailb6}/>
                <Details7 open7={Detailb7} close7={setDetailb7}/>
                <Details8 open8={Detailb8} close8={setDetailb8}/>
                <Details9 open9={Detailb9} close9={setDetailb9}/>
                <Details10 open10={Detailb10} close10={setDetailb10}/>
                <Details11 open11={Detailb11} close11={setDetailb11}/>
                <Details12 open12={Detailb12} close12={setDetailb12}/>
                <Details13 open13={Detailb13} close13={setDetailb13}/>
                <Details14 open14={Detailb14} close14={setDetailb14}/>
                <Details15 open15={Detailb15} close15={setDetailb15}/>
                <Details16 open16={Detailb16} close16={setDetailb16}/>
                <Cart/> 
                <h3 className="heading">Computer</h3>
                <ul>
                <div className="subcat">
                <li><div className="card">
                        <div className="namecontainer">
                            <img className="subImg" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61Lh64FYeQL._SL1500_.jpg"/>
                            <h3 className="itemName">HP Pavilion</h3>
                            <h3 className="detailprice">Rs.57000/-</h3>
                        </div>
                        <div className="button">
                            <button className="insideButton"  onClick={()=>setDetailb1(true)} >View Details</button>
                            <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                        </div>
                        </div ></li>
        
                    <li><div className="card">
                    <div className="namecontainer">
                        <img className="subImg" src="https://icentralstore.in/wp-content/uploads/2022/08/mbp-silver-gallery1-202206.jpg"/>
                        <h3 className="itemName">Macbook Pro</h3>
                        <h3 className="detailprice">Rs.160000/-</h3>
                        </div>
                        <div className="button">
                            <button className="insideButton" onClick={()=>setDetailb2(true)}>View Details</button>
                            <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                    <div className="namecontainer">
    
                        <img className="subImg" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71VlaIUD10L._SL1500_.jpg"/>
                        <h3 className="itemName">HP Pavilion Gaming</h3>
                        <h3 className="detailprice">Rs.62000/-</h3>
                        </div>
                        <div className="button">
                            <button className="insideButton" onClick={()=>setDetailb3(true)}>View Details</button>
                            <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                    <div className="namecontainer">
    
                        <img className="subImg" src="data:image/jpeg;base64,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"/>
                        <h3 className="itemName">Dell Inspireon</h3>
                        <h3 className="detailprice">Rs.47000/-</h3>
                        </div>
                        <div className="button">
                            <button className="insideButton"onClick={()=>setDetailb4(true)}>View Details</button>
                            <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                    <div className="namecontainer">
    
                        <img className="subImg" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/819QD8+XiFL._SL1500_.jpg"/>
                        <h3 className="itemName">Samsung galaxy Book</h3>
                        <h3 className="detailprice">Rs.92000/-</h3>
                        </div>
                        <div className="button">
                            <button className="insideButton" onClick={()=>setDetailb5(true)}>View Details</button>
                            <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                    <div className="namecontainer">
    
                        <img className="subImg" src="https://www.yankodesign.com/images/design_news/2020/06/auto-draft/organami_1.jpg"/>
                        <h3 className="itemName">Microsoft surface book</h3>
                        <h3 className="detailprice">Rs.100600/-</h3>
                        </div>
                        <div className="button">
                            <button className="insideButton" onClick={()=>setDetailb6(true)}>View Details</button>
                            <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                    <div className="namecontainer">
    
                        <img className="subImg" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/614Sb6FBW4L._SL1500_.jpg"/>
                        <h3 className="itemName">Lenovo Yoga</h3>
                        <h3 className="detailprice">Rs.130000/-</h3>
                        </div>
                        <div className="button">
                            <button className="insideButton" onClick={()=>setDetailb7(true)}>View Details</button>
                            <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                    <div className="namecontainer">
    
                        <img className="subImg" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61Dw5Z8LzJL._SY450_.jpg"/>
                        <h3 className="itemName">Lenovo Ideapad</h3>
                        <h3 className="detailprice">Rs.33000/-</h3>
                        </div>
                        <div className="button">
                            <button className="insideButton" onClick={()=>setDetailb8(true)}>View Details</button>
                            <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                    <div className="namecontainer">
    
                        <img className="subImg" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661"/>
                        <h3 className="itemName">MacBook Air</h3>
                        <h3 className="detailprice">Rs.86000/-</h3>
                        </div>
                        <div className="button">
                            <button className="insideButton" onClick={()=>setDetailb9(true)}>View Details</button>
                            <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                    <div className="namecontainer">
    
                        <img className="subImg" src="https://images-cdn.ubuy.co.in/633ac9ba91f1d626b478e8d0-asus-rog-strix-g-2019-gaming-laptop.jpg"/>
                        <h3 className="itemName">Asus ROG G15</h3>
                        <h3 className="detailprice">Rs.230000/-</h3>
                        </div>
                        <div className="button">
                            <button className="insideButton" onClick={()=>setDetailb10(true)}>View Details</button>
                            <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                    <div className="namecontainer">
    
                        <img className="subImg" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71S8U9VzLTL._SL1500_.jpg"/>
                        <h3 className="itemName">Asus VivoBook</h3>
                        <h3 className="detailprice">Rs.33000/-</h3>
                        </div>
                        <div className="button">
                            <button className="insideButton" onClick={()=>setDetailb11(true)}>View Details</button>
                            <button className="insideButton1"onClick={addtoCart}>Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                    <div className="namecontainer">
    
                        <img className="subImg" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61+BKiiLggL._SL1500_.jpg"/>
                        <h3 className="itemName">HP EliteBook</h3>
                        <h3 className="detailprice">Rs.28000/-</h3>
                        </div>
                        <div className="button">
                            <button className="insideButton" onClick={()=>setDetailb12(true)}>View Details</button>
                            <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                    <div className="namecontainer">
    
                        <img className="subImg" src="https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-enterprise-products/enterprise-systems/precision/precision-3640/pdp/workstation-precision-fixed-3640t-pdp-hero_504x350.jpg?fmt=jpg&wid=570&hei=400"/>
                        <h3 className="itemName">Dell Precision Tower</h3>
                        <h3 className="detailprice">Rs.140000/-</h3>
                        </div>
                        <div className="button">
                            <button className="insideButton" onClick={()=>setDetailb13(true)}>View Details</button>
                            <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                    <div className="namecontainer">
    
                        <img className="subImg" src="https://d1ifrysa6117hj.cloudfront.net/product.template/product_template_image_221027182047_72766.jpg"/>
                        <h3 className="itemName">Mac mini</h3>
                        <h3 className="detailprice">Rs.92000/-</h3>
                        </div>
                        <div className="button">
                            <button className="insideButton" onClick={()=>setDetailb14(true)}>View Details</button>
                            <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                    <div className="namecontainer">
    
                        <img className="subImg" src="https://images.jdmagicbox.com/quickquotes/images_main/asus-rog-strix-gl10dh-in012t-gaming-desktop-amd-8-core-ryzen-7-2700-8gb-ram-512gb-pcie-ssd-windows-10-6gb-nvidia-geforce-gtx-1660-graphics-iron-grey-179350089-fqwh2.jpg"/>
                        <h3 className="itemName">Asus Rog Strix</h3>
                        <h3 className="detailprice">Rs.103000/-</h3>
                        </div>
                        <div className="button">
                            <button className="insideButton" onClick={()=>setDetailb15(true)}>View Details</button>
                            <button className="insideButton1" onClick={addtoCart}>Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                    <div className="namecontainer">
    
                        <img className="subImg" src="https://www.hpservers.in/upload/product_images/big/hp-slim-s01-pf0130in-desktop.jpg"/>
                        <h3 className="itemName">HP Slim Tower</h3>
                        <h3 className="detailprice">Rs.52000/-</h3>
                        </div>
                        <div className="button">
                            <button className="insideButton" onClick={()=>setDetailb16(true)}>View Details</button>
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
        var button=event.target
        var card=button.parentElement.parentElement
        var item=card.querySelector(".itemName").innerHTML
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
    export  {Mobile,Computer}