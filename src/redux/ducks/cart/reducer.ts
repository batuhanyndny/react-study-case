import { IItem } from '../items';
import deepEqual from 'deep-equal';
import { ICart } from '.';
import { roundNumber } from '../../../utils/helpers';

export const addToCartReducer = (state: ICart, payload: IItem | IItem[]) => {
  const isArray = Array.isArray(payload);
  if (isArray) {
    const newPrice = roundNumber(payload.reduce((total, item) => item.price + total, state.price));
    const newProducts = [...state.products, ...payload];
    return { price: newPrice, products: newProducts };
  } else {
    const newPrice = roundNumber(state.price + payload.price);
    const newProducts = [...state.products, payload];
    return { price: newPrice, products: newProducts };
  }
};

export const removeFromCartReducer = (state: ICart, payload: IItem | IItem[]) => {
  const isArray = Array.isArray(payload);
  if (isArray) {
    const newPrice = roundNumber(state.price - payload.reduce((total, item) => item.price + total, 0));
    const newProducts = state.products.filter((product, index) => {
      return !payload.find((item) => deepEqual(item, product));
    });
    return { price: newPrice, products: newProducts };
  } else {
    const newPrice = roundNumber(state.price - payload.price);
    const newProducts = state.products.filter((product) => {
      return !deepEqual(product, payload);
    });
    return { price: newPrice, products: newProducts };
  }
};
