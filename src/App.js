import logo from './logo.svg';
import './App.css';
import Hero from './Hero.js'
import Section1 from './Section1'
import Column from './Column'
import {Section4,Card,Hero2} from './Section3.js'
import Article from './NewCards.js'
import { Navbar,Navbar2 } from './Nav.js';
import Imgs1 from './Img.js';
import { Sct4,Images } from './Section4.js';
import Section5 from './Sct5.js';
import Counter from './Sct6.js';
import Memesmaker from './Memesmaker.js';
import { Sct7,Portfolio } from './Sct7.js';
import State from './State.js';
import Array from './Array.js';
import Footer from './Footer.js';
import img1 from './img/digital-service2 (2).png'
import img3 from './img/review1.jpg'
import img2 from './img/image.jpg'
import img4 from './img/review2.jpg'
import img5 from './img/review3.jpg'
import img6 from './img/review6.jpg'
import img8 from  "./img/portfolio.jpg"
import img9 from './img/portf.jpg'
import img10 from './img/portfoliosh.jpg'
import img11 from './img/portfolios.jpg'

function App() {
  return (
    <div className="App">
      <div className="navs"><Navbar/>
      <Navbar2/></div>
      <div className='flexy1'><Hero/>
      <div className='wrap1'><Imgs1 img="./person.png"/></div>
      </div>
      <Section1/>
    
      <div className="flexy2"><Column img={img1} headings="headings" text="lorem ipsum poleredo" link="https//www.google.com" />
      <Column img={img2} headings="headings" text="lorem ipsum poleredo" link="https//www.google.com" />
      <Column img={img1} headings="headings" text="lorem ipsum poleredo" link="https//www.google.com" /></div>
      <div className='flexy3'>
      <Imgs1 img="./mobile.jpg"/><Hero2/></div>
      <div className="grid">
        <Section4/>
     <div className="flexy"><Article rating={5.0} price={"$"+30} reviews="A qualityproduct" img={img3}/>
      <Article rating={5.0} price={"$"+30} reviews="A qualityproduct" img={img4}/></div>
      <div className="flexy"><Article rating={5.0} price={"$"+30} reviews="A qualityproduct" img={img6}/>
      <Article rating={5.0} price={"$"+30} reviews="A qualityproduct" img={img5}/>
      </div>
      </div>
      <div className="grid">
        <Sct4/>
       <div className="flexy">
        <Images img=".air bnb.png"/>
        <Images img="./apple.png"/>
        <Images img="./spotify.png"/>
        <Images img="./nike.png"/>
        <Images img="./google.png"/>
        <Images img="./react.png"/>
        <Images img="./amazon.png"/>
        </div>
      </div>
      <div className='flex'><Section5/>
      <Imgs1  img="./enve.jpg"/></div>
      <div className='flexy'>
      <Counter number={100
      +"+"} text="Completed projects"/>
      <Counter number={20
      +"+"} text="Years of experience"/>
      <Counter number={150
      +"%"} text="Delivery rate"/>
      <Counter number={100
      +"+"} text="Satisfied customers"/>
      </div>
      <Memesmaker/>
      <Array/>
      <State/>
      <Sct7/>
      <div className='flex'>
        <Portfolio  img={img8} headings="Stationery and Branding design" text="ClientKeyDesignProjectStationery and Branding Designs Project DescriptionIn collaboration with Keyers, we embarked on the Stationery and Branding Designs project, focusing on creating cohesive visual identities. Our partnership involved crafting visually striking and functional designs tailored to the brand's essence. From logo creation to letterhead designs, each element was meticulously developed to ensure consistency across all branding materials. With our dedication to quality and creativity, we brought Keyers’ vision to life, leaving a 
        lasting impression on clients and audiences alike. Categories Branding Software Design"/>
        <Portfolio  img={img9} headings="StartUp-Landing Template" text="ClientReight ProjectStartup Landing Template Project DescriptionWith Reight, we designed a Landing Template for startups. Our goal: create a modern interface reflecting each startup's unique identity. We focused on easy navigation and engaging elements to ensure an enjoyable user experience. Our result: an adaptable tool 
        empowering startups to impress visitors from the get-go. Categories Branding Software Design"/>
      </div>
      <div className='flex'>
        <Portfolio  img={img10} headings="Showtracker-media service provider" text="ClientMediaVerse ProjectShow Tracker Media-Services Provider Project DescriptionWith MediaVerse, we built a platform for show trackers. Our goal: make finding and enjoying media easier. Through easy-to-use design and clever features, we've made entertainment more enjoyable for users everywhere. Categories Branding Software Design Create the look you want on your website easily.Customize the framework to match your business processes using simple drag-and-drop tools.Drive traffic to your website and increase engagement.Welcome your visitors with elegance and flexibility and center the world around your website.Increase conversion and build loyalty with
         a small team.Investing in loyalty is as important as investing in usability and conversion [...]"/>
        <Portfolio  img={img11} headings="Business card paper mockup" text="ClientPaperPrint Co. ProjectBusiness Card Paper Mock-Up Project DescriptionWith PaperPrint Co., we developed realistic mock-ups for business card paper. Our aim: provide accurate previews for businesses. Through detailed design, we've simplified the decision-making process and ensured a seamless printing experience. Categories Branding Software Design Create the look you want on your website easily.Customize the framework to match your business processes using simple drag-and-drop tools.Drive traffic to your website and increase engagement.Welcome your visitors with elegance and flexibility and center the world around your website.Increase conversion and build loyalty with a 
        small team.Investing in loyalty is as important as investing in usability [...]"/>
        
      </div>
      <Footer headings1="WE CUSTOM BUILD WEBSITE TO MAKE YOUR BRAND STAND OUT FROM NOISE" headings2="We start by listening and that shape our design process
        ,with our client as partner" button ="Contact Us"/>
      
    </div>
  );
}

export default App;
