import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyle;
