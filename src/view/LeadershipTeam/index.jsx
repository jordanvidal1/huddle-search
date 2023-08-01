import React from 'react';

import Hero from './Hero';
import Leaders from './Leaders';
import OurStory from '../shared/OurStory';

import './Hero/styles.scss';

const LeadershipTeam = () => (
  <div className='leadership-team'>
    <Hero job>
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
