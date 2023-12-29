import React from 'react';
import {Grid} from '@material-ui/core';
import {NAMESPACE} from '../../data/constants';

import {ReactComponent as Phone} from '../../static/icons/phone.svg';
import {ReactComponent as Email} from '../../static/icons/email.svg';

const ContactContainer = ({t, executive}) => (
  <Grid container spacing={3} justifyContent='center' className='contact-grid-container'>
    <Grid item xs={6}>
      <div className='contact-container'>
        <div className='contact-text-container'>
          <div className='contact-icon'>
            <Phone />
          </div>
          <div className='contact-title'>
            <h5>
              {t(`${NAMESPACE}:contactContainer:phone:${executive ? 'executiveTitle' : 'title'}`)}
            </h5>
          </div>
          <div className='contact-text'>
            <p>
              {t(`${NAMESPACE}:contactContainer:phone:${executive ? 'executiveText' : 'text'}`)}
            </p>
          </div>
        </div>
        <div className='contact-info'>
          <a href={`tel:${t(`${NAMESPACE}:contactContainer:phone:phoneNumber`)}`}>
            <p>
              {t(`${NAMESPACE}:contactContainer:phone:phoneNumber`)}
            </p>
          </a>
        </div>
      </div>
    </Grid>
    <Grid item xs={6}>
      <div className='contact-container'>
        <div className='contact-text-container'>
          <div className='contact-icon'>
            <Email />
          </div>
          <div className='contact-title'>
            <h5>
              {t(`${NAMESPACE}:contactContainer:email:${executive ? 'executiveTitle' : 'title'}`)}
            </h5>
          </div>
          <div className='contact-text'>
            <p>
              {t(`${NAMESPACE}:contactContainer:email:${executive ? 'executiveText' : 'text'}`)}
            </p>
          </div>
        </div>
        <div className='contact-info'>
          <a href={`mailto:${t(`${NAMESPACE}:contactContainer:email:emailAddress`)}`}>
            {t(`${NAMESPACE}:contactContainer:email:emailAddress`)}
          </a>
        </div>
      </div>
    </Grid>
  </Grid>
);

export default ContactContainer;
