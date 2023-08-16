import React from 'react';
import {Grid} from '@material-ui/core';
import {isHuddle} from '../../services/helper';

import PhoneIcon from '../../static/huddle/phone-white.svg';
import EmailIcon from '../../static/huddle/email-white.svg';
import ExecutivePhoneIcon from '../../static/huddle/phone-grey.svg';
import ExecutiveEmailIcon from '../../static/huddle/contact-email-grey.svg';
import UnitasExecutivePhoneIcon from '../../static/unitas/phone-number-white.svg';
import UnitasExecutiveEmailIcon from '../../static/unitas/email-white.svg';

const ContactContainer = ({
  t,
  executive
}) => {
  const executivePhoneIcon = isHuddle()
    ? ExecutivePhoneIcon : UnitasExecutivePhoneIcon;
  const executiveEmailIcon = isHuddle()
    ? ExecutiveEmailIcon : UnitasExecutiveEmailIcon;

  const phoneIcon = executive ? executivePhoneIcon : PhoneIcon;
  const emailIcon = executive ? executiveEmailIcon : EmailIcon;

  return (
    <Grid container spacing={3} justifyContent='center' className='contact-grid-container'>
      <Grid item xs={6}>
        <div className='contact-container'>
          <div className='contact-text-container'>
            <img alt='phone-icon' src={phoneIcon} />
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
            <img alt='email-icon' src={emailIcon} />
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
}

export default ContactContainer;
