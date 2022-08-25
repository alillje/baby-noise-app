/**
 * The starting point of the application.
 *
 * @author Andreas Lillje
 * @version 2.3.1
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="wrapper">
        <App />
      </div>
    </Provider>
  </React.StrictMode>
);
