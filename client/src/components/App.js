import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";

import GlobalStyle from "../styles/GlobalStyle";
import URLForm from "./URLForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Header />
        <URLForm />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
