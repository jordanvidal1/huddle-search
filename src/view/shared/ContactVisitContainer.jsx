import React from 'react';
import {Grid} from '@material-ui/core';
import {NAMESPACE} from '../../data/constants';

import {ReactComponent as Phone} from '../../static/icons/phone.svg';
import {ReactComponent as Email} from '../../static/icons/email.svg';
import {ReactComponent as Location} from '../../static/icons/location.svg';

const ContactVisitContainer = (t) => (
  <Grid container spacing={3} justifyContent='center' className='visit-grid-container'>
    <Grid item xs={12} sm={4}>
      <div className='visit-container'>
        <div className='visit-text-container'>
          <div className='contact-icon'>
            <Phone />
          </div>
          <div className='visit-title'>
            <h5>
              {t(`${NAMESPACE}:visitContainer:phone:title`)}
            </h5>
          </div>
          <div className='visit-text'>
            <p>
              {t(`${NAMESPACE}:visitContainer:phone:text`)}
            </p>
          </div>
        </div>
        <div className='visit-info'>
          <a href={`tel:${t(`${NAMESPACE}:visitContainer:phone:phoneNumber`)}`}>
            <p>
              {t(`${NAMESPACE}:visitContainer:phone:phoneNumber`)}
            </p>
          </a>
        </div>
      </div>
    </Grid>
    <Grid item xs={12} sm={4}>
      <div className='visit-container'>
        <div className='visit-text-container'>
          <div className='contact-icon'>
            <Email />
          </div>
          <div className='visit-title'>
            <h5>
              {t(`${NAMESPACE}:visitContainer:email:title`)}
            </h5>
          </div>
          <div className='visit-text'>
            <p>
              {t(`${NAMESPACE}:visitContainer:email:text`)}
            </p>
          </div>
        </div>
        <div className='visit-info'>
          <a href={`mailto:${t(`${NAMESPACE}:visitContainer:email:emailAddress`)}`}>
            {t(`${NAMESPACE}:visitContainer:email:emailAddress`)}
          </a>
        </div>
      </div>
    </Grid>
    <Grid item xs={12} sm={4}>
      <div className='visit-container'>
        <div className='visit-text-container'>
          <div className='contact-icon'>
            <Location />
          </div>
          <div className='visit-title'>
            <h5>
              {t(`${NAMESPACE}:visitContainer:visit:title`)}
            </h5>
          </div>
          <div className='visit-text'>
            <p>
              {t(`${NAMESPACE}:visitContainer:visit:text`)}
            </p>
          </div>
        </div>
        <div className='visit-info'>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${t(`${NAMESPACE}:footer:address`)}`}
            target='_blank'
            rel='noreferrer'
          >
            <p>
              1 Fore Street Avenue
              <br />
              London
              <br />
              EC2Y 9DT
            </p>
          </a>
        </div>
      </div>
    </Grid>
  </Grid>
);

export default ContactVisitContainer;
