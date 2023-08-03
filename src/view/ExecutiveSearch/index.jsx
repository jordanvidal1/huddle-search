import React from 'react';

import Hero from '../shared/SpecialismHero';
import ProPoints from '../shared/ProPoints';
import Service from '../shared/LeadershipHero';
import Leadership from '../shared/Specialists';
import WorkForUs from '../shared/WorkForUs';

import Logo from '../../static/text-logo-gold.svg';

const ExecutiveSearch = () => (
  <div className='executive-search'>
    <Hero contact executive>
      <p>
        A specialist service by<img alt='logo-gold' src={Logo} />
      </p>
      Executive
      <p>SEARCH</p>
    </Hero>
    <ProPoints type='executive' />
    <Service type='executive'>
      A specialised service powered by AI
    </Service>
    <Leadership executive />
    <WorkForUs executive />
  </div>
);

export default ExecutiveSearch;
