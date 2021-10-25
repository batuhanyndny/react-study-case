interface ITheme {
  primary: string;
  secondary: string;
  title: string;
  pageBackground: string;
  gray: string;
  lightGray: string;
  smokeGray: string;
  lighterGray: string;
  purple: string;
  lightPurple: string;
  breakpoints: Object;
  mediaQueries: Object;
}

export const PER_PAGE = 16;

export const constants = {
  baseUrl: 'https://react-study-case.herokuapp.com/api/',
  // baseUrl: 'http://localhost:3001/',
};

export const breakpoints = {
  mobile: 767, // maxwidth
  tablet: 768, // minwidth
  desktop: 992, // minwidth
  widescreen: 1280, // maxwidth
};

export const theme: ITheme = {
  primary: '#1EA4CE',
  secondary: '#147594',
  title: '#6F6F6F',
  pageBackground: '#fafafa',
  gray: '#697488',
  lightGray: '#A8A8A8',
  smokeGray: '#F4F4F4',
  lighterGray: '#E0E0E0',
  purple: '#5D38C0',
  lightPurple: '#F2F0FD',
  mediaQueries: {
    mobile: `@media (max-width: ${breakpoints.mobile}px)`,
    tablet: `@media (min-width: ${breakpoints.tablet}px)`,
    desktop: `@media (min-width: ${breakpoints.desktop}px)`,
    widescreen: `@media (max-width: ${breakpoints.widescreen}px)`,
  },
  breakpoints: breakpoints,
};

export const FILTERS = {
  PRICE_LOW_HIGH: { value: 'react-study-case/filters/price_low_to_high', label: 'Price low to high' },
  PRICE_HIGH_LOW: { value: 'react-study-case/filters/price_high_to_low', label: 'Price high to low' },
  DATE_NEW_OLD: { value: 'react-study-case/filters/date_new_to_old', label: 'New to old' },
  DATE_OLD_NEW: { value: 'react-study-case/filters/date_old_to_new', label: 'Old to new' },
};
