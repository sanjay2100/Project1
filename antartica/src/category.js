import React from "react";
import "./category.css";
import { Link } from "react-router-dom";
import{BrowserRouter,Routes,Route} from "react-router-dom";



var item=document.querySelectorAll(".itemName")
var button=document.querySelectorAll(".insideButton")
for (var i=0;i<button.length;i++){
    button[i].addEventListener("click", console.log(item[i])
    )
    
}


const Electronics=()=>{
    return(
        
        
        <div className="ele">
            <div>
                <h3 className="descCategory">Electronics</h3>
                
                <div>
                    <ul className="catul">
                       <Link to="/mobile"><li className="catli">Mobile Phones
                            <img className="catImg" src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-a146bdrdins/gallery/in-galaxy-a14-5g-sm-a146-sm-a146bdrdins-thumb-534856848?$344_344_PNG$"/>
                        </li></Link>
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
        const Fashion=()=>{
            return(
                <div className="ele">
                    <div>
                        <h3 className="descCategory">Fashion</h3>
                        <div>
                            <ul className="catul">
                                <li className="catli">Men's fashion
                                    <img className="catImg" src="https://m.media-amazon.com/images/I/618Wek95laS._AC._SR360,460.jpg"/>
                                </li>
                                <li className="catli">Women's fashion
                                    <img className="catImg" src="https://i.pinimg.com/564x/98/78/e3/9878e3c17335f78093ba17a9640cb3f5.jpg"/>
                                </li>
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




        const Mobile=()=>{
            return (
                
                <div>
                    
                <h3 className="heading">Mobile</h3>
                <ul>
                <div className="subcat">
                <li><div className="card">
                        <img className="subImg" src="https://images.samsung.com/in/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-colors-phantom-black-back-s.jpg"/>
                        <h3 className="itemName">Samsung galaxy s23 ultra</h3>
                        <div className="button">
                            <button className="insideButton">View Details</button>
                            <button className="insideButton1">Add to cart</button>
                        </div>
                        </div ></li>

                    <li><div className="card">
                        <img className="subImg" src="https://www.citypng.com/public/uploads/small/11662640711wteapyjghacaqyrtiv0erdr5socmg4le10gkhlw6wpdifvpwf1yjaeterdnpvhnydpzq6rahwtjo5hb1ybest3bsduaaaf3fkvor.png"/>
                        <h3 className="itemName">iPhone 14 Pro</h3>
                        <div className="button">
                            <button className="insideButton">View Details</button>
                            <button className="insideButton1">Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                        <img className="subImg" src="https://static.toiimg.com/thumb/resizemode-4,msid-81713028,imgsize-500,width-800/81713028.jpg"/>
                        <h3 className="itemName">Onepluse 11 pro</h3>
                        <div className="button">
                            <button className="insideButton">View Details</button>
                            <button className="insideButton1">Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                        <img className="subImg" src="https://oasis.opstatics.com/content/dam/oasis/page/2021/ebba/spec/Charcoal-Ink.png"/>
                        <h3 className="itemName">Onepluse norde CE</h3>
                        <div className="button">
                            <button className="insideButton">View Details</button>
                            <button className="insideButton1">Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                        <img className="subImg" src="https://media.croma.com/image/upload/v1662421833/Croma%20Assets/Communication/Mobiles/Images/225813_bzsg1o.png"/>
                        <h3 className="itemName">Realme note 9 pro max</h3>
                        <div className="button">
                            <button className="insideButton">View Details</button>
                            <button className="insideButton1">Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                        <img className="subImg" src="https://m.media-amazon.com/images/I/71EyTcGszpL._SX679_.jpg"/>
                        <h3 className="itemName">Google pixel 6 pro</h3>
                        <div className="button">
                            <button className="insideButton">View Details</button>
                            <button className="insideButton1">Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                        <img className="subImg" src="https://cdn1.smartprix.com/rx-i2yXcPvGH-w420-h420/motorola-moto-x40.jpg"/>
                        <h3 className="itemName">Motarola g72</h3>
                        <div className="button">
                            <button className="insideButton">View Details</button>
                            <button className="insideButton1">Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                        <img className="subImg" src="https://cdn.shopify.com/s/files/1/1684/4603/products/Nothing-Phone-1_Black_600x.png?v=1657996891"/>
                        <h3 className="itemName">Nothing Phone 1</h3>
                        <div className="button">
                            <button className="insideButton">View Details</button>
                            <button className="insideButton1">Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                        <img className="subImg" src="https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:360"/>
                        <h3 className="itemName">Nokia 3310</h3>
                        <div className="button">
                            <button className="insideButton">View Details</button>
                            <button className="insideButton1">Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                        <img className="subImg" src="https://www.assuredzone.com/it/wp-content/uploads/sites/8/2022/05/Sony-Xperia-1-IV.jpg"/>
                        <h3 className="itemName">Sony xeperia 1 IV</h3>
                        <div className="button">
                            <button className="insideButton">View Details</button>
                            <button className="insideButton1">Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                        <img className="subImg" src="data:image/jpeg;base64,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"/>
                        <h3 className="itemName">iPhone 13</h3>
                        <div className="button">
                            <button className="insideButton">View Details</button>
                            <button className="insideButton1">Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                        <img className="subImg" src="https://m.media-amazon.com/images/I/8116d+CC3yL._SL1500_.jpg"/>
                        <h3 className="itemName">Google pixel 6</h3>
                        <div className="button">
                            <button className="insideButton">View Details</button>
                            <button className="insideButton1">Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                        <img className="subImg" src="https://i.gadgets360cdn.com/products/large/poco-x4-pro-5g-549x800-1648452165.jpg"/>
                        <h3 className="itemName">Poco 4x pro</h3>
                        <div className="button">
                            <button className="insideButton">View Details</button>
                            <button className="insideButton1">Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                        <img className="subImg" src="https://m.media-amazon.com/images/I/81yL2dXKTHL._SX679_.jpg"/>
                        <h3 className="itemName">Samsung M53</h3>
                        <div className="button">
                            <button className="insideButton">View Details</button>
                            <button className="insideButton1">Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                        <img className="subImg" src="https://images.livemint.com/img/2022/08/17/600x338/flip_4_1660148234065_1660731304721_1660731304721.png"/>
                        <h3 className="itemName">Samsung z flip</h3>
                        <div className="button">
                            <button className="insideButton">View Details</button>
                            <button className="insideButton1">Add to cart</button>
                        </div>
                    </div></li>
                    <li><div className="card">
                        <img className="subImg" src="https://m.media-amazon.com/images/I/81zLNgcvlaL._SX679_.jpg"/>
                        <h3 className="itemName">Redme note 11</h3>
                        <div className="button">
                            <button className="insideButton">View Details</button>
                            <button className="insideButton1">Add to cart</button>
                        </div>
                    </div></li>
                </div></ul>
                </div>
                
            )
            
        }

        export {Electronics,Fashion,Decoration,Grocery,Gardening,Toys,Sports,Stationary,Spares,Medicine,Mobile}
    

