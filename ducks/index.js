import { combineReducers } from 'redux';

import { timeEntriesReducer } from './time-entries.ts';
import { teamMembersReducer } from './team-members';
import { clientsReducer } from './clients.ts';

const rootReducer = combineReducers({
  timeEntries: timeEntriesReducer,
  teamMembers: teamMembersReducer,
  clients: clientsReducer
});

export default rootReducer;
