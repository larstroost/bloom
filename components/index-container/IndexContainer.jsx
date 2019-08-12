import React from 'react';
import Link from 'next/link';

import './index-container.scss';
import Workflow from '../workflow/Workflow'
import IndexRedirect from '../index-redirect/IndexRedirect';
import Divider from '../divider/Divider';

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
            asterisk="*"
          />
        </div>
        <Divider />
        <div>
          <h2 className="index__h2">
            Wat doet Horecaslijperij Bloom?
          </h2>
          <p className="index__p">
            Wij slijpen alles wat een scherpe rand hoort te hebben. Of het nu gaat om koksmessen, Japanse messen, kartel(brood)messen, tafelmessen, of machinemessen wij kunnen het voor u slijpen. Natuurlijk heeft elk mes een specifieke vorm en functie en daar houden onze ervaren slijpers ook rekening mee.
            <br />
            Is je favoriete mes ernstig beschadigd, is er een punt of een stukje van het lemmet afgebroken of zijn de kartels van je broodmes niet meer zichtbaar? Gooi je mes dan niet weg. Dit kunnen wij namelijk allemaal voor je herstellen.
          </p>
          <h2 className="index__h2">
            Hoe doen we dat?
          </h2>
          <p className="index__p">
            Wij komen naar je toe met onze uitstekend uitgeruste mobiele slijp-units, waardoor bijna alle voorkomende slijpwerkzaamheden bij je ter plaatse uitgevoerd kunnen worden. Tijdens het slijpen kun je gebruik maken van een leen-set messen, zodat de werkzaamheden in de keuken gewoon door kunnen gaan.
            <br />
            Ook op onze locatie in Hendrik-Ido-Ambacht is het mogelijk messen en andere te slijpen spullen in te leveren.
          </p>
          <h2 className="index__h2">
            Afspraak maken of meer informatie nodig?
          </h2>
          <p className="index__p">
            Elke werkdag zitten wij klaar om al je vragen te beantwoorden. Wil je een afspraak maken of meer informatie? Neem dan gerust <Link href="/contact"><a className="index__link"><b>contact</b></a></Link> met ons op.
          </p>
        </div>
        <Divider />
        <ul className="index__ul">
          <IndexRedirect
            title="MESSEN SLIJPEN"
            photoOne="../../static/photos/index/knives-one.png"
            photoTwo="../../static/photos/index/knives-two.png"
            link="/keukenmessen"
            info="Meer informatie"
          />
          <IndexRedirect
            title="SNIJPLANKEN VLAKKEN"
            photoOne="../../static/photos/cuttingboards/White1-voor.png"
            photoTwo="../../static/photos/cuttingboards/White1-na.png"
            link="/snijplanken"
            info="Meer informatie"
          />
          <IndexRedirect
            title="OVER ONS"
            photoOne="../../static/photos/index/bussen-resize.png"
            photoTwo="../../static/photos/index/old-school-photo.jpg"
            link="/over-ons"
            info="Meer informatie"
            className="last"
          />
        </ul>
        <p className="index__p index__p--small">
          *Dit is een indicatie, bij grote hoeveelheden messen kan dit mogelijk langer duren.
        </p>
      </div>
    );
  }
}

export default IndexContainer;
