import React from 'react';
import {HashLink} from 'react-router-hash-link';
import {Grid} from '@material-ui/core';
import {NAMESPACE} from '../../data/constants';

import VacancyIcon from '../../static/huddle/vacancy.svg';
import HelpIcon from '../../static/huddle/help.svg';
import CVIcon from '../../static/huddle/cv.svg';
import VisitIcon from '../../static/huddle/visit-white.svg'

const InfoContainer = ({t}) => (
  <Grid container spacing={3} justifyContent='center' className='info-grid-container'>
    <Grid item xs={12} sm={4}>
      <div className='info-container'>
        <div className='info-text-container'>
          <div className='contact-icon'>
            <img alt='vacancy-icon' src={VacancyIcon} />
          </div>
          <div className='info-title'>
            <h5>
              {t(`${NAMESPACE}:infoContainer:vacancy:title`)}
            </h5>
          </div>
          <div className='info-text'>
            <p>
              {t(`${NAMESPACE}:infoContainer:vacancy:text`)}
            </p>
          </div>
        </div>
        <div className='btn-container'>
          <HashLink to='/contact-us#contact' className='btn btn-secondary'>
            {t(`${NAMESPACE}:infoContainer:vacancy:button`)}
          </HashLink>
        </div>
      </div>
    </Grid>
    <Grid item xs={12} sm={4}>
      <div className='info-container'>
        <div className='info-text-container'>
          <div className='contact-icon'>
            <img alt='help-icon' src={HelpIcon} />
          </div>
          <div className='info-title'>
            <h5>
              {t(`${NAMESPACE}:infoContainer:help:title`)}
            </h5>
          </div>
          <div className='info-text'>
            <p>
              {t(`${NAMESPACE}:infoContainer:help:text`)}
            </p>
          </div>
        </div>
        <div className='btn-container'>
          <HashLink to='/contact-us#contact' className='btn btn-secondary'>
            {t(`${NAMESPACE}:infoContainer:help:button`)}
          </HashLink>
        </div>
      </div>
    </Grid>
    <Grid item xs={12} sm={4}>
      <div className='info-container'>
        <div className='info-text-container'>
          <div className='contact-icon'>
            <img alt='cv-icon' src={CVIcon} />
          </div>
          <div className='info-title'>
            <h5>
              {t(`${NAMESPACE}:infoContainer:cv:title`)}
            </h5>
          </div>
          <div className='info-text'>
            <p>
              {t(`${NAMESPACE}:infoContainer:cv:text`)}
            </p>
          </div>
        </div>
        <div className='btn-container'>
          <HashLink to='/contact-us#contact' className='btn btn-secondary'>
            {t(`${NAMESPACE}:infoContainer:cv:button`)}
          </HashLink>
        </div>
      </div>
    </Grid>
  </Grid>
);

export default InfoContainer;
