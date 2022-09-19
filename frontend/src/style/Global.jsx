import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #474341;
    color: #fff;
  }
`;