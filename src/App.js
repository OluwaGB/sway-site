import logo from './logo.svg';
import './App.css';
import Hero from './Hero.js'
import Section1 from './Section1'
import Column from './Column'
import {Section4,Card,Hero2} from './Section3.js'
import Article from './NewCards.js'
import { Navbar,Navbar2 } from './Nav.js';
import {Img,Imgs} from './Img.js';
import { Sct4,Images } from './Section4.js';
import img1 from './img/digital-service2 (2).png'
//import img3 from "./img/"
import img2 from './img/image.jpg'

function App() {
  return (
    <div className="App">
      <div className="navs"><Navbar/>
      <Navbar2/></div>
      <div className='flexy1'><Hero/>
      <Img/>
      </div>
      <Section1/>
    
      <div className="flexy2"><Column img={img1} headings="headings" text="lorem ipsum poleredo" link="https//www.google.com" />
      <Column img={img2} headings="headings" text="lorem ipsum poleredo" link="https//www.google.com" />
      <Column img={img1} headings="headings" text="lorem ipsum poleredo" link="https//www.google.com" /></div>
      <div className='flexy3'>
      <Imgs/><Hero2/></div>
      <div className="grid">
        <Section4/>
     <div className="flexy"><Article rating={5.0} price={"$"+30} reviews="A qualityproduct" img={img1}/>
      <Article rating={5.0} price={"$"+30} reviews="A qualityproduct" img={img1}/></div>
      <div className="flexy"><Article rating={5.0} price={"$"+30} reviews="A qualityproduct" img={img1}/>
      <Article rating={5.0} price={"$"+30} reviews="A qualityproduct" img={img1}/>
      </div>
      </div>
      <div className="grid">
        <Sct4/>
       <div className="flex">
        <Images img=".air bnb.png"/>
        <Images img="./apple.png"/>
        <Images img="./spotify.png"/>
        <Images img="./nike.png"/>
        <Images img="./google.png"/>
        <Images img="./react.png"/>
        <Images img="./amazon.png"/>
        </div>
      </div>
      
    </div>
  );
}

export default App;

