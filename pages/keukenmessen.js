import React from 'react';
import MainNav from '../components/header/Header';
import ChefKnifeContainer from '../components/chef-knife-container/ChefKnifeContainer';
import Footer from '../components/footer/Footer';

const ChefsKnives = () => (
  <React.Fragment>
    <MainNav page='keukenmessen' />
    <ChefKnifeContainer />
    <Footer />
  </React.Fragment>
);

export default ChefsKnives;
