import React from 'react';
import {NAMESPACE} from '../../data/constants';

import Leaders from './Leaders';

import Hero from '../shared/LeadershipHero';
import OurStory from '../shared/OurStory';

import UnitasHero from '../../static/unitas/leadership.png';
import PrimeHero from '../../static/prime/tpg-hero-leadership-team-min.png';

const IMAGES = {
  huddle: false,
  unitas: UnitasHero,
  prime: PrimeHero,
};

const LeadershipTeam = () => (
  <div className='leadership-team'>
    <Hero type='leadershipTeam' img={IMAGES[NAMESPACE]} />
    <Leaders />
    <OurStory type='story' />
    <OurStory type='process' />
  </div>
);

export default LeadershipTeam;
