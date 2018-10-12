import React from 'react';

import MainNav from '../components/header/Header';
import KnifeInfo from '../components/knife-info/KnifeInfo';

const Knives = () => (
  <React.Fragment>
    <MainNav page='messen' />
    <KnifeInfo
      title="Keukenmessen"
      src="/static/icons/kitchen-knife.jpg"
      basicInfo="Basis informatie over keukenmessen"
      extendedInfo="Uitgebreide informatie over keukenmessen"
    />
    <KnifeInfo
      title="Koksmessen"
      src="/static/icons/chef-knife.jpeg"
      basicInfo="Basis informatie over koksmessen"
      extendedInfo="Uitgebreide informatie over koksmessen"
    />
  </React.Fragment>
);

export default Knives;
