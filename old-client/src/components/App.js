import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import Title from "./Title";
import URLForm from "./URLForm";
import NewLink from "./NewLink";
import NewLinkHeader from "./NewLinkHeader";

//Styled Components
const AppWrapper = styled.section`
  text-align: center;
  background: ${props => props.theme.light};
  padding: 25px;
  margin: 0 auto;
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
    originalUrl: "",
    newLinks: []
  };

  componentDidMount() {
    //The reverse is because the must be input from oldest --> recent
    const linkList = JSON.parse(localStorage.getItem("linkList"));
    if (linkList) {
      this.setState({ newLinks: linkList });
      this.refreshLinks(linkList);
    }
  }

  componentDidUpdate() {
    const linkList = this.state.newLinks;
    localStorage.setItem("linkList", JSON.stringify(linkList));
  }

  refreshLinks = async links => {
    if (!links.length) return;
    const fetchArr = links.map(link =>
      axios.post("/api", { originalUrl: link.originalUrl })
    );
    await Promise.all(fetchArr)
      .then(newLinkData => {
        newLinkData.forEach((res, i) => {
          res.data.originalUrl = links[i].originalUrl;
          this.addLink(res.data);
        });
      })
      .catch(err => console.error(err.response ? err.response.data : err));
  };

  createLink = async e => {
    //Don't reload the page
    e.preventDefault();

    axios
      //Use the API to create a shortlink
      .post("/api", { originalUrl: this.state.originalUrl })
      //Once we receive the short link
      .then(res => {
        //Extract the data from the API
        const { data } = res;

        //Save the original URL in state
        data.originalUrl = this.state.originalUrl;

        //Clear the form
        this.setState({ originalUrl: "" });

        //Show the link
        this.addLink(data);
      })
      //Report any errors in console
      .catch(err => console.error(err.response ? err.response.data : err));
  };

  addLink = link => {
    //Filter any repeats
    const newLinks = this.state.newLinks.filter(
      linkData => linkData.originalUrl !== link.originalUrl
    );

    //Add the new link
    newLinks.unshift(link);
    this.setState({ newLinks });
  };

  removeLink = originalUrl => {
    const newLinks = this.state.newLinks.filter(
      link => link.originalUrl !== originalUrl
    );
    this.setState({ newLinks });
  };

  renderLinks() {
    const newLinks = this.state.newLinks.map((linkData, i) => (
      <NewLink {...linkData} removeLink={this.removeLink} key={i} />
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
      <AppWrapper>
        <Title tagline="The fast, dependable, open source URL Shortener." />
        <URLForm
          createLink={this.createLink}
          originalUrl={this.state.originalUrl}
          handleChange={e => this.setState({ originalUrl: e.target.value })}
        />
        {this.renderLinks()}
      </AppWrapper>
    );
  }
}

export default App;
