import { put, takeEvery } from 'redux-saga/effects';

import { fetchData, saveData } from '../services/team-members/team-members';
import {
  REQUEST_TEAM_MEMBERS,
  REQUEST_TEAM_MEMBERS_SUCCESS,
  ADD_NEW_TEAM_MEMBER,
  ADD_NEW_TEAM_MEMBER_SUCCESS
} from '../ducks/team-members';

export function* requestTeamMembers() {
  const teamMembers = yield fetchData();
  yield put({ type: REQUEST_TEAM_MEMBERS_SUCCESS, teamMembers });
}

export function* saveTeamMember(action) {
  const newTeamMember = yield saveData(action.newTeamMember);
  yield put({ type: ADD_NEW_TEAM_MEMBER_SUCCESS, newTeamMember });
}

export function* watchTeamMembers() {
  yield takeEvery(REQUEST_TEAM_MEMBERS, requestTeamMembers);
  yield takeEvery(ADD_NEW_TEAM_MEMBER, saveTeamMember);
}
