import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Router from './view/core/Router';

import './services/i18n';
import './view/fonts';
import './styles/index.scss';

window.SITE_NAME = process.env.REACT_APP_SITE_NAME;
window.HUDDLE = window.SITE_NAME === 'huddle';

window.WP_USER = process.env.REACT_APP_WP_USER;
window.WP_TOKEN = process.env.REACT_APP_WP_TOKEN;

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
