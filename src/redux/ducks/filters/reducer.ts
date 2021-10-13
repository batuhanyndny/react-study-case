import deepEqual from 'deep-equal';
import { FilterItemType, FilterAction, IFilterState } from '.';

export const addToFiltersReducer = (state: IFilterState, payload: FilterAction): IFilterState => {
  switch (payload.type) {
    case 'filter':
      return { ...state, filters: [...state.filters, payload.filter] };
    case 'itemType':
      const inTypes = ['mug', 'shirt'].includes(payload.filter);
      if (inTypes) return { ...state, itemType: payload.filter as FilterItemType };
      else return { ...state, itemType: 'mug' };
  }
};

export const removeFromFiltersReducer = (state: IFilterState, payload: FilterAction): IFilterState => {
  switch (payload.type) {
    case 'filter':
      const newFilters = state.filters.filter((filter) => {
        return !deepEqual(filter, payload.filter);
      });
      return { ...state, filters: newFilters };
    case 'itemType':
      // mug is the default value for itemType thus cannot be removed
      return { ...state, itemType: 'mug' };
  }
};
