import React from 'react';

import MainNav from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Workflow from '../components/workflow/Workflow';

const Index = () => (
  <React.Fragment>
    <MainNav />
    <Workflow />
    <Footer />
  </React.Fragment>
);

export default Index;
