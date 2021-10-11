import { SortState } from '.';
import { FILTERS } from '../../../constants';
import { selectSortReducer } from './reducer';

// mock data
const state: SortState = {
  sort: null,
};

// Tests
describe('Sort reducer functions', () => {
  it('should add new sort property to state', () => {
    const itemToAdd = FILTERS.PRICE_LOW_HIGH.value;
    const updatedState: SortState = { sort: itemToAdd };
    const newState = selectSortReducer(itemToAdd);
    expect(newState).toStrictEqual(updatedState);
  });

  it('should clear the sort properties', () => {
    const newState = selectSortReducer(null);
    expect(newState).toStrictEqual(state);
  });
});
