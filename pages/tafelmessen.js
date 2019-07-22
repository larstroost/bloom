import React from 'react';
import ReactGA from 'react-ga';

import MainNav from '../components/header/Header';
import TableKnifeContainer from '../components/table-knife-container/TableKnifeContainer';
import Footer from '../components/footer/Footer';

function initializeReactGA() {
  ReactGA.initialize('UA-142974411-2');
  ReactGA.pageview('/tafelmessen');
}

const TableKnives = () => (
  <React.Fragment>
    <MainNav page='tafelmessen' />
    <TableKnifeContainer />
    <Footer />
  </React.Fragment>
);

export default TableKnives;
