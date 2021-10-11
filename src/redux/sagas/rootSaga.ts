import { takeLatest, all } from 'redux-saga/effects';
import { handleGetItems } from './item';
import { GET_ITEMS } from '../ducks/item';
import { GET_COMPANIES } from '../ducks/company';
import { handleGetCompanies } from './company';

export function* rootSaga() {
  yield all([takeLatest(GET_COMPANIES, handleGetCompanies), takeLatest(GET_ITEMS, handleGetItems)]);
}
