import { IAction } from '../../types';
import { addToFiltersReducer, removeFromFiltersReducer } from './reducer';
// interfaces

export type Filter = string;

export type FilterActionType = 'itemType' | 'filter';
export type FilterItemType = 'mug' | 'shirt';

export type FilterAction = {
  type: FilterActionType;
  filter: Filter;
};

export interface FilterState {
  filters: Filter[];
  itemType: FilterItemType;
}

// Action Types
export const ADD_FILTER = 'react-case-study/filter/add_filter';
export const REMOVE_FILTER = 'react-case-study/filter/remove_filter';

const initalState: FilterState = {
  filters: [],
  itemType: 'mug',
};

// Reducer
export default function reducer(state = initalState, action: IAction<FilterAction>): FilterState {
  switch (action.type) {
    case ADD_FILTER:
      if (action.payload) return addToFiltersReducer(state, action.payload);
      throw new Error('Action Payload is empty @addToCartReducer');
    case REMOVE_FILTER:
      if (action.payload) return removeFromFiltersReducer(state, action.payload);
      throw new Error('Action Payload is empty @removeFromCartReducer');
    default:
      return state;
  }
}

// Action Creators
export function addToFilters(filter: FilterAction): IAction<FilterAction> {
  return { type: ADD_FILTER, payload: filter };
}

export function removeFromFilters(item: FilterAction): IAction<FilterAction> {
  return { type: REMOVE_FILTER, payload: item };
}
