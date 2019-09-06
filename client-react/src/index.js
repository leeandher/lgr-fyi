import React from "react";
import { render } from "react-dom";
import Router from "./pages/Router";
import * as serviceWorker from "./serviceWorker";

render(<Router />, document.getElementById("main"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
