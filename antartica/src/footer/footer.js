import React from "react";
import './footer.css'
import {Link} from 'react-router-dom'
const Footer=()=>{
    return(<div className="footer">
        <div className="knowouter">
            <ul className="knowul">
                <li><h2 className="heading">Know Us</h2></li>
                <Link to='/Careers'><li>Career</li></Link>
                <li>Who we are</li>
                <Link to='/team'><li>Meet our team</li></Link>
            </ul>
            </div>
            <div className="social">
                <h2 className="connect">Follow Us</h2>
                <div className="icons">
                <i class="fa-brands fa-instagram"/>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
            <div className="earn">
            <ul className="knowul">
                <li><h2 className="heading">Earn with Antartica</h2></li>
                <li>Sell on Antartica</li>
                <li>Become Affiliate</li>
                <li>Be a delivery partner</li>
                <li>Adverise Your Product</li>
            </ul>
            </div>
            
        
    </div>)
}

export default Footer
