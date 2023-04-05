import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

let posts = [
  { id: 1, message: "Hey there!", likesCount: "9" },
  { id: 2, message: "Yo man! Whats up?", likesCount: "15" },
  { id: 3, message: "Call me!", likesCount: "7" },
  { id: 4, message: "Hello!", likesCount: "22" },
];

let dialogs = [
  { id: 1, name: "Sam" },
  { id: 2, name: "Lusy" },
  { id: 3, name: "John" },
  { id: 4, name: "Pedro" },
  { id: 5, name: "Ivan" },
  { id: 6, name: "Nika" },
  { id: 7, name: "Valera" },
  { id: 8, name: "Huylanchik" },
];

let messages = [
  { id: 1, message: "Hey there!" },
  { id: 2, message: "Yo man! Whats up?" },
  { id: 3, message: "Call me!" },
  { id: 4, message: "Hello!" },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);
