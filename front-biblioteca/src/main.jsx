import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { BibliotecaApp } from "./BibliotecaApp";
import "./index.css";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Provider store={ store }>
    <BrowserRouter>
      <BibliotecaApp />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
