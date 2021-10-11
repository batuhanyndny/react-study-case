import { Sort, SortState } from '.';

export const selectSortReducer = (payload: Sort): SortState => {
  return { sort: payload };
};
