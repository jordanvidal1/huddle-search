import React from 'react';
import {isHuddle} from '../../services/helper';

import Hero from '../shared/LeadershipHero';
import ProPoints from '../shared/ProPoints';
import CorporateMeasure from '../shared/CorporateMeasure';
import OurStory from '../shared/OurStory';
import WorkForUs from '../shared/WorkForUs';

import HeroImg from '../../static/unitas/corporate.png';

const Diversity = () => (
  <div className='diversity'>
    <Hero
      type='diversity'
      img={!isHuddle && HeroImg}
    />
    <ProPoints type='diversity' />
    <CorporateMeasure />
    <OurStory type='story'>
        Three leaders come together to <a>reimagine</a> recruitment
    </OurStory>
    <OurStory type='process'>
        Leveraging AI tech to service clients at <a>unprecedented</a> speed & scale
    </OurStory>
    <WorkForUs />
  </div>
);

export default Diversity;