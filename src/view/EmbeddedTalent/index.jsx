import React from 'react';

import Hero from '../shared/SpecialismHero';
import Leadership from '../shared/Specialists';
import ProPoints from '../shared/ProPoints';
import WorkForUs from '../shared/WorkForUs';

const EmbeddedTalent = () => (
  <div className='embedded-talent'>
    <Hero type='embeddedTalent' contact>
      <a>Embedded</a> talent solutions
    </Hero>
    <ProPoints type='embeddedTalent' />
    <Leadership />
    <WorkForUs />
  </div>
);

export default EmbeddedTalent;
