import { put, takeEvery } from 'redux-saga/effects';

import { fetchData, saveData } from '../services/clients/clients';
import {
  REQUEST_CLIENTS,
  REQUEST_CLIENTS_SUCCESS,
  ADD_NEW_CLIENT,
  ADD_NEW_CLIENT_SUCCESS
} from '../ducks/clients.ts';

export function* requestClients() {
  const clients = yield fetchData();
  yield put({ type: REQUEST_CLIENTS_SUCCESS, clients });
}

export function* saveClient(action) {
  const newClient = yield saveData(action.newClient);
  yield put({ type: ADD_NEW_CLIENT_SUCCESS, newClient });
}

export function* watchClients() {
  yield takeEvery(REQUEST_CLIENTS, requestClients);
  yield takeEvery(ADD_NEW_CLIENT, saveClient);
}
