import React from 'react';
import {
  Route,
  Routes,
  BrowserRouter,
  Navigate
} from 'react-router-dom';
import {hot} from 'react-hot-loader/root';
import {CssBaseline} from '@material-ui/core';

import Home from '../Home';
import LookingToHire from '../LookingToHire';
import LookingForAJob from '../LookingForAJob';

import Jobs from '../Jobs';
import Resources from '../Resources';

const RouterComponent = () => (
  <BrowserRouter>
    <CssBaseline/>
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/looking-to-hire' Component={LookingToHire} />
      <Route path='/looking-for-a-job' Component={LookingForAJob} />

      <Route path='/jobs' Component={Jobs} />
      <Route path='/resources' Component={Resources} />

      <Route path="*" element={<Navigate to='/' />} />
    </Routes>
  </BrowserRouter>
);

export default hot(RouterComponent);
