import React from "react";

import styled from "styled-components";

//Styles
const StylishHeader = styled.div`
  display: flex;
  margin-bottom: 5px;
  h3 {
    margin: 0;
    color: ${props => props.theme.accent};
  }
`;

const ShortLink = styled.h3`
  flex: 3;
`;
const Original = styled.h3`
  flex: 5;
`;
const Counter = styled.h3`
  flex: 1;
`;

//Render
const NewLinkHeader = () => (
  <StylishHeader>
    <ShortLink>Short Link</ShortLink>
    <Original>Original URL</Original>
    <Counter>Clicks</Counter>
  </StylishHeader>
);

export default NewLinkHeader;
