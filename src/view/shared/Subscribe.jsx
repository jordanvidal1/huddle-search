import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import useWordPress from '../../services/hooks/useWordPress';
import {NAMESPACE} from '../../data/constants';
import Input from './Input';
import Loader from '../shared/Loader';

const Subscribe = props => {
  const {
    subscribeNewsletter,
    subscribeNewsletterResult,
    isSubscribeLoading
  } = useWordPress();

  const {t} = props;

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
    <div className='resource-share'>
      <div className='share-text'>
        <h5>{t(`${NAMESPACE}:jobResource:email:title`)}</h5>
        <span>{t(`${NAMESPACE}:jobResource:email:text`)}</span>
      </div>
      <div className='action-container'>
        <p className={`${type}-msg`}>
          {message}
        </p>
        <form onSubmit={handleSubmit(subscribeNewsletter)}>
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
              : t(`${NAMESPACE}:jobResource:email:button`)
            }
          </button>
        </form>
        <div>
          <span>
            {t(`${NAMESPACE}:jobResource:email:terms:part1`)}
            <Link to='/privacy-policy'>
            {t(`${NAMESPACE}:jobResource:email:terms:link`)}
            </Link>
            {t(`${NAMESPACE}:jobResource:email:terms:part2`)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
