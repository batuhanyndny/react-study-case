import deepEqual from 'deep-equal';
import { Filter, UnionFilter } from '.';

export const addToFilters = (state: Filter[], payload: UnionFilter) => {
  const isArray = Array.isArray(payload);
  if (isArray) {
    return [...state, ...payload];
  } else {
    return [...state, payload];
  }
};

export const removeFromFilters = (state: Filter[], payload: UnionFilter) => {
  const isArray = Array.isArray(payload);
  if (isArray) {
    const newFilters = state.filter((filter, index) => {
      return !payload.find((_filter) => deepEqual(filter, _filter));
    });
    return newFilters;
  } else {
    const newFilters = state.filter((filter) => {
      return !deepEqual(filter, payload);
    });
    return newFilters;
  }
};
