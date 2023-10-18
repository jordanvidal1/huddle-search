import React from 'react';

import {NAMESPACE, SECTORS, SPECIALISMS} from '../../data/constants';
import {isHuddle} from '../../services/helper';

import Hero from '../shared/SpecialismHero';
import Specialisms from './Specialisms';
import PermanentHires from '../shared/LookingToHire';
import ContractHires from './ContractHires';
import ExecutiveSearch from '../shared/ExecutiveSearch';
import EmbeddedTalent from '../shared/EmbeddedTalent';
import OurStory from '../shared/OurStory';
import ResourcesPage from '../shared/ResourcesPage';

import HeroImg from '../../static/unitas/looking-to-hire.png';

const LookingToHire = () => (
  <div className='looking-to-hire'>
    <Hero type='lookingToHire' img={!isHuddle && HeroImg}>
      Looking to <a>hire?</a>
    </Hero>
    <Specialisms type='specialisms' specialisms={SPECIALISMS[NAMESPACE]} />
    <Specialisms type='sectors' specialisms={SECTORS[NAMESPACE]} />
    <PermanentHires type='lookingToHire' />
    <ContractHires />
    <ExecutiveSearch />
    <EmbeddedTalent />
    <OurStory type='story' />
    <OurStory type='process' />
    <ResourcesPage />
  </div>
);

export default LookingToHire;
