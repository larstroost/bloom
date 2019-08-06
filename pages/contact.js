import React from 'react';
import MainNav from '../components/header/Header';
import ContactContainer from '../components/contact-container/ContactContainer';
import Footer from '../components/footer/Footer';

const Contact = () => (
  <React.Fragment>
    <MainNav page='contact' />
    <ContactContainer />
    <Footer />
  </React.Fragment>
);

export default Contact;
