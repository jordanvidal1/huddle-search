import React from 'react';

import Hero from '../shared/SpecialismHero';
import Leadership from '../shared/Specialists';
import ProPoints from '../shared/ProPoints';
import WorkForUs from '../shared/WorkForUs';

const LookingToHire = () => (
  <div className='contract-interim'>
    <Hero>
      <a>Contract</a> hires to deliver your project
    </Hero>
    <ProPoints type='contract' />
    <Leadership />
    <WorkForUs />
  </div>
);

export default LookingToHire;
