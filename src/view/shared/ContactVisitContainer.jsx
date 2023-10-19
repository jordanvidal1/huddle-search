import React from 'react';
import {Grid} from '@material-ui/core';
import {NAMESPACE} from '../../data/constants';
import {isPrime} from '../../services/helper';

import PhoneIcon from '../../static/huddle/phone-white.svg';
import EmailIcon from '../../static/huddle/email-white.svg';
import VisitIcon from '../../static/huddle/visit-white.svg';
import PrimePhoneIcon from '../../static/prime/phone-white.svg';
import PrimeEmailIcon from '../../static/prime/email-white.svg';
import PrimeVisitIcon from '../../static/prime/visit-white.svg';

const ContactVisitContainer = (t) => (
  <Grid container spacing={3} justifyContent='center' className='visit-grid-container'>
    <Grid item xs={12} sm={4}>
      <div className='visit-container'>
        <div className='visit-text-container'>
          <div className='contact-icon'>
            <img alt='phone-icon' src={isPrime ? PrimePhoneIcon : PhoneIcon} />
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
          <p>
            {t(`${NAMESPACE}:visitContainer:phone:phoneNumber`)}
          </p>
        </div>
      </div>
    </Grid>
    <Grid item xs={12} sm={4}>
      <div className='visit-container'>
        <div className='visit-text-container'>
          <div className='contact-icon'>
            <img alt='email-icon' src={isPrime ? PrimeEmailIcon : EmailIcon} />
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
            <img alt='visit-icon' src={isPrime ? PrimeVisitIcon : VisitIcon} />
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
          <p>
            1 Fore Street Avenue
            <br />
            London
            <br />
            EC2Y 9DT
          </p>
        </div>
      </div>
    </Grid>
  </Grid>
);

export default ContactVisitContainer;
