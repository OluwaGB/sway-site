import React from 'react'
import './App.css'
import img3 from "./img/image.jpg"
import img2 from "./img/digital-service2 (2).png"

/*const Img=( )=>{
    return(<div className='wrap1'>
    <img id="img" src={img2}/>
    </div>)
}
const Imgs=()=>{
    return(<div className='wrap2'>
    <img id="img" src={img3}/>
    </div>)
}*/
const Img=(props)=>{
    return(
        <img id="imgs1" src={props.img}/>    )
}
export default Img
/*import React from 'react'
import './App.css'
import img3 from "./img/image.jpg"
import img2 from "./img/digital-service2 (2).png"

const Img=( )=>{
    return(<div className='wrap1'>
    <img id="img" src={img2}/>
    </div>)
}
export default Img*/
