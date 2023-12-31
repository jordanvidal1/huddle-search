import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Grid} from '@material-ui/core';
import {NAMESPACE} from '../../data/constants';
import {isHuddle} from '../../services/helper';
import InfoBox from './InfoBox';

import HeroImg from '../../static/huddle/executive-search.png';
import Logo from '../../static/huddle/text-logo-gold.svg';
import UnitasLogo from '../../static/unitas/text-logo.svg';

import {ReactComponent as Icon1} from '../../static/icons/executive-search-1.svg';
import {ReactComponent as Icon2} from '../../static/icons/executive-search-2.svg';
import {ReactComponent as Icon3} from '../../static/icons/executive-search-3.svg';
import {ReactComponent as Icon4} from '../../static/icons/executive-search-4.svg';

const ExecutiveSearch = () => {
  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  return (
    <div className='executive-search'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            {isHuddle && (
              <img alt='hero-img' src={HeroImg} />
            )}
            <div className='text-container'>
              <div className='title'>
                <p>
                  {t(`${NAMESPACE}:executiveSearch:title:part1`)}
                  <img alt='logo-gold' src={isHuddle ? Logo : UnitasLogo} />
                </p>
                <div>
                  <h1>
                    {t(`${NAMESPACE}:executiveSearch:title:part2`)}
                  </h1>
                  <p>
                    {t(`${NAMESPACE}:executiveSearch:title:part3`)}
                  </p>
                </div>
              </div>
              <div className='text'>
                <p>
                  {t(`${NAMESPACE}:executiveSearch:desc`)}
                </p>
              </div>
            </div>
            <Grid container spacing={2} className='grid-container'>
              <InfoBox
                title={t(`${NAMESPACE}:executiveSearch:info:1:title`)}
                text={t(`${NAMESPACE}:executiveSearch:info:1:text`)}
              >
                <Icon1 />
              </InfoBox>
              <InfoBox
                title={t(`${NAMESPACE}:executiveSearch:info:2:title`)}
                text={t(`${NAMESPACE}:executiveSearch:info:2:text`)}
              >
                <Icon2 />
              </InfoBox>
              <InfoBox
                title={t(`${NAMESPACE}:executiveSearch:info:3:title`)}
                text={t(`${NAMESPACE}:executiveSearch:info:3:text`)}
              >
                <Icon3 />
              </InfoBox>
              <InfoBox
                title={t(`${NAMESPACE}:executiveSearch:info:4:title`)}
                text={t(`${NAMESPACE}:executiveSearch:info:4:text`)}
              >
                <Icon4 />
              </InfoBox>
            </Grid>
            <div className='btn-container'>
              <Link to='/executive-search' className="btn">
                {t(`${NAMESPACE}:executiveSearch:button`)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExecutiveSearch;
