import React from 'react';
import ReactGA from 'react-ga';

import MainNav from '../components/header/Header';
import ContactContainer from '../components/contact-container/ContactContainer';
import Footer from '../components/footer/Footer';

function initializeReactGA() {
  ReactGA.initialize('UA-142974411-2');
  ReactGA.pageview('/contact');
}

const Contact = () => (
  <React.Fragment>
    <MainNav page='contact' />
    <ContactContainer />
    <Footer />
  </React.Fragment>
);

export default Contact;
