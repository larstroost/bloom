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
          //infoTitle="Horeca Slijperij Bloom"
          //infoText="."
          //src="../../static/photos/chef-knives/kitchen-knife.jpg"
          //alt="Snijplanken"
          //deze sectie mag weg
        />

        <Workflow //Alles in een (paar) uur klaar (ipv één dag)
        />

        <InfoSectionReversed
          infoTitle="Onze Geschiedenis"
          infoText="Informatie over de geschiedenis"
          src="../../static/photos/chef-knives/kitchen-knife.jpg"
          alt="Snijplanken"
          //deze sectie moet onder de vouw
          //alleen plaatjes (4-5 afbeeldingen op desktop, 3 tablet, 1-2 op mobiel)
        />
      </div>
    );
  }
}

export default IndexContainer;
