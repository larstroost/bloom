import React from 'react';
import Link from 'next/link';

import './index-container.scss';
import InfoSection from '../info-section/InfoSection'
import Workflow from '../workflow/Workflow'
import InfoSectionReversed from '../info-section-reversed/InfoSectionReversed';
import Divider from '../divider/Divider';

class IndexContainer extends React.Component {
  render() {
    return (
      <div className="index__container">
        <div className="wrapper-test">
          <Workflow
            src="../../static/photos/index/workflow-1.png"
            alt="Wij komen naar uw locatie toe"
            text="Wij komen naar uw locatie toe"
          />
          <Workflow
            src="../../static/photos/index/workflow-2.png"
            alt="Messen Inleveren"
            text="U levert uw te slijpen messen bij ons in"
          />
          <Workflow
            src="../../static/photos/index/workflow-3.png"
            alt="Vervangende set"
            text="U krijgt een vervangende set"
          />
          <Workflow
            src="../../static/photos/index/workflow-4.png"
            alt="Slijpen op locatie"
            text="Wij slijpen op uw locatie"
          />
          <Workflow
            src="../../static/photos/index/workflow-5.png"
            alt="Binnen een paar uur klaar"
            text="Binnen enkele uren klaar"
          />
        </div>
        <Divider />
        <InfoSectionReversed
          infoTitle="Over Horecaslijperij Bloom B.V."
          infoText="Sinds 1985 is Horecaslijperij Bloom actief vanuit Hendrik Ido ambacht. Onze specialisten slijpen uw messen en diverse keukenapparaten op locatie in heel Nederland en in Noord België. Hiervoor berekenen we doorgaans geen voorrijkosten. Buiten het slijpen koksmessen, tafelmessen, scharen en diverse keukenapparatuur vlakken wij ook snijplanken, zodat u weer met een vlakke hygiënische plank uw werk kan blijven uitvoeren. Onze bussen zijn naast slijpapparatuur ook voorzien van een klein winkeltje met een divers aanbod van nieuwe scherpe koksmessen."
          src="../../static/photos/index/bussen.jpg"
          alt="Bussen"

        />
      </div>
    );
  }
}

export default IndexContainer;
