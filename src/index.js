import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.css";
import Root from "./components/Root";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "antd/dist/antd.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);
