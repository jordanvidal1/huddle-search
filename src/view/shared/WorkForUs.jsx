import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {capitalize, Grid} from '@material-ui/core';
import {NAMESPACE} from '../../data/constants';
import {isPrime} from '../../services/helper';

import ArrowIcon from '../../static/huddle/arrow.svg';
import ExecutiveArrowIcon from '../../static/huddle/arrow-gold.svg';
import UnitasArrowIcon from '../../static/unitas/request-arrow.svg';
import UnitasExecutiveArrowIcon from '../../static/unitas/arrow-gold.svg';
import PrimeArrowIcon from '../../static/prime/arrow.svg';
import PrimeArrowWhiteIcon from '../../static/prime/arrow-white.svg';

const ICONS = {
  huddle: {
    normal: ArrowIcon,
    executive: ExecutiveArrowIcon,
    join: ArrowIcon
  },
  unitas: {
    normal: UnitasArrowIcon,
    executive: UnitasExecutiveArrowIcon,
    join: UnitasArrowIcon
  },
  prime: {
    normal: PrimeArrowIcon,
    executive: PrimeArrowIcon,
    join: PrimeArrowWhiteIcon
  }
};

const WorkForUs = ({
  home,
  type = 'normal'
}) => {
  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  const siteName = capitalize(NAMESPACE);

  return (
    <div className='work-for-us'>
      <div className='pattern'>
        <div className='container'>
          <div className='inner-container'>
            <div className='content'>
              <div className='title'>
                <h2>
                  {t(`${NAMESPACE}:workForUs:title:part1`)}
                  <a>
                    {t(`${NAMESPACE}:workForUs:title:part2`)}
                  </a>
                  {t(`${NAMESPACE}:workForUs:title:part3`, {siteName})}
                </h2>
              </div>
              <div className='text'>
                <p>
                  {t(`${NAMESPACE}:workForUs:desc`)}
                </p>
              </div>
              <Grid container spacing={4} className='grid-container'
                    alignItems='center'>
                <Grid item xs={12} sm={isPrime ? (home ? 4 : 12) : 6}>
                  <div className='link-container'>
                    <Link to='/leadership-team'>
                      <span>Leadership team</span>
                      <img alt='arrow-icon' src={ICONS[NAMESPACE][type]}/>
                    </Link>
                  </div>
                </Grid>
                {!isPrime && (
                  <Grid item xs={12} sm={6}>
                    <div className='link-container'>
                      <Link to='/corporate-social-responsibility'>
                        <span>Corporate social responsibility</span>
                        <img alt='arrow-icon' src={ICONS[NAMESPACE][type]}/>
                      </Link>
                    </div>
                  </Grid>
                )}
                <Grid item xs={12} sm={isPrime ? (home ? 4 : 12) : 6}>
                  <div className='link-container'>
                    <Link to='/our-story'>
                      <span>Our story</span>
                      <img alt='arrow-icon' src={ICONS[NAMESPACE][type]}/>
                    </Link>
                  </div>
                </Grid>
                {!isPrime && (
                  <Grid item xs={12} sm={6}>
                    <div className='link-container'>
                      <Link to='/diversity-equality-and-inclusion'>
                        <span>Diversity, equality & inclusion</span>
                        <img alt='arrow-icon' src={ICONS[NAMESPACE][type]}/>
                      </Link>
                    </div>
                  </Grid>
                )}
                <Grid item xs={12} sm={isPrime ? (home ? 4 : 12) : 6}>
                  <div className='link-container'>
                    <Link to='/our-process'>
                      <span>Our process</span>
                      <img alt='arrow-icon' src={ICONS[NAMESPACE][type]}/>
                    </Link>
                  </div>
                </Grid>
                {!isPrime && (
                  <Grid item xs={12} sm={6}>
                    <div className='link-container'>
                      <Link to='/the-prime-group'>
                        <span>The Prime Group</span>
                        <img alt='arrow-icon' src={ICONS[NAMESPACE][type]}/>
                      </Link>
                    </div>
                  </Grid>
                )}
              </Grid>
              {home && (
                <div className='cv-container'>
                  <h5>
                    {t(`${NAMESPACE}:workForUs:container:title`)}
                  </h5>
                  <p>
                    {t(`${NAMESPACE}:workForUs:container:text`)}
                  </p>
                  <div className='link-container'>
                    <Link to='/work-for-us'>
                      {t(`${NAMESPACE}:workForUs:container:link`)}
                      <img alt='arrow-icon' src={ICONS[NAMESPACE].join}/>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkForUs;
