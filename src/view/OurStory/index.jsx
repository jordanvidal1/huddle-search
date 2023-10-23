import React from 'react';
import {NAMESPACE} from '../../data/constants';

import OriginStory from './OriginStory';
import ProPoints from '../shared/ProPoints';

import Hero from '../shared/LeadershipHero';
import Leadership from '../shared/Specialists';
import OurStoryStatic from '../shared/OurStory';

import UnitasHero from '../../static/unitas/our-story-hero.png';
import PrimeHero from '../../static/prime/tpg-hero-our-story-min.png';

const IMAGES = {
    huddle: false,
    unitas: UnitasHero,
    prime: PrimeHero,
};

const OurStory = () => (
  <div className='our-story'>
    <Hero type='ourStory' img={IMAGES[NAMESPACE]} />
    <OriginStory />
    <ProPoints type='ourStory' />
    <Leadership />
    <OurStoryStatic type='process' />
  </div>
);

export default OurStory;
