<<<<<<< HEAD
import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
=======
// index.js
// Entry point of the React application
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
>>>>>>> 0b240e44f3e6dfed2036af2d9091c46b398687d0

// Create a root for rendering the app
const root = createRoot(document.getElementById('root'));

// Render the app within StrictMode for additional checks during development
root.render(
    <App />
<<<<<<< HEAD
)
=======
  </React.StrictMode>
);
>>>>>>> 0b240e44f3e6dfed2036af2d9091c46b398687d0
