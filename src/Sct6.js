import React from 'react'
import './App.css'

const Counter=(props)=>{
    return(
        <div className='counter'>
            <h3>{props.number}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default Counter