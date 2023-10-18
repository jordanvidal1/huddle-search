import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {
  huddleHref,
  NAMESPACE,
  spectrumHref,
  unitasHref,
} from '../../data/constants'
import {isHuddle, isPrime} from '../../services/helper';

import Logo from '../../static/huddle/the-prime-group.svg';
import Huddle from '../../static/huddle/prime-huddle.svg';
import Unitas from '../../static/huddle/prime-unitas.svg';
import Spectrum from '../../static/huddle/prime-spectrum.svg';

import HuddlePink from '../../static/prime/huddle-logo-pink.svg';
import UnitasPink from '../../static/prime/unitas-logo-pink.svg';
import SpectrumPink from '../../static/prime/spectrum-logo-pink.svg';

const LinkHref = props => (
  <a {...props} target='_blank' rel='noreferrer'>
    {props.children}
  </a>
);

const NormalLogos = () => (
  <div className='logos'>
    {isHuddle ? (
      <Link to='/'>
        <img alt='prime-huddle' src={Huddle} />
      </Link>
    ) : (
      <LinkHref href={huddleHref}>
        <img alt='prime-huddle' src={Huddle} />
      </LinkHref>
    )}
    {!isHuddle ? (
      <Link to='/'>
        <img alt='prime-unitas' src={Unitas} />
      </Link>
    ) : (
      <LinkHref href={unitasHref}>
        <img alt='prime-unitas' src={Unitas} />
      </LinkHref>
    )}
    <LinkHref href={spectrumHref}>
      <img alt='prime-spectrum' src={Spectrum} />
    </LinkHref>
  </div>
);

const PrimeLogos = () => (
  <div className='logos'>
    <LinkHref href={huddleHref}>
      <img alt='prime-huddle' src={HuddlePink} />
    </LinkHref>
    <LinkHref href={unitasHref}>
      <img alt='prime-unitas' src={UnitasPink} />
    </LinkHref>
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
              {isPrime ? <PrimeLogos /> : <NormalLogos />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThePrimeGroup;