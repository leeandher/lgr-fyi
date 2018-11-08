import React, { Component } from "react";
import styled from "styled-components";

import Title from "./Title";
import URLForm from "./URLForm";
import Footer from "./Footer";

//Styled Components
const AppWrapper = styled.section`
  text-align: center;
  border: 6px solid ${props => props.theme.accent};
  border-radius: 25px;
  padding: 25px;
  margin: 25px;
  margin-top: 20vh;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Title tagline="The fast, dependable, open source URL Shortener." />
        <URLForm />
        <Footer />
      </AppWrapper>
    );
  }
}

export default App;
