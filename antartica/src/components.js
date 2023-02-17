import React from "react";
import { Link } from "react-router-dom";
import{useState} from "react";
import './App.css'
import { Nav } from "./productdetails";
import App from "./App"; 


const SideBar=({initial,final})=>{
  const Click=()=>{
    if (initial==="Light"){
      
        final("Dark")
      
    }
    else{
       
      final("Light")
    }
  }    
  return (<div className="bar" Id='bar'>
       <ul className="barul">
           <li className="barli">hello</li>
           <li className="barli">hello</li>
           <li className="barli">hello</li>
           <li className="barli"><button onClick={()=>Click()}>Theme</button>
</li>

       </ul>
   </div>)
}


const Category=()=>{
    return(
      <div>
      <div className='category'>
      <Link to="/electronics"><div className='container'>
        <img className='catimg' src="https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <h3 className='descat'>electronics</h3>
      </div></Link>
      <Link to="/fashion"><div className='container'>
        <img className='catimg' src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <h3 className='des'>fashion</h3>
      </div></Link>
      <Link to="/Decoration"><div className='container'>
        <img className='catimg' src="https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <h3 className='des'>Decoration</h3>
      </div></Link>
      <Link to="/Grocery"><div className='container'>
        <img className='catimg' src="https://images.pexels.com/photos/868110/pexels-photo-868110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <h3 className='des'>Grocery</h3>
      </div></Link>
      <Link to="/Gardening"><div className='container'>
        <img className='catimg' src="https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <h3 className='des'>Gardening</h3>
      </div></Link>
      <Link to="/Toys"><div className='container'>
        <img className='catimg' src="https://images.pexels.com/photos/4934174/pexels-photo-4934174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <h3 className='des'>Toys</h3>
      </div></Link>
      <Link to="/Sports"><div className='container'>
        <img className='catimg' src="https://cdn.pixabay.com/photo/2018/07/22/08/49/tennis-3554019_960_720.jpg"/>
        <h3 className='des'>Sports</h3>
      </div></Link>
      <Link to="/Stationary"><div className='container'>
        <img className='catimg' src="https://cdn.pixabay.com/photo/2018/02/11/22/21/paper-3146952_960_720.jpg"/>
        <h3 className='des'>Stationary</h3>
      </div></Link>
      <Link to="/Spares"><div className='container'>
        <img className='catimg' src="https://cdn.pixabay.com/photo/2015/02/03/02/03/car-621820_960_720.jpg"/>
        <h3 className='des'>Tools</h3>
      </div></Link>
      <Link to="/Medicine"><div className='container'>
        <img className='catimg' src="https://images.pexels.com/photos/5910956/pexels-photo-5910956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <h3 className='des'>Medicine</h3>
      </div></Link>
     </div>          
     </div>
     
    )
}

const Deal=()=>{
  return(
      <div>
      <h1 className="subhead">Deals of the day</h1>
      <div className="dealDay">
          <div className="dealBox1">
            <img className="dealImg" src="https://assets.ajio.com/medias/sys_master/root/20220511/irm1/627b43c6f997dd03e2a557c4/-473Wx593H-461340286-multi-MODEL.jpg"/>
            <h3 className="dealDesc">Buy 3 Tshirts for $10</h3>
          </div>
          <div className="dealBox2">
            <img className="dealImg" src="https://images.pexels.com/photos/6243777/pexels-photo-6243777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <h3 className="dealDesc">Buy Kitchen Set for $5</h3>
          </div>
          <div className="dealBox3">
            <img className="dealImg" src="https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <h3 className="dealDesc">Buy cricket kit for $30</h3>
          </div>
          <div className="dealBox4">
            <img className="dealImg" src="https://images.pexels.com/photos/4887154/pexels-photo-4887154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <h3 className="dealDesc">Buy Lego toys for $5</h3>
          </div>
      </div>
      </div>
      
  )
}



export  {Category,Deal,SideBar}