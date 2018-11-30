import React from 'react';
import Link from 'next/link';

import './cutting-boards-container.scss';
import InfoSection from '../info-section/InfoSection'
import InfoSectionReversed from '../info-section-reversed/InfoSectionReversed'

class CuttingBoardsContainer extends React.Component {
  render() {
    return (
      <div className="cutting-boards__container">
        <InfoSection
          infoTitle="Snijplanken Vlakken Informatie Pagina"
          infoText="Informatie over snijplanken vlakken."
          src="../../static/icons/kitchen-knife.jpg"
          alt="Snijplanken"
        />
        <InfoSectionReversed
          infoTitle="Snijplanken Vlakken Informatie Pagina"
          infoText="Informatie over snijplanken vlakken."
          src="../../static/icons/kitchen-knife.jpg"
          alt="Snijplanken"
        />
      </div>
    );
  }
}

export default CuttingBoardsContainer;
