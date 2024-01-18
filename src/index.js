// index.js
// Entry point of the React application
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Create a root for rendering the app
const root = createRoot(document.getElementById('root'));

// Render the app within StrictMode for additional checks during development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
