import { createGlobalStyle } from "styled-components";
import baseTheme from "./baseTheme";

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Coda');


  * {
    box-sizing: border-box;
    font-family: 'Coda'
  }

  body {
    margin: 0;
    ${
      "" /* background: url('../images/rawpixel-670749-unsplash.jpg') no-repeat center center; */
    }
    background: ${baseTheme.accent__light};
    height: 100%;
  }
`;

export default GlobalStyle;
