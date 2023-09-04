import React from 'react';
import {useTranslation} from 'react-i18next';
import {NAMESPACE} from '../../data/constants';
import {isHuddle} from '../../services/helper';

import Hero from '../shared/SpecialismHero';
// import SearchRoles from '../shared/SearchRoles';
import Leadership from '../shared/Specialists';
import OurStory from '../shared/OurStory';
import ResourcesPage from '../shared/ResourcesPage';

import HeroImg from '../../static/unitas/candidates.png';

const LookingForAJob = () => {
  const {t} = useTranslation(['huddle', 'unitas']);

  return (
    <div className='looking-for-a-job'>
      <Hero
        type='lookingForAJob'
        img={!isHuddle && HeroImg}
        empty
        button
      >
        {t(`${NAMESPACE}:specialismHero:title:lookingForAJob:part1`)}
        <a>
          {t(`${NAMESPACE}:specialismHero:title:lookingForAJob:part2`)}
        </a>
      </Hero>
      {/*<SearchRoles />*/}
      <OurStory type='story'>
        Three leaders come together to <a>reimagine</a> recruitment
      </OurStory>
      <OurStory type='process'>
        Leveraging AI tech to service clients at <a>unprecedented</a> speed & scale
      </OurStory>
      <Leadership />
      <ResourcesPage />
    </div>
  );
}

export default LookingForAJob;
