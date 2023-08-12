import React from 'react';
import {Grid} from '@material-ui/core';
import PhoneIcon from '../../static/phone.svg';
import EmailIcon from '../../static/email-pink.svg';
import VisitIcon from '../../static/visit.svg';

const ContactVisitContainer = (t) => (
  <Grid container spacing={3} justifyContent='center' className='visit-grid-container'>
    <Grid item xs={12} sm={4}>
      <div className='visit-container'>
        <div className='visit-text-container'>
          <img alt='vacancy-icon' src={PhoneIcon} />
          <div className='visit-title'>
            <h5>
              {t('huddle:visitContainer:phone:title')}
            </h5>
          </div>
          <div className='visit-text'>
            <p>
              {t('huddle:visitContainer:phone:text')}
            </p>
          </div>
        </div>
        <div className='visit-info'>
          <p>
            {t('huddle:visitContainer:phone:phoneNumber')}
          </p>
        </div>
      </div>
    </Grid>
    <Grid item xs={12} sm={4}>
      <div className='visit-container'>
        <div className='visit-text-container'>
          <img alt='help-icon' src={EmailIcon} />
          <div className='visit-title'>
            <h5>
              {t('huddle:visitContainer:email:title')}
            </h5>
          </div>
          <div className='visit-text'>
            <p>
              {t('huddle:visitContainer:email:text')}
            </p>
          </div>
        </div>
        <div className='visit-info'>
          <p>
            {t('huddle:visitContainer:email:emailAddress')}
          </p>
        </div>
      </div>
    </Grid>
    <Grid item xs={12} sm={4}>
      <div className='visit-container'>
        <div className='visit-text-container'>
          <img alt='cv-icon' src={VisitIcon} />
          <div className='visit-title'>
            <h5>
              {t('huddle:visitContainer:visit:title')}
            </h5>
          </div>
          <div className='visit-text'>
            <p>
              {t('huddle:visitContainer:visit:text')}
            </p>
          </div>
        </div>
        <div className='visit-info'>
          <p>
            1 Fore Street Avenue
            <br />
            London
            <br />
            EC2Y9DT
          </p>
        </div>
      </div>
    </Grid>
  </Grid>
);

export default ContactVisitContainer;
