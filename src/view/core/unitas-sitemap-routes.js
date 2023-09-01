import React from 'react';
import {Route} from 'react-router';
import {Routes} from 'react-router-dom';

export default (
  <Routes>
    <Route path='/' />
    <Route exact path='/jobs' />
    <Route path='/jobs/:id' />
    <Route exact path='/resources' />
    <Route path='/resources/:id' />
    <Route path='/specialisms/:id' />
    <Route path='/sectors/:id' />
    <Route path='/looking-to-hire' />
    <Route path='/candidates' />
    <Route path='/permanent' />
    <Route path='/executive-search' />
    <Route path='/embedded-talent-solutions' />
    <Route path='/contract-interim' />
    <Route path='/leadership-team' />
    <Route path='/our-story' />
    <Route path='/our-process' />
    <Route path='/work-for-us' />
    <Route path='/contact-us' />
    <Route path='/the-prime-group' />
    <Route path='/privacy-policy' />
  </Routes>
);
