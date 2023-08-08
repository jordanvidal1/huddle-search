import React from 'react';
import {Link} from 'react-router-dom';
import LinkedIn from '../../static/linkedin-purple.svg';
import Twitter from '../../static/twitter-purple.svg';
import Facebook from '../../static/facebook-purple.svg';
import Instagram from '../../static/instagram-purple.svg';
import TextField from '../shared/TextField';

const FollowUs = () => (
  <div className='follow-us'>
    <div className='container'>
      <div className='inner-container'>
        <div className='content'>
          <div className='box-container'>
            <div className='box join'>
              <div className='text-container'>
                <h3>
                  Join thousands of subscribers
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Morbi curs usamet habit asse nisl est rhoncus.
                </p>
              </div>
              <div className='action-container'>
                <form /*action="/action_page.php" method="get" */ id='subscribe-form'>
                  <div className='subscribe-container'>
                    <TextField
                      id='email-subscribe'
                      type='text'
                      name='email'
                      placeholder='Enter your email address'
                    />
                    <button
                      className='btn btn-secondary'
                      type='submit'
                      form='subscribe'
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
                <p>
                  We care about your data in our <Link to='/privacy'>privacy policy.</Link>
                </p>
              </div>
            </div>
            <div className='box follow'>
              <div className='text-container'>
                <h3>
                  Follow the team @huddlesearch
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Morbi curs usamet habit asse nisl est rhoncus.
                </p>
              </div>
              <div className='action-container'>
                <div className='socials'>
                  <a href='#' rel='noreferrer' target='_blank'>
                    <img alt='linkedin' src={LinkedIn} />
                  </a>
                  <a href='#' rel='noreferrer' target='_blank'>
                    <img alt='twitter' src={Twitter} />
                  </a>
                  <a href='#' rel='noreferrer' target='_blank'>
                    <img alt='facebook' src={Facebook} />
                  </a>
                  <a href='#' rel='noreferrer' target='_blank'>
                    <img alt='instagram' src={Instagram} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FollowUs;
