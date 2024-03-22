import React from 'react'
import './App.css'

const Coloumn=(props)=>{
    return(<div className="column">
        <img src={props.img}/>
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
        <h5>{props.link}</h5> 
        </div>)

}
export default Coloumn