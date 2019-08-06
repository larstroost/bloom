import React from 'react';
import MainNav from '../components/header/Header';
import RemainderContainer from '../components/remainder-container/RemainderContainer';
import Footer from '../components/footer/Footer';

const Remainder = () => (
  <React.Fragment>
    <MainNav page='overige' />
    <RemainderContainer />
    <Footer />
  </React.Fragment>
);

export default Remainder;
