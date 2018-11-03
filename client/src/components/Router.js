import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Redirector from "./Redirector";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/:token" component={Redirector} />
    </Switch>
  </BrowserRouter>
);

export default Router;
