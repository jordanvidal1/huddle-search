import React from 'react';

import OriginStory from './OriginStory';
import ProPoints from '../shared/ProPoints';

import Hero from '../shared/LeadershipHero';
import Leadership from '../shared/Specialists';
import OurStoryStatic from '../shared/OurStory';

const OurStory = () => (
  <div className='our-story'>
    <Hero type='story'>
      Experts unite to <a>redefine</a> an industry
    </Hero>
    <OriginStory />
    <ProPoints type='story' />
    <Leadership />
    <OurStoryStatic type='process'>
      Leveraging AI tech to service clients at <a>unprecedented</a> speed & scale
    </OurStoryStatic>
  </div>
);

export default OurStory;
