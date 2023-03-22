import React, { createElement } from "react";
import "./category.css";
import { Link } from "react-router-dom";
import{BrowserRouter,Routes,Route} from "react-router-dom";
import { Nav } from "./productdetails";
import './App.css';


 



const Electronics=()=>{
    return(
        
        <div>
        <div className="ele">
            <div>
                <h3 className="descCategory">Electronics</h3>
                
                <div>
                    <ul className="catul">
                       <Link to="/mobile"><li className="catli">Mobile Phones
                            <img className="catImg" src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-a146bdrdins/gallery/in-galaxy-a14-5g-sm-a146-sm-a146bdrdins-thumb-534856848?$344_344_PNG$"/>
                        </li></Link>
                        <Link to="/computers"><li className="catli">Laptops
                            <img className="catImg" src="https://images.prismic.io/frameworkmarketplace/46cbf974-cdff-4cd8-b761-8b4a3343f6c4_FW-chromebook-homepage-carousel.png?auto=compress,format"/>
                        </li></Link>
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
        
        </div>
    )
}
        const Fashion=()=>{
            return(
                <div className="ele">
                    <div>
                        <h3 className="descCategory">Fashion</h3>
                        <div>
                            <ul className="catul">
                            <Link to="/men"><li className="catli">Men's fashion
                                    <img className="catImg" src="https://m.media-amazon.com/images/I/618Wek95laS._AC._SR360,460.jpg"/>
                                </li></Link>
                                <Link to="/women"> <li className="catli">Women's fashion
                                    <img className="catImg" src="https://i.pinimg.com/564x/98/78/e3/9878e3c17335f78093ba17a9640cb3f5.jpg"/>
                                </li></Link>
                                <li className="catli">Beauty and grooming
                                    <img className="catImg" src="https://images.pexels.com/photos/3993398/pexels-photo-3993398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                                </li>
                                <li className="catli">Andartica brands and more
                                    <img className="catImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnjUN56_kXw0OpsK1Pf8elYiRZeXIzRr0Dg&usqp=CAU"/>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
        const Decoration=()=>{
            return(
                <div className="ele">
                    <div>
                        <h3 className="descCategory">Decoration</h3>
                        <div>
                            <ul className="catul">
                                <li className="catli">Decoration items for home
                                    <img className="catImg" src="https://assets-news.housing.com/news/wp-content/uploads/2022/01/31200633/Vastu-home-decorative-items-to-bring-harmony-and-positive-energies-FB-1200x700-compressed.jpg"/>
                                </li>
                                <li className="catli">Decoration cloths
                                    <img className="catImg" src="https://cf.shopee.sg/file/4286592ffac994997e1abb6671524d6d"/>
                                </li>
                                <li className="catli">Decoration clothes for background
                                    <img className="catImg" src="https://m.media-amazon.com/images/I/518vgjZ7FjL.jpg"/>
                                </li>
                                <li className="catli">Decoration lights
                                    <img className="catImg" src="https://i.ytimg.com/vi/bsDFZ2h9zHE/hqdefault.jpg"/>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
        
        const Grocery=()=>{
            return(
                <div className="ele">
                    <div>
                        <h3 className="descCategory">Grocery</h3>
                        <div>
                            <ul className="catul">
                                <li className="catli">Oils&Gee
                                    <img className="catImg" src="https://images.jdmagicbox.com/rep/b2b/mineral-oils/mineral-oils-1.jpg"/>
                                </li>
                                <li className="catli">Tea&Honey
                                    <img className="catImg" src="https://media.cnn.com/api/v1/images/stellar/prod/141104074409-honey-jar-stock.jpg?q=w_2107,h_1434,x_0,y_0,c_fill/w_1280"/>
                                </li>
                                <li className="catli">Noodles&cookies
                                    <img className="catImg" src="https://img.freepik.com/free-photo/various-types-uncooked-pasta_114579-10617.jpg?w=2000"/>
                                </li>
                                <li className="catli">Nuts&Dhall
                                    <img className="catImg" src="https://homesthetics.net/wp-content/uploads/2020/10/Types-of-Nuts-2.jpg"/>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
        
        const Gardening=()=>{
            return(
                <div className="ele">
                    <div>
                        <h3 className="descCategory">Gardening</h3>
                        <div>
                            <ul className="catul">
                                <li className="catli">Plants & Seeds 
                                    <img className="catImg" src="https://media.istockphoto.com/id/1126541751/photo/hands-planting-the-seeds-into-the-dirt.jpg?s=612x612&w=0&k=20&c=aVUr7F_H4ZSJX89Nmiw59F8WvneKeg-YsBoOiDQw0SA="/>
                                </li>
                                <li className="catli">Gardening Tools
                                    <img className="catImg" src="https://media.istockphoto.com/id/473006572/vector/set-of-various-gardening-items.jpg?s=612x612&w=0&k=20&c=dzJbriaRHnd-pl-WJltRMGGjDxJT-OXVGP90PWbBsQg="/>
                                </li>
                                <li className="catli">Plant & Soil Monitoring
                                    <img className="catImg" src="https://m.media-amazon.com/images/I/71QvkY-vSrS._SX522_.jpg"/>
                                </li>
                                <li className="catli">Watering Hoses & Accessories
                                    <img className="catImg" src="https://i.ebayimg.com/images/g/MUIAAOSwS3Za4FFK/s-l1600.jpg"/>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
        
        const Toys=()=>{
            return(
                <div className="ele">
                    <div>
                        <h3 className="descCategory">Toys</h3>
                        <div>
                            <ul className="catul">
                                <li className="catli">Early Development & Activity Toys
                                    <img className="catImg" src="https://m.media-amazon.com/images/I/51-15h-6pvL._SY355_.jpg"/>
                                </li>
                                <li className="catli">Electronic Toys
                                    <img className="catImg" src="https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDAV-INT-MOBILADIT113709771CB4621/1564604837062_0..jpg?imwidth=320&impolicy=hq"/>
                                </li>
                                <li className="catli">Educational Toys
                                    <img className="catImg" src="https://5.imimg.com/data5/UW/CC/ML/SELLER-946442/wooden-edu-toys-500x500.jpg"/>
                                </li>
                                <li className="catli">Soft Toys
                                    <img className="catImg" src="https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDCUTE-SOFT-TEPLAN775953A980B1E/1564605575354_0..jpg?imwidth=282&impolicy=hq"/>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
        
        const Sports=()=>{
            return(
                <div className="ele">
                    <div>
                        <h3 className="descCategory">Sports</h3>
                        <div>
                            <ul className="catul">
                                <li className="catli">Bats & Balls
                                    <img className="catImg" src="https://cdn3.vectorstock.com/i/1000x1000/87/02/different-kind-of-balls-and-bats-vector-6008702.jpg"/>
                                </li>
                                <li className="catli">Sports & Outdoor Shoes
                                    <img className="catImg" src="https://media.jointlook.com/customPhotos/productImages/bxxy-mens-sports-outdoor-running-shoes-jlms51-15.jpg"/>
                                </li>
                                <li className="catli">Clothing & Accessories
                                    <img className="catImg" src="https://cdn4.vectorstock.com/i/1000x1000/26/73/sports-clothing-equipment-and-accessories-vector-20902673.jpg"/>
                                </li>
                                <li className="catli">Fitness Eqipment
                                    <img className="catImg" src="https://m.media-amazon.com/images/I/71CwVWNa2tL._SL1500_.jpg"/>
                                </li>
                                <li className="catli">sports guide
                                    <img className="catImg" src="https://imageio.forbes.com/specials-images/imageserve/63986034dfa1b6bcd37ab5e1/0x0.jpg?format=jpg&width=1200"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
        
        const Stationary=()=>{
            return(
                <div className="ele">
                    <div>
                        <h3 className="descCategory">Stationary</h3>
                        <div>
                            <ul className="catul">
                                <li className="catli">Books & Note Books
                                    <img className="catImg" src="https://3.imimg.com/data3/YB/GV/MY-2620460/office-note-books-500x500.jpg"/>
                                </li>
                                <li className="catli">Pen & Penciles
                                    <img className="catImg" src="https://makersindia.in/wp-content/uploads/2021/05/IMG_20200325_103938-scaled-e1622366896307.jpg"/>
                                </li>
                                <li className="catli">Office Products
                                    <img className="catImg" src="https://thumbs.dreamstime.com/b/school-office-supplies-20083457.jpg"/>
                                </li>
                                <li className="catli">Crayons
                                    <img className="catImg" src="https://media.istockphoto.com/id/1344967338/vector/crayons-cute-set-of-art-supplies-in-flat-style-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=VDr3J0yTjTZFNqMEu6XkbvITAnfvNTBDC9vJiPgDpTY="/>
                                </li>
                                <li className="catli">Files
                                    <img className="catImg" src="https://5.imimg.com/data5/FM/EG/MY-2634294/2_inches_a4_file_folder_lever_arch-500x500.jpg"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
        
        const Spares=()=>{
            return(
                <div className="ele">
                    <div>
                        <h3 className="descCategory">Tools</h3>
                        <div>
                            <ul className="catul">
                                <li className="catli">Hand  Tool Kits
                                    <img className="catImg" src="https://media.istockphoto.com/id/596042932/photo/set-of-hand-various-work-tools-on-grey-background.jpg?s=1024x1024&w=is&k=20&c=rJ1jk0t9SnY0lFSQC1zvIfczZC1a8AvgNa8K8TkIXp4="/>
                                </li>
                                <li className="catli">Machinery Tools
                                    <img className="catImg" src="https://www.mtwmag.com/wp-content/uploads/2020/07/Toolcard-Cutting-tools-online.jpg"/>
                                </li>
                                <li className="catli">Agriculture Tools
                                    <img className="catImg" src="https://media.istockphoto.com/id/473006572/vector/set-of-various-gardening-items.jpg?s=612x612&w=0&k=20&c=dzJbriaRHnd-pl-WJltRMGGjDxJT-OXVGP90PWbBsQg="/>
                                </li>
                                <li className="catli">Blades
                                    <img className="catImg" src="https://rukminim1.flixcart.com/image/416/416/k3g73bk0/power-hand-tool-kit/w/5/d/10pc-4inch-angle-grinder-accessories-wood-marble-cutting-blade-original-imafmkpazxcrfps2.jpeg?q=70"/>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
        
        const Medicine=()=>{
            return(
                <div className="ele">
                    <div>
                        <h3 className="descCategory">Medicine</h3>
                        <div>
                            <ul className="catul">
                                <li className="catli">First Aid Kits
                                    <img className="catImg" src="https://5.imimg.com/data5/ZK/HG/DN/SELLER-2741493/box-first-aid-kit-500x500.jpg"/>
                                </li>
                                <li className="catli">Herbal Supplements
                                    <img className="catImg" src="https://cdn.sanity.io/images/0vv8moc6/nutrioutlook/7ca6bad833a4f344a6cf6721de97a279f6937e7a-750x806.jpg"/>
                                </li>
                                <li className="catli">Diet & Nutrition
                                    <img className="catImg" src="https://media.istockphoto.com/id/1298129958/photo/vitamin-supplements.jpg?s=612x612&w=0&k=20&c=r9nt91QFxHsgxj-ISLB-yKPw1a7nAMRKcs9P3ZUre3M="/>
                                </li>
                                <li className="catli">Ayurveda Products
                                    <img className="catImg" src="https://post.healthline.com/wp-content/uploads/2019/11/Ayurvedic-herb-herb-turmeric-indian-spices-1200x628-facebook.jpg"/>
                                </li>
                                <li className="catli">Vetnary Medicine
                                    <img className="catImg" src="https://img1.exportersindia.com/product_images/bc-full/dir_94/2809460/livestock-cows-sheep-goats-dogs-chicken-958552.jpg"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            )
        }
         



        

        export {Electronics,Fashion,Decoration,Grocery,Gardening,Toys,Sports,Stationary,Spares,Medicine}
    

