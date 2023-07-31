import React from 'react';
import {
  Route,
  Routes,
  BrowserRouter,
  Navigate
} from 'react-router-dom';
import {hot} from 'react-hot-loader/root';
import {CssBaseline} from '@material-ui/core';

import Navigator from '../shared/Navigator';
import Home from '../Home';
import LookingToHire from '../LookingToHire';
import LookingForAJob from '../LookingForAJob';

import Jobs from '../Jobs';
import Resources from '../Resources';
import Specialisms from '../Specialisms';

const RouterComponent = () => (
  <BrowserRouter>
    <CssBaseline/>
    <Navigator>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/looking-to-hire' Component={LookingToHire} />
        <Route path='/looking-for-a-job' Component={LookingForAJob} />

        <Route path='/jobs' Component={Jobs} />
        <Route path='/resources' Component={Resources} />
        <Route path='/specialisms' Component={Specialisms} />

        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </Navigator>
  </BrowserRouter>
);

export default hot(RouterComponent);
