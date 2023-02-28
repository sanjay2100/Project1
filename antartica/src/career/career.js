import React, { useState } from "react";
import './career.css'



const ApplyButtons=document.querySelectorAll('.careerbutton')

for(var i=0;i<ApplyButtons.length;i++)
{
    ApplyButtons[i].addEventListener('click',Heading)
}
function Heading(Event){
    var Applybutton=Event.target
    var container=Applybutton.parentElement
    var jobname=container.querySelector('.jobtitle').innerHTML;
    var holder=Application.querySelector('.jobApply')
    holder.innerText="Appication for "+jobname
 }
const Career=(e)=>{
const [Post,setPost]=useState(false)
const[apply,setapply]=useState(false)
    return(
        <div>
        
        <div className="career">
            <button className="jobpost" onClick={()=>setPost('true')}>Post a job</button>
            <h2 className="Cheading">Careers</h2>
            <div className="careerbody">
                <div className="careercont">
                    <h2 className="jobtitle">Yaaru venaalum</h2>
                    <p className="jd">Onnu Solraku illa neengala paathu pudichiruntha vaanga</p>
                    <button className="careerbutton" onClick={()=>setapply(true)} >Apply Now</button>
                </div>
                <div className="careercont">
                    <h2 className="jobtitle">Driver</h2>
                    <p className="jd">Effecient drivers needed need to overtake Vin Diesel if required. If situation arises they should be ready to drive aeroplane Jet and Cycle</p>
                    <button className="careerbutton">Apply Now</button>
                </div>
                <div className="careercont">
                    <h2 className="jobtitle">Helper</h2>
                    <p className="jd">Need to push the ship if it breaksdown in the Midsea!!</p>
                    <button className="careerbutton">Apply Now</button>
                </div>

            </div>
            <Postajob openPost={Post} closePost={setPost}/>
            <Application open={apply} close={setapply}/>

        </div>
        </div>
    )
}

//Post a job
const Postajob=({openPost,closePost})=>{
    if(!openPost) return null
    else{
        return(
        <div className="HRpannel">
            <h3 onClick={()=>closePost(false)}>x</h3>
            <label>JobTitle</label>
            <input className="JTInput"/>
            <label>Job Description</label>
            <textarea rows='5' cols='6' className="JDInput"/>
            <button onClick={postThis}  className="jobpostin">Post Job</button>
        </div>
    )
        }   
}
const postThis=({closePost})=>{
    
    var newJT=document.querySelector(".JTInput").value
    var newJD=document.querySelector(".JDInput").value
    var div=document.createElement('div')
    var container=document.querySelector('.careerbody')
    var cbutton=document.createElement('button')
    cbutton.classList.add("careerbutton")
    div.classList.add("careercont") 
    var h=document.createElement('h2')
    var p=document.createElement('p')
    h.classList.add("jobtitle")
    p.classList.add("jd")
    h.innerHTML=newJT
    p.innerHTML=newJD
    cbutton.innerHTML="Apply Now"
    console.log(cbutton);
    div.appendChild(h)
    div.appendChild(p)
    div.appendChild(cbutton)
    container.appendChild(div)
    
       
}


//Apply now


 const Application=({open,close})=>{
    if(!open) return null
    
    return(
        <div>
            <form action='/apply' method="POST" className="Application">
                <h3 className="jobApply"></h3>
                <div className="subdiv">
                    <label>Name</label>
                    <input type='text' name="Name" placeholder="Enter your Name"/>
                </div>
                <div className="subdiv">
                <label>Degree</label>
                <input list="Education" placeholder="Select your Degree"/>
                </div>
                <div className="subdiv">
                <label>DOB</label>
                <input type="date" placeholder="Select your DOB"/>
                </div>
                <div className="subdiv">
                <label>UG Percentage</label>
                <input type="text" placeholder="Enter your Precentage"/>
                </div>
                <div className="subdiv">
                <label>Resume</label>
                <input type="file" placeholder="Upload your Resume"/>
                </div>
                
                
                    <datalist id="Education">
                        <option value="Bachelor of Engineering"/>
                        <option value="Bachelor of Technology"/>
                        <option value="Bachelor of Arts"/>
                        <option value="Bachelor of Science"/>
                    </datalist>
                <button type="submit">Submit</button>
                
           
            </form>
        </div>
    )
 }


export default Career