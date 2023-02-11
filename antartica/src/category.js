import React from "react";
import "./category.css";
const Electronics=()=>{
    return(
        <div className="ele">
            <div>
                <h3 className="descCategory">Electronics</h3>
                <div>
                    <ul className="catul">
                        <li className="catli">Mobile Phones
                            <img className="catImg" src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-a146bdrdins/gallery/in-galaxy-a14-5g-sm-a146-sm-a146bdrdins-thumb-534856848?$344_344_PNG$"/>
                        </li>
                        <li className="catli">Laptops
                            <img className="catImg" src="https://images.prismic.io/frameworkmarketplace/46cbf974-cdff-4cd8-b761-8b4a3343f6c4_FW-chromebook-homepage-carousel.png?auto=compress,format"/>
                        </li>
                        <li className="catli">Camera
                            <img className="catImg" src="https://sharpi.in/wp-content/uploads/2022/06/1653353121_1708099.jpg"/>
                        </li>
                        <li className="catli">Accessories
                            <img className="catImg" src="https://m.media-amazon.com/images/I/31tGekYL9iL._SY355_.jpg"/>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Electronics