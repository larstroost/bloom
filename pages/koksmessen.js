import React from 'react';

import MainNav from '../components/header/Header';
import KnifeInfoContainer from '../components/knife-info-container/KnifeInfoContainer';

const ChefsKnives = () => (
  <React.Fragment>
    <MainNav page='koksmessen' />
      <KnifeInfoContainer />
  </React.Fragment>
);

export default ChefsKnives;
