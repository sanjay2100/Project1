import logo from './logo.svg';
import './App.css';
import{useState} from "react";
import {Nav,Category,Deal} from './components';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import {Login,Signup} from './Login';
import {Electronics,Fashion,Decoration,Grocery,Gardening,Toys,Sports,Stationary,Spares,Medicine,Mobile} from "./category";



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

  const[modelL,setModelL]=useState(false)
  const[modelS,setModelS]=useState(false)

  
  return (
    <div className="App" theme={Theme}>
     
     <div className="header" id='head'>
      <Nav/>
      <h2>Antarctica</h2>
      <button className='theBut' onClick={()=>Click()}>theme</button>
      <Login openL={modelL} closeL={setModelL}/>
      <Signup openS={modelS} closeS={setModelS}/>
      <div className='Loginbutton'>
      
      <button className="buttonL" onClick={()=>setModelL(true)}>Login</button>
      <button className="buttonS"onClick={()=>setModelS(true)}>Signup</button>
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
        
        <Routes>
          <Route exact path="/electronics" element={<Electronics/>}/>
            <Route path="/mobile" element={<Mobile/>}/>

          <Route exact path="/fashion" element={<Fashion/>}/>
          <Route exact path="/Decoration" element={<Decoration/>}/>
          <Route exact path="/Grocery" element={<Grocery/>}/>
          <Route exact path="/Gardening" element={<Gardening/>}/>
          <Route exact path="/Toys" element={<Toys/>}/>
          <Route exact path="/Sports" element={<Sports/>}/>
          <Route exact path="/Stationary" element={<Stationary/>}/>
          <Route exact path="/Spares" element={<Spares/>}/>
          <Route exact path="/Medicine" element={<Medicine/>}/>
 
          </Routes>      
        
        <Deal/>
        <div>
        <img className='mobile' src="https://images.samsung.com/in/smartphones/galaxy-s23/images/galaxy-s23-share-image.jpg"/>
        <h3 className='mobiledesc'>The new Samsung galaxy s23</h3>
        </div>
     </div>
    </div>
    
  );
}

export default App;
