import { IAction } from '../../types';
import { selectSortReducer } from './reducer';
// interfaces

export type Sort = string | null;

export interface SortState {
  sort: Sort;
}

// Action Types
export const SELECT_SORT = 'react-case-study/sort/select_sort';

const initalState: SortState = {
  sort: null,
};

// Reducer
export default function reducer(state = initalState, action: IAction<Sort>): SortState {
  switch (action.type) {
    case SELECT_SORT:
      if (action.payload) return selectSortReducer(action.payload);
      throw new Error('Action Payload is empty @addToCartReducer');
    default:
      return state;
  }
}

// Action Creators
export function selectSort(sort: Sort): IAction<Sort> {
  return { type: SELECT_SORT, payload: sort };
}
