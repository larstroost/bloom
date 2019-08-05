import React from 'react';
import MainNav from '../components/header/Header';
import IndexContainer from '../components/index-container/IndexContainer';
import Footer from '../components/footer/Footer';

const Index = () => (
  <React.Fragment>
    <MainNav page='index' />
    <IndexContainer />
    <Footer />
  </React.Fragment>
);

export default Index;
