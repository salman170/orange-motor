import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ModelProvider } from "./components/ModelProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModelProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModelProvider>
  </React.StrictMode>
);
