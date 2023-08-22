import React from 'react';
import {useTranslation} from 'react-i18next';
import {NAMESPACE} from '../../data/constants';
import Logo from '../../static/huddle/the-prime-group.svg';
import Huddle from '../../static/huddle/prime-huddle.svg';
import Unitas from '../../static/huddle/prime-unitas.svg';
import Spectrum from '../../static/huddle/prime-spectrum.svg';

const ThePrimeGroup = () => {
  const {t} = useTranslation(['huddle', 'unitas']);

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
                <img alt='prime-huddle' src={Huddle} />
                <img alt='prime-unitas' src={Unitas} />
                <img alt='prime-spectrum' src={Spectrum} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThePrimeGroup;