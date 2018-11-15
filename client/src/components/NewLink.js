import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegClipboard } from "react-icons/fa";

import styled from "styled-components";

//Styles
const NewLinkWrapper = styled.div`
  display: flex;
`;

const ShortLink = styled.a`
  flex: 3;
`;
const Original = styled.a`
  flex: 5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Counter = styled.div`
  flex: 1;
`;

const StyledIcon = styled(FaRegClipboard)`
  color: ${props => props.theme.accent};
`;

//Render
const NewLink = ({ link, originalUrl, count }) => (
  <NewLinkWrapper>
    <ShortLink>
      {link}
      <CopyToClipboard
        text={link}
        onCopy={() => console.log(`copied this link: ${link}`)}
      >
        <StyledIcon />
      </CopyToClipboard>
    </ShortLink>
    <Original title={originalUrl} href={link}>
      {originalUrl}
    </Original>
    <Counter>{count}</Counter>
  </NewLinkWrapper>
);

export default NewLink;
