import React from 'react';

import Hero from '../shared/SpecialismHero';
import SearchRoles from '../shared/SearchRoles';
import Specialists from '../shared/Specialists';
import OurStory from '../shared/OurStory';
import ResourcesPage from '../shared/ResourcesPage';

import './styles.scss';

const LookingForAJob = () => (
  <div className='looking-for-a-job'>
    <Hero job>
      Looking for a <a>job?</a>
    </Hero>
    <SearchRoles />
    <Specialists />
    <OurStory type='story'>
      Three leaders form a huddle to <a>reimagine</a> recruitment
    </OurStory>
    <OurStory type='process'>
      Leveraging AI tech to service clients at <a>unprecedented</a> speed & scale
    </OurStory>
    <ResourcesPage />
  </div>
);

export default LookingForAJob;
