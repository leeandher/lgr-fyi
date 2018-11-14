import React from "react";
import styled from "styled-components";

//Styles
const NewLinkWrapper = styled.div`
  background: beige;
  display: flex;
`;

const ShortUrl = styled.a`
  flex: 1;
  border: 2px solid lime;
`;
const OGUrl = styled.a`
  flex: 1;
  border: 2px solid pink;
`;
const Count = styled.div`
  flex: 1;
  border: 2px solid purple;
`;

//Render
const NewLink = ({ link, originalUrl, count }) => (
  <NewLinkWrapper>
    <ShortUrl>{link}</ShortUrl>
    <OGUrl href={link}>{originalUrl}</OGUrl>
    <Count>{count}</Count>
  </NewLinkWrapper>
);

export default NewLink;
