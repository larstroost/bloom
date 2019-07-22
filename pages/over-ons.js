import React from 'react';
import ReactGA from 'react-ga';

import MainNav from '../components/header/Header';
import AboutUsContainer from '../components/about-us-container/AboutUsContainer';
import Footer from '../components/footer/Footer';

function initializeReactGA() {
  ReactGA.initialize('UA-142974411-2');
  ReactGA.pageview('/over-ons');
}

const AboutUs = () => (
  <React.Fragment>
    <MainNav page='overOns' />
    <AboutUsContainer />
    <Footer />
  </React.Fragment>
);

export default AboutUs;
