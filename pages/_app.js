import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import nextReduxSaga from 'next-redux-saga';

import initializeStore from '../store';

class TeamAwesome extends App {
  render() {
    const { Component, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initializeStore)(nextReduxSaga(TeamAwesome));
