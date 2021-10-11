import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './sagas/rootSaga';
// reducers
import userReducer from './ducks/user';
import itemReducer from './ducks/item';
import cartReducer from './ducks/cart';
import paginationReducer from './ducks/pagination';
import filterReducer from './ducks/filters';
import sortReducer from './ducks/sort';

const reducer = combineReducers({
  items: itemReducer,
  user: userReducer,
  cart: cartReducer,
  pagination: paginationReducer,
  filters: filterReducer,
  sort: sortReducer,
});

export type RootState = ReturnType<typeof reducer>;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, {}, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);
export default store;
