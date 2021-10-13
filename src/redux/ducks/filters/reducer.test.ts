import { Filter, IFilterState } from '.';
import { addToFiltersReducer, removeFromFiltersReducer } from './reducer';
import { FILTERS } from '../../../constants';

// mock data
const state: IFilterState = {
  filters: [],
  itemType: 'mug',
};

const fullState: IFilterState = {
  itemType: 'mug',
  filters: [FILTERS.PRICE_HIGH_LOW.value, FILTERS.DATE_NEW_OLD.value, FILTERS.DATE_OLD_NEW.value],
};

// Tests
describe('Filter reducer functions', () => {
  it('should add new filter to state', () => {
    const itemToAdd = FILTERS.PRICE_LOW_HIGH.value;
    const updatedState: IFilterState = {
      filters: [itemToAdd],
      itemType: 'mug',
    };
    const newState = addToFiltersReducer(state, { type: 'filter', filter: itemToAdd });
    expect(newState).toStrictEqual(updatedState);
  });

  it('should remove filter from state', () => {
    const itemToRemove = FILTERS.DATE_NEW_OLD.value;
    const updatedState: IFilterState = {
      filters: [FILTERS.PRICE_HIGH_LOW.value, FILTERS.DATE_OLD_NEW.value],
      itemType: 'mug',
    };
    const newState = removeFromFiltersReducer(fullState, { filter: itemToRemove, type: 'filter' });
    expect(newState).toStrictEqual(updatedState);
  });

  it('should set the itemType to shirt', () => {
    const newState = addToFiltersReducer(state, { type: 'itemType', filter: 'shirt' });
    const updatedState: IFilterState = {
      filters: [],
      itemType: 'shirt',
    };
    expect(newState).toStrictEqual(updatedState);
  });

  it('should set the itemType to mug on invalid filter type', () => {
    const newState = addToFiltersReducer(state, { type: 'itemType', filter: 'foobar' });
    const updatedState: IFilterState = {
      filters: [],
      itemType: 'mug',
    };
    expect(newState).toStrictEqual(updatedState);
  });
});
