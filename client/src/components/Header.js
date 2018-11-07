import React from "react";
import styled from "styled-components";

//Styles

const TitleWrapper = styled.header`
  border: 2px solid green;
  background: grey;
  padding: 15px;
  margin: 10px auto;
`;

const Title = styled.h1`
  background: palegoldenrod;
  border: 2px solid paleturquoise;
`;

const Tagline = styled.article`
  background: red;
`;

const BigDot = styled.span`
  border: 2px solid black;
`;

//Render

const Header = ({ tagline }) => (
  <TitleWrapper>
    <Title>
      lgr
      <BigDot>.</BigDot>
      fyi
    </Title>
    <Tagline>{tagline}</Tagline>
  </TitleWrapper>
);

export default Header;
