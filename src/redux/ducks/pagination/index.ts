import { IAction } from '../../types';
import { setPageReducer } from './reducer';
// interfaces
export interface IPagination {
  page: number;
}

// Action Types
export const SET_PAGE = 'react-case-study/pagination/set_page';

const initalState: IPagination = {
  page: 1,
};
// Reducer
export default function reducer(state = initalState, action: IAction<number>): IPagination {
  switch (action.type) {
    case SET_PAGE:
      if (action.payload) return setPageReducer(action.payload);
      throw new Error('Action Payload is empty @setPage');
    default:
      return state;
  }
}

// Action Creators
export function setPage(page: number): IAction<number> {
  return { type: SET_PAGE, payload: page };
}
