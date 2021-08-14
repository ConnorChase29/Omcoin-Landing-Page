import React from 'react';
// import { Carousel } from 'react-bootstrap';
import Roadmap from '../Assets/Card-4.svg';
import Roadmap2 from '../Assets/Card-5.svg';
import Roadmap3 from '../Assets/Card-6.svg';
import Roadmap4 from '../Assets/Card-7.svg';
// import Roadmap5 from '../Assets/Roadmap-card-5.png';
import '../CSS/Features.css';
import Aos from 'aos';

export class LandingSlide5 extends React.Component<{}, {}> {
  useEffect() {
    Aos.init( {duration: 2000});
  }
  render() {
    return (
      <div className="Landing5">
        <div className="Slide3Text">
          <h1 className="TitleText">Roadmap</h1>
          <h2>Our 2022 plans.</h2>
        </div>
        <div className="responsiveImage">
          <div className="container">
            <div data-aos = "fade-up" className="responsiveImage">
              <img className="responsiveImage" src={Roadmap} alt="Roadmap 1" />
            </div>
            <div data-aos = "fade-left" className="responsiveImage">
              <img className="responsiveImage" src={Roadmap2} alt="Roadmap 2" />
            </div>
            <div data-aos = "fade-right" className="responsiveImage">
              <img className="responsiveImage" src={Roadmap3} alt="Roadmap 3" />
            </div>
            <div data-aos = "fade-left" className="responsiveImage">
              <img className="responsiveImage" src={Roadmap4} alt="Roadmap 4" />
            </div>
          </div>
        </div>
      </div>
    );
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
