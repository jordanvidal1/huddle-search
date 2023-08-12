import React from 'react';

import Leaders from './Leaders';

import Hero from '../shared/LeadershipHero';
import OurStory from '../shared/OurStory';

const LeadershipTeam = () => (
  <div className='leadership-team'>
    <Hero type='leadershipTeam'>
      A leadership with <a>unrivalled</a> experience
    </Hero>
    <Leaders />
    <OurStory type='story'>
      Three leaders form a huddle to <a>reimagine</a> recruitment
    </OurStory>
    <OurStory type='process'>
      Leveraging AI tech to service clients at <a>unprecedented</a> speed & scale
    </OurStory>
  </div>
);

export default LeadershipTeam;
