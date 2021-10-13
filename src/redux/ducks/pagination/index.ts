import { IAction } from '../../types';
import { setPageReducer, setItemCountReducer } from './reducer';
// interfaces
export interface IPagination {
  itemCount: number;
  page: number;
}

// Action Types
export const SET_PAGE = 'react-case-study/pagination/set_page';
export const SET_ITEM_COUNT = 'react-case-study/pagination/set_item_count';

const initalState: IPagination = {
  page: 1,
  itemCount: 0,
};
// Reducer
export default function reducer(state = initalState, action: IAction<number>): IPagination {
  switch (action.type) {
    case SET_PAGE:
      if (action.payload) return setPageReducer(state, action.payload);
      throw new Error('Action Payload is empty @setPage');
    case SET_ITEM_COUNT:
      if (action.payload) return setItemCountReducer(state, action.payload);
      throw new Error('Action Payload is empty @setItemCount');
    default:
      return state;
  }
}

// Action Creators
export function setPage(page: number): IAction<number> {
  return { type: SET_PAGE, payload: page };
}

export function setItemCount(count: number): IAction<number> {
  return { type: SET_ITEM_COUNT, payload: count };
}
