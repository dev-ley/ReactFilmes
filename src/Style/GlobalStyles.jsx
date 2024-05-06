import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: Helvetica;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #000;
  }

  a {
    text-decoration: none;
  }

`;

export default GlobalStyles;
