import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import Input from '../shared/Input';
import LinkedIn from '../../static/linkedin-purple.svg';
import Twitter from '../../static/twitter-purple.svg';
import Facebook from '../../static/facebook-purple.svg';
import Instagram from '../../static/instagram-purple.svg';

const FollowUs = () => {
  const {t} = useTranslation(['huddle']);

  return (
    <div className='follow-us'>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='box-container'>
              <div className='box join'>
                <div className='text-container'>
                  <h3>
                    {t('huddle:contactUs:join:title')}
                  </h3>
                  <p>
                    {t('huddle:contactUs:join:text')}
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
                    {t('huddle:contactUs:follow:title')}
                  </h3>
                  <p>
                    {t('huddle:contactUs:follow:text')}
                  </p>
                </div>
                <div className='action-container'>
                  <div className='socials'>
                    <div>
                      <a href='#' rel='noreferrer' target='_blank'>
                        <img alt='linkedin' src={LinkedIn} />
                      </a>
                      <a href='#' rel='noreferrer' target='_blank'>
                        <img alt='twitter' src={Twitter} />
                      </a>
                    </div>
                    <div>
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
    </div>
  );
}

export default FollowUs;
