import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
  }

  #root {
    width: 100%;
  }
`;

export default GlobalStyles; 