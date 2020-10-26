import React from "react";
import ReactDOM from "react-dom";
import Container from "@material-ui/core/Container";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
