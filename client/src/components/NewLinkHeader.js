import React from "react";

import styled from "styled-components";

//Styles
const StylishHeader = styled.div`
  display: flex;
`;

const ShortLink = styled.a`
  flex: 1;
  border: 2px solid lime;
`;
const Original = styled.a`
  flex: 1;
  border: 2px solid pink;
`;
const Counter = styled.div`
  flex: 1;
  border: 2px solid purple;
`;

//Render
const NewLinkHeader = () => (
  <StylishHeader>
    <ShortLink>Short Link</ShortLink>
    <Original>Original URL</Original>
    <Counter>Click Count</Counter>
  </StylishHeader>
);

export default NewLinkHeader;
