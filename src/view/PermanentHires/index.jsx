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

const PermanentHires = () => (
  <div className='permanent-hires'>
    <Hero type='permanentHires'>
      <a>{highlighted}</a>{title}
    </Hero>
    <ProPoints type='permanentHires' />
    <Leadership />
    <WorkForUs />
  </div>
);

export default PermanentHires;
