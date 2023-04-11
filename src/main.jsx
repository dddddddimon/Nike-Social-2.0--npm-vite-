import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import state from "./data/state";
import { BrowserRouter } from "react-router-dom";
import { addPost } from "./data/state";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} addPost={addPost} />
    </BrowserRouter>
  </React.StrictMode>
);
