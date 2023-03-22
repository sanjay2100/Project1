import logo from './logo.svg';
import './App.css';
import React from 'react';
import{useState} from "react";
import {Category,Deal} from './components';
import{BrowserRouter, Routes, Route,Link} from "react-router-dom";
import {Login,Signup} from './Login';
import {Electronics,Fashion,Decoration,Grocery,Gardening,Toys,Sports,Stationary,Spares,Medicine} from "./category";
import Details1 from './details';
import {Addproduct, Mobile,Computer,Men,Women} from './mobile';
import Home from './home';
import { Cart, closeSidebar, Nav } from './productdetails';
import { SideBar } from './components';
import Team from './team/team';
import Career from './career/career';

    
   



function App() {
  // const head=document.getElementById('head').style.backgroundColor;
  // console.log(head)


  //js for changing theme
  
  const [Theme, NewTheme]=useState("Light")
  
  
  //for opening loginform

  
    

  
  return (
    <div className="App" theme={Theme}>

    <BrowserRouter>
      <Nav />
      <Cart/>
      <SideBar initial={Theme} final={NewTheme}/>
          <Routes>
                    <Route exact path="/electronics" element={<Electronics/>}/>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/fashion" element={<Fashion/>}/>
                    <Route exact path="/Decoration" element={<Decoration/>}/>
                    <Route exact path="/Grocery" element={<Grocery/>}/>
                    <Route exact path="/Gardening" element={<Gardening/>}/>
                    <Route exact path="/Toys" element={<Toys/>}/>
                    <Route exact path="/Sports" element={<Sports/>}/>
                    <Route exact path="/Stationary" element={<Stationary/>}/>
                    <Route exact path="/Spares" element={<Spares/>}/>
                    <Route exact path="/Medicine" element={<Medicine/>}/>
                    <Route exact path="/Team" element={<Team/>}/>
                    <Route exact path="/Careers" element={<Career/>}/>
                    <Route exact path="/addProducts" element={<Addproduct/>}/>
                    <Route exact path="/mobile" element={<Mobile/>}/>
                    <Route exact path="/computers" element={<Computer/>}/>
                    <Route exact path="/men" element={<Men/>}/>
                    <Route exact path="/women" element={<Women/>}/>

          </Routes>      
        
        
        
     
    </BrowserRouter>
    </div>

  );

}
export default App   ;
