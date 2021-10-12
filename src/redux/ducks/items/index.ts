import { IAction } from '../../types';
import { setItemsReducer } from './reducer';
// interfaces
export interface IItem {
  tags: string[];
  price: number;
  name: string;
  description: string;
  slug: string;
  added: number;
  manufacturer: string;
  itemType: string;
}

export interface IItemIndex {
  name: string;
  items: IItem[];
}

export interface IItemState {
  items: IItem[];
  brands: IItemIndex[];
  tags: IItemIndex[];
  sorted: {
    priceLowHigh: IItem[];
    dateNewOld: IItem[];
  };
}

// Action Types
export const GET_ITEMS = 'react-case-study/item/get_item';
export const SET_ITEMS = 'react-case-study/item/set_item';

const initalState: IItemState = {
  items: [],
  brands: [],
  tags: [],
  sorted: {
    priceLowHigh: [],
    dateNewOld: [],
  },
};
// Reducer
export default function reducer(state = initalState, action: IAction<IItem[]>): IItemState {
  switch (action.type) {
    case SET_ITEMS:
      if (action.payload) return setItemsReducer(action.payload);
      throw new Error('Action Payload is empty @setItemsReducer');
    default:
      return state;
  }
}

// Action Creators
export function getItems(): IAction<void> {
  return { type: GET_ITEMS };
}

export function setItems(items: IItem[]): IAction<IItem[]> {
  return { type: SET_ITEMS, payload: items };
}
