import logo from './logo.svg';
import './App.css';
import{useState} from "react";
import {Nav,Category} from './components';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Login from './Login';



function App() {
  // const head=document.getElementById('head').style.backgroundColor;
  // console.log(head)


  //js for changing theme
  const [Theme, NewTheme]=useState("Light")
  const [link,setLink]=useState("https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964_960_720.png")

  const Click=()=>{
    if (Theme==="Dark"){
      return(
      NewTheme("Light"),
      setLink("https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964_960_720.png"));
    }
    else{
      NewTheme("Dark")
      setLink("https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_960_720.png");
    }
  }

  //for opening loginform

  const[model,setModel]=useState(false)
   
  
  return (
    <div className="App" theme={Theme}>
     <div className="header" id='head'>
      <Nav/>
      <h2>Antartica</h2>
      <button className='theBut' onClick={()=>Click()}>theme</button>
      <Login open={model} close={setModel}/>
      <div className='Loginbutton'>
      
      <button className="buttonL" onClick={()=>setModel(true)}>Login</button>
      <button className="buttonS">Signup</button>
      </div>
      <img className='image' src={link}/>
     </div>
     <div id='body' className='body'>
     <div className='FASHION'>
      <img className='fashion' src='https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907_Full-Bleed-Image.jpg.large.jpg'/>
      <img className='fashion' src='https://www.techspot.com/articles-info/2295/images/2021-07-20-image-2.jpg'/>
      <h2 className='trend'>Explore latest Technology</h2>
      </div>
     <Category/>
     
  
     
     
     </div>
    </div>
  );
}

export default App;
