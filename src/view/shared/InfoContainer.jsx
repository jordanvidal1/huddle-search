import React from 'react';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import {getNamespace} from '../../services/helper';

import VacancyIcon from '../../static/huddle/vacancy.svg';
import HelpIcon from '../../static/huddle/help.svg';
import CVIcon from '../../static/huddle/cv.svg';

const InfoContainer = ({t}) => (
  <Grid container spacing={3} justifyContent='center' className='info-grid-container'>
    <Grid item xs={12} sm={4}>
      <div className='info-container'>
        <div className='info-text-container'>
          <img alt='vacancy-icon' src={VacancyIcon} />
          <div className='info-title'>
            <h5>
              {t(`${getNamespace}:infoContainer:vacancy:title`)}
            </h5>
          </div>
          <div className='info-text'>
            <p>
              {t(`${getNamespace}:infoContainer:vacancy:text`)}
            </p>
          </div>
        </div>
        <div className='btn-container'>
          <button className='btn btn-secondary'>
            {t(`${getNamespace}:infoContainer:vacancy:button`)}
          </button>
        </div>
      </div>
    </Grid>
    <Grid item xs={12} sm={4}>
      <div className='info-container'>
        <div className='info-text-container'>
          <img alt='help-icon' src={HelpIcon} />
          <div className='info-title'>
            <h5>
              {t(`${getNamespace}:infoContainer:help:title`)}
            </h5>
          </div>
          <div className='info-text'>
            <p>
              {t(`${getNamespace}:infoContainer:help:text`)}
            </p>
          </div>
        </div>
        <div className='btn-container'>
          <Link to='/contact-us' className='btn btn-secondary'>
            {t(`${getNamespace}:infoContainer:help:button`)}
          </Link>
        </div>
      </div>
    </Grid>
    <Grid item xs={12} sm={4}>
      <div className='info-container'>
        <div className='info-text-container'>
          <img alt='cv-icon' src={CVIcon} />
          <div className='info-title'>
            <h5>
              {t(`${getNamespace}:infoContainer:cv:title`)}
            </h5>
          </div>
          <div className='info-text'>
            <p>
              {t(`${getNamespace}:infoContainer:cv:text`)}
            </p>
          </div>
        </div>
        <div className='btn-container'>
          <button className='btn btn-secondary'>
            {t(`${getNamespace}:infoContainer:cv:button`)}
          </button>
        </div>
      </div>
    </Grid>
  </Grid>
);

export default InfoContainer;
