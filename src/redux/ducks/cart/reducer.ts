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
    const newProducts = [...state.products];
    payload.forEach((item) => {
      const idx = newProducts.findIndex((product) => deepEqual(product, item));
      newProducts.splice(idx, 1);
    });
    return { price: newPrice, products: newProducts };
  } else {
    const newPrice = roundNumber(state.price - payload.price);
    const idx = state.products.findIndex((product) => deepEqual(product, payload));
    const newProducts = [...state.products];
    newProducts.splice(idx, 1);

    return { price: newPrice, products: newProducts };
  }
};
