/**
 * The starting point of the application.
 *
 * @author Andreas Lillje
 * @version 2.3.1
 */


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="wrapper">
      <App />
    </div>
  </React.StrictMode>
);

