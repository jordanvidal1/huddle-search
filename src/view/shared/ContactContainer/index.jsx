import React from 'react';
import {Grid} from '@material-ui/core';

import PhoneIcon from '../../../static/phone.svg';
import EmailIcon from '../../../static/email-pink.svg';
import PhoneGreyIcon from '../../../static/phone-grey.svg';
import EmailGreyIcon from '../../../static/contact-email-grey.svg';

import './styles.scss';

const ContactContainer = ({
  executive
}) => (
  <Grid container spacing={3} className='contact-grid-container'>
    <Grid item xs={6}>
      <div className='contact-container'>
        <div className='contact-text-container'>
          <img alt='vacancy-icon' src={executive ? PhoneGreyIcon : PhoneIcon} />
          <div className='contact-title'>
            <h5>
              {executive ? 'Phone' : 'Speak over the phone'}
            </h5>
          </div>
          <div className='contact-text'>
            <p>
              {executive
                ? 'Want to chat about Huddle’s Executive Search? Our lines are open Mon-Fri from 8am to 5pm.'
                : 'Want to chat about embedding Huddle into your team? Our lines are open Mon-Fri from 8am to 5pm.'
              }
            </p>
          </div>
        </div>
        <div className='contact-info'>
          <p>
            +44 0000 000 000
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
              {executive ? 'Email' : 'Send us an email'}
            </h5>
          </div>
          <div className='contact-text'>
            <p>
              {executive
                ? 'Want to start a conversation about our specialised service for executive hires? Our team is here to help.'
                : 'Want to start a conversation about our embedded talent solutions? Our team is here to help.'
              }
            </p>
          </div>
        </div>
        <div className='contact-info'>
          <p>
            hello@huddlesearch.com
          </p>
        </div>
      </div>
    </Grid>
  </Grid>
);

export default ContactContainer;
