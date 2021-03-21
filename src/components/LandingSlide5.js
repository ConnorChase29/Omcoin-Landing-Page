import React from 'react';
// import { Carousel } from 'react-bootstrap';
import Roadmap from '../Assets/Roadmap-card.png';
import Roadmap2 from '../Assets/Roadmap-card-2RE.png';
import Roadmap3 from '../Assets/Roadmap-card-3.png';
import Roadmap4 from '../Assets/Roadmap-card-4.png';
import Roadmap5 from '../Assets/Roadmap-card-5.png';
import '../CSS/Features.css';

export class LandingSlide5 extends React.Component < {}, {} > {
  render() {
    return (<div className="Landing5">
      <div className="Slide3Text">
        <h1 className="TitleText">Roadmap</h1>
        <h2>Our 2021 plans.</h2>
      </div>
      <div className="responsiveImage">
        <div className="container">
          <div>
            <img className="responsiveImage" src={Roadmap} alt="Roadmap 1"/>
          </div>
          <div>
            <img className="responsiveImage" src={Roadmap2} alt="Roadmap 2"/>
          </div>
          <div>
            <img className="responsiveImage" src={Roadmap3} alt="Roadmap 3"/>
          </div>
          <div>
            <img className="responsiveImage" src={Roadmap4} alt="Roadmap 4"/>
          </div>
        </div>
      </div>

    </div>)
  }
}

export default LandingSlide5;

//
// <Carousel>
//     <Carousel.Item>
//         <img className="responsiveImage" src={Roadmap} alt="Roadmap 1" />
//     </Carousel.Item>
//     <Carousel.Item>
//         <img className="responsiveImage" src={Roadmap2} alt="Roadmap 2" />
//     </Carousel.Item>
//     <Carousel.Item>
//         <img className="responsiveImage" src={Roadmap3} alt="Roadmap 3" />
//     </Carousel.Item>
//     <Carousel.Item>
//         <img className="responsiveImage" src={Roadmap4} alt="Roadmap 4" />
//     </Carousel.Item>
//     <Carousel.Item>
//         <img className="responsiveImage" src={Roadmap5} alt="Roadmap 5" />
//     </Carousel.Item>
// </Carousel>
