import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
// import {Grid} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import {NAMESPACE} from '../../../data/constants';
import {isHuddle} from '../../../services/helper';
// import FeaturedRole from './FeaturedRole';

import HeroImg from '../../../static/huddle/home-looking-for-a-job.png'
import {ReactComponent as Arrow} from '../../../static/icons/arrow.svg';

const LookingForAJob = () => {
  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  return (
    <div className='looking-for-a-job'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            {isHuddle && (
              <img alt='hero-img' src={HeroImg} />
            )}
            <div className='title'>
              <h2>
                {t(`${NAMESPACE}:home:lookingForAJob:title:part1`)}<a>
                {t(`${NAMESPACE}:home:lookingForAJob:title:part2`)}
                </a>
              </h2>
            </div>
            <div className='text'>
              <p>
                {t(`${NAMESPACE}:home:lookingForAJob:desc`)} <Link
                to={isHuddle ? '/looking-for-a-job' : '/candidates'}>
                {t(`${NAMESPACE}:home:lookingForAJob:link`)}
                <Arrow />
              </Link>
              </p>
              <div className='btn-container'>
                <HashLink to='/contact-us#contact' className='btn btn-secondary'>
                  {t(`${NAMESPACE}:home:lookingForAJob:button`)}
                </HashLink>
              </div>
            </div>
            {/*<div className='featured-roles'>*/}
            {/*  <div className='featured-roles-container'>*/}
            {/*    <div className='subtitle-container'>*/}
            {/*      <h5>*/}
            {/*        {t(`${NAMESPACE}:home:lookingForAJob:roles:title`)}*/}
            {/*      </h5>*/}
            {/*      <div className='link-container'>*/}
            {/*        <Link to='/jobs'>*/}
            {/*          {t(`${NAMESPACE}:home:lookingForAJob:roles:button`)}*/}
            {/*          <Arrow />*/}
            {/*        </Link>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*    <div className='roles'>*/}
            {/*      <Grid container spacing={2}>*/}
            {/*        <FeaturedRole />*/}
            {/*        <FeaturedRole />*/}
            {/*        <FeaturedRole />*/}
            {/*      </Grid>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LookingForAJob;
