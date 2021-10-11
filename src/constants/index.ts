interface ITheme {
  primary: string;
  secondary: string;
  title: string;
  pageBackground: string;
  gray: string;
  lightGray: string;
  purple: string;
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
  lightGray: '#E0E0E0',
  purple: '#5D38C0',
};

export const FILTERS = {
  PRICE_LOW_HIGH: { value: 'react-study-case/filters/price_low_to_high', label: 'Price low to high' },
  PRICE_HIGH_LOW: { value: 'react-study-case/filters/price_high_to_low', label: 'Price high to low' },
  PRICE_NEW_OLD: { value: 'react-study-case/filters/price_new_to_old', label: 'New to old' },
  PRICE_OLD_NEW: { value: 'react-study-case/filters/price_old_to_new', label: 'Old to new' },
};
