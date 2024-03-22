import logo from './logo.svg';
import './App.css';
import Hero from './Hero.js'
import Section1 from './Section1'
import Column from './Column'
import {Section4,Card,Img,Hero2} from './Section3.js'
import Article from './NewCards.js'
import img1 from './img/digital-service2 (2).png'
import img3 from "./img/"
import img2 from './img/image.jpg'

function App() {
  return (
    <div className="App">
      <div className='flexy'><Hero/>
      <Img id="Bimage" src={img3}/>
      </div>
      <Section1/>
    
      <div className="flex"><Column img={img1} headings="headings" text="lorem ipsum poleredo" link="https//www.google.com" />
      <Column img={img2} headings="headings" text="lorem ipsum poleredo" link="https//www.google.com" />
      <Column img={img1} headings="headings" text="lorem ipsum poleredo" link="https//www.google.com" /></div>
      <Hero2/>
      <Img src={img2}/>
      <Section4/>
     <div className="flex"><Article rating={5.0} price={"$"+30} reviews="A qualityproduct" img={img1}/>
      <Article rating={5.0} price={"$"+30} reviews="A qualityproduct" img={img1}/>
      <Article rating={5.0} price={"$"+30} reviews="A qualityproduct" img={img1}/></div>
      
    </div>
  );
}

export default App;
