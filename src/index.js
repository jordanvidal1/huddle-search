import React from 'react';

import bootstrap from './view/core/AppRoot';
import Router from './view/core/Router';
import reducers from './data/core/reducer';

import reportWebVitals from './reportWebVitals';

import './services/i18n';
import './view/fonts';
import './styles/index.scss';

const App = () => (
  <Router />
);

bootstrap(App, reducers);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
