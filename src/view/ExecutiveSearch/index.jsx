import React from 'react';
import {useTranslation} from 'react-i18next';
import {NAMESPACE} from '../../data/constants';
import {isHuddle} from '../../services/helper';

import Hero from '../shared/SpecialismHero';
import ProPoints from '../shared/ProPoints';
import Service from '../shared/LeadershipHero';
import Leadership from '../shared/Specialists';
import WorkForUs from '../shared/WorkForUs';

import Logo from '../../static/huddle/text-logo-gold.svg';
import UnitasLogo from '../../static/unitas/text-logo.svg';
import HeroImg from '../../static/huddle/executive-search.png';

const ExecutiveSearch = () => {
  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  return (
    <div className='executive-search'>
      <Hero
        type='executiveSearch'
        img={isHuddle && HeroImg}
        contact
        executive
      >
        <p>
          {t(`${NAMESPACE}:executiveSearch:title:part1`)}
          <img alt='logo-gold' src={isHuddle ? Logo : UnitasLogo} />
        </p>
        <div>
          <h1>
            {t(`${NAMESPACE}:executiveSearch:title:part2`)}
          </h1>
          <p>
            {t(`${NAMESPACE}:executiveSearch:title:part3`)}
          </p>
        </div>
      </Hero>
      <ProPoints type='executiveSearch' />
      <Service type='executiveSearch' />
      <Leadership />
      <WorkForUs />
    </div>
  );
}

export default ExecutiveSearch;
