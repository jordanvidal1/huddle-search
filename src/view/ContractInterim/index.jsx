import React from 'react';

import Hero from '../shared/SpecialismHero';
import Leadership from '../shared/Specialists';
import ProPoints from '../shared/ProPoints';
import WorkForUs from '../shared/WorkForUs';

const ContractInterim = () => (
  <div className='contract-interim'>
    <Hero type='contractInterim'>
      <a>Contract</a> hires to deliver your project
    </Hero>
    <ProPoints type='contractInterim' />
    <Leadership />
    <WorkForUs />
  </div>
);

export default ContractInterim;
