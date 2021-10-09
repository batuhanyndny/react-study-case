import { call, put } from 'redux-saga/effects';
import { IUser, setUser } from '../../ducks/user';
import { client } from '../../../utils/externalFetch';
import { IAction } from '../../types';

const fetchUser = () =>
  client.request({
    method: 'GET',
    url: 'users',
  });

export function* handleGetUser(action: IAction<IUser>): any {
  try {
    const response = yield call(fetchUser);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}
