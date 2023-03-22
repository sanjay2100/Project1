import React, { useEffect, useState } from "react";
import './mobile.css';
import { addtoCart } from "./productdetails";


const Addproduct=()=>{
    const [Name,setName]=useState("")
    const [url,setUrl]=useState("")
    const [Price,setPrice]=useState("")
    const [Category,setCategory]=useState("")

    const addItem=(e)=>{
        
        fetch ("http://localhost:3001/addItem",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                Category,
                Name,
                url,
                Price,
            })
        })
       

    }

    return(
        
            <form onSubmit={addItem}>
                <div className="Addnew">
                <label >Name</label>
                <input onChange={(e)=>setName(e.target.value)}/>
                <label >Category</label>
                <select onChange={(e)=>setCategory(e.target.value)}>
                    <option></option>
                    <option>Mobile</option>
                    <option>Laptop/Computer</option>
                    <option>Mobile Accessories</option>
                    <option>Camera</option>
                    <option>Men's fashion</option>
                    <option>Women's fashion</option>
                    <option>Tools</option>
                    <option>Sports</option>
                </select>
                <label>Image URL</label>
                <input onChange={(e)=>setUrl(e.target.value)}/>
                <label>Price</label>
                <input onChange={(e)=>setPrice(e.target.value)}/>
                <button type="submit">Add Item</button>
                </div>
            </form>
        
    )
}

const Mobile=()=>{
const [mobile,setMobile]=useState([])

useEffect(()=>{
    const data =fetch("http://localhost:3001/mobile")
    .then((response)=>response.json())
    .then((data)=>setMobile(data))
      
},[])


    
        
       return (
        <div className="Screen">
        {mobile.map((item)=>{ 
        console.log(item)
        if(item.Category=="Mobile"){
        return (
            <div className="Mobilecard">
                <img src={item.Url} className="CardImage"/>
                <h3 className="CardTitle">{item.Name}</h3>
                <h3 className="CardPrice">{item.Price}</h3>
                <div className="Row3">
                <button onClick={addtoCart}>Add to Cart</button>
                <button>View More</button>
                </div>
                
            </div>
        
        )}
        
    })}
     </div>
    )
 }


 const Computer=()=>{
    const [mobile,setMobile]=useState([])
    
    useEffect(()=>{
        const data =fetch("http://localhost:3001/mobile")
        .then((response)=>response.json())
        .then((data)=>setMobile(data))
          
    },[])
    
    
        
            
           return (
            <div className="Screen">
            {mobile.map((item)=>{ 
            console.log(item)
            if(item.Category=="Laptop/Computer"){
            return (
                <div className="Mobilecard">
                    <img src={item.Url} className="CardImage"/>
                    <h3 className="CardTitle">{item.Name}</h3>
                    <h3 className="CardPrice">{item.Price}</h3>
                    <div className="Row3">
                    <button onClick={addtoCart}>Add to Cart</button>
                    <button>View More</button>
                    </div>
                    
                </div>
            
            )}
            
        })}
         </div>
        )
     }

     const Men=()=>{
        const [mobile,setMobile]=useState([])
        
        useEffect(()=>{
            const data =fetch("http://localhost:3001/mobile")
            .then((response)=>response.json())
            .then((data)=>setMobile(data))
              
        },[])
        
        
            
                
               return (
                <div className="Screen">
                {mobile.map((item)=>{ 
                console.log(item)
                if(item.Category=="Men's fashion"){
                return (
                    <div className="Mobilecard">
                        <img src={item.Url} className="CardImage"/>
                        <h3 className="CardTitle">{item.Name}</h3>
                        <h3 className="CardPrice">{item.Price}</h3>
                        <div className="Row3">
                        <button onClick={addtoCart}>Add to Cart</button>
                        <button>View More</button>
                        </div>
                        
                    </div>
                
                )}
                
            })}
             </div>
            )
         }

         const Women=()=>{
            const [mobile,setMobile]=useState([])
            
            useEffect(()=>{
                const data =fetch("http://localhost:3001/mobile")
                .then((response)=>response.json())
                .then((data)=>setMobile(data))
                  
            },[])
            
            
                
                    
                   return (
                    <div className="Screen">
                    {mobile.map((item)=>{ 
                    console.log(item)
                    if(item.Category=="Women's fashion"){
                    return (
                        <div className="Mobilecard">
                            <img src={item.Url} className="CardImage"/>
                            <h3 className="CardTitle">{item.Name}</h3>
                            <h3 className="CardPrice">{item.Price}</h3>
                            <div className="Row3">
                            <button onClick={addtoCart}>Add to Cart</button>
                            <button>View More</button>
                            </div>
                            
                        </div>
                    
                    )}
                    
                })}
                 </div>
                )
             }

export { Addproduct,Mobile,Computer,Men,Women};