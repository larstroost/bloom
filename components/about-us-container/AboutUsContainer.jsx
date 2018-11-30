import React from 'react';
import Link from 'next/link';

import './about-us-container.scss';
import InfoSection from '../info-section/InfoSection'
import InfoSectionReversed from '../info-section-reversed/InfoSectionReversed'

class AboutUsContainer extends React.Component {
  render() {
    return (
      <div className="about-us__container">
        <InfoSection
          infoTitle="Wie zijn wij"
          infoText="Informatie over Bloom."
          src="../../static/icons/kitchen-knife.jpg"
          alt="Snijplanken"
        />
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

export default AboutUsContainer;
