import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { BibliotecaApp } from "./BibliotecaApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BibliotecaApp />
    </BrowserRouter>
  </React.StrictMode>
);
