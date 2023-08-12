import React from 'react';

import ContractHires from './ContractHires';

import Hero from '../shared/SpecialismHero';
import Specialisms from './Specialisms';
import PermanentHires from '../shared/LookingToHire';
import ExecutiveSearch from '../shared/ExecutiveSearch';
import EmbeddedTalent from '../shared/EmbeddedTalent';
import OurStory from '../shared/OurStory';
import ResourcesPage from '../shared/ResourcesPage';

const LookingToHire = () => (
  <div className='looking-to-hire'>
    <Hero type='lookingToHire'>
      Looking to <a>hire?</a>
    </Hero>
    <Specialisms type='specialisms' />
    <Specialisms type='sectors' />
    <PermanentHires type='lookingToHire'>
      <a>Permanent</a> hires to transform your team
    </PermanentHires>
    <ContractHires />
    <ExecutiveSearch />
    <EmbeddedTalent />
    <OurStory type='story'>
      Three leaders form a huddle to <a>reimagine</a> recruitment
    </OurStory>
    <OurStory type='process'>
      Leveraging AI tech to service clients at <a>unprecedented</a> speed & scale
    </OurStory>
    <ResourcesPage />
  </div>
);

export default LookingToHire;
