import React from 'react';
import {isHuddle} from '../../services/helper';

import Hero from '../shared/LeadershipHero';
import ProPoints from '../shared/ProPoints';
import Leadership from '../shared/Specialists';
import OurStory from '../shared/OurStory';

import HeroImg from '../../static/unitas/our-process-hero.png';

const OurProcess = () => (
  <div className='our-process'>
    <Hero
      type='ourProcess'
      img={!isHuddle && HeroImg}
    />
    <ProPoints type='ourProcess' />
    <Leadership />
    <OurStory type='story' />
  </div>
);

export default OurProcess;
