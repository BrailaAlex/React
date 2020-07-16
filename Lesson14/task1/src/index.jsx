import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Counter from "./Counter.jsx";
import Example from "./Example";

const rootElem = document.querySelector("#root");

ReactDOM.render(<Counter userId={'github'} />, rootElem);
// ReactDOM.render(<Example />, rootElem);
