import React from "react";



const Nav=()=>{
    return(
        <div className="nav">
            <ul className="navlist">
                <li>Whats New</li>
                <li>join us</li>
                <li>About us</li>

            </ul>
        </div>
    )
}
const Category=()=>{
    return(
        <div className='category'>
      <div className='container'>
        <img className='catimg' src="https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <h3 className='des'>electronics</h3>
      </div>
      <div className='container'>
        <img className='catimg' src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <h3 className='des'>fashion</h3>
      </div>
      <div className='container'>
        <img className='catimg' src="https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <h3 className='des'>Decoration</h3>
      </div>
      <div className='container'>
        <img className='catimg' src="https://images.pexels.com/photos/868110/pexels-photo-868110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <h3 className='des'>Grocery</h3>
      </div>
      <div className='container'>
        <img className='catimg' src="https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <h3 className='des'>Gardening</h3>
      </div>
      <div className='container'>
        <img className='catimg' src="https://images.pexels.com/photos/4934174/pexels-photo-4934174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <h3 className='des'>Toys</h3>
      </div>
      <div className='container'>
        <img className='catimg' src="https://cdn.pixabay.com/photo/2018/07/22/08/49/tennis-3554019_960_720.jpg"/>
        <h3 className='des'>Sports</h3>
      </div>
      <div className='container'>
        <img className='catimg' src="https://cdn.pixabay.com/photo/2018/02/11/22/21/paper-3146952_960_720.jpg"/>
        <h3 className='des'>Stationary</h3>
      </div>
      <div className='container'>
        <img className='catimg' src="https://cdn.pixabay.com/photo/2015/02/03/02/03/car-621820_960_720.jpg"/>
        <h3 className='des'>Spares</h3>
      </div>
      <div className='container'>
        <img className='catimg' src="https://images.pexels.com/photos/5910956/pexels-photo-5910956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <h3 className='des'>Medicine</h3>
      </div>
     </div>
    )
}

export  {Nav,Category}