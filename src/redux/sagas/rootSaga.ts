import { takeLatest } from 'redux-saga/effects';
import { GET_USER } from '../ducks/user';
import { handleGetUser } from './user';

export function* rootSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}
