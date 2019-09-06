//Resources
import React from "react";
import styled, { ThemeProvider } from "styled-components";

//Styles
import GlobalStyle from "../styles/GlobalStyle";
import baseTheme from "../styles/baseTheme";

const GlobalWrapper = styled.section``;

const PageTemplate = ({ content }) => (
  <ThemeProvider theme={baseTheme}>
    <React.Fragment>
      <GlobalStyle />
      <GlobalWrapper>{content}</GlobalWrapper>
    </React.Fragment>
  </ThemeProvider>
);

export default PageTemplate;
