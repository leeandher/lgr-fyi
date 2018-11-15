import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaRegClipboard } from "react-icons/fa";

import styled from "styled-components";

//Styles
const NewLinkWrapper = styled.div`
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

const StyledIcon = styled(FaRegClipboard)`
  color: ${props => props.theme.accent};
`;

//Render
const NewLink = ({ link, originalUrl, count }) => (
  <NewLinkWrapper>
    <ShortUrl>
      {link}
      <CopyToClipboard
        text={link}
        onCopy={() => console.log(`copied this link: ${link}`)}
      >
        <StyledIcon />
      </CopyToClipboard>
    </ShortUrl>
    <OGUrl href={link}>{originalUrl}</OGUrl>
    <Count>{count}</Count>
  </NewLinkWrapper>
);

export default NewLink;
