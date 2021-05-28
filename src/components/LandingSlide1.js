import React from 'react';
import Logo from '../Assets/Omapp-App-Icon.svg';
import GooglePlayLogo from '../Assets/Google-play.png';
import AppleLogo from '../Assets/App-store.png';
import MockUp from '../Assets/Home-Screen2.png';
// import MockUp from '../Assets/Home-screen-phone-mockup2.png';
import Button from 'react-bootstrap/Button';
// import poster from '../Assets/Background-image-mobile.png'
import '../CSS/Features.css';

export class LandingSlide1 extends React.Component {
  render() {
    return (
      <div className="Landing1">
        <div className="landing1Wrapper">
          <div
            className="backgroundVideo"
            data-video-options={`{"autoplay":true}`}
            data-video-path="/Omcoin-Landing-Page-Video.mp4"
            data-component-list="InlineVideo"
          >
            <video autoPlay="autoPlay" loop="loop" muted playsInline>
              <source src="/Omcoin-Landing-Page-Video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="landing1Content">
            <div className="omcoinLogoDiv">
              <img src={Logo} alt="Omcoin Logo" />
            </div>
            <div>
              <img id="googleLogo" src={GooglePlayLogo} alt="GooglePlay Logo" />
              <img src={AppleLogo} alt="Apple Logo" />
            </div>

            <div className="AMeditationTextDiv">
              <h1 className="TitleText">
                A meditation experience
                <br></br>
                with crypto rewards.
              </h1>
            </div>

            <div className="whitePaperButtonSpacing">
              <style type="text/css">
                {`.btn-huge { padding: 2rem 5rem; font-size: 1.5rem; }`}
              </style>
              <Button
                id="buttonStyling"
                variant="primary"
                className="rounded-pill shadow-box-example z-depth-5 btn-huge"
                onClick={() => {
                  window.open(
                    'https://www.bw.com/regGetCommission/ODVCV0ZzV0M1Y08=?lan=en'
                  );
                }}
              >
              Buy Omcoin
              </Button>
            </div>
            <div className="MockUpImage">
              <img src={MockUp} alt="MockUp" className="center" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingSlide1;
