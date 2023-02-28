import React, { useState } from "react";
import './team.css'


const Team=()=>{
    const [knowS,setKnowS]=useState("Know More")
    const [knowAK,setKnowAK]=useState("Know More")
    const [knowK,setKnowK]=useState("Know More")
    const KnowmoreS=()=>{
        return(
            setKnowS("Life is A triangle")
        )
    }
    const KnowmoreAK=()=>{
        return(
            setKnowAK("AK na Ajith Kumar nu nenachiya Arun Kumar da!!")
        )
    }
    const KnowmoreK=()=>{
        return(
            setKnowK("Pengal Nam Naatin Kangal")
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
        <div className="profile">
            <img src='https://thumbs.dreamstime.com/z/girl-boy-electric-scooter-city-colorful-cartoon-vector-illustration-74100102.jpg' className="imageteam" alt='img'/>
            <p className="teamname">AK</p>
            <p onClick={KnowmoreAK} className='tagline'>{knowAK}</p>

        </div>
        <div className="profile">
            <img src='https://t.pimg.jp/020/607/247/1/20607247.jpg' className="imageteam" alt='img'/>
            <p className="teamname">Kabilesh S</p>
            <p onClick={KnowmoreK} className='tagline'>{knowK}</p>

        </div>
        </div>
        </div>
    )
}


export default Team