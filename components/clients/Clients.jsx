import React from 'react';
import PropTypes from 'prop-types';

import './clients.scss';
import Client from '../client/Client';
import NewClient from '../new-client/NewClient';
import PageHeader from '../page-header/PageHeader';

class Clients extends React.Component {
  componentDidMount() {
    this.props.requestClients();
    this.props.returnToDefault();
  }

  handleSortBy = (event) => {
    this.props.sortByClients(event.target.value);
  };

  handleSortDirection = (event) => {
    this.props.sortDirectionClients(event.target.value);
  };

  addClient = (newClient) => {
    this.props.addNewClient(newClient);
  };

  render() {
    const { clients, changeActiveFilter } = this.props;
    return (
      <React.Fragment>
        <PageHeader
          title="Clients"
          subtitle="5 Clients"
          onChangeActiveFilter={changeActiveFilter}
          options={this.props.filterOptions}
          standardOption="All Clients"
        />
        <NewClient
          onAddClient={this.addClient}
          onHandleSortBy={this.handleSortBy}
          onHandleSortDirection={this.handleSortDirection}
        />
        {clients.map((client) => (
          <React.Fragment key={client.id}>
            <Client
              clientName={client.clientName}
              city={client.city}
              phoneNumber={client.phoneNumber}
              email={client.email}
              website={client.website}
              address={client.address}
              zip={client.zip}
              kvkNumber={client.kvkNumber}
              remarks={client.remarks}
            />
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}

Clients.propTypes = {
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      clientName: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired
    })
  ).isRequired,
  addNewClient: PropTypes.func.isRequired,
  requestClients: PropTypes.func.isRequired,
  changeActiveFilter: PropTypes.func.isRequired,
  returnToDefault: PropTypes.func.isRequired,
  sortByClients: PropTypes.func.isRequired,
  sortDirectionClients: PropTypes.func.isRequired,
  filterOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Clients;
