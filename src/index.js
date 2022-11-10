import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint;. Learn more: https://bit.ly/CRA-vitals
//Service worker anable push notification, add app to homescreen, access app offline - intermideate btn network and the browser wfor easy accessibility
// to enable service worker enable reportWebVitals
// use amp specific components, amp-img
reportWebVitals();
