import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import Redirector from "./Redirector";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/:token" component={Redirector} />
    </Switch>
  </BrowserRouter>
);

export default Router;
