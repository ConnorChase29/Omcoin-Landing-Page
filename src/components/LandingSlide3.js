import React from 'react';
// import { Carousel } from 'react-bootstrap';
import Feature1 from '../Assets/Sliding-Card-1-DS-750x545.png';
import Feature2 from '../Assets/Feature-card-2RE-750x545.png';
import Feature3 from '../Assets/Feature-card-3RE-750x545.png';
//import './CSS/Features.css';

export class LandingSlide3 extends React.Component<{}, {}> {
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
          <div className="responsiveImage">
            <img className="responsiveImage" src={Feature1} alt="Feature 1"/>
          </div>
          <div className="responsiveImage">
            <img className="responsiveImage" src={Feature2} alt="Feature 2"/>
          </div>
          <div className="responsiveImage">
            <img className="responsiveImage" src={Feature3} alt="Feature 3"/>
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
