import React from 'react';
import {isHuddle} from '../../services/helper';

import OriginStory from './OriginStory';
import ProPoints from '../shared/ProPoints';

import Hero from '../shared/LeadershipHero';
import Leadership from '../shared/Specialists';
import OurStoryStatic from '../shared/OurStory';

import HeroImg from '../../static/unitas/our-story-hero.png';

const OurStory = () => (
  <div className='our-story'>
    <Hero
      type='ourStory'
      img={!isHuddle && HeroImg}
    />
    <OriginStory />
    <ProPoints type='ourStory' />
    <Leadership />
    <OurStoryStatic type='process' />
  </div>
);

export default OurStory;
