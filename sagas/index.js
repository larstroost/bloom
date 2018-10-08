import { all } from 'redux-saga/effects';
import { watchTimeEntries } from './time-entries';
import { watchTeamMembers } from './team-members';
import { watchClients } from './clients';

export default function* rootSaga() {
  yield all([
    watchTimeEntries(),
    watchTeamMembers(),
    watchClients()
  ]);
}
