import React from 'react';
import {Grid} from '@material-ui/core';

import PhoneIcon from '../../static/huddle/phone.svg';
import EmailIcon from '../../static/huddle/email-pink.svg';
import PhoneGreyIcon from '../../static/huddle/phone-grey.svg';
import EmailGreyIcon from '../../static/huddle/contact-email-grey.svg';

const ContactContainer = ({
  t,
  executive
}) => (
  <Grid container spacing={3} justifyContent='center' className='contact-grid-container'>
    <Grid item xs={6}>
      <div className='contact-container'>
        <div className='contact-text-container'>
          <img alt='vacancy-icon' src={executive ? PhoneGreyIcon : PhoneIcon} />
          <div className='contact-title'>
            <h5>
              {t(`${window.SITE_NAME}:contactContainer:phone:${executive ? 'executiveTitle' : 'title'}`)}
            </h5>
          </div>
          <div className='contact-text'>
            <p>
              {t(`${window.SITE_NAME}:contactContainer:phone:${executive ? 'executiveText' : 'text'}`)}
            </p>
          </div>
        </div>
        <div className='contact-info'>
          <p>
            {t(`${window.SITE_NAME}:contactContainer:phone:phoneNumber`)}
          </p>
        </div>
      </div>
    </Grid>
    <Grid item xs={6}>
      <div className='contact-container'>
        <div className='contact-text-container'>
          <img alt='help-icon' src={executive ? EmailGreyIcon : EmailIcon} />
          <div className='contact-title'>
            <h5>
              {t(`${window.SITE_NAME}:contactContainer:email:${executive ? 'executiveTitle' : 'title'}`)}
            </h5>
          </div>
          <div className='contact-text'>
            <p>
              {t(`${window.SITE_NAME}:contactContainer:email:${executive ? 'executiveText' : 'text'}`)}
            </p>
          </div>
        </div>
        <div className='contact-info'>
          <p>
            {t(`${window.SITE_NAME}:contactContainer:email:emailAddress`)}

          </p>
        </div>
      </div>
    </Grid>
  </Grid>
);

export default ContactContainer;
