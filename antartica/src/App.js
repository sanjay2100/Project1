import logo from './logo.svg';
import './App.css';
import{useState} from "react";
import Nav from './components';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";



function App() {
  const [Theme, NewTheme]=useState("Light")
  const [link,setLink]=useState("")

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
  return (
    <div className="App" theme={Theme}>
     <div className="header">
      <Nav/>
      <h2>Antartica</h2>
      <button onClick={()=>Click()}>theme</button>
      <div className='Login'>
      <button className="buttonL">Login</button>
      <button className="buttonS">Signup</button>
      </div>
      <img className='image' src={link}/>
     </div>
     <div className='FASHION'>
     
      
      <img className='fashion' src='https://images.pexels.com/photos/8108334/pexels-photo-8108334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
      <img className='fashion' src='https://images.pexels.com/photos/7061960/pexels-photo-7061960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
      <ScrollAnimation animationIn=""><h2 className='unleash'>Unleash the fashion freak in you</h2></ScrollAnimation>
     </div>
    </div>
  );
}

export default App;
