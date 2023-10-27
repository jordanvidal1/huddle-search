import React from 'react';
import {Route} from 'react-router';
import {Routes} from 'react-router-dom';

export default (
  <Routes>
    <Route path='/' />
    <Route exact path='/companies/huddle' />
    <Route exact path='/companies/unitas' />
    <Route exact path='/companies/spectrum' />
    <Route exact path='/blog' />
    <Route path='/blog/:id' />
    <Route path='/leadership-team' />
    <Route path='/our-story' />
    <Route path='/our-process' />
    <Route path='/work-for-us' />
    <Route path='/contact-us' />
    <Route path='/privacy-policy' />
  </Routes>
);
