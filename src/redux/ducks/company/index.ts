import { IAction } from '../../types';
import { setCompaniesReducer } from './reducer';

// interfaces
export interface ICompany {
  slug: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  account: number;
  contact: string;
}

// Action Types
export const GET_COMPANIES = 'react-case-study/company/get_companies';
export const SET_COMPANIES = 'react-case-study/company/set_companies';

const initalState: ICompany[] = [];
// Reducer
export default function reducer(state = initalState, action: IAction<ICompany[]>): ICompany[] {
  switch (action.type) {
    case SET_COMPANIES:
      if (action.payload) return setCompaniesReducer(state, action.payload);
      throw new Error('Action Payload is empty @setCompanies');
    default:
      return state;
  }
}

// Action Creators
export function getCompanies(): IAction<void> {
  return { type: GET_COMPANIES };
}

export function setCompanies(companies: ICompany[]): IAction<ICompany[]> {
  return { type: SET_COMPANIES, payload: companies };
}
