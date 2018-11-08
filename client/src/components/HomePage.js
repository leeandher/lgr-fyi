//Resources
import React from "react";
import { ThemeProvider } from "styled-components";

//Styles
import GlobalStyle from "../styles/GlobalStyle";
import baseTheme from "../styles/baseTheme";

//Components
import App from "./App";

const HomePage = () => (
  <ThemeProvider theme={baseTheme}>
    <React.Fragment>
      <GlobalStyle />
      <App />
    </React.Fragment>
  </ThemeProvider>
);

export default HomePage;
