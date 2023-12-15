import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {
  huddleHref,
  NAMESPACE,
  spectrumHref,
  unitasHref,
} from '../../data/constants'
import {isHuddle, isPrime, isUnitas} from '../../services/helper';
import LinkHref from '../shared/LinkHref';

import Logo from '../../static/huddle/the-prime-group.svg';

import HuddlePink from '../../static/prime/huddle-logo-pink.svg';
import UnitasPink from '../../static/prime/unitas-logo-pink.svg';
import SpectrumPink from '../../static/prime/spectrum-logo-pink.png';

const PrimeLogos = () => (
  <div className='logos'>
    {isHuddle ? (
      <Link to='/'>
        <img alt='prime-huddle' src={HuddlePink} />
      </Link>
    ) : (
      <LinkHref href={huddleHref}>
        <img alt='prime-huddle' src={HuddlePink} />
      </LinkHref>
    )}
    {!isUnitas ? (
      <Link to='/'>
        <img alt='prime-unitas' src={UnitasPink} />
      </Link>
    ) : (
      <LinkHref href={unitasHref}>
        <img alt='prime-unitas' src={UnitasPink} />
      </LinkHref>
    )}
    <LinkHref href={spectrumHref}>
      <img alt='prime-spectrum' src={SpectrumPink} />
    </LinkHref>
  </div>
);

const ThePrimeGroup = () => {
  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  return (
    <div className='the-prime-group'>
      <div className='pattern'>
        <div className='container'>
          <div className='inner-container'>
            <div className='content'>
              {!isPrime && <img alt='the-prime-group' src={Logo} />}
              <div className='title'>
                <h1>
                  {t(`${NAMESPACE}:thePrimeGroup:title:part1`)}
                  <br />
                  <a>
                    {t(`${NAMESPACE}:thePrimeGroup:title:part2`)}
                  </a>
                </h1>
              </div>
              <div className='text'>
                <p>
                  {t(`${NAMESPACE}:thePrimeGroup:text`)}
                </p>
              </div>
              <div className='sub-text'>
                <p>
                  {t(`${NAMESPACE}:thePrimeGroup:subText`)}
                </p>
              </div>
              <PrimeLogos />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThePrimeGroup;