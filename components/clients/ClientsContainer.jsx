import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  clientsSelector,
  clientsPageHeaderFilterSelector,
  requestClients,
  requestClientsSuccess,
  addNewClient,
  addNewClientSuccess,
  changeActiveFilter,
  returnToDefault,
  sortByClients,
  sortDirectionClients
} from '../../ducks/clients.ts';

import Clients from './Clients';

const mapStateToProps = (state) => ({
  clients: clientsSelector(state),
  filterOptions: clientsPageHeaderFilterSelector(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  requestClients,
  requestClientsSuccess,
  addNewClient,
  addNewClientSuccess,
  changeActiveFilter,
  returnToDefault,
  sortByClients,
  sortDirectionClients
}, dispatch);

const ClientsContainer = (props) => (
  <Clients {...props} />
);

ClientsContainer.propTypes = Clients.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ClientsContainer);
