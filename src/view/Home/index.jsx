import React from 'react';
import Hero from './Hero';
import LookingToHire from './LookingToHire';
import LookingForAJob from './LookingForAJob';
import SearchRoles from './SearchRoles';
import ExecutiveSearch from './ExecutiveSearch';
import EmbeddedTalent from './EmbeddedTalent';
import WorkForUs from './WorkForUs';
import Footer from '../shared/Footer';

const Home = () => (
  <div className='home'>
    <Hero />
    <LookingToHire />
    <LookingForAJob />
    <SearchRoles />
    <ExecutiveSearch />
    <EmbeddedTalent />
    <WorkForUs />
    <Footer />
  </div>
);

export default Home;
