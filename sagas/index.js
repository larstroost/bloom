import { all } from 'redux-saga/effects';
import { watchTeamMembers } from './team-members';

export default function* rootSaga() {
  yield all([
    watchTeamMembers()
  ]);
}
