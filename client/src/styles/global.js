import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: sans-serif;
    box-sizing: border-box
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyled;
