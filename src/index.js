import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { StateContext } from "./Context/StateContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <StateContext>
        <Router>
          <App />
        </Router>
      </StateContext>
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
