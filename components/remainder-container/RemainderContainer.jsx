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
          infoText="Of het nu gaat om koksmessen, brood(kartel)messen, keukenmessen, tafelmessen of machinemessen, elk mes heeft zijn eigen specifieke vorm en functie. Omdat elke functie een verschillende gebruiksdiscipline vereist, is het van groot belang dat het mes ook na het slijpen zijn specifieke vorm en functie behoudt. Bovendien voorkomt het werken met echt scherpe messen een hoop ongerief en ergernis."
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
