import React from "react";
// import ReactDOM from 'react-dom'
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Create a root for rendering the app
const root = createRoot(document.getElementById("root"));

// Render the app within StrictMode for additional checks during development
root.render(<App />);
