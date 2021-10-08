import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import counterReducer from './ducks/counter';
import userReducer from './ducks/user';
import { rootSaga } from './sagas/rootSaga';

const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof reducer>;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const store = createStore(reducer, {}, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
export default store;
