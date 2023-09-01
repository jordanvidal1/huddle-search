import React from 'react';

import Hero from '../shared/SpecialismHero';
import Leadership from '../shared/Specialists';
import ProPoints from '../shared/ProPoints';
import WorkForUs from '../shared/WorkForUs';

const PermanentHires = () => (
  <div className='permanent-hires'>
    <Hero type='permanentHires'>
      Permanent hires that add high performance
    </Hero>
    <ProPoints type='permanentHires' />
    <Leadership />
    <WorkForUs />
  </div>
);

export default PermanentHires;
