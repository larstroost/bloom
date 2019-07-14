import React from 'react';
import Link from 'next/link';

import './table-knife-container.scss';
import KnifeInfo from '../knife-info/KnifeInfo'
import InfoHeader from '../info-header/InfoHeader'
import Divider from '../divider/Divider';

class TableKnifeContainer extends React.Component {
  render() {
    return (
      <div className="table-knife__container">
        <InfoHeader
          infoTitle="TAFELMESSEN SLIJPEN"
          infoText="Tafelmessen zijn er in tientallen verschillende soorten, maten en merken. Met of zonder kartel, dik of dun, lang of kort. Wij kunnen ze allemaal slijpen. Wij maken uw messen weer scherp en voorzien ze weer van nieuwe kartels, zodat brood en vlees weer makkelijk te snijden zijn. Ook Laguiole messen zijn voor ons geen probleem."
          src="../../static/photos/index/banner23.svg"
          alt="Banner"
        />
        <ul className="table-knife__list">
          <KnifeInfo
            title="TAFELMESSEN"
            info="Standaard tafelmessen met een kleine kartel in het lemmet, geschikt voor vrijwel alle groenten en vlees die je thuis of in een restaurant geserveerd krijgt."
            photo="../../static/photos/table-knives/Tafelmessen.png"
          />
          <KnifeInfo
            title="STEAKMES"
            info="Een tafelmes met iets grovere kartel in het lemmet, zoals de naam al zegt voornamelijk gebruikt voor steak, en andere hoogwaardige stukken vlees waar een normaal mes met moeite doorheen komt."
            photo="../../static/photos/table-knives/Steakmes.png"
          />
          <KnifeInfo
            title="LAGUIOLE"
            info="Tafelmes met een grove kartel in het lemmet, voornamelijk gebruikt voor het snijden van hardere korsten (bijvoorbeeld stokbrood en pizza)."
            photo="../../static/photos/table-knives/Laguiole.png"
          />
          <KnifeInfo
            title="OVERIGE"
            info="Natuurlijk zijn er nog veel andere soorten tafelmessen die wij ook slijpen. Vraag gerust naar onze mogelijkheden."
            photo="../../static/photos/table-knives/Kaasmes.png"
          />
        </ul>
      </div>
    );
  }
}

export default TableKnifeContainer;
