import React, { Component } from "react";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    getRes: {},
    postReq: "",
    postRes: {}
  };

  getr = async () => {
    const { data } = await axios.get("/api");
    this.setState({ getRes: data });
    console.log("AXIOS GET:", data);
  };

  postr = async e => {
    e.preventDefault();
    console.log(this.state.postReq);
    const { data } = await axios.post("/api", { text: this.state.postReq });
    this.setState({ postRes: data });
    console.log("AXIOS POST RES", data);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <h2>Express, Axios and React</h2>
          <button onClick={this.getr}>Make GET Request</button>
          <p>{JSON.stringify(this.state.getRes)}</p>
          <br />
          <form onSubmit={this.postr}>
            <label htmlFor="postReq">
              Make POST Request <br />
            </label>
            <input
              type="text"
              name="postReq"
              value={this.state.postReq}
              onChange={e => this.setState({ postReq: e.target.value })}
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
