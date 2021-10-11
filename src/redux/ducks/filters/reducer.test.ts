import { Filter } from '.';
import { addToFiltersReducer, removeFromFiltersReducer } from './reducer';
import { FILTERS } from '../../../constants';

// mock data
const state: Filter[] = [];

const fullState: Filter[] = [FILTERS.PRICE_HIGH_LOW.value, FILTERS.PRICE_NEW_OLD.value, FILTERS.PRICE_OLD_NEW.value];

// Tests
describe('Filter reducer functions', () => {
  it('should add new filter to state', () => {
    const itemToAdd = FILTERS.PRICE_LOW_HIGH.value;
    const updatedState: Filter[] = [itemToAdd];
    const newState = addToFiltersReducer(state, itemToAdd);
    expect(newState).toStrictEqual(updatedState);
  });

  it('should add array of filters to state', () => {
    const newState = addToFiltersReducer(state, [
      FILTERS.PRICE_HIGH_LOW.value,
      FILTERS.PRICE_NEW_OLD.value,
      FILTERS.PRICE_OLD_NEW.value,
    ]);
    expect(newState).toStrictEqual(fullState);
  });

  it('should remove single item from cart', () => {
    const itemToRemove = FILTERS.PRICE_NEW_OLD.value;
    const updatedState: Filter[] = [FILTERS.PRICE_HIGH_LOW.value, FILTERS.PRICE_OLD_NEW.value];
    const newState = removeFromFiltersReducer(fullState, itemToRemove);
    expect(newState).toStrictEqual(updatedState);
  });

  it('should remove array of filters from state', () => {
    const itemsToRemove = [FILTERS.PRICE_HIGH_LOW.value, FILTERS.PRICE_OLD_NEW.value];
    const newState = removeFromFiltersReducer(fullState, itemsToRemove);
    const updatedState: Filter[] = [FILTERS.PRICE_NEW_OLD.value];
    expect(newState).toStrictEqual(updatedState);
  });
});
