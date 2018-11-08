import React, { Component } from "react";

import Header from "./Header";
import URLForm from "./URLForm";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header tagline="oh man" />
        <URLForm />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
