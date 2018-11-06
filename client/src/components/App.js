import React, { Component } from "react";
import axios from "axios";

import logo from "../logo.svg";
import "../css/App.css";

class App extends Component {
  state = {
    originalUrl: ""
  };

  getr = async () => {
    console.clear();
    try {
      const data = await axios.get("/fes6");
      console.log(data);
      // console.log(data);
      // this.setState({ getRes: data });
      // console.log("AXIOS GET:", data);
    } catch (err) {
      // console.log(err.message);

      console.log(err.message);
    }
    // const { data } = await axios.get("/ase3sa");
  };

  postr = async e => {
    e.preventDefault();
    console.log(this.state.postReq);
    const { data } = await axios.post("/api", { text: this.state.postReq });
    this.setState({ postRes: data });
    console.log("AXIOS POST RES", data);
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <h2>Express, Axios and React</h2>
          <form onSubmit={this.submitLink}>
            <label htmlFor="postReq">
              Make POST Request <br />
            </label>
            <input
              type="text"
              name="originalUrl"
              value={this.state.originalUrl}
              onChange={this.handleChange}
              placeholder="http://example.com"
            />
            <button type="submit">Submit</button>
          </form>
          <p>{JSON.stringify(this.state.postRes)}</p>
        </div>
      </div>
    );
  }
}

export default App;
