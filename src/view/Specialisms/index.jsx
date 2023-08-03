import React from 'react';

import Hero from '../shared/SpecialismHero';
import Disciplines from '../shared/Specialisms';
import Specialists from '../shared/Specialists';

import RolesPage from '../shared/RolesPage';
import ResourcesPage from '../shared/ResourcesPage';

const Specialisms = () => (
  <div className='specialisms'>
    <Hero />
    <Disciplines type='disciplines' />
    <RolesPage />
    <Specialists name='{name}' />
    <ResourcesPage />
  </div>
);

export default Specialisms;
