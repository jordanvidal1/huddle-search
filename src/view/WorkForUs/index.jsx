import React from 'react';

import Hero from '../shared/LeadershipHero';
import WorkForUsStatic from '../shared/WorkForUs';

const WorkForUs = () => (
  <div className='work-for-us'>
    <Hero type='work'>
      We’re always on the <a>look-out</a> for talent
    </Hero>
    <WorkForUsStatic />
  </div>
);

export default WorkForUs;
