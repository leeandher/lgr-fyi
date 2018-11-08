import React from "react";
import styled from "styled-components";

//Styles

const TitleWrapper = styled.header`
  border: 6px solid ${props => props.theme.accent};
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.7);
  width: 80%;
  font-size: 50px;
  padding: 15px;
  text-align: center;
`;

const Title = styled.h1`
  color: ${props => props.theme.accent};
`;

const Tagline = styled.article`
  background: red;
`;

const Dot = styled.span`
  color: black;
  line-height: 0;
`;

//Render

const Header = ({ tagline }) => (
  <TitleWrapper>
    <Title>
      lgr
      <Dot>.</Dot>
      fyi
    </Title>
    <Tagline>{tagline}</Tagline>
  </TitleWrapper>
);

export default Header;
