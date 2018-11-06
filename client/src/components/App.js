import React, { Component } from "react";
import axios from "axios";

import Header from "./Header";

class App extends Component {
  state = {
    originalUrl: ""
  };

  submitLink = async e => {
    e.preventDefault();
    console.log(this.state.originalUrl);
    try {
      const { data } = await axios.post("/api", this.state);
      console.log("returned", { data });
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = e => {
    this.setState({ originalUrl: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <Header tagline="Welcome to the party!" />
        <form onSubmit={this.submitLink}>
          <input
            type="text"
            name="originalUrl"
            placeholder="http://example.com"
            value={this.state.originalUrl}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
