import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Grid} from '@material-ui/core';
import {NAMESPACE} from '../../data/constants';
import {isHuddle} from '../../services/helper';

import ArrowIcon from '../../static/huddle/arrow.svg';
import ExecutiveArrowIcon from '../../static/huddle/arrow-gold.svg';
import UnitasArrowIcon from '../../static/unitas/request-arrow.svg';
import UnitasExecutiveArrowIcon from '../../static/unitas/arrow-gold.svg';

const WorkForUs = ({
  home,
  executive
}) => {
  const {t} = useTranslation(['huddle', 'unitas']);

  const arrowIcon = isHuddle
    ? ArrowIcon : UnitasArrowIcon;
  const executiveArrowIcon = isHuddle
    ? ExecutiveArrowIcon : UnitasExecutiveArrowIcon;
  const icon = executive ? executiveArrowIcon : arrowIcon;
  const siteName = isHuddle ? 'Huddle' : 'Unitas';

  return (
    <div className='work-for-us'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='title'>
              <h2>
                More reasons to get <a>excited</a> about {siteName}
              </h2>
            </div>
            <div className='text'>
              <p>
                {t(`${NAMESPACE}:workForUs:desc`)}
              </p>
            </div>
            <Grid container spacing={4} className='grid-container'
                  alignItems='center'>
              <Grid item xs={12} sm={6}>
                <div className='link-container'>
                  <Link to='/leadership-team'>
                    <span>Leadership team</span>
                    <img alt='arrow-icon' src={icon}/>
                  </Link>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className='link-container'>
                  <Link to='/corporate-responsibility'>
                    <span>Corporate social responsibility</span>
                    <img alt='arrow-icon' src={icon}/>
                  </Link>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className='link-container'>
                  <Link to='/our-story'>
                    <span>Our story</span>
                    <img alt='arrow-icon' src={icon}/>
                  </Link>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className='link-container'>
                  <Link to='/diversity'>
                    <span>Diversity, equality & inclusion</span>
                    <img alt='arrow-icon' src={icon}/>
                  </Link>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className='link-container'>
                  <Link to='/our-process'>
                    <span>Our process</span>
                    <img alt='arrow-icon' src={icon}/>
                  </Link>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className='link-container'>
                  <Link to='/the-prime-group'>
                    <span>The Prime Group</span>
                    <img alt='arrow-icon' src={icon}/>
                  </Link>
                </div>
              </Grid>
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
                    <img alt='arrow-icon' src={arrowIcon}/>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkForUs;
