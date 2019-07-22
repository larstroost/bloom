import React from 'react';
import ReactGA from 'react-ga';

import MainNav from '../components/header/Header';
import CuttingBoardsContainer from '../components/cutting-boards-container/CuttingBoardsContainer';
import Footer from '../components/footer/Footer';

function initializeReactGA() {
  ReactGA.initialize('UA-142974411-2');
  ReactGA.pageview('/snijplanken');
}

const CuttingBoards = () => (
  <React.Fragment>
    <MainNav page='snijplanken' />
    <CuttingBoardsContainer />
    <Footer />
  </React.Fragment>
);

export default CuttingBoards;
