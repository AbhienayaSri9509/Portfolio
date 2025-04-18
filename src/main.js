// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Import your global CSS (if any)
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // This must match the id in public/index.html
);
