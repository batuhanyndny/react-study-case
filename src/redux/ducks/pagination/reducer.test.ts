import { IPagination } from '.';
import { setItemCountReducer, setPageReducer } from './reducer';

// mock data
const state: IPagination = {
  itemCount: 0,
  page: 1,
};

// Tests
describe('Pagination reducer function', () => {
  it('should set the pagination from payload', () => {
    const newState = setPageReducer(state, 4);
    expect(newState.page).toBe(4);
  });

  it('should set the itemCount from payload', () => {
    const newState = setItemCountReducer(state, 42);
    expect(newState.itemCount).toBe(42);
  });
});
