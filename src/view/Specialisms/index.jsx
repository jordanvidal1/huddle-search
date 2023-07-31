import React from 'react';

import Hero from '../shared/SpecialismHero';
import Specialisms from '../shared/Specialisms';
import Specialists from '../shared/Specialists';

import RolesPage from '../shared/RolesPage';
import ResourcesPage from '../shared/ResourcesPage';

const Home = () => (
  <div className='specialisms'>
    <Hero />
    <Specialisms type='disciplines' />
    <RolesPage />
    <Specialists />
    <ResourcesPage />
  </div>
);

export default Home;
