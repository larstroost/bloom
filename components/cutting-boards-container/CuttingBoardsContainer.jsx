import React from 'react';
import Link from 'next/link';

import './cutting-boards-container.scss';
import InfoSection from '../info-section/InfoSection';
import InfoSectionReversed from '../info-section-reversed/InfoSectionReversed';
import Divider from '../divider/Divider';

class CuttingBoardsContainer extends React.Component {
  render() {
    return (
      <div className="cutting-boards__container">
        <InfoSection
          infoTitle="Snijplanken Vlakken"
          infoText="Intensief gebruik van uw kostbare (kunststof) snijplanken veroorzaakt krassen. In deze krassen kunnen zich ongewenste bacteriën verzamelen. Voor een scherpe prijs kunnen wij uw snijplanken weer krasvrij maken, door deze te vlakken, zodat deze weer aan de HACCP normen voldoen. De snijplanken kunnen wij niet op locatie vlakken, maar deze nemen wij mee naar onze vestiging in Hendrik-Ido-Ambacht. In de tijd dat wij uw snijplanken vlakken, ontvangt u onze leenplanken, zodat het werk gewoon door kan gaan."
          src="../../static/photos/cuttingboards/Cuttingboard4.jpg"
          alt="Snijplanken"
        />
      </div>
    );
  }
}

export default CuttingBoardsContainer;
