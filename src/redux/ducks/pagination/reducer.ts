import { IPagination } from '.';

export const setPageReducer = (state: IPagination, payload: number): IPagination => {
  return { ...state, page: payload };
};

export const setItemCountReducer = (state: IPagination, payload: number): IPagination => {
  return { ...state, itemCount: payload };
};
