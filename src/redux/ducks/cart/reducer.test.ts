import { ICart } from '.';
import { IItem } from '../item';
import { addToCartReducer, removeFromCartReducer } from './reducer';

// mock data
const state: ICart = {
  price: 0,
  products: [],
};

const items: IItem[] = [
  {
    tags: ['Trees'],
    price: 12.99,
    name: 'Intelligent Trees Shirt',
    description:
      'quaerat laboriosam esse ducimus deleniti commodi aspernatur perferendis earum hic numquam eos dolorum reiciendis minus ut rem vel molestias vel voluptatem atque ipsam nisi omnis',
    slug: 'Intelligent-Trees-Shirt',
    added: 1480356635933,
    manufacturer: 'Konopelski-Group',
    itemType: 'shirt',
  },
  {
    tags: ['Beach', 'Ocean', 'Water'],
    price: 15.99,
    name: 'Incredible Ocean Shirt',
    description:
      'quia deleniti illo numquam a non tempore veritatis expedita error vitae sint dolorum amet est voluptatum dolorum voluptas sit',
    slug: 'Incredible-Ocean-Shirt',
    added: 1483750456982,
    manufacturer: 'Metz---Kautzer',
    itemType: 'shirt',
  },
  {
    tags: ['Animal', 'Bear'],
    price: 10.99,
    name: 'Sleek Bear Shirt',
    description:
      'sed velit asperiores aspernatur natus impedit incidunt dolorem est consequatur qui modi ut aut quaerat aut aperiam repellat voluptas sit aut',
    slug: 'Sleek-Bear-Shirt',
    added: 1479151122535,
    manufacturer: 'Rice-Inc',
    itemType: 'shirt',
  },
];

const fullState: ICart = {
  price: items.reduce((total, item) => {
    return total + item.price;
  }, 0),
  products: items,
};

// Tests
describe('Cart Reducer functions', () => {
  it('should add single item to cart', () => {
    const itemToAdd = items[0];
    const updatedState: ICart = {
      price: itemToAdd.price,
      products: [itemToAdd],
    };
    const newState = addToCartReducer(state, itemToAdd);
    expect(newState).toStrictEqual(updatedState);
  });

  it('should add array of items to cart', () => {
    const newState = addToCartReducer(state, items);
    expect(newState).toStrictEqual(fullState);
  });

  it('should remove single item from cart', () => {
    const itemToRemove = items[1];
    const updatedState: ICart = {
      price: items[0].price + items[2].price,
      products: [items[0], items[2]],
    };
    const newState = removeFromCartReducer(fullState, itemToRemove);
    expect(newState).toStrictEqual(updatedState);
  });

  it('should remove array of items from cart', () => {
    const itemsToRemove = [items[0], items[2]];
    const newState = removeFromCartReducer(fullState, itemsToRemove);
    const updatedState: ICart = {
      price: items[1].price,
      products: [items[1]],
    };
    expect(newState).toStrictEqual(updatedState);
  });
});
