import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './sagas/rootSaga';
// reducers
import itemReducer from './ducks/items';
import cartReducer from './ducks/cart';
import paginationReducer from './ducks/pagination';
import filterReducer from './ducks/filters';
import sortReducer from './ducks/sort';
import companiesReducer from './ducks/company';

const reducer = combineReducers({
  items: itemReducer,
  cart: cartReducer,
  pagination: paginationReducer,
  filters: filterReducer,
  sort: sortReducer,
  companies: companiesReducer,
});

export type RootState = ReturnType<typeof reducer>;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, {}, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);
export default store;
