import React from 'react';
import Link from 'next/link';

import './knife-info-container.scss';
import KnifeInfoPlus from '../knife-info-plus/KnifeInfoPlus'
import KnifeInfoText from '../knife-info-text/KnifeInfoText'

class KnifeInfoContainer extends React.Component {
  render() {
      return (
        <React.Fragment>
          <KnifeInfoText />
          <ul className="knife-info-list">
            <KnifeInfoPlus />
            <KnifeInfoPlus />
            <KnifeInfoPlus />
            <KnifeInfoPlus />
            <KnifeInfoPlus />
            <KnifeInfoPlus />
            <KnifeInfoPlus />
          </ul>
        </React.Fragment>
    );
  }
}

export default KnifeInfoContainer;
