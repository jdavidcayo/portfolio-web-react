import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import 'bootswatch/dist/cosmo/bootstrap.min.css';
import './styles.css';



import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
