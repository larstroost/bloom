import React from 'react';

import MainNav from '../components/header/Header';
import SciccorsContainer from '../components/sciccors-container/SciccorsContainer';
import Footer from '../components/footer/Footer';

const Sciccors = () => (
  <React.Fragment>
    <MainNav page='scharen' />
    <SciccorsContainer />
    <Footer />
  </React.Fragment>
);

export default Sciccors;
