import React from 'react';
import Link from 'next/link';

import './remainder-container.scss';
import KnifeInfo from '../knife-info/KnifeInfo';
import InfoSection from '../info-section/InfoSection';
import Divider from '../divider/Divider';

class RemainderContainer extends React.Component {
  render() {
    return (
      <div className="remainder__container">
        <InfoSection
          infoTitle="Overige"
          infoText="Buiten het slijpen van messen kunnen wij nog veel andere spullen voor u slijpen. Scharen, snoeischaren, heggenscharen, maar ook magimixen, pizzarollers, vleesmachines of groentecutters zijn voor ons geen probleem. Heeft u een voorwerp met een snijvlak welke u graag weer scherp geslepen zou willen hebben? Vraag dan gerust naar de mogelijkheden."
          src="../../static/photos/chef-knives/kitchen-knife.jpg"
          alt="Scissors"
        />
        <Divider />
        <ul className="remainder__list">
          <KnifeInfo
            title="Schaar"
            info="Normale schaar voor alledaagse knipwerkzaamheden in het huis."
            photo="static/photos/remainder/Overig_schaar.jpg"
          />
          <KnifeInfo
            title="Snoeischaar"
            info="Gebruikt voor het knippen en snoeien van kleinere takken in boompjes en heggen in de tuin."
            photo="static/photos/remainder/Overig_snoeischaar.jpg"
          />
          <KnifeInfo
            title="Heggenschaar"
            info="Grote schaar voor het snoeien en in vorm knippen van heggen."
            photo="static/photos/remainder/Overig_heggenschaar.jpg"
          />

        </ul>
      </div>
    );
  }
}

export default RemainderContainer;
