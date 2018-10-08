import { combineReducers } from 'redux';

import { teamMembersReducer } from './team-members';

const rootReducer = combineReducers({
  teamMembers: teamMembersReducer
});

export default rootReducer;
