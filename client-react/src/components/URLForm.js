import styled from "styled-components";

import React from "react";

const StyledForm = styled.form`
  input,
  button {
    border: 0;
    padding: 10px;
    font-size: 18px;
    border: 1px solid ${props => props.theme.lightMid};
    &:focus {
      outline: 0;
      border: 1px solid ${props => props.theme.accent};
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
    background: ${props => props.theme.accent__light};
    border: 1px solid ${props => props.theme.accent};
    cursor: pointer;
  }
`;

const URLForm = ({ createLink, originalUrl, handleChange }) => (
  <StyledForm onSubmit={createLink}>
    <input
      type="text"
      name="originalUrl"
      placeholder="http://example.com"
      value={originalUrl}
      onChange={handleChange}
    />
    <button type="submit">Shorten</button>
  </StyledForm>
);

export default URLForm;
