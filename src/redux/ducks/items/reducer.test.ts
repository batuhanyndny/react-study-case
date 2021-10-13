import { IItem } from '.';
import { setItemsReducer } from './reducer';

// mock data
const data: IItem[] = [
  {
    tags: ['Trees'],
    price: 10.99,
    name: 'Handcrafted Trees Mug',
    description:
      'enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur',
    slug: 'Handcrafted-Trees-Mug',
    added: 1485723766805,
    manufacturer: 'OHara-Group',
    itemType: 'mug',
  },
  {
    tags: ['Beach', 'Ocean', 'Water'],
    price: 19.99,
    name: 'Rustic Beach Mug',
    description: 'totam at veritatis eligendi assumenda ex quia praesentium quibusdam ducimus',
    slug: 'Rustic-Beach-Mug',
    added: 1481573896833,
    manufacturer: 'Sipes-Inc',
    itemType: 'mug',
  },
  {
    tags: ['Animal', 'Bear'],
    price: 17.99,
    name: 'Handcrafted Bear Mug',
    description: 'vitae mollitia et in accusantium est voluptas officiis est non',
    slug: 'Handcrafted-Bear-Mug',
    added: 1485991071829,
    manufacturer: 'Weissnat-Schowalter-and-Koelpin',
    itemType: 'mug',
  },
  {
    tags: ['Road'],
    price: 15.99,
    name: 'Refined Road Mug',
    description:
      'explicabo fugit magnam fugit dolorem itaque unde quidem est quia ut a veritatis sit facere possimus fugit ipsam',
    slug: 'Refined-Road-Mug',
    added: 1482213983048,
    manufacturer: 'Bernier-Hane',
    itemType: 'mug',
  },
  {
    tags: ['Ocean', 'Rocks'],
    price: 10.99,
    name: 'Unbranded Ocean Mug',
    description: 'facilis aut velit vitae sit dolorum illum nostrum pariatur dolorem vel atque quasi placeat qui',
    slug: 'Unbranded-Ocean-Mug',
    added: 1483408192004,
    manufacturer: 'Franecki---Gaylord',
    itemType: 'mug',
  },
];

// add function to check that array is unique.
const isArrayUnique = <T extends {}>(arr: T) => Array.isArray(arr) && new Set(arr).size === arr.length;

describe('items reducer function', () => {
  const state = setItemsReducer(data);

  it('should return return items field', () => {
    expect(state.items).not.toStrictEqual([]);
  });

  it('should return the brands without duplication', () => {
    expect(isArrayUnique(state.brands)).toBeTruthy();
  });

  it('should return the tags without duplication', () => {
    expect(isArrayUnique(state.tags)).toBeTruthy();
  });
});
