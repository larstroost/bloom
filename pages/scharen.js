import React from 'react';

import MainNav from '../components/header/Header';
import KnifeInfoText from '../components/knife-info-text/KnifeInfoText';

const Sciccors = () => (
  <React.Fragment>
    <MainNav page='scharen' />
      <KnifeInfoText
        infoTitle="Scharen Slijpen"
        infoText="Deze pagina moet veel tekst gaan bevatten over het slijpen van scharen. Buiten messen slijpt Horeca Slijperij Bloom ook scharen. Grote scharen, kleine scharen, botte scharen, minder scherpe scharen, scharen voor vlees, scharen voor takken, bomen, bladeren, groenten, plastic etc. Lever uw schaar in en wij slijpen het knipvlak weer scherp."
        src="../../static/icons/kitchen-knife.jpg"
        alt="Scissors"
      />
      <p>
        COMING SOON
      </p>
  </React.Fragment>
);

export default Sciccors;
