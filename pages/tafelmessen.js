import React from 'react';

import MainNav from '../components/header/Header';
import KnifeInfoText from '../components/knife-info-text/KnifeInfoText';
import Footer from '../components/footer/Footer';

const TableKnives = () => (
  <React.Fragment>
    <MainNav page='tafelmessen' />
    <KnifeInfoText infoTitle="Tafelmessen" />
    <p>
      COMING SOON
    </p>
    <Footer />
  </React.Fragment>
);

export default TableKnives;
