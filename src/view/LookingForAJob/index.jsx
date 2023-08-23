import React from 'react';

import Hero from '../shared/SpecialismHero';
// import SearchRoles from '../shared/SearchRoles';
import Leadership from '../shared/Specialists';
import OurStory from '../shared/OurStory';
import ResourcesPage from '../shared/ResourcesPage';

const LookingForAJob = () => (
  <div className='looking-for-a-job'>
    <Hero type='lookingForAJob' empty /* button */>
      Looking for a <a>job?</a>
    </Hero>
    {/*<SearchRoles />*/}
    <Leadership />
    <OurStory type='story'>
      Three leaders come together to <a>reimagine</a> recruitment
    </OurStory>
    <OurStory type='process'>
      Leveraging AI tech to service clients at <a>unprecedented</a> speed & scale
    </OurStory>
    <ResourcesPage />
  </div>
);

export default LookingForAJob;
