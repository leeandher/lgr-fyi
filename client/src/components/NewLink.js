import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { GoClippy } from "react-icons/go";

import styled from "styled-components";

//Styles
const NewLinkWrapper = styled.div`
  display: flex;
  margin: 10px 0;
`;

const ShortLink = styled.a`
  flex: 3;
  text-align: left;
  position: relative;
`;

const Original = styled.a`
  flex: 5;
  align-self: flex-end;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.theme.dark};
`;

const Counter = styled.p`
  flex: 1;
  margin: 0;
  align-self: flex-end;
`;

const StyledIcon = styled(GoClippy)`
  color: ${props => props.theme.accent};
  margin-bottom: -3px;
  margin-right: 6px;
  height: 25px;
  width: 25px;
  &:hover {
    cursor: pointer;
  }
`;

//Render
const NewLink = ({ link, originalUrl, count }) => (
  <NewLinkWrapper>
    <ShortLink>
      <CopyToClipboard
        text={link}
        onCopy={() => console.log(`copied this link: ${link}`)}
      >
        <StyledIcon />
      </CopyToClipboard>
      {link}
    </ShortLink>
    <Original title={originalUrl} href={link}>
      {originalUrl}
    </Original>
    <Counter>{count}</Counter>
  </NewLinkWrapper>
);

export default NewLink;
