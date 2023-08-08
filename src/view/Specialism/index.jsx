import React from 'react';

import Hero from '../shared/SpecialismHero';
import Specialists from '../shared/Specialists';

import RolesPage from '../shared/RolesPage';
import ResourcesPage from '../shared/ResourcesPage';

const Specialism = () => (
  <div className='specialism'>
    <Hero />
    <RolesPage />
    <Specialists name='{name}' />
    <ResourcesPage />
  </div>
);

export default Specialism;
