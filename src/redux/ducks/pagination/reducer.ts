import { IPagination } from '.';

export const setPageReducer = (payload: number): IPagination => {
  return { page: payload };
};
