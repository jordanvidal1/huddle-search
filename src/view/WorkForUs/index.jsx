import React from 'react';
import {isHuddle} from '../../services/helper';

import Hero from '../shared/LeadershipHero';
import WorkForUsStatic from '../shared/WorkForUs';

import HeroImg from '../../static/unitas/work-for-us.png';

const WorkForUs = () => (
  <div className='work-for-us'>
    <Hero type='workForUs' img={!isHuddle && HeroImg} />
    <WorkForUsStatic />
  </div>
);

export default WorkForUs;
