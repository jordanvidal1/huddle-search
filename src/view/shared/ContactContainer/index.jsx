import React from 'react';
import {Grid} from '@material-ui/core';
import PhoneIcon from '../../../static/phone.svg';
import EmailIcon from '../../../static/email-pink.svg';
import './styles.scss';

const ContactContainer = () => (
  <Grid container spacing={3} className='contact-grid-container'>
    <Grid item xs={6}>
      <div className='contact-container'>
        <div className='contact-text-container'>
          <img alt='vacancy-icon' src={PhoneIcon} />
          <div className='contact-title'>
            <h5>
              Speak over the phone
            </h5>
          </div>
          <div className='contact-text'>
            <p>
              Want to chat about embedding Huddle into your team? Our lines are open Mon-Fri from 8am to 5pm.            </p>
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
          <img alt='help-icon' src={EmailIcon} />
          <div className='contact-title'>
            <h5>
              Send us an email
            </h5>
          </div>
          <div className='contact-text'>
            <p>
              Want to start a conversation about our embedded talent solutions? Our team is here to help.            </p>
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
