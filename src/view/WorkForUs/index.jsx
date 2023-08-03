import React from 'react';

import Hero from '../shared/LeadershipHero';
import WorkForUsStatic from '../shared/WorkForUs';
import FollowUs from './FollowUs';

const WorkForUs = () => (
  <div className='work-for-us'>
    <Hero type='work'>
      We’re always on the <a>look-out</a> for talent
    </Hero>
    <WorkForUsStatic />
    <FollowUs />
  </div>
);

export default WorkForUs;
