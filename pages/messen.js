import React from 'react';

import MainNav from '../components/header/Header';
import KnifeInfo from '../components/knife-info/KnifeInfo';

const Knives = () => (
  <React.Fragment>
    <MainNav page='messen' />
    <KnifeInfo title="Keukenmessen" src="/static/icons/kitchen-knife.jpg" />
    <KnifeInfo title="Koksmessen" src="/static/icons/chef-knife.jpeg" />
  </React.Fragment>
);

export default Knives;
