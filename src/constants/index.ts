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
