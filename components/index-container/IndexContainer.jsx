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
        <div className="index__wrapper-workflow">
          <Workflow
            src="../../static/photos/index/workflow-1.svg"
            alt="Wij komen naar uw locatie toe"
            text="Wij komen naar uw locatie toe"
          />
          <Workflow
            src="../../static/photos/index/workflow-2.svg"
            alt="Messen Inleveren"
            text="U levert uw te slijpen messen bij ons in"
          />
          <Workflow
            src="../../static/photos/index/workflow-3.svg"
            alt="Vervangende set"
            text="U krijgt een vervangende set"
          />
          <Workflow
            src="../../static/photos/index/workflow-4.svg"
            alt="Slijpen op locatie"
            text="Wij slijpen bij u op locatie"
          />
          <Workflow
            src="../../static/photos/index/workflow-5.svg"
            alt="Binnen een paar uur klaar"
            text="Binnen 1 à 2 uur klaar"
          />
        </div>
        <Divider />
        <InfoSectionReversed
          infoTitle="Horecaslijperij Bloom B.V."
          infoText="Of het nu gaat om koksmessen, brood(kartel)messen, keukenmessen, tafelmessen of machinemessen, elk mes heeft zijn eigen specifieke vorm en functie. Omdat elke functie een verschillende gebruiksdiscipline vereist, is het van groot belang dat het mes ook na het slijpen zijn specifieke vorm en functie behoudt. Bovendien voorkomt het werken met echt scherpe messen een hoop ongerief en ergernis. Door middel van uitstekend uitgeruste mobiele slijpunits kunnen wij bijna alle voorkomende slijpwerkzaamheden bij u als klant ter plaatse uitvoeren. Tijdens het slijpen kunt u gebruik maken van een leenset messen, zodat de werkzaamheden in de keuken gewoon door kunnen gaan. Ook op onze locatie in Hendrik-Ido-Ambacht is het mogelijk messen en andere te slijpen spullen in te leveren. Elke dag zitten onze planners klaar om uw vragen te beantwoorden. Wilt u een afspraak maken? Neem dan even contact met ons op."
          src="../../static/photos/index/bussen.jpg"
          alt="Bussen"

        />
      </div>
    );
  }
}

export default IndexContainer;
