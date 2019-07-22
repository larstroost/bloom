import React from 'react';
import ReactGA from 'react-ga';

import MainNav from '../components/header/Header';
import RemainderContainer from '../components/remainder-container/RemainderContainer';
import Footer from '../components/footer/Footer';

function initializeReactGA() {
  ReactGA.initialize('UA-142974411-2');
  ReactGA.pageview('/overige');
}

const Remainder = () => (
  <React.Fragment>
    <MainNav page='overige' />
    <RemainderContainer />
    <Footer />
  </React.Fragment>
);

export default Remainder;
