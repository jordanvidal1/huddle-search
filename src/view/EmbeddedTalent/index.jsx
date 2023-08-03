import React from 'react';

import Hero from '../shared/SpecialismHero';
import Leadership from '../shared/Specialists';
import ProPoints from '../shared/ProPoints';
import WorkForUs from '../shared/WorkForUs';

const LookingToHire = () => (
  <div className='embedded-talent'>
    <Hero>
      <a>Embedded</a> talent solutions
    </Hero>
    <ProPoints type='embedded' />
    <Leadership />
    <WorkForUs />
  </div>
);

export default LookingToHire;
