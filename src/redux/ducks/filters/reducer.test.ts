import { Filter } from '.';
import { addToFilters, removeFromFilters } from './reducer';
import { FILTERS } from '../../../constants';

// mock data
const state: Filter[] = [];

const fullState: Filter[] = [FILTERS.PRICE_HIGH_LOW, FILTERS.PRICE_NEW_OLD, FILTERS.PRICE_OLD_NEW];

// Tests
describe('Filter reducer functions', () => {
  it('should add new filter to state', () => {
    const itemToAdd = FILTERS.PRICE_LOW_HIGH;
    const updatedState: Filter[] = [itemToAdd];
    const newState = addToFilters(state, itemToAdd);
    expect(newState).toStrictEqual(updatedState);
  });

  it('should add array of filters to state', () => {
    const newState = addToFilters(state, [FILTERS.PRICE_HIGH_LOW, FILTERS.PRICE_NEW_OLD, FILTERS.PRICE_OLD_NEW]);
    expect(newState).toStrictEqual(fullState);
  });

  it('should remove single item from cart', () => {
    const itemToRemove = FILTERS.PRICE_NEW_OLD;
    const updatedState: Filter[] = [FILTERS.PRICE_HIGH_LOW, FILTERS.PRICE_OLD_NEW];
    const newState = removeFromFilters(fullState, itemToRemove);
    expect(newState).toStrictEqual(updatedState);
  });

  it('should remove array of filters from state', () => {
    const itemsToRemove = [FILTERS.PRICE_HIGH_LOW, FILTERS.PRICE_OLD_NEW];
    const newState = removeFromFilters(fullState, itemsToRemove);
    const updatedState: Filter[] = [FILTERS.PRICE_NEW_OLD];
    expect(newState).toStrictEqual(updatedState);
  });
});
