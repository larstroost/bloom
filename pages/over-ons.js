import React from 'react';
import MainNav from '../components/header/Header';
import AboutUsContainer from '../components/about-us-container/AboutUsContainer';
import Footer from '../components/footer/Footer';

const AboutUs = () => (
  <React.Fragment>
    <MainNav page='overOns' />
    <AboutUsContainer />
    <Footer />
  </React.Fragment>
);

export default AboutUs;
