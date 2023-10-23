import React from 'react';
import {NAMESPACE} from '../../data/constants';

import Hero from '../shared/LeadershipHero';
import WorkForUsStatic from '../shared/WorkForUs';

import UnitasHero from '../../static/unitas/work-for-us.png';
import PrimeHero from '../../static/prime/tpg-hero-work-for-us-min.png';

const IMAGES = {
  huddle: false,
  unitas: UnitasHero,
  prime: PrimeHero,
};

const WorkForUs = () => (
  <div className='work-for-us'>
    <Hero type='workForUs' img={IMAGES[NAMESPACE]} />
    <WorkForUsStatic />
  </div>
);

export default WorkForUs;
