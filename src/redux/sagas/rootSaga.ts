import { takeLatest, all } from 'redux-saga/effects';
import { GET_USER } from '../ducks/user';
import { handleGetUser } from './user';
import { handleGetItems } from './item';
import { GET_ITEMS } from '../ducks/item';

export function* rootSaga() {
  yield all([takeLatest(GET_USER, handleGetUser), takeLatest(GET_ITEMS, handleGetItems)]);
}
