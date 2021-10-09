import { call, put } from 'redux-saga/effects';
import { client } from '../../../utils/externalFetch';
import { IAction } from '../../types';
import { IItem, setItems } from '../../ducks/item';

const fetchItems = () =>
  client.request({
    method: 'GET',
    url: 'items',
  });

export function* handleGetItems(action: IAction<IItem[]>): any {
  try {
    const response = yield call(fetchItems);
    const { data } = response;
    yield put(setItems(data));
  } catch (error) {
    console.log(error);
  }
}
