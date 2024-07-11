import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import WeatherAPPContext from './Components/Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherAPPContext>
    <Router>
    <App />
    </Router>
    </WeatherAPPContext>
  </React.StrictMode>
);


reportWebVitals();
