import axios from "axios";
import styled from "styled-components";

import React, { Component } from "react";

const StyledForm = styled.form`
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
    originalUrl: ""
  };

  submitLink = async e => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api", this.state);
      console.log(data);
      console.log("returned");
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = e => {
    this.setState({ originalUrl: e.target.value });
  };

  render() {
    return (
      <StyledForm onSubmit={this.submitLink}>
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
