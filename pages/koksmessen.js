import React from 'react';

import MainNav from '../components/header/Header';
import KnifeInfoContainer from '../components/knife-info-container/KnifeInfoContainer';
import Footer from '../components/footer/Footer';

const ChefsKnives = () => (
  <React.Fragment>
    <MainNav page='koksmessen' />
    <KnifeInfoContainer />
    <Footer />
  </React.Fragment>
);

export default ChefsKnives;
