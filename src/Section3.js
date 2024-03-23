import React from 'react'
import './App.css'





const Hero2=()=>{
    return(<div className='hero'>
            <button id="btn">Partner for web product</button>
            
            <h1>We partner with companies to bring clarity to<br/> their brand</h1>
            <p>We develop enjoyable consumer experiences, from digital strategy and <br/>
                content to media and analysis. Leading to meaningful results and satisfied<br/> clients.</p>
<button id="btn3">Process</button>
</div>)}


const Img=()=>{
    return(<>
    <img src={img2}/>
    </>)
}

const Section4=()=>{
    return(
        <div className="sct4">
        <h2>A founder-first branding agency</h2>
        <h>We believe scaling startups require a radically different kind of agency</h>
        </div>
    )
}

const Card=(props)=>{
    return(
        <div className="flex">
        <img src={props.img}/>
       <> <h2>{props.headings}</h2>
        <p>{props.text}</p></>
        </div>
    )
}


export{Section4,Card,Img,Hero2}
