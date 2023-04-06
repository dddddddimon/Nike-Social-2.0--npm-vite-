import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import state from "./data/state";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>
);
