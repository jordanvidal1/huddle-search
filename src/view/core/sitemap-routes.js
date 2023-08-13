import React from 'react';
import {Route} from 'react-router';
import {Routes} from 'react-router-dom';

export default (
  <Routes>
    <Route path='/' />
    <Route path='/jobs' />
    <Route path='/jobs/:id' />
    <Route path='/resources' />
    <Route path='/resources/:id' />
    <Route path='/specialisms/:id' />
    <Route path='/sectors/:id' />
    <Route path='/looking-to-hire' />
    <Route path='/looking-for-a-job' />
    <Route path='/executive-search' />
    <Route path='/embedded-talent-solutions' />
    <Route path='/contract-interim' />
    <Route path='/leadership-team' />
    <Route path='/our-story' />
    <Route path='/our-process' />
    <Route path='/work-for-us' />
    <Route path='/contact-us' />
  </Routes>
);
