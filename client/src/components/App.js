import React, { Component } from "react";
import styled from "styled-components";

import Title from "./Title";
import URLForm from "./URLForm";

//Styled Components
const AppWrapper = styled.section`
  text-align: center;
  background: ${props => props.theme.light};
  padding: 25px;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Title tagline="The fast, dependable, open source URL Shortener." />
        <URLForm />
      </AppWrapper>
    );
  }
}

export default App;
