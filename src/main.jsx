import React from 'react';
import ReactDOM from 'react-dom'; // Correct the import path
import App from './App.jsx';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextTheme from './component/ContextTheme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextTheme>
    <App />
    </ContextTheme>
    
  </React.StrictMode>
);
