import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {NAMESPACE} from '../../data/constants';
import {isHuddle} from '../../services/helper';
import Input from '../shared/Input';

import LinkedIn from '../../static/huddle/linkedin-purple.svg';
import Twitter from '../../static/huddle/twitter-purple.svg';
import Facebook from '../../static/huddle/facebook-purple.svg';
import Instagram from '../../static/huddle/instagram-purple.svg';
import UnitasLinkedIn from '../../static/unitas/linkedin-white-filled.svg';
import UnitasTwitter from '../../static/unitas/twitter-white.svg';
import UnitasFacebook from '../../static/unitas/facebook-white.svg';
import UnitasInstagram from '../../static/unitas/instagram-white.svg';

const FollowUs = () => {
  const {t} = useTranslation(['huddle', 'unitas']);

  return (
    <div className='follow-us'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='box-container'>
              <div className='box join'>
                <div className='text-container'>
                  <h3>
                    {t(`${NAMESPACE}:contactUs:join:title`)}
                  </h3>
                  <p>
                    {t(`${NAMESPACE}:contactUs:join:text`)}
                  </p>
                </div>
                <div className='action-container'>
                  <form /* todo: connect form */ >
                    <div className='subscribe-container'>
                      <Input
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
                    {t(`${NAMESPACE}:contactUs:follow:title`)}
                  </h3>
                  <p>
                    {t(`${NAMESPACE}:contactUs:follow:text`)}
                  </p>
                </div>
                <div className='action-container'>
                  <div className='socials'>
                    <div>
                      <a href='#' rel='noreferrer' target='_blank'>
                        <img
                          alt='linkedin'
                          src={isHuddle ? LinkedIn : UnitasLinkedIn}
                        />
                      </a>
                      <a href='#' rel='noreferrer' target='_blank'>
                        <img
                          alt='twitter'
                          src={isHuddle ? Twitter : UnitasTwitter}
                        />
                      </a>
                    </div>
                    <div>
                      <a href='#' rel='noreferrer' target='_blank'>
                        <img
                          alt='facebook'
                          src={isHuddle ? Facebook : UnitasFacebook}
                        />
                      </a>
                      <a href='#' rel='noreferrer' target='_blank'>
                        <img
                          alt='instagram'
                          src={isHuddle ? Instagram : UnitasInstagram}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowUs;
