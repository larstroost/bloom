import React from 'react';

import MainNav from '../components/header/Header';
import KnifeInfo from '../components/knife-info/KnifeInfo';

const Knives = () => (
  <React.Fragment>
    <MainNav page='messen' />
      <KnifeInfo
        title="Keukenmessen"
        src="/static/icons/kitchen-knife.jpg"
        info="Informatie over keukenmessen"
      />
      <KnifeInfo
        title="Koksmessen"
        src="/static/icons/chef-knife.jpeg"
        info="Informatie over koksmessen"
      />
  </React.Fragment>
);

export default Knives;
