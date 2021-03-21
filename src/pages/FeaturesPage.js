import React from 'react';
import LandingSlide1 from '../components/LandingSlide1';
import LandingSlide2 from '../components/LandingSlide2';
import LandingSlide3 from '../components/LandingSlide3';
import LandingSlide4 from '../components/LandingSlide4';
import LandingSlide5 from '../components/LandingSlide5';
import '../CSS/Features.css';

export class FeaturesPage extends React.Component {
  render() {
    return (<div>
      <LandingSlide1/>
      <LandingSlide2/>
      <LandingSlide3/>
      <LandingSlide4/>
      <LandingSlide5/>
    </div>)
  }
}

export default FeaturesPage;
