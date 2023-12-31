import React from 'react';
import {HashLink} from 'react-router-hash-link';
import {Grid} from '@material-ui/core';
import {NAMESPACE} from '../../data/constants';

import {ReactComponent as Vacancy} from '../../static/icons/paper-plane.svg';
import {ReactComponent as Help} from '../../static/icons/speech-bubbles.svg';
import {ReactComponent as CV} from '../../static/icons/paperclip.svg';

const InfoContainer = ({t}) => (
  <Grid container spacing={3} justifyContent='center' className='info-grid-container'>
    <Grid item xs={12} sm={4}>
      <div className='info-container'>
        <div className='info-text-container'>
          <div className='contact-icon'>
            <Vacancy />
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
            <Help />
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
            <CV />
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
