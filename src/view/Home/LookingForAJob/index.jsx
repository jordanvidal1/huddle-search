import React from 'react';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import {getNamespace, isHuddle} from '../../../services/helper';
import FeaturedRole from './FeaturedRole';

import ArrowIcon from '../../../static/huddle/arrow.svg';
import UnitasArrowIcon from '../../../static/unitas/arrow.svg';
import UnitasRequestArrowIcon from '../../../static/unitas/request-arrow.svg';

const LookingForAJob = () => {
  const {t} = useTranslation(['huddle', 'unitas']);

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
              <p>
                {t(`${getNamespace}:home:lookingForAJob:desc`)} <Link to='/looking-for-a-job'>
                {t(`${getNamespace}:home:lookingForAJob:link`)}
                <img
                  className='arrow-icon'
                  alt='arrow-icon'
                  src={isHuddle ? ArrowIcon : UnitasArrowIcon}
                />
              </Link>
              </p>
            </div>
            <div className='featured-roles'>
              <div className='featured-roles-container'>
                <div className='subtitle-container'>
                  <h5>
                    {t(`${getNamespace}:home:lookingForAJob:roles:title`)}
                  </h5>
                  <div className='link-container'>
                    <Link to='/jobs'>
                      {t(`${getNamespace}:home:lookingForAJob:roles:button`)}
                      <img
                        alt='arrow-icon'
                        src={isHuddle ? ArrowIcon : UnitasRequestArrowIcon}
                      />
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
