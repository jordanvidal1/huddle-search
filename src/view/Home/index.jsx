import React from 'react';

import Hero from './Hero';
import LookingForAJob from './LookingForAJob';
import WorkForUs from './WorkForUs';

import LookingToHire from '../shared/LookingToHire';
import SearchRoles from '../shared/SearchRoles';
import ExecutiveSearch from '../shared/ExecutiveSearch';
import EmbeddedTalent from '../shared/EmbeddedTalent';

const Home = () => (
  <div className='home'>
    <Hero />
    <LookingToHire>
      Looking to <a>hire?</a>
    </LookingToHire>
    <LookingForAJob />
    <SearchRoles />
    <ExecutiveSearch />
    <EmbeddedTalent />
    <WorkForUs />
  </div>
);

export default Home;
