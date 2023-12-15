import React from 'react';
import {NAMESPACE} from '../../data/constants';

import Hero from '../shared/LeadershipHero';
import ProPoints from '../shared/ProPoints';
import Leadership from '../shared/Specialists';
import OurStory from '../shared/OurStory';

import UnitasHero from '../../static/unitas/our-process-hero.png';
import PrimeHero from '../../static/prime/tpg-hero-our-process-min.png';

const IMAGES = {
    huddle: false,
    unitas: UnitasHero,
    prime: PrimeHero,
};

const OurProcess = () => (
  <div className='our-process'>
    <Hero type='ourProcess' img={IMAGES[NAMESPACE]} />
    <ProPoints type='ourProcess' />
    <Leadership />
    <OurStory type='story' />
  </div>
);

export default OurProcess;
