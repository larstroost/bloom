import React from 'react';
import ReactGA from 'react-ga';

import MainNav from '../components/header/Header';
import IndexContainer from '../components/index-container/IndexContainer';
import Footer from '../components/footer/Footer';

function initializeReactGA() {
  ReactGA.initialize('UA-142974411-2');
  ReactGA.pageview('/index');
}

const Index = () => (
  <React.Fragment>
    <MainNav page='index' />
    <IndexContainer />
    <Footer />
  </React.Fragment>
);

export default Index;
