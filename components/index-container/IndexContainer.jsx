import React from 'react';
import Link from 'next/link';

import './index-container.scss';
import InfoSection from '../info-section/InfoSection'
import Workflow from '../workflow/Workflow';
import InfoSectionReversed from '../info-section-reversed/InfoSectionReversed'

class IndexContainer extends React.Component {
  render() {
    return (
      <div className="index__container">
        <InfoSection
          infoTitle="Wie zijn wij"
          infoText="Informatie over Bloom."
          src="../../static/icons/kitchen-knife.jpg"
          alt="Snijplanken"
        />
        <Workflow />
        <InfoSectionReversed
          infoTitle="Onze Geschiedenis"
          infoText="Informatie over de geschiedenis"
          src="../../static/icons/kitchen-knife.jpg"
          alt="Snijplanken"
        />
      </div>
    );
  }
}

export default IndexContainer;
