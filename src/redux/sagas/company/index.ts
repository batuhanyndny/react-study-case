import { call, put } from 'redux-saga/effects';
import { client } from '../../../utils/externalFetch';
import { IAction } from '../../types';
import { ICompany, setCompanies } from '../../ducks/company';

const fetchCompanies = () =>
  client.request({
    method: 'GET',
    url: 'companies',
  });

export function* handleGetCompanies(action: IAction<ICompany[]>): any {
  try {
    const response = yield call(fetchCompanies);
    const { data } = response;
    yield put(setCompanies(data));
  } catch (error) {
    console.log(error);
  }
}
