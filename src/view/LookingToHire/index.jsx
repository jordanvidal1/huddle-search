import React from 'react';

import ContractHires from './ContractHires';

import Hero from '../shared/SpecialismHero';
import Specialisms from '../shared/Specialisms';
import PermanentHires from '../shared/LookingToHire';
import ExecutiveSearch from '../shared/ExecutiveSearch';
import EmbeddedTalent from '../shared/EmbeddedTalent';
import ResourcesPage from '../shared/ResourcesPage';

import './styles.scss';

const LookingToHire = () => {
  return (
    <div className='looking-to-hire'>
      <Hero>
        Looking to <a>hire?</a>
      </Hero>
      <Specialisms type='specialisms' />
      <Specialisms type='sectors' />
      <PermanentHires>
        <a>Permanent</a> hires to transform your team
      </PermanentHires>
      <ContractHires />
      <ExecutiveSearch />
      <EmbeddedTalent />
      {/*<OurStory />*/}
      {/*<OurProcess />*/}
      <ResourcesPage />
    </div>
  );
}

export default LookingToHire;
