import React from 'react';

import Hero from '../shared/LeadershipHero';
import Specialists from '../shared/Specialists';
import OurStory from '../shared/OurStory';

const OurProcess = () => (
  <div className='our-story'>
    <Hero type='process'>
      Leveraging AI to source hires <a>faster & cheaper</a>
    </Hero>
    <Specialists />
    <OurStory type='story'>
      Three leaders form a huddle to <a>reimagine</a> recruitment
    </OurStory>
  </div>
);

export default OurProcess;
