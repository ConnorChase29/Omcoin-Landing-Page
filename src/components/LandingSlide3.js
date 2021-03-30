import React from 'react';
// import { Carousel } from 'react-bootstrap';
import Feature1 from '../Assets/Card-1.svg';
import Feature2 from '../Assets/Card-2.svg';
import Feature3 from '../Assets/Card-3.svg';
//import './CSS/Features.css';

export class LandingSlide3 extends React.Component<{}, {}> {
  render() {
    return (
      <div id="Features" className="Landing3">
        <div
          className="Slide3Text"
          style={{
            marginBottom: 30
          }}
        >
          <h1 className="TitleText">
            Earning crypto is
            <br /> this
            <span className="blueText"> rewarding.</span>
          </h1>
        </div>
        <div className="responsiveImage">
          <div className="container">
            <div>
              <img className="responsiveImage" src={Feature1} alt="Feature 1" />
            </div>
            <div>
              <img className="responsiveImage" src={Feature2} alt="Feature 2" />
            </div>
            <div>
              <img className="responsiveImage" src={Feature3} alt="Feature 3" />
            </div>
          </div>
        </div>
      </div>
    );
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
