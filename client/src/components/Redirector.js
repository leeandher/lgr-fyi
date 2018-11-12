import React, { Component } from "react";
import axios from "axios";

class Redirector extends Component {
  state = {
    isLoading: true,
    notFound: false,
    link: ""
  };

  redirect = async token => {
    const { data } = await axios.get(`/api/${token}`);
    this.setState({ isLoading: false, link: data.link });
    window.location = data.link;
  };

  componentDidMount() {
    const { token } = this.props.match.params;
    try {
      this.redirect(token);
    } catch (err) {
      this.setState({ isLoading: false, notFound: true });
    }
  }

  render404() {
    return <div>This is a 404</div>;
  }

  render() {
    if (this.state.notFound) return this.render404();
    if (this.state.isLoading) {
      return <div>We are searching for your link!</div>;
    } else {
      return (
        <div>
          Redirecting you to <pre>{this.state.link}</pre>
        </div>
      );
    }
  }
}

export default Redirector;
