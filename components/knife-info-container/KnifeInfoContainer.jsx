import React from 'react';
import Link from 'next/link';

import './knife-info-container.scss';
import KnifeInfo from '../knife-info/KnifeInfo'
import KnifeInfoText from '../knife-info-text/KnifeInfoText'

class KnifeInfoContainer extends React.Component {
  render() {
      return (
        <React.Fragment>
          <KnifeInfoText
            infoTitle="Koksmessen Informatie Pagina"
            infoText="Deze pagina moet veel tekst gaan bevatten over het slijpen van scharen. Buiten messen slijpt Horeca Slijperij Bloom ook scharen. Grote scharen, kleine scharen, botte scharen, minder scherpe scharen, scharen voor vlees, scharen voor takken, bomen, bladeren, groenten, plastic etc. Lever uw schaar in en wij slijpen het knipvlak weer scherp."
            src="../../static/icons/kitchen-knife.jpg"
            alt="Scissors"
          />
          <ul className="knife-info-list">
            <KnifeInfo />
            <KnifeInfo />
            <KnifeInfo />
            <KnifeInfo />
            <KnifeInfo />
            <KnifeInfo />
            <KnifeInfo />
          </ul>
        </React.Fragment>
    );
  }
}

export default KnifeInfoContainer;
