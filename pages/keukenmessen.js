import React from 'react';
import ReactGA from 'react-ga';

import MainNav from '../components/header/Header';
import ChefKnifeContainer from '../components/chef-knife-container/ChefKnifeContainer';
import Footer from '../components/footer/Footer';

function initializeReactGA() {
  ReactGA.initialize('UA-142974411-2');
  ReactGA.pageview('/keukenmessen');
}

const ChefsKnives = () => (
  <React.Fragment>
    <MainNav page='keukenmessen' />
    <ChefKnifeContainer />
    <Footer />
  </React.Fragment>
);

export default ChefsKnives;
