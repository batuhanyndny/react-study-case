import { ICompany } from '.';
import { setCompaniesReducer } from './reducer';

// Mock data
const companies: ICompany[] = [
  {
    slug: 'Dickens-Franecki',
    name: 'Dickens - Franecki',
    address: '12158 Randall Port',
    city: 'East Maureenbury',
    state: 'NE',
    zip: '74529',
    account: 31010023,
    contact: 'Lonzo Stracke',
  },
  {
    slug: 'Weissnat-Schowalter-and-Koelpin',
    name: 'Weissnat, Schowalter and Koelpin',
    address: '92027 Murphy Cove',
    city: 'Port Malachi',
    state: 'WY',
    zip: '56670-0684',
    account: 81813543,
    contact: 'Kathryne Ernser',
  },
  {
    slug: 'Cruickshank-Bayer-and-Gerlach',
    name: 'Cruickshank, Bayer and Gerlach',
    address: '45974 Paxton Corner',
    city: 'Gerlachmouth',
    state: 'OR',
    zip: '67061',
    account: 43249604,
    contact: 'Bernhard Greenholt',
  },
];

const state: ICompany[] = [];

// Tests
describe('Companies reducer function', () => {
  it('should add companies to the state', () => {
    const newState = setCompaniesReducer(state, companies);
    expect(newState).toStrictEqual(companies);
  });
});
