import axios from "axios";
import styled from "styled-components";

import React, { Component } from "react";

import NewLink from "./NewLink";

const StyledForm = styled.form`
  border: 2px solid red;
  input,
  button {
    border: 0;
    padding: 10px;
    font-size: 18px;
    border: 2px solid transparent;
    &:focus {
      outline: 0;
      border: 2px solid ${props => props.theme.accent};
    }
  }

  input {
    width: 75%;
  }

  button:hover {
    background: ${props => props.theme.accent};
    cursor: pointer;
  }
`;

class URLForm extends Component {
  state = {
    originalUrl: "",
    newLinks: []
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
        const newLinks = [...this.state.newLinks, data];
        this.setState({ newLinks });
      })
      //Report any errors in console
      .catch(err => console.error(err.response.data));
  };

  handleChange = e => {
    this.setState({ originalUrl: e.target.value });
  };

  render() {
    const newLinks = this.state.newLinks.map((linkData, i) => (
      <NewLink {...linkData} key={i} />
    ));
    return (
      <StyledForm onSubmit={this.createLink}>
        <input
          type="text"
          name="originalUrl"
          placeholder="http://example.com"
          value={this.state.originalUrl}
          onChange={this.handleChange}
        />
        <button type="submit">Shorten</button>
        {newLinks}
      </StyledForm>
    );
  }
}

export default URLForm;
