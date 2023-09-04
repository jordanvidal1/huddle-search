import React from 'react';
import {isHuddle} from '../../services/helper';

import Hero from '../shared/SpecialismHero';
import Leadership from '../shared/Specialists';
import ProPoints from '../shared/ProPoints';
import WorkForUs from '../shared/WorkForUs';

import HeroImg from '../../static/unitas/contract-hires.png';

const highlighted = isHuddle ? 'Contract' : '';
const title = isHuddle
  ? ' hires to deliver your project'
  : 'Interim search & selection at pace';

const ContractInterim = () => (
  <div className='contract-interim'>
    <Hero type='contractInterim' img={!isHuddle && HeroImg}>
      <a>{highlighted}</a>{title}
    </Hero>
    <ProPoints type='contractInterim' />
    <Leadership />
    <WorkForUs />
  </div>
);

export default ContractInterim;
