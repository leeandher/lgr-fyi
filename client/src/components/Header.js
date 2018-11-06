import React from "react";

const Header = ({ tagline }) => (
  <header className="top">
    <h1 className="siteName">
      lgr
      <span>.</span>
      fyi
    </h1>
    <h3 className="tagline">{tagline}</h3>
    <article>Here's how you get started:</article>
  </header>
);

export default Header;
