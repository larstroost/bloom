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

        <Workflow //Alles in een (paar) uur klaar (ipv één dag)
        />

        <InfoSectionReversed
          infoTitle="Over Horecaslijperij Bloom B.V."
          infoText="Sinds 1985 is Horecaslijperij Bloom actief vanuit Hendrik Ido ambacht. Onze specialisten slijpen uw messen en diverse keukenapparaten op locatie in heel Nederland en in Noord België. Hiervoor berekenen we doorgaans geen voorrijkosten. Buiten het slijpen koksmessen, tafelmessen, scharen en diverse keukenapparatuur vlakken wij ook snijplanken, zodat u weer met een vlakke hygiënische plank uw werk kan blijven uitvoeren. Onze bussen zijn naast slijpapparatuur ook voorzien van een klein winkeltje met een divers aanbod van nieuwe scherpe koksmessen."
          src="../../static/photos/index/bussen.jpg"
          alt="Bussen"
          //deze sectie moet onder de vouw
          //alleen plaatjes (4-5 afbeeldingen op desktop, 3 tablet, 1-2 op mobiel)
        />
      </div>
    );
  }
}

export default IndexContainer;
