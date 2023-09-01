import React from 'react';
import {isHuddle} from '../../services/helper';

import Hero from '../shared/SpecialismHero';
import Leadership from '../shared/Specialists';
import ProPoints from '../shared/ProPoints';
import WorkForUs from '../shared/WorkForUs';

const highlighted = isHuddle ? 'Permanent' : '';
const title = isHuddle
  ? ' hires to transform your team'
  : 'Permanent hires that add high performance';

const Permanent = () => (
  <div className='permanent'>
    <Hero type='permanent'>
      <a>{highlighted}</a>{title}
    </Hero>
    <ProPoints type='permanent' />
    <Leadership />
    <WorkForUs />
  </div>
);

export default Permanent;
