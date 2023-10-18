import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {
  huddleHref,
  NAMESPACE,
  spectrumHref,
  unitasHref,
} from '../../data/constants'
import {isHuddle} from '../../services/helper';
import Logo from '../../static/huddle/the-prime-group.svg';
import Huddle from '../../static/huddle/prime-huddle.svg';
import Unitas from '../../static/huddle/prime-unitas.svg';
import Spectrum from '../../static/huddle/prime-spectrum.svg';

const LinkHref = props => (
  <a {...props} target='_blank' rel='noreferrer'>
    {props.children}
  </a>
);

const ThePrimeGroup = () => {
  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  return (
    <div className='the-prime-group'>
      <div className='pattern'>
        <div className='container'>
          <div className='inner-container'>
            <div className='content'>
              <img alt='the-prime-group' src={Logo} />
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
                <a href={spectrumHref} target='_blank' rel='noreferrer'>
                  <img alt='prime-spectrum' src={Spectrum} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThePrimeGroup;