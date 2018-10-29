import React from 'react';

import MainNav from '../components/header/Header';
import KnifeInfoText from '../components/knife-info-text/KnifeInfoText';

const TableKnives = () => (
  <React.Fragment>
    <MainNav page='tafelmessen' />
    <KnifeInfoText infoTitle="Tafelmessen" />
    <p>
      COMING SOON
    </p>
  </React.Fragment>
);

export default TableKnives;
