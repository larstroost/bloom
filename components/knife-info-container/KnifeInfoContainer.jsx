import React from 'react';
import Link from 'next/link';

import './knife-info-container.scss';
import KnifeInfo from '../knife-info/KnifeInfo'
import KnifeInfoText from '../knife-info-text/KnifeInfoText'

class KnifeInfoContainer extends React.Component {
  render() {
      return (
        <React.Fragment>
          <KnifeInfoText />
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
