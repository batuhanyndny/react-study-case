import { IAction } from '../types';
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

// Action Types
export const GET_ITEMS = 'react-case-study/item/get_item';
export const SET_ITEMS = 'react-case-study/item/set_item';

const initalState: IItem[] = [];
// Reducer
export default function reducer(state = initalState, action: IAction<IItem[]>): IItem[] {
  switch (action.type) {
    case SET_ITEMS:
      const data = action.payload as IItem[];
      return [...data];
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
