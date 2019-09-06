import React from "react";
import styled from "styled-components";

//Styles
const TitleWrapper = styled.header`
  margin-bottom: 15px;
`;

const TitleText = styled.h1`
  margin: 0;
  font-size: 50px;
  color: ${props => props.theme.accent};
`;

const Tagline = styled.article`
  font-size: 20px;
  font-style: italic;
  color: ${props => props.theme.accent};
`;

const Dot = styled.span`
  color: ${props => props.theme.dark};
  font-weight: normal;
  line-height: 0;
`;

const NonStyledAnchor = styled.a`
  color: inherit;
  text-decoration: inherit;
`;

//Render
const Header = ({ tagline }) => (
  <TitleWrapper>
    <NonStyledAnchor href="http://lgr.fyi">
      <TitleText>
        lgr
        <Dot>.</Dot>
        fyi
      </TitleText>
    </NonStyledAnchor>
    <Tagline>{tagline}</Tagline>
  </TitleWrapper>
);

export default Header;
