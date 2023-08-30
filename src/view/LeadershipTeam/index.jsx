import React from 'react';

import Leaders from './Leaders';

import Hero from '../shared/LeadershipHero';
import OurStory from '../shared/OurStory';

const LeadershipTeam = () => (
  <div className='leadership-team'>
    <Hero type='leadershipTeam' />
    <Leaders />
    <OurStory type='story'>
      Three leaders come together to <a>reimagine</a> recruitment
    </OurStory>
    <OurStory type='process'>
      Leveraging AI tech to service clients at <a>unprecedented</a> speed & scale
    </OurStory>
  </div>
);

export default LeadershipTeam;
