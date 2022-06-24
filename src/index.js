import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.css";
import Root from "./components/Root";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);
