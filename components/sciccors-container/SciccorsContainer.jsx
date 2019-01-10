import React from 'react';
import Link from 'next/link';

import './sciccors-container.scss';
import KnifeInfo from '../knife-info/KnifeInfo';
import InfoSection from '../info-section/InfoSection';
import Divider from '../divider/Divider';

class SciccorsContainer extends React.Component {
  render() {
    return (
      <div className="sciccors__container">
        <InfoSection
          infoTitle="Overige"
          infoText="Of het nu gaat om koksmessen, brood(kartel)messen, keukenmessen, tafelmessen of machinemessen, elk mes heeft zijn eigen specifieke vorm en functie. Omdat elke functie een verschillende gebruiksdiscipline vereist, is het van groot belang dat het mes ook na het slijpen zijn specifieke vorm en functie behoudt. Bovendien voorkomt het werken met echt scherpe messen een hoop ongerief en ergernis."
          src="../../static/photos/chef-knives/kitchen-knife.jpg"
          alt="Scissors"
        />
        <Divider />
        <ul className="sciccors__list">
          <KnifeInfo
            title="Normale Schaar"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/scissors/Scissor_1.jpg"
          />
          <KnifeInfo
            title="Vleesschaar"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/scissors/Scissor_1.jpg"
          />
          <KnifeInfo
            title="Takkenschaar"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/scissors/Scissor_1.jpg"
          />
          <KnifeInfo
            title="Snoeischaar"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/scissors/Scissor_1.jpg"
          />
        </ul>
      </div>
    );
  }
}

export default SciccorsContainer;
