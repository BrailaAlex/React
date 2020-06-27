import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from './App';

const rootElem = document.querySelector("#root");

setTimeout(() => {
ReactDOM.render(<App />, rootElem);
}, 5000);


