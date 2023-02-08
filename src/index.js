import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ThemeContextPovider from "./context/ThemeContext";
import "tw-elements";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextPovider>
      <App />
    </ThemeContextPovider>
  </React.StrictMode>
);
