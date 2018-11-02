import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    text: "",
    testData: ""
  };

  testCall = async () => {
    const res = await fetch("/api");
    const { text } = await res.json();
    console.log(text);
    this.setState({ text });
  };

  handlesubmo = async e => {
    e.preventDefault();
    const res = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    });
    const respo = await res.text();
    console.log({ respo });
    this.setState({ respo });
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
          <form onSubmit={this.handlesubmo}>
            <label htmlFor="hecko">This is an input field</label>
            <input
              type="text"
              name="hecko"
              value={this.state.hecko}
              onChange={e => this.setState({ hecko: e.target.value })}
            />
            <button type="submit"> SUBMO</button>
          </form>
          <p>This is the response from the POST request</p>
          <p>{this.state.respo}</p>
        </div>
      </div>
    );
  }
}

export default App;
