import React from 'react'
import './App.css'
//import img from './logo.svg'
//import img2 from './img/digital-service1 (1).png';
import img3 from './img/image.jpg'

const Hero=()=>{
    const Notify=()=>{"Want to get stated"?alert('Getting ready for the new page......'):alert('keep scrolling')}
   
   
    return(<div className='hero'>
        <span>
            <button id="btn">Welcome to iT</button>
            <button id="btn2">Tech And Product</button></span>
            <h1>We create digital experiences</h1>
            <p>We have the knowledge and expertise in design and modern programming<br/>
                 languages and platforms to help startups and<br/>
growing companies build successful products.</p>
<button onClick={Notify}id="btn3">Get Started</button>
<br/>


 </div>)
}

/*const Img=(props)=>{
    return(<>
    <img src={img}/>
    </>)
}*/
export default Hero