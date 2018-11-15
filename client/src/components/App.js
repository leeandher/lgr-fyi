import React, { Component } from "react";
import styled from "styled-components";

import Title from "./Title";
import URLForm from "./URLForm";
import NewLink from "./NewLink";
import NewLinkHeader from "./NewLinkHeader";

//Styled Components
const AppWrapper = styled.section`
  text-align: center;
  background: ${props => props.theme.light};
  padding: 25px;
  max-width: 960px;
  border: 1px solid ${props => props.theme.accent};
  border-radius: ${props => props.theme.borderRadiusDefault};
`;

const StylishLineBreak = styled.hr`
  margin: 25px 0;
  color: ${props => props.theme.accent};
  background: ${props => props.theme.accent};
  border: ${props => props.theme.accent};
  height: 1px;
`;

class App extends Component {
  state = {
    newLinks: []
  };

  createNewLinks = newLinks => {
    this.setState({ newLinks });
  };

  addLink = link => {
    const newLinks = [...this.state.newLinks, link];
    this.setState({ newLinks });
  };

  renderLinks() {
    const newLinks = this.state.newLinks.map((linkData, i) => (
      <NewLink {...linkData} key={i} />
    ));
    return newLinks.length ? (
      <React.Fragment>
        <StylishLineBreak />
        <NewLinkHeader />
        {newLinks}
      </React.Fragment>
    ) : null;
  }

  render() {
    return (
      <React.Fragment>
        <AppWrapper>
          <Title tagline="The fast, dependable, open source URL Shortener." />
          <URLForm addLink={this.addLink} />
          {this.renderLinks()}
        </AppWrapper>
      </React.Fragment>
    );
  }
}

export default App;
