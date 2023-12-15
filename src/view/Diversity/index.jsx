import React from 'react';
import {isHuddle} from '../../services/helper';

import Hero from '../shared/LeadershipHero';
import ProPoints from '../shared/ProPoints';
import CorporateMeasure from '../shared/CorporateMeasure';
import OurStory from '../shared/OurStory';
import WorkForUs from '../shared/WorkForUs';

import HeroImg from '../../static/unitas/corporate.png';

const Diversity = () => (
  <div className='diversity'>
    <Hero
      type='diversity'
      img={!isHuddle && HeroImg}
    />
    <ProPoints type='diversity' />
    <CorporateMeasure type='diversity' />
    <OurStory type='story' />
    <OurStory type='process' />
    <WorkForUs />
  </div>
);

export default Diversity;
