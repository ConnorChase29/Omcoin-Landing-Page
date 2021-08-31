import React from 'react';
import Logo from '../Assets/Zenbase-App-Icon.svg';
import GooglePlayLogo from '../Assets/Google-play.png';
import AppleLogo from '../Assets/App-store.png';
import MockUp from '../Assets3/Home.png';
import bgVideo from '../Assets3/Landing-Page-Video.mov';
// import MockUp from '../Assets/Home-screen-phone-mockup2.png';
import Button from 'react-bootstrap/Button';
// import poster from '../Assets/Background-image-mobile.png'
import '../CSS/Features.css';

export class LandingSlide1 extends React.Component {
  render() {
    return (
      <div className="Landing1">
        <div className="landing1Wrapper">
          <div className="backgroundVideo">
            <video
              className="video-content"
              src={bgVideo} alt = "background video"
              autoPlay
              loop
              muted
              playsInline
            >
            </video>
          </div>
          
          <div className="landing1Content">
            <div className="ZenbaseLogoDiv">
              <img src={Logo} alt="Zenbase-App-Icon.png" />
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
                    'https://omcoin.clickfunnels.com/squeeze-page-484506991620757910805'
                  );
                }}
              >
              Buy Zentoken
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
