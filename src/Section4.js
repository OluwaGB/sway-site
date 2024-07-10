import React from 'react'
import './App.css'
//import img24 from './img/image.jpg'
const Sct4=()=>{
    return(
        <div id="sct4"><h3>TRUSTED BY FORWARD-THINKING  SOFTWARE TEAMS AROUND THE WORLD
        </h3>
        </div>
    )
}
const Images=(props)=>{
    return(<div className="flexys">
        <img alt="airbnb" id="images" src="air bnb.png"/>
        <img id="images" alt ="spotify" src="spotify.png"/>
        <img id="images" alt="nike" src="nike.png"/>
        <img id="images" alt="react" src="react.png"/>
        <img id="images" alt="google" src="google.png"/>
        <img id="images" alt="apple" src="apple.png"/>
        <img id="images"  alt="enve" src="enve.jpg"/>
    </div>
        
        
    )

}
export {Sct4,Images};