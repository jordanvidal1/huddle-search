import React from 'react';
import {Link} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import TextField from '../../shared/TextField';
import './styles.scss';

const Contact = () => (
  <div className='contact'>
    <div className='container'>
      <div className='inner-container'>
        <div className='content'>
          <div className='text-container'>
            <h2>
              Take a moment to talk to the team
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Morbi curs usamet habit asse nisl est rhoncus.
            </p>
          </div>
          <div className='action-container'>
            <form /*action="/action_page.php" method="get" */ id='contact'>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <TextField
                    id='first-name'
                    type='text'
                    name='firstName'
                    label='First name'
                    placeholder='First name'
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id='last-name'
                    type='text'
                    name='lastName'
                    label='Last name'
                    placeholder='Last name'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id='email-address'
                    type='text'
                    name='email'
                    label='Email address'
                    placeholder='you@company.com'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id='phone-number'
                    type='text'
                    name='number'
                    label='Phone number'
                    placeholder='+44 0000 000 000'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id='message'
                    type='text'
                    name='message'
                    label='Message'
                    placeholder='Leave us a message...'
                  />
                </Grid>
                <Grid item xs={12}>
                  <div className='checkbox-container'>
                    <input
                      id='privacy'
                      type='checkbox'
                      name='checkbox'
                      placeholder='Hello'
                    />
                    <label htmlFor='checkbox'>
                      You agree to our <Link to='/privacy'>privacy policy</Link>.
                    </label>
                  </div>
                </Grid>
              </Grid>
              <div className='btn-container'>
                <button
                  className='btn btn-primary'
                  type='submit'
                  form='contact'
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
