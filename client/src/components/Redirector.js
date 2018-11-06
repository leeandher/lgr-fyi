import React, { Component } from "react";
import axios from "axios";

class Redirector extends Component {
  redirect = async token => {
    const { data } = await axios.get(`/api/${token}`);
    window.location = data.originalUrl;
  };

  componentDidMount() {
    const { token } = this.props.match.params;
    this.redirect(token);
  }

  render() {
    return <div>test</div>;
  }
}

export default Redirector;
