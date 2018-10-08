import { put, takeEvery } from 'redux-saga/effects';

import { fetchData, saveData, deleteData } from '../services/time-entries/time-entries';
import {
  REQUEST_TIME_ENTRIES,
  REQUEST_TIME_ENTRIES_SUCCESS,
  ADD_NEW_TIME_ENTRY,
  ADD_NEW_TIME_ENTRY_SUCCESS,
  DELETE_TIME_ENTRY,
  DELETE_TIME_ENTRY_SUCCESS
} from '../ducks/time-entries.ts';

export function* requestTimeEntries() {
  const timeEntries = yield fetchData();
  yield put({ type: REQUEST_TIME_ENTRIES_SUCCESS, timeEntries });
}

export function* savaTimeEntry(action) {
  const newTimeEntry = yield saveData(action.newTimeEntry);
  yield put({ type: ADD_NEW_TIME_ENTRY_SUCCESS, newTimeEntry });
}

export function* delTimeEntry(action) {
  yield deleteData(action.id);
  yield put({ type: DELETE_TIME_ENTRY_SUCCESS, id: action.id });
}

export function* watchTimeEntries() {
  yield takeEvery(REQUEST_TIME_ENTRIES, requestTimeEntries);
  yield takeEvery(ADD_NEW_TIME_ENTRY, savaTimeEntry);
  yield takeEvery(DELETE_TIME_ENTRY, delTimeEntry);
}
