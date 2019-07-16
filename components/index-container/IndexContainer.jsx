import React from 'react';
import Link from 'next/link';

import './index-container.scss';
import InfoSection from '../info-section/InfoSection'
import Workflow from '../workflow/Workflow'
import KnifeInfoTest from '../knife-info-test/KnifeInfoTest';
import Divider from '../divider/Divider';
import InfoSectionText from '../info-section-text/InfoSectionText';

class IndexContainer extends React.Component {

  render() {
    return (
      <div className="index__container">
        <div className="index__wrapper-workflow">
          <Workflow
            src="../../static/photos/index/workflow-1.svg"
            alt="Wij komen naar uw locatie toe"
            text="Wij komen naar u toe"
          />
          <Workflow
            src="../../static/photos/index/workflow-2.svg"
            alt="Messen Inleveren"
            text="U levert uw messen in"
          />
          <Workflow
            src="../../static/photos/index/workflow-3.svg"
            alt="Leenset"
            text="U krijgt een leenset"
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
        <div>
          <h2 className="index__h2">
            Wat doet Horecaslijperij Bloom?
          </h2>
          <p className="index__p-test">
            Of het nu gaat om koksmessen, Japanse messen, kartel(brood)messen, tafelmessen, of machinemessen. <b>Wij kunnen het voor u slijpen.</b>
            <br />
            Elk mes heeft zijn eigen specifieke vorm en functie. Het is daarom van belang dat na het slijpen het mes zijn vorm behoudt of juist weer terug krijgt.
            <br />
            Is er een punt of een stukje van het lemmet afgebroken, niet weggooien, dit kunnen wij voor u herstellen. Door middel van uitstekend uitgeruste mobiele slijpunits kunnen wij bijna alle voorkomende slijpwerkzaamheden bij u ter plaatse uitvoeren. Tijdens het slijpen kunt u gebruik maken van een leenset messen, zodat de werkzaamheden in de keuken gewoon door kunnen gaan.
            <br />
            Ook op onze locatie in Hendrik-Ido-Ambacht is het mogelijk messen en andere te slijpen spullen in te leveren.
            <br />
            Elke dag zitten onze planners klaar om uw vragen te beantwoorden. Wilt u een afspraak maken? Neem dan even <Link href="/contact"><a className="index__link"><b>contact</b></a></Link> met ons op.
          </p>
        </div>
        <Divider />
        <ul className="index__ul-test">
          <KnifeInfoTest
            title="MESSEN SLIJPEN"
            photoOne="../../static/photos/index/knives-one.png"
            photoTwo="../../static/photos/index/knives-two.jpg"
            link="/koksmessen"
            info="Meer informatie."
          />
          <KnifeInfoTest
            title="SNIJPLANKEN VLAKKEN"
            photoOne="../../static/photos/cuttingboards/White1-voor.png"
            photoTwo="../../static/photos/cuttingboards/White1-na.png"
            link="/snijplanken"
            info="Meer informatie."
          />
          <KnifeInfoTest
            title="OVER ONS"
            photoOne="../../static/photos/index/bussen-resize.png"
            photoTwo="../../static/photos/index/old-school-photo.jpg"
            link="/over-ons"
            info="Meer informatie."
          />
        </ul>
      </div>
    );
  }
}

export default IndexContainer;
