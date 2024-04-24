import React from 'react'
import Info from './Info'

const Memeheader=()=> {
  return (
    <div className='memeheader'>
      <img className="header-img" alt="meme" src="./react.png"/>
      <header className='headerTitle'>Meme Generator</header>
      <h2 className='header-text'>React-project2</h2>
    </div>
  )
}
const Field =()=>{
    return(
<div className='input-field'>
   <div id="g">
    <label for="Top text">Top text</label><br/> <input value="shut up"></input></div>
   <div id="g"> <label for="Top text">Bottom text</label>
    <br/><input value="And take my money"></input></div>
</div>
    )
}
const Rest=()=>{
 function handleClick(){
    console.log("You clicked me")
  }
  function Logged(){
    console.log(<Info/>)
  }
    return(
        <div className='grid'>
            <button onClick={handleClick} id="get">Get New image</button>
            <br/>
            <br/>
            <img alt="memes" onMouseOver={Logged}  src="./mobile.jpg"/>
        </div>
    )
}

export{Memeheader,Field,Rest}
