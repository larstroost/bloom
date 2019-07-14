import React from 'react';
import Link from 'next/link';

import './cutting-boards-container.scss';
import InfoSection from '../info-section/InfoSection';
import InfoSectionReversed from '../info-section-reversed/InfoSectionReversed';
import InfoHeader from '../info-header/InfoHeader';
import Divider from '../divider/Divider';

class CuttingBoardsContainer extends React.Component {
  render() {
    return (
      <div className="cutting-boards__container">
        <InfoHeader
          infoTitle="SNIJPLANK VLAKKEN"
          infoText="Intensief gebruik van uw kostbare (kunststof) snijplanken veroorzaakt krassen. In deze krassen kunnen zich ongewenste bacteriën verzamelen. Voor een scherpe prijs kunnen wij uw snijplanken weer krasvrij maken, door deze te vlakken, zodat deze weer aan de HACCP normen voldoen. De snijplanken kunnen wij niet op locatie vlakken, maar deze nemen wij mee naar onze vestiging in Hendrik-Ido-Ambacht. In de tijd dat wij uw snijplanken vlakken, ontvangt u onze leenplanken, zodat het werk gewoon door kan gaan."
          src="../../static/photos/index/banner23.svg"
          alt="Banner"
        />
        <div className="cutting-boards__photo-container">
          <img
            className="cutting-boards__photo"
            src="../../static/photos/cuttingboards/Blue2-voor.png"
            alt="Cutting Board Before"
          />
          <img
            className="cutting-boards__photo"
            src="../../static/photos/cuttingboards/Blue2-na.png"
            alt="Cutting Board After"
          />
        </div>
      </div>
    );
  }
}

export default CuttingBoardsContainer;
