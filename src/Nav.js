import React from 'react';
import './App.css';
const Navbar=()=>{return(<div className='nav'>
    <h>SWIFT</h>
 </div>   
)
    
}
const Navbar2=()=>{
    return(<div className='navbar'>
       <> <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Service</a>
        <a href="#">Portfolio</a>
        <a href="#">Pricing</a></>
       <> <button id="navbtn">Contact Us</button></>
    </div>)
}
export {Navbar,Navbar2}