import React from 'react';
import {isPrime} from '../../services/helper';

import Hero from './Hero';
import LookingForAJob from './LookingForAJob';
import WorkForUs from '../shared/WorkForUs';

import LookingToHire from '../shared/LookingToHire';
// import SearchRoles from '../shared/SearchRoles';
import ExecutiveSearch from '../shared/ExecutiveSearch';
import EmbeddedTalent from '../shared/EmbeddedTalent';

import ThePrimeGroup from '../ThePrimeGroup';
import Leaders from '../shared/Specialists';

const Home = () => isPrime
  ? (
    <div className='home'>
      <ThePrimeGroup />
      <Leaders />
      {/* OUR STORY */}
      {/* OUR PROCESS */}
    </div>
  ) : (
    <div className='home'>
      <Hero />
      <LookingToHire type='home' />
      <LookingForAJob />
      {/*<SearchRoles />*/}
      <ExecutiveSearch />
      <EmbeddedTalent />
      <WorkForUs home />
    </div>
  );

export default Home;
