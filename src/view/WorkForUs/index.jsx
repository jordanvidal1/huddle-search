import React from 'react';

import Hero from '../shared/LeadershipHero';
import WorkForUsStatic from '../shared/WorkForUs';

const WorkForUs = () => (
  <div className='work-for-us'>
    <Hero type='workForUs' />
    <WorkForUsStatic />
  </div>
);

export default WorkForUs;
