import { Filter, FilterState } from '.';
import { addToFiltersReducer, removeFromFiltersReducer } from './reducer';
import { FILTERS } from '../../../constants';

// mock data
const state: FilterState = {
  filters: [],
  itemType: 'mug',
};

const fullState: FilterState = {
  itemType: 'mug',
  filters: [FILTERS.PRICE_HIGH_LOW.value, FILTERS.PRICE_NEW_OLD.value, FILTERS.PRICE_OLD_NEW.value],
};

// Tests
describe('Filter reducer functions', () => {
  it('should add new filter to state', () => {
    const itemToAdd = FILTERS.PRICE_LOW_HIGH.value;
    const updatedState: FilterState = {
      filters: [itemToAdd],
      itemType: 'mug',
    };
    const newState = addToFiltersReducer(state, { type: 'filter', filter: itemToAdd });
    expect(newState).toStrictEqual(updatedState);
  });

  it('should remove filter from state', () => {
    const itemToRemove = FILTERS.PRICE_NEW_OLD.value;
    const updatedState: FilterState = {
      filters: [FILTERS.PRICE_HIGH_LOW.value, FILTERS.PRICE_OLD_NEW.value],
      itemType: 'mug',
    };
    const newState = removeFromFiltersReducer(fullState, { filter: itemToRemove, type: 'filter' });
    expect(newState).toStrictEqual(updatedState);
  });

  it('should set the itemType to shirt', () => {
    const newState = addToFiltersReducer(state, { type: 'itemType', filter: 'shirt' });
    const updatedState: FilterState = {
      filters: [],
      itemType: 'shirt',
    };
    expect(newState).toStrictEqual(updatedState);
  });

  it('should set the itemType to mug on invalid filter type', () => {
    const newState = addToFiltersReducer(state, { type: 'itemType', filter: 'foobar' });
    const updatedState: FilterState = {
      filters: [],
      itemType: 'mug',
    };
    expect(newState).toStrictEqual(updatedState);
  });
});
