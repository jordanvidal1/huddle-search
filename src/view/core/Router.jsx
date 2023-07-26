import React from 'react';
import {
  Route,
  Routes,
  BrowserRouter,
  Navigate
} from 'react-router-dom';
import {hot} from 'react-hot-loader/root';
import {CssBaseline} from '@material-ui/core';
import Home from '../Home/index.jsx';
import LookingToHire from "../LookingToHire";

const RouterComponent = () => (
  <BrowserRouter>
    <CssBaseline/>
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/looking-to-hire' Component={LookingToHire} />
      <Route path="*" element={<Navigate to='/' />} />
    </Routes>
  </BrowserRouter>
);

export default hot(RouterComponent);
