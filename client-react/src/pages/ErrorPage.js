//Resources
import React from "react";
import { ThemeProvider } from "styled-components";

//Styles
import GlobalStyle from "../styles/GlobalStyle";
import baseTheme from "../styles/baseTheme";

//Components

const HomePage = () => (
  <ThemeProvider theme={baseTheme}>
    <React.Fragment>
      <GlobalStyle />
      <div> Something Went wrong!</div>
    </React.Fragment>
  </ThemeProvider>
);

export default HomePage;
