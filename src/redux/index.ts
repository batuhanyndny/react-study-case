import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './sagas/rootSaga';
// reducers
import userReducer from './ducks/user';
import itemReducer from './ducks/item';
import cartReducer from './ducks/cart';
import paginationReducer from './ducks/pagination';

const reducer = combineReducers({
  items: itemReducer,
  user: userReducer,
  cart: cartReducer,
  pagination: paginationReducer,
});

export type RootState = ReturnType<typeof reducer>;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const store = createStore(reducer, {}, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
export default store;
