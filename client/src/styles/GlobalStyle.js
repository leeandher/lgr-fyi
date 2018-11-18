import { createGlobalStyle, keyframes } from "styled-components";
import baseTheme from "./baseTheme";

const colorize = keyframes`
  0% { filter: hue-rotate(0deg); } 
  100% { filter: hue-rotate(360deg); }
`;

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Coda');

  * {
    box-sizing: border-box;
    font-family: 'Coda';
    &::selection{
      color: ${baseTheme.dark};
      background: ${baseTheme.accent__light}
    }
  }

  html {
    animation: ${colorize} 30s linear infinite forwards;
  }

  body {
    margin: 20px;
    height: 100%;
    &::before {
      background: ${baseTheme.accent__light};
      content: "";
      position: fixed;
      z-index: -1;
      top: 0; left: 0;
      width: 100%; height: 100%;
    }
  }
`;

export default GlobalStyle;
