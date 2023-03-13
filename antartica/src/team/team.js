import React, { useState } from "react";
import './team.css'


const Team=()=>{
    const [knowS,setKnowS]=useState("Know More")
    const [knowAK,setKnowAK]=useState("Know More")
    const [knowK,setKnowK]=useState("Know More")
    const KnowmoreS=()=>{
        return(
            setKnowS("Sanjay M completed Mechanical Engineering at Builders Engineering College and started his career towards web development in 2023")
        )
    }
    
    return(
        
        <div className="outerteam">
            <h1 className="team">Our Team</h1>
        <div className="outerprofile">
        <div className="profile">
            <img src='https://thumbs.dreamstime.com/b/harry-potter-vector-illustration-cartoon-198988319.jpg' className="imageteam" alt='img'/>
            <p className="teamname">Sanjay M</p>
            <p onClick={KnowmoreS} className='tagline'>{knowS}</p>
        </div>
        </div>
        </div>
    )
}


export default Team