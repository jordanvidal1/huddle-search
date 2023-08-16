import React from 'react';
import {useTranslation} from 'react-i18next';
import {getNamespace, isHuddle} from '../../services/helper';

import Hero from '../shared/SpecialismHero';
import ProPoints from '../shared/ProPoints';
import Service from '../shared/LeadershipHero';
import Leadership from '../shared/Specialists';
import WorkForUs from '../shared/WorkForUs';

import Logo from '../../static/huddle/text-logo-gold.svg';
import UnitasLogo from '../../static/unitas/text-logo.svg';

const ExecutiveSearch = () => {
  const {t} = useTranslation(['huddle', 'unitas']);

  return (
    <div className='executive-search'>
      <Hero type='executiveSearch' contact executive>
        <p>
          {t(`${getNamespace}:executiveSearch:title:part1`)}
          <img alt='logo-gold' src={isHuddle ? Logo : UnitasLogo} />
        </p>
        <div>
          <h1>
            {t(`${getNamespace}:executiveSearch:title:part2`)}
          </h1>
          <p>
            {t(`${getNamespace}:executiveSearch:title:part3`)}
          </p>
        </div>
      </Hero>
      <ProPoints type='executiveSearch' />
      <Service type='executiveSearch'>
        A specialised service powered by AI
      </Service>
      <Leadership executive />
      <WorkForUs executive />
    </div>
  );
}

export default ExecutiveSearch;
