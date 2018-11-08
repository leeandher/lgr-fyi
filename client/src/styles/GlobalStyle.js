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
    background: linear-gradient(white, black) no-repeat center center;
    height: 100%;
  }
`;

export default GlobalStyle;
