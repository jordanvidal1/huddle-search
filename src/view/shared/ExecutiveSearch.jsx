import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Grid} from '@material-ui/core';
import InfoBox from './InfoBox';

import Logo from '../../static/huddle/text-logo-gold.svg';
import UnitasLogo from '../../static/unitas/text-logo.svg';

import InfoIcon1 from '../../static/huddle/executive-icon-1.svg';
import InfoIcon2 from '../../static/huddle/executive-icon-2.svg';
import InfoIcon3 from '../../static/huddle/executive-icon-3.svg';
import InfoIcon4 from '../../static/huddle/executive-icon-4.svg';
import UnitasInfoIcon1 from '../../static/unitas/executive-icon-1.svg';
import UnitasInfoIcon2 from '../../static/unitas/executive-icon-2.svg';
import UnitasInfoIcon3 from '../../static/unitas/executive-icon-3.svg';
import UnitasInfoIcon4 from '../../static/unitas/executive-icon-4.svg';

const isHuddle = window.HUDDLE;

const ExecutiveSearch = () => {
  const {t} = useTranslation(['huddle', 'unitas']);

  return (
    <div className='executive-search'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <div className='title'>
                <p>
                  {t(`${window.SITE_NAME}:executiveSearch:title:part1`)}
                  <img alt='logo-gold' src={isHuddle ? Logo : UnitasLogo} />
                </p>
                <div>
                  <h1>
                    {t(`${window.SITE_NAME}:executiveSearch:title:part2`)}
                  </h1>
                  <p>
                    {t(`${window.SITE_NAME}:executiveSearch:title:part3`)}
                  </p>
                </div>
              </div>
              <div className='text'>
                <p>
                  {t(`${window.SITE_NAME}:executiveSearch:desc`)}
                </p>
              </div>
            </div>
            <Grid container spacing={2} className='grid-container'>
              <InfoBox
                icon={isHuddle ? InfoIcon1 : UnitasInfoIcon1}
                title={t(`${window.SITE_NAME}:executiveSearch:info:1:title`)}
                text={t(`${window.SITE_NAME}:executiveSearch:info:1:text`)}
              />
              <InfoBox
                icon={isHuddle ? InfoIcon2 : UnitasInfoIcon2}
                title={t(`${window.SITE_NAME}:executiveSearch:info:2:title`)}
                text={t(`${window.SITE_NAME}:executiveSearch:info:2:text`)}
              />
              <InfoBox
                icon={isHuddle ? InfoIcon3 : UnitasInfoIcon3}
                title={t(`${window.SITE_NAME}:executiveSearch:info:3:title`)}
                text={t(`${window.SITE_NAME}:executiveSearch:info:3:text`)}
              />
              <InfoBox
                icon={isHuddle ? InfoIcon4 : UnitasInfoIcon4}
                title={t(`${window.SITE_NAME}:executiveSearch:info:4:title`)}
                text={t(`${window.SITE_NAME}:executiveSearch:info:4:text`)}
              />
            </Grid>
            <div className='btn-container'>
              <Link to='/executive-search' className="btn">
                {t(`${window.SITE_NAME}:executiveSearch:button`)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExecutiveSearch;
