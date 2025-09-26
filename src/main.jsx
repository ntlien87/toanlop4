import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MathProvider } from "./context/MathContext.jsx"; // Import Provider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MathProvider>
      <App />
    </MathProvider>
  </React.StrictMode>
);
