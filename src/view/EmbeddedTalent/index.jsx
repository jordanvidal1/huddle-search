import React from 'react';
import {isHuddle} from '../../services/helper';

import Hero from '../shared/SpecialismHero';
import Leadership from '../shared/Specialists';
import ProPoints from '../shared/ProPoints';
import WorkForUs from '../shared/WorkForUs';

import HeroImg from '../../static/unitas/embedded-talent.png';

const EmbeddedTalent = () => (
  <div className='embedded-talent'>
    <Hero
      type='embeddedTalent'
      img={!isHuddle && HeroImg}
      contact
    >
      <a>Embedded</a> talent solutions
    </Hero>
    <ProPoints type='embeddedTalent' />
    <Leadership />
    <WorkForUs />
  </div>
);

export default EmbeddedTalent;
