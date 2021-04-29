import React from 'react';
import '../CSS/Features.css';

export class LandingSlide2 extends React.Component < {}, {} > {
  render() {
    return (<div id="Overview" className="Landing2">
      <div className="TextPadding">
        <div className="Slide3Text">
          <h1 className="TitleText">
            <span className="blueText">First
            </span> meditation app with
            <br/>
            <span className="blueText"> crypto incentives.</span>
          </h1>
        </div>
      </div>
      <div className="VideoPadding">
        <div className="container">
          <div className="responsiveImage">
            <iframe title="Youtube" height="545" width="750" src="https://www.youtube.com/embed/Uhq6tfVzLVs" allowFullScreen="allowFullScreen"></iframe>
          </div>
        </div>

      </div>

    </div>)
  }
}

export default LandingSlide2;
