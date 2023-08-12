import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Grid} from '@material-ui/core';
import InfoBox from './InfoBox';
import Logo from '../../static/text-logo-gold.svg';
import InfoIcon1 from '../../static/executive-icon-1.svg';
import InfoIcon2 from '../../static/executive-icon-2.svg';
import InfoIcon3 from '../../static/executive-icon-3.svg';
import InfoIcon4 from '../../static/executive-icon-4.svg';

const ExecutiveSearch = () => {
  const {t} = useTranslation(['huddle']);

  return (
    <div className='executive-search'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <div className='title'>
                <p>
                  {t('huddle:executiveSearch:title:part1')}
                  <img alt='logo-gold' src={Logo} />
                </p>
                <h1>
                  {t('huddle:executiveSearch:title:part2')}
                </h1>
                <p>
                  {t('huddle:executiveSearch:title:part3')}
                </p>
              </div>
              <div className='text'>
              <span>
                {t('huddle:executiveSearch:desc')}
              </span>
              </div>
            </div>
            <Grid container spacing={2} className='grid-container'>
              <InfoBox
                icon={InfoIcon1}
                title={t('huddle:executiveSearch:info:1:title')}
                text={t('huddle:executiveSearch:info:1:text')}
              />
              <InfoBox
                icon={InfoIcon2}
                title={t('huddle:executiveSearch:info:2:title')}
                text={t('huddle:executiveSearch:info:2:text')}
              />
              <InfoBox
                icon={InfoIcon3}
                title={t('huddle:executiveSearch:info:3:title')}
                text={t('huddle:executiveSearch:info:3:text')}
              />
              <InfoBox
                icon={InfoIcon4}
                title={t('huddle:executiveSearch:info:4:title')}
                text={t('huddle:executiveSearch:info:4:text')}
              />
            </Grid>
            <div className='btn-container'>
              <Link to='/executive-search' className="btn">
                {t('huddle:executiveSearch:button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExecutiveSearch;
