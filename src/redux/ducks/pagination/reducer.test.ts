import { setPageReducer } from './reducer';

// Tests
describe('Pagination reducer function', () => {
  it('should set the pagination to payload', () => {
    const newState = setPageReducer(4);
    expect(newState.page).toBe(4);
  });
});
