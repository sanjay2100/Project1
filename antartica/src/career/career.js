import React, { useEffect, useState } from "react";
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
const[job,setJob]=useState([])
useEffect(()=>
    {
     const data=fetch("http://localhost:3001/Joblist")
    .then((response)=>response.json())
    .then((data)=>setJob(data))},[])
    console.log(job)

    
    return(
        
        <div>
            <div className="career">
                <button className="jobpost" onClick={()=>setPost('true')}>Post a job</button>
                <h2 className="Cheading">Careers</h2>
                <div className="careerbody">
                
        {job.map((value)=>{
            return(
            
                    <div className="careercont">
                        <h2 className="jobtitle">{value.JobName}</h2>
                        <p className="jd">{value.Desc}</p>
                        <button className="careerbutton" onClick={()=>setapply(true)} >Apply Now</button>
                    </div>
                
                
            )
        })}
        </div>
            </div>
        
        
            <Postajob openPost={Post} closePost={setPost}/>
            <Application openApp={apply} closeApp={setapply}/>

        </div>
    
    )
}

//Post a job
const Postajob=({openPost,closePost})=>{
    const [jobTitle,setJobtitle]=useState("")
    const[jobDesc,setjobDes]=useState("")
    const postThis=()=>{
    
        fetch("http://localhost:3001/Career",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                jobTitle,
                jobDesc
            })
    
        })
        
           
    }
    if(!openPost) return null
    else{
        return(
        <div className="HRpannel">
            <h3 onClick={()=>closePost(false)}>x</h3>
            <label>JobTitle</label>
            <input className="JTInput" onChange={(e)=>setJobtitle(e.target.value)}/>
            <label>Job Description</label>
            <textarea rows='5' cols='6' className="JDInput" onChange={(e)=>setjobDes(e.target.value)}/>
            <button onClick={postThis}  className="jobpostin">Post Job</button>
        </div>
    )
        }   
}



//Apply now


 const Application=({openApp,closeApp})=>{
    if(!openApp) return null
    
    return(
        <div>
            <form action='/apply' method="POST" className="Application">
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