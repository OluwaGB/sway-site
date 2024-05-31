import React from 'react'
import img32 from "./img/homeport.jpg"

function Sct7() {
  return (
    <div className='flext'>
      <div className="text">
        <h2>We build digital brands and experiences</h2>
        <p>We love getting to be creative and work with awesome people, like you.</p>
      </div>
      <div id="btn"><button id = "wkbtn">Visit our work</button></div>
    </div>
  )
}
function Portfolio(props){
    return(
        <div className='portfolio'>
            <img id="portfolioImg" src={props.img}/>
            <h2 id="pheadings">{props.headings}</h2>
            <p>{props.text}</p>
        </div>
    )

}
/*export {Sct7,Portfolio}*/
const Reusables=(props)=>{
  return(
    <img  src={img32}/>
  )
}
export {Sct7,Portfolio,Reusables}