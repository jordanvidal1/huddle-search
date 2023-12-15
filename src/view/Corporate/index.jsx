import React from 'react';
import {isHuddle} from '../../services/helper';

import Hero from '../shared/LeadershipHero';
import ProPoints from '../shared/ProPoints';
import CorporateMeasure from '../shared/CorporateMeasure';
import OurStory from '../shared/OurStory';
import WorkForUs from '../shared/WorkForUs';

import HeroImg from '../../static/unitas/corporate.png';

const Corporate = () => (
  <div className='corporate'>
    <Hero
      type='corporate'
      img={!isHuddle && HeroImg}
    />
    <ProPoints type='corporate' />
    <CorporateMeasure type='corporate' />
    <OurStory type='story' />
    <OurStory type='process' />
    <WorkForUs />
  </div>
);

export default Corporate;
