import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useForm} from 'react-hook-form';
import {NAMESPACE, SOCIAL_HREFS} from '../../data/constants';
import useWordPress from '../../services/hooks/useWordPress';
import Input from '../shared/Input';
import Loader from '../shared/Loader';
import LinkHref from '../shared/LinkHref';

import HuddleLinkedIn from '../../static/huddle/linkedin-purple.svg';
import UnitasLinkedIn from '../../static/unitas/linkedin-white-filled.svg';
import PrimeLinkedIn from '../../static/prime/linkedin-white-filled.svg';
// import HuddleTwitter from '../../static/huddle/twitter-purple.svg';
// import HuddleFacebook from '../../static/huddle/facebook-purple.svg';
// import HuddleInstagram from '../../static/huddle/instagram-purple.svg';
// import UnitasTwitter from '../../static/unitas/twitter-white.svg';
// import UnitasFacebook from '../../static/unitas/facebook-white.svg';
// import UnitasInstagram from '../../static/unitas/instagram-white.svg';

const ICONS = {
  huddle: {
    linkedin: HuddleLinkedIn,
    // twitter: HuddleTwitter,
    // facebook: HuddleFacebook,
    // instagram: HuddleInstagram
  },
  unitas: {
    linkedin: UnitasLinkedIn,
    // twitter: UnitasTwitter,
    // facebook: UnitasFacebook,
    // instagram: UnitasInstagram
  },
  prime: {
    linkedin: PrimeLinkedIn,
    // twitter: PrimeTwitter,
    // facebook: PrimeFacebook,
    // instagram: PrimeInstagram
  },
};

const FollowUs = () => {
  const {
    subscribeNewsletter,
    subscribeNewsletterResult,
    isSubscribeLoading
  } = useWordPress();

  const {t} = useTranslation(['huddle', 'unitas', 'prime']);

  const [message, setMessage] = useState('');
  const [type, setType] = useState('error');

  const {
    register,
    handleSubmit,
    formState: {errors},
    getValues,
    reset
  } = useForm();

  useEffect(() => {
    if (getValues('email')) {
      subscribeNewsletterResult
        .mapPattern('Success', [], ({data}) => {
          const res = data.toJS();
          if (res.status === 'mail_sent') {
            setType('success');
            setMessage('Subscription successful!');
            setTimeout(() => setMessage(''), 5000);
            reset();
          } else {
            setType('error');
            setMessage(res.message);
          }
        });
      }
  }, [subscribeNewsletterResult]);

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
                  <p className={`${type}-msg`}>
                    {message}
                  </p>
                  <form onSubmit={handleSubmit(subscribeNewsletter)}>
                    <div className='subscribe-container'>
                      <Input
                        id='email-address'
                        type='text'
                        name='email'
                        placeholder='Enter your email address'
                        register={register('email', {
                          required: 'Email address is required.',
                          pattern: {
                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            message: 'Email address is invalid.'
                          }
                        })}
                        errors={errors}
                      />
                      <button
                        className='btn btn-secondary'
                        type='submit'
                        disabled={isSubscribeLoading}
                      >
                        {isSubscribeLoading
                          ? <Loader />
                          : 'Subscribe'
                        }
                      </button>
                    </div>
                  </form>
                  <p>
                    We care about your data in our <Link to='/privacy-policy'>Privacy Policy.</Link>
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
                      <LinkHref href={SOCIAL_HREFS[NAMESPACE].linkedin}>
                        <img
                          alt='linkedin'
                          src={ICONS[NAMESPACE].linkedin}
                        />
                      </LinkHref>
                      {/*<LinkHref href={SOCIAL_HREFS[NAMESPACE].twitter}>*/}
                      {/*  <img*/}
                      {/*    alt='twitter'*/}
                      {/*    src={ICONS[NAMESPACE].twitter}*/}
                      {/*  />*/}
                      {/*</LinkHref>*/}
                    </div>
                    {/*<div>*/}
                    {/*  <LinkHref href={SOCIAL_HREFS[NAMESPACE].facebook}>*/}
                    {/*    <img*/}
                    {/*      alt='facebook'*/}
                    {/*      src={ICONS[NAMESPACE].facebook}*/}
                    {/*    />*/}
                    {/*  </LinkHref>*/}
                    {/*  <LinkHref href={SOCIAL_HREFS[NAMESPACE].instagram}>*/}
                    {/*    <img*/}
                    {/*      alt='instagram'*/}
                    {/*      src={ICONS[NAMESPACE].instagram}*/}
                    {/*    />*/}
                    {/*  </LinkHref>*/}
                    {/*</div>*/}
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
