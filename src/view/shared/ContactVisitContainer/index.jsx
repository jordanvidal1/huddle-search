import React from 'react';
import {Grid} from '@material-ui/core';
import PhoneIcon from '../../../static/phone.svg';
import EmailIcon from '../../../static/email-pink.svg';
import VisitIcon from '../../../static/visit.svg';
import './styles.scss';

const ContactVisitContainer = () => (
  <Grid container spacing={3} className='visit-grid-container'>
    <Grid item xs={4}>
      <div className='visit-container'>
        <div className='visit-text-container'>
          <img alt='vacancy-icon' src={PhoneIcon} />
          <div className='visit-title'>
            <h5>
              Phone
            </h5>
          </div>
          <div className='visit-text'>
            <p>
              Mon-Fri from 8am to 5pm.
            </p>
          </div>
        </div>
        <div className='visit-info'>
          <p>
            +44 0000 000 000
          </p>
        </div>
      </div>
    </Grid>
    <Grid item xs={4}>
      <div className='visit-container'>
        <div className='visit-text-container'>
          <img alt='help-icon' src={EmailIcon} />
          <div className='visit-title'>
            <h5>
              Email
            </h5>
          </div>
          <div className='visit-text'>
            <p>
              Our team is here to help.
            </p>
          </div>
        </div>
        <div className='visit-info'>
          <p>
            hello@huddlesearch.com
          </p>
        </div>
      </div>
    </Grid>
    <Grid item xs={4}>
      <div className='visit-container'>
        <div className='visit-text-container'>
          <img alt='cv-icon' src={VisitIcon} />
          <div className='visit-title'>
            <h5>
              Visit
            </h5>
          </div>
          <div className='visit-text'>
            <p>
              Come say hello at our office.
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
