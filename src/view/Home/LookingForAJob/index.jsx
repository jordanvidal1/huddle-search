import React from 'react';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import FeaturedRole from './FeaturedRole';
import ArrowIcon from '../../../static/arrow.svg';

const LookingForAJob = () => {
  const {t} = useTranslation(['huddle']);

  return (
    <div className='looking-for-a-job'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='title'>
              <h2>
                Looking for a <a>job?</a>
              </h2>
            </div>
            <div className='text'>
              <span className='body'>
                {t('huddle:home:lookingForAJob:desc')} <Link to='/looking-for-a-job'>
                {t('huddle:home:lookingForAJob:link')}
                <img className='arrow-icon' alt='arrow-icon' src={ArrowIcon} />
              </Link>
              </span>
            </div>
            <div className='featured-roles'>
              <div className='featured-roles-container'>
                <div className='subtitle-container'>
                  <h5>
                    {t('huddle:home:lookingForAJob:roles:title')}
                  </h5>
                  <div className='link-container'>
                    <Link to='/jobs'>
                      <span>{t('huddle:home:lookingForAJob:roles:button')}
                      <img alt='arrow-icon' src={ArrowIcon} /></span>
                    </Link>
                  </div>
                </div>
                <div className='roles'>
                  <Grid container spacing={2}>
                    <FeaturedRole />
                    <FeaturedRole />
                    <FeaturedRole />
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LookingForAJob;
