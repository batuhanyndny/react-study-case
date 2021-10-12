import { ICompany } from '.';

export const setCompaniesReducer = (state: ICompany[], payload: ICompany[]) => [...state, ...payload];
