import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    text: ""
  };

  testCall = async () => {
    const res = await fetch("/api");
    const text = await res.json();
    console.log(text);
    this.setState({ res });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          <button onClick={this.testCall}>Call!</button>
          <p>This is the response from the GET request</p>
          <p>{this.state.text}</p>
        </div>
      </div>
    );
  }
}

export default App;
