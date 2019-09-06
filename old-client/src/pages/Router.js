import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/404" component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
