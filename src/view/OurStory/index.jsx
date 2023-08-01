import React from 'react';

import OriginStory from './OriginStory';

import Hero from '../shared/LeadershipHero';
import Specialists from '../shared/Specialists';
import OurStoryStatic from '../shared/OurStory';

const OurStory = () => (
  <div className='our-story'>
    <Hero type='story'>
      Experts unite to <a>redefine</a> an industry
    </Hero>
    <OriginStory />
    <Specialists />
    <OurStoryStatic type='process'>
      Leveraging AI tech to service clients at <a>unprecedented</a> speed & scale
    </OurStoryStatic>
  </div>
);

export default OurStory;
