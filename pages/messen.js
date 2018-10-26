import React from 'react';

import MainNav from '../components/header/Header';
import KnifeInfoContainer from '../components/knife-info-container/KnifeInfoContainer';

const Knives = () => (
  <React.Fragment>
    <MainNav page='messen' />
      <KnifeInfoContainer />
  </React.Fragment>
);

export default Knives;
