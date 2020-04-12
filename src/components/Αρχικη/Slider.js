import React from 'react';
import Zoom from 'react-reveal/Zoom';

import './Slider.css';

// import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';
// import { Zoom } from 'react-slideshow-image';




const slideImages = [
  './images/slideShow/im1.jpg',
  './images/slideShow/im2.jpg',
  './images/slideShow/im3.jpg',
  './images/slideShow/im4.jpg',
  './images/slideShow/im5.jpg',

];

// const zoomOutProperties = {
//   duration: 5000,
//   transitionDuration: 500,
//   infinite: true,
//   indicators: true,
//   scale: 0.4,
//   arrows: true
// }

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true
}

 const Slider= () => {
    return (
      <Fade {...properties}>
        <div className="each-slide">
          <div className="img" style={{'backgroundImage': ` linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.2)) ,url(${slideImages[0]})`}}>
          
             <div className="slides-texts">
               <div className="welcome">
                 <h1>Καλώς ήρθατε</h1>
                 <h2>στο site μας</h2>
               </div>
               <div className="offers">
                 <h2>Υπηρεσίες</h2>
               <div className="egatastaseis">
                 <p><i className="fas fa-plug"></i>Ηλεκτρικές εγκαταστάσεις</p>
                 <p><i className="fas fa-solar-panel"></i>Φωτοβολταϊκα</p>
                 <p><i className="fas fa-video"></i>Συστήματα ασφαλείας</p>
                 <p><i className="fas fa-stamp"></i>Πιστοποιητικά</p>
                 <p><i className="fas fa-briefcase"></i>Βλάβες</p>
               </div>
               </div>
              
             </div>

            {/* <img src={`${slideImages[0]}`} alt=""/> */}
          </div>
          
        </div>
        <div className="each-slide">
          <div className="img" style={{'backgroundImage': `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.2)) ,url(${slideImages[1]})`}}>

               <div className="banner-center">
               <div className=" banner">
                 <h1>Ηλεκτρολογικές</h1>
                 <h2>εγκαταστάσεις</h2>
                 
                 <div className="banner-btn">
                   <button>Περισσότερα...</button>
                 </div>
               </div>
               </div>
              
              
              
            
           
          </div>
        </div>
        <div className="each-slide">
          <div className="img" style={{'backgroundImage': `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.2)) ,url(${slideImages[2]})`}}>
          <div className="banner-center">
               <div className=" banner">
                 <h1>Φωτοβολταϊκα</h1>
                 <h2>συστήματα</h2>
                 
                 <div className="banner-btn">
                   <button>Περισσότερα...</button>
                 </div>
               </div>
               </div>
          </div>
        </div>

        <div className="each-slide">
          <div className="img" style={{'backgroundImage': `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.2)) ,url(${slideImages[3]})`}}>
          <div className="banner-center">
               <div className=" banner">
                 <h1>Συστήματα</h1>
                 <h2>ασφαλείας</h2>
                 
                 <div className="banner-btn">
                   <button>Περισσότερα...</button>
                 </div>
               </div>
               </div>
          </div>
        </div>

        <div className="each-slide">
          <div className="img" style={{'backgroundImage': `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.2)) ,url(${slideImages[4]})`}}>
          <div className="banner-center">
               <div className=" banner">
                 <h1>Πιστοποιητικά</h1>
                 <h2>ΔΕΗ</h2>
                 
                 <div className="banner-btn">
                   <button>Περισσότερα...</button>
                 </div>
               </div>
               </div>
          </div>
        </div>
      </Fade>
    )
}

export default Slider;