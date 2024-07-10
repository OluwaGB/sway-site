import logo from './logo.svg';
import './App.css';
import { Navbar,Navbar2 } from './Nav.js';
import Hero from './Hero.js'
import Section1 from './Section1'
import {Count,Coloumn} from './Column'
import Img from './Img.js'
import {Section4,Card,Hero2} from './Section3.js'
import {Sct7,Portfolio,Reusables} from './Sct7.js'
import { Sct4,Images } from './Section4.js'
import Article from './NewCards.js'
import img32 from "./img/homeport.jpg"
import img1 from './img/table.jpg'
/*import img3 from "./img/table.jpg"*/
import img2 from './img/image.jpg'
import img4 from './img/review2.jpg'
import img5 from './img/review3.jpg'
import img6 from './img/review6.jpg'
import img8 from  "./img/portfolio.jpg"
import img9 from './img/portf.jpg'
import img10 from './img/portfoliosh.jpg'
import img11 from './img/portfolios.jpg'
import img12 from "./img/portf.jpg"
//below this comment are new component created while debugging this app
//import Reusable from './ReusableImage.js'
import Picture from './Picture.js';
import Section5 from './Sct5.js';
import Footer from './Footer.js';
import img34 from './img/home_main_portfolio_4 (1).jpg'
import Memesmaker from './Memesmaker.js'

function App() {
  return (
    <div className="App">
     <div className='navigation'><Navbar/>
      <Navbar2/></div> 
      <div className='flexy3'><Hero/>
      <Img id="Bimage" />
      </div>
      <Section1/>
    
      <div className="flexy2"><Coloumn img={img1} headings="headings" text="lorem ipsum poleredo" link="https//www.google.com" />
      <Coloumn img={img2} headings="headings" text="lorem ipsum poleredo" link="https//www.google.com" />
      <Coloumn img={img1} headings="headings" text="lorem ipsum poleredo" link="https//www.google.com" /></div>
      <div class="flexy">
      <Picture img={img8}/>
      <Hero2/>
        </div>
     <div className="flex"><Article id="article" rating={5.0} price={"$"+30} reviews="A qualityproduct" img={img1}/>
      <Article id="article" rating={5.0} price={"$"+30} reviews="A qualityproduct" img={img6}/>
      </div>
      <div className="flex"><Article id="article" rating={5.0} price={"$"+30} reviews="A qualityproduct" img={img9}/>
      <Article id="article" rating={5.0} price={"$"+30} reviews="A qualityproduct" img={img8}/></div>
      <Sct4 />
    <Images/>
    <div className='flexy'>
      <Section5/>
      <Picture  img={img32}/>
    </div>
   <div className="flexys"><Count id="counter" number="100+" text="Completed project"/>
    <Count id="counter" number="20+" text="Years of experience"/>
   <Count id="counter" number="150%" text="Delivery rate"/> <Count id="counter" number="100+" text="Satisfied customers"/>

   </div> 
   '
   '
   <Footer headings1="Build your brand with the help of our quality team members" 
   headings2="We are always ready to table your brand to the right people" 
   button="Connect"/>
    </div>
  );
}

export default App;

