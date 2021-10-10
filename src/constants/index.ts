interface ITheme {
  primary: string;
  secondary: string;
  title: string;
  pageBackground: string;
  gray: string;
}

export const PER_PAGE = 16;

export const constants = {
  baseUrl: 'http://localhost:3001/',
};

export const theme: ITheme = {
  primary: '#1EA4CE',
  secondary: '#147594',
  title: '#6F6F6F',
  pageBackground: '#fafafa',
  gray: '#697488',
};

export const FILTERS = {
  PRICE_LOW_HIGH: 'react-study-case/filters/price_low_to_high',
  PRICE_HIGH_LOW: 'react-study-case/filters/price_high_to_low',
  PRICE_NEW_OLD: 'react-study-case/filters/price_new_to_old',
  PRICE_OLD_NEW: 'react-study-case/filters/price_old_to_new',
};
