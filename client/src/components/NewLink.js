import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { GoClippy } from "react-icons/go";

import styled from "styled-components";

//Styles
const NewLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;

  a {
    margin: 5px;
    padding: 5px;
    border-radius: ${props => props.theme.borderRadiusDefault};
    color: ${props => props.theme.dark};
    text-decoration: none;

    &:focus {
      text-decoration: underline ${props => props.theme.accent};
      outline: 0;
      box-shadow: inset #aaa 0 0 8px;
    }
  }
`;

const ShortLink = styled.a`
  flex: 6;
  text-align: left;
  position: relative;
`;

const Original = styled.a`
  flex: 10;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Counter = styled.p`
  flex: 2;
  margin: 0;
`;

const StyledClip = styled(GoClippy)`
  color: ${props => props.theme.accent};
  margin-bottom: -3px;
  margin-right: 20px;
  height: 25px;
  width: 25px;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const StyledDeleter = styled.div`
  margin: 0;
  font-size: 30px;
  user-select: none;
  color: ${props => props.theme.accent};
  flex: 1;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

//Render
const NewLink = ({ link, originalUrl, count, removeLink }) => (
  <NewLinkWrapper>
    <CopyToClipboard
      text={link}
      onCopy={() =>
        console.log(`A link has been copied to your clipboard: ${link}`)
      }
      tabIndex="0"
    >
      <ShortLink>
        <StyledClip />
        {link}
      </ShortLink>
    </CopyToClipboard>
    <Original title={originalUrl} href={link}>
      {originalUrl}
    </Original>
    <Counter>{count}</Counter>
    <StyledDeleter onClick={() => removeLink(originalUrl)}>
      &times;
    </StyledDeleter>
  </NewLinkWrapper>
);

export default NewLink;
