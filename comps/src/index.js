import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { NavigationProvider } from "./context/navigation.js";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>,
);
