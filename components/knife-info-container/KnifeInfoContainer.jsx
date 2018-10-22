import React from 'react';
import Link from 'next/link';

import './knife-info-container.scss';
import KnifeInfoPlus from '../knife-info-plus/KnifeInfoPlus'

class KnifeInfoContainer extends React.Component {
  render() {
      return (
        <ul className="knife-info-list">
          <KnifeInfoPlus />
          <KnifeInfoPlus />
          <KnifeInfoPlus />
          <KnifeInfoPlus />
          <KnifeInfoPlus />
          <KnifeInfoPlus />
          <KnifeInfoPlus />
        </ul>
    );
  }
}

export default KnifeInfoContainer;
