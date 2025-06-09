import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'; // assuming this is where your CSS is
import App from './App';
import Notifications from './Notifications';
import reportWebVitals from './reportWebVitals';

// Render App in #root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Render Notifications in #root-notifications
const rootNotifications = ReactDOM.createRoot(document.getElementById('root-notifications'));
rootNotifications.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);

// Optional: report web vitals
reportWebVitals();
