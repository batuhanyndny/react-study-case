import IAction from '../types';

// interfaces
interface Counter {
  value: number;
}

// Action Types
const INCREAMENT = 'react-study-case/counter/increment';
const DECREAMENT = 'react-study-case/counter/decreament';

// Inital State
const initalState: Counter = {
  value: 0,
};

// Reducer
export default function reducer(state = initalState, action: IAction<Counter>): Counter {
  switch (action.type) {
    case INCREAMENT:
      return { value: state.value + 1 };
    case DECREAMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
}

// Action Creators
export function increment(): IAction<Counter> {
  return { type: INCREAMENT };
}

export function decreament(): IAction<Counter> {
  return { type: DECREAMENT };
}
