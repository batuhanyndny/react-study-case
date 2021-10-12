import { IAction } from '../../types';
import { IItem } from '../items';
import { addToCartReducer, removeFromCartReducer } from './reducer';
// interfaces
export interface ICart {
  products: IItem[];
  price: number;
}

// Action Types
export const ADD_TO_CART = 'react-case-study/cart/add_to_cart';
export const REMOVE_FROM_CART = 'react-case-study/cart/remove_from_cart';

const initalState: ICart = {
  products: [],
  price: 0,
};
// Reducer
export default function reducer(state = initalState, action: IAction<IItem | IItem[]>): ICart {
  switch (action.type) {
    case ADD_TO_CART:
      if (action.payload) return addToCartReducer(state, action.payload);
      throw new Error('Action Payload is empty @addToCartReducer');
    case REMOVE_FROM_CART:
      if (action.payload) return removeFromCartReducer(state, action.payload);
      throw new Error('Action Payload is empty @removeFromCartReducer');
    default:
      return state;
  }
}

// Action Creators
export function addToCart(item: IItem | IItem[]): IAction<IItem | IItem[]> {
  return { type: ADD_TO_CART, payload: item };
}

export function removeFromCart(item: IItem | IItem[]): IAction<IItem | IItem[]> {
  return { type: REMOVE_FROM_CART, payload: item };
}
