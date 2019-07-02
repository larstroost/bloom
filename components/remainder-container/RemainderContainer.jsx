import React from 'react';
import Link from 'next/link';

import './remainder-container.scss';
import KnifeInfo from '../knife-info/KnifeInfo';
import InfoSectionTest from '../info-section-test/InfoSectionTest';
import Divider from '../divider/Divider';

class RemainderContainer extends React.Component {
  render() {
    return (
      <div className="remainder__container">
        <InfoSectionTest
          infoTitle="OVERIGE"
          infoText="Buiten het slijpen van messen kunnen wij nog veel andere spullen voor u slijpen. Scharen, snoeischaren, heggenschBuiten het slijpen van messen kunnen wij nog veel andere spullen voor u slijpen. Scharen, snoeischaren, heggenscharen, zakmessen, maar ook magimixen, pizzarollers, vleesmachines of groentecutters zijn voor ons geen probleem. Heeft u een voorwerp met een snijvlak welke u graag weer scherp geslepen zou willen hebben? Vraag dan gerust naar de mogelijkheden."
          src="../../static/photos/index/banner23.svg"
          alt="Banner"
        />
        <ul className="remainder__list">
          <KnifeInfo
            title="SCHAAR"
            info="Normale schaar voor alledaagse knipwerkzaamheden in het huis."
            photo="../../static/photos/remainder/Overig_schaar.jpg"
          />
          <KnifeInfo
            title="SNOEISCHAAR"
            info="Gebruikt voor het knippen en snoeien van kleinere takken in boompjes en heggen in de tuin."
            photo="../../static/photos/remainder/Overig_snoeischaar.jpg"
          />
          <KnifeInfo
            title="HEGGENSCHAAR"
            info="Grote schaar voor het snoeien en in vorm knippen van heggen."
            photo="../../static/photos/remainder/Overig_heggenschaar.jpg"
          />
          <KnifeInfo
            title="OVERIGE"
            info="Bijna alles wat een scherpe rand heeft kunnen wij slijpen. Vraag gerust naar onze mogelijkheden."
            photo="../../static/photos/remainder/Overig_heggenschaar.jpg"
          />
        </ul>
      </div>
    );
  }
}

export default RemainderContainer;
