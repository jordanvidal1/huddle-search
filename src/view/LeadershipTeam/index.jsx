import React from 'react';
import {isHuddle} from '../../services/helper';

import Leaders from './Leaders';

import Hero from '../shared/LeadershipHero';
import OurStory from '../shared/OurStory';

import HeroImg from '../../static/unitas/leadership.png';

const LeadershipTeam = () => (
  <div className='leadership-team'>
    <Hero type='leadershipTeam' img={!isHuddle && HeroImg} />
    <Leaders />
    <OurStory type='story' />
    <OurStory type='process' />
  </div>
);

export default LeadershipTeam;
