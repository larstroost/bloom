import React from 'react';
import MainNav from '../components/header/Header';
import CuttingBoardsContainer from '../components/cutting-boards-container/CuttingBoardsContainer';
import Footer from '../components/footer/Footer';

const CuttingBoards = () => (
  <React.Fragment>
    <MainNav page='snijplanken' />
    <CuttingBoardsContainer />
    <Footer />
  </React.Fragment>
);

export default CuttingBoards;
