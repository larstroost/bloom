import React from 'react';
import Link from 'next/link';

import './table-knife-container.scss';
import KnifeInfo from '../knife-info/KnifeInfo'
import InfoSection from '../info-section/InfoSection'
import Divider from '../divider/Divider';

class TableKnifeContainer extends React.Component {
  render() {
    return (
      <div className="table-knife__container">
        <InfoSection
          infoTitle="Tafelmessen Slijpen"
          infoText="Tafelmessen zijn er in tientallen verschillende soorten, maten en merken. Met of zonder kartel, dik of dun, lang of kort. Wij kunnen ze allemaal slijpen. Wij maken uw messen weer scherp en voorzien ze weer van nieuwe kartels, zodat brood en vlees weer makkelijk te snijden zijn."
          src="../../static/photos/table-knives/Tafelmessen3.png"
          alt="Tafelmessen"
        />
        <Divider />
        <ul className="table-knife__list">
          <KnifeInfo
            title="Tafelmessen"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/table-knives/Tafelmes_normaal.jpg"
          />
          <KnifeInfo
            title="Steakmes"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/table-knives/Tafelmes_steak.jpg"
          />
          <KnifeInfo
            title="Broodmes"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/table-knives/Tafelmes_brood.jpg"
          />

        </ul>
      </div>
    );
  }
}

export default TableKnifeContainer;
