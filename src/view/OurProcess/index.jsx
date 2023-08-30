import React from 'react';

import Hero from '../shared/LeadershipHero';
import ProPoints from '../shared/ProPoints';
import Leadership from '../shared/Specialists';
import OurStory from '../shared/OurStory';

const OurProcess = () => (
  <div className='our-process'>
    <Hero type='ourProcess' />
    <ProPoints type='ourProcess' />
    <Leadership />
    <OurStory type='story'>
      Three leaders come together to <a>reimagine</a> recruitment
    </OurStory>
  </div>
);

export default OurProcess;
