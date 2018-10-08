import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addNewTimeEntry,
  addNewTimeEntrySuccess,
  deleteTimeEntry,
  deleteTimeEntrySuccess,
  requestTimeEntries,
  requestTimeEntriesSuccess,
  timeEntriesSelector,
  changeActiveFilter,
  returnToDefault,
  timeEntriesFilterClientsSelector
} from '../../ducks/time-entries.ts';
import {
  requestClients
} from '../../ducks/clients.ts';

import TimeEntries from './TimeEntries.tsx';

const mapStateToProps = (state) => ({
  timeEntries: timeEntriesSelector(state),
  clients: timeEntriesFilterClientsSelector(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addNewTimeEntry,
  addNewTimeEntrySuccess,
  deleteTimeEntry,
  deleteTimeEntrySuccess,
  requestTimeEntries,
  requestTimeEntriesSuccess,
  changeActiveFilter,
  returnToDefault,
  requestClients
}, dispatch);

const TimeEntriesContainer = (props) => (
  <TimeEntries {...props} />
);

TimeEntriesContainer.propTypes = TimeEntries.propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(TimeEntriesContainer);
