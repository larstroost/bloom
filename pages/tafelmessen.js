import React from 'react';
import MainNav from '../components/header/Header';
import TableKnifeContainer from '../components/table-knife-container/TableKnifeContainer';
import Footer from '../components/footer/Footer';

const TableKnives = () => (
  <React.Fragment>
    <MainNav page='tafelmessen' />
    <TableKnifeContainer />
    <Footer />
  </React.Fragment>
);

export default TableKnives;
