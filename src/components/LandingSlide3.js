import React from 'react';
// import { Carousel } from 'react-bootstrap';
import Feature1 from '../Assets/Group_88.svg';
import Feature2 from '../Assets/Feature-card-2.svg';
import Feature3 from '../Assets/Feature-card-3.svg';
//import './CSS/Features.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

export class LandingSlide3 extends React.Component {
  useEffect() {
    Aos.init( {duration: 2000});
  }
  render() {
    return (<div id="Features" className="Landing3">
      <div className="Slide3Text" style={{
          marginBottom: 30
        }}>
        <h1 className="TitleText">Earning crypto is
          <br/> this
          <span className="blueText"> rewarding.</span>
        </h1>
      </div>
      <div className="responsiveImage">
        <div className="container">
          <div data-aos = "fade-up"  className="responsiveImage">
            <img className="responsiveImage" src={Feature1} alt="Feature 1"/>
          </div>
          <div data-aos = "fade-left" className="responsiveImage">
            <img className="responsiveImage" src={Feature2} alt="Feature 2"/>
          </div>
          <div  data-aos = "fade-right"className="responsiveImage">
            <img className="responsiveImage" src={Feature3} alt="Feature 3"/>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default LandingSlide3;

// <Carousel>
//     <Carousel.Item>
//         <img className="responsiveImage" src={Feature1} alt="Feature 1" />
//     </Carousel.Item>
//     <Carousel.Item>
//         <img className="responsiveImage" src={Feature2} alt="Feature 2" />
//     </Carousel.Item>
//     <Carousel.Item>
//         <img className="responsiveImage" src={Feature3} alt="Feature 3" />
//     </Carousel.Item>
// </Carousel>
