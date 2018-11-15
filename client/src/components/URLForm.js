import axios from "axios";
import styled from "styled-components";

import React, { Component } from "react";

const StyledForm = styled.form`
  input,
  button {
    border: 0;
    padding: 10px;
    font-size: 18px;
    border: 2px solid ${props => props.theme.lightMid};
    &:focus {
      outline: 0;
      border: 2px solid ${props => props.theme.accent};
    }
  }

  input {
    width: 75%;
    border-radius: ${props => props.theme.borderRadiusLeft};
  }

  button {
    border-radius: ${props => props.theme.borderRadiusRight};
  }

  button:hover,
  button:focus {
    background: ${props => props.theme.accent};
    border: 2px solid ${props => props.theme.accent};
    cursor: pointer;
  }
`;

class URLForm extends Component {
  state = {
    originalUrl: ""
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
        this.props.addLink(data);
      })
      //Report any errors in console
      .catch(err => console.error(err.response ? err.response.data : err));
  };

  handleChange = e => {
    this.setState({ originalUrl: e.target.value });
  };

  render() {
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
      </StyledForm>
    );
  }
}

export default URLForm;
